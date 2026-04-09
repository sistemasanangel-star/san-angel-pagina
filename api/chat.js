export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { messages } = req.body;

  const models = [
    'openrouter/free',
    'google/gemma-3-27b-it:free',
    'meta-llama/llama-3.3-70b-instruct:free',
    'mistralai/mistral-small-3.1-24b-instruct:free',
  ];

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const tryModel = async (model) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': req.headers.origin || 'https://hospitalsanangelgt.com',
          'X-Title': 'Hospital San Angel'
        },
        body: JSON.stringify({ model, messages, max_tokens: 400, temperature: 0.3 }),
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

  // 3 intentos con pausa de 2s entre cada uno
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const reply = await Promise.any(models.map(m => tryModel(m)));
      return res.status(200).json({ reply });
    } catch {
      if (attempt < 2) await sleep(2000);
    }
  }

  return res.status(502).json({ error: 'All models failed' });
}