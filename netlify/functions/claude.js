// ============================================================
//  netlify/functions/claude.js
//
//  This is a serverless function that runs on Netlify's servers.
//  It acts as a secure proxy between your app and the AI API,
//  keeping your API key hidden from the browser.
//
//  The app calls: /.netlify/functions/claude
//  This function calls: the AI API (Groq by default)
//
//  To switch between AI providers, change the URL and headers below.
//  Add your key in Netlify → Site config → Environment variables.
// ============================================================

exports.handler = async (event) => {

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);

    // ── OPTION A: Groq (free, fastest) ─────────────────────────────
    // Get key from: https://console.groq.com
    // Netlify env variable name: GROQ_API_KEY

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: body.max_tokens || 300,
        messages: body.messages,
      }),
    });

    const data = await response.json();

    // Normalise to the format the app expects: { content: [{ text: "..." }] }
    const text = data.choices?.[0]?.message?.content || '...';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: [{ type: 'text', text }] }),
    };

    // ── OPTION B: Google Gemini (free, very generous) ───────────────
    // Uncomment this block and comment out Option A above.
    // Get key from: https://aistudio.google.com
    // Netlify env variable name: GEMINI_API_KEY
    /*
    const userMessage = body.messages?.[body.messages.length - 1]?.content || '';
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }],
          generationConfig: { maxOutputTokens: body.max_tokens || 300 },
        }),
      }
    );
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '...';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: [{ type: 'text', text }] }),
    };
    */

    // ── OPTION C: Anthropic Claude (paid but best quality) ──────────
    // Uncomment this block and comment out Option A above.
    // Get key from: https://console.anthropic.com
    // Netlify env variable name: ANTHROPIC_API_KEY
    /*
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    */

  } catch (err) {
    console.error('Function error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
