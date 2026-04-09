export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages } = req.body;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': req.headers.origin || 'https://hospitalsanangelgt.com',
        'X-Title': 'Hospital San Angel'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.2-1b-instruct',
        messages,
        max_tokens: 400,
        temperature: 0.3,
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);
    const data = await response.json();

    if (response.ok && data.choices?.[0]?.message?.content) {
      return res.status(200).json({ reply: data.choices[0].message.content });
    }

    return res.status(502).json({ error: 'No reply', detail: data });
  } catch (err) {
    return res.status(502).json({ error: err.message });
  }
}