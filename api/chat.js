export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages } = req.body;

  // Modelos gratuitos activos en OpenRouter (abril 2026), ordenados por velocidad
  const models = [
    'google/gemini-2.0-flash-lite:free',             // Más rápido, TTFT bajo
    'google/gemma-3-4b-it:free',                     // Pequeño y rápido
    'mistralai/mistral-small-3.1-24b-instruct:free', // Mistral gratis
    'meta-llama/llama-3.3-70b-instruct:free',        // Fallback confiable
  ];

  const tryModel = async (model) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8s max

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': req.headers.origin || 'https://hospitalsanangelgt.com',
          'X-Title': 'Hospital San Angel'
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 400,
          temperature: 0.3,
        }),
        signal: controller.signal
      });

      const data = await response.json();
      if (response.ok && data.choices?.[0]?.message?.content) {
        return data.choices[0].message.content;
      }
      throw new Error(`${model} failed`);
    } finally {
      clearTimeout(timeout);
    }
  };

  try {
    const reply = await Promise.any(models.map(m => tryModel(m)));
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(502).json({ error: 'All models failed' });
  }
}