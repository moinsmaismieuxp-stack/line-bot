async function replyMessage(replyToken, messages) {
  try {
    const res = await fetch("https://api.line.me/v2/bot/message/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ replyToken, messages }),
    });
    const data = await res.json();
    console.log("LINE API status:", res.status);
    console.log("LINE API response:", JSON.stringify(data));
    return data;
  } catch (err) {
    console.error("replyMessage error:", err.message);
  }
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(200).send("LINE Bot is running.");

  console.log("=== Webhook received ===");
  console.log("Body:", JSON.stringify(req.body));

  const events = req.body.events || [];
  console.log("Events count:", events.length);

  res.status(200).send("OK");

  for (const event of events) {
    console.log("Event type:", event.type);
    if (event.type !== "message" || event.message.type !== "text") continue;

    console.log("User text:", JSON.stringify(event.message.text));
    console.log("Reply token:", event.replyToken);

    await replyMessage(event.replyToken, [{
      type: "text",
      text: "測試回覆成功！"
    }]);
  }
};
