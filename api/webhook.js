async function replyMessage(replyToken, messages) {
  const res = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ replyToken, messages }),
  });
  return res.json();
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(200).send("LINE Bot is running.");

  const events = req.body.events || [];

  for (const event of events) {
    if (event.type !== "message" || event.message.type !== "text") continue;

    const userText = event.message.text;
    const replyToken = event.replyToken;

    // 回傳收到的原始文字，確認內容
    await replyMessage(replyToken, [{
      type: "text",
      text: `收到：「${userText}」\n字數：${userText.length}`
    }]);
  }

  res.status(200).send("OK");
};
