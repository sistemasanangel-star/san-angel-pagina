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
    'stepfun/step-3.5-flash:free',
    'nvidia/nemotron-3-super-120b-a12b:free',
    'arcee-ai/trinity-large-preview:free',
    'meta-llama/llama-3.3-70b-instruct:free',
  ];

  const tryModel = async (model) => {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': req.headers.origin || 'https://hospitalsanangelgt.com',
        'X-Title': 'Hospital San Angel'
      },
      body: JSON.stringify({ model, messages })
    });
    const data = await response.json();
    if (response.ok && data.choices?.[0]?.message?.content) {
      return data.choices[0].message.content;
    }
    throw new Error(`${model} failed`);
  };

  try {
    const reply = await Promise.any(models.map(m => tryModel(m)));
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(502).json({ error: 'All models failed' });
  }
}
