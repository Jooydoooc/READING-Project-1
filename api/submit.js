export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { botToken, chatId, message } = req.body;

    if (!botToken || !chatId || !message) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Send message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    const data = await telegramResponse.json();

    if (!data.ok) {
      throw new Error(data.description || 'Telegram API error');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Answers sent to Telegram successfully' 
    });

  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return res.status(500).json({ 
      error: 'Failed to send to Telegram', 
      details: error.message 
    });
  }
}
