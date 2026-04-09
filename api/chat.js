export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages } = req.body;

  // Separar system prompt de los mensajes del usuario
  const systemMessage = messages.find(m => m.role === 'system');
  const chatMessages = messages.filter(m => m.role !== 'system');

  // Convertir formato OpenAI → formato Gemini
  const contents = chatMessages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: systemMessage
            ? { parts: [{ text: systemMessage.content }] }
            : undefined,
          contents,
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.3,
          }
        }),
        signal: controller.signal
      }
    );

    clearTimeout(timeout);
    const data = await response.json();

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (reply) {
      return res.status(200).json({ reply });
    }

    return res.status(502).json({ error: 'No reply', detail: data });
  } catch (err) {
    return res.status(502).json({ error: err.message });
  }
}