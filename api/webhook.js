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

const qaFlexMessage = {
  type: "flex",
  altText: "常見 Q&A｜簡法甜點",
  contents: {
    type: "carousel",
    contents: [
      {
        type: "bubble",
        size: "mega",
        header: {
          type: "box", layout: "vertical",
          contents: [{ type: "image", url: "https://res.cloudinary.com/dxk4wyejt/image/upload/v1777286115/2_mufolb.png", size: "full", aspectMode: "cover", aspectRatio: "1.5:1" }],
          paddingAll: "0px",
        },
        body: {
          type: "box", layout: "vertical", backgroundColor: "#faf8f2", paddingAll: "18px",
          contents: [
            { type: "box", layout: "vertical", contents: [
              { type: "text", text: "常見 Q&A", weight: "bold", size: "lg", color: "#3a4258" },
              { type: "text", text: "如有其他疑問請直接私訊詢問，謝謝～", size: "xs", color: "#8890a8", margin: "sm", wrap: true },
            ]},
            { type: "separator", margin: "lg", color: "#e4ddd0" },
            { type: "box", layout: "vertical", margin: "lg", spacing: "sm", contents: [
              { type: "button", action: { type: "message", label: "📍 地址、電話、營業時間", text: "地址" }, style: "primary", color: "#afc5d8", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "📅 訂位與甜點預留", text: "訂位" }, style: "primary", color: "#afc5d8", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "🛵 外送說明", text: "外送" }, style: "primary", color: "#afc5d8", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "💳 付款方式", text: "付款" }, style: "primary", color: "#afc5d8", height: "sm", adjustMode: "shrink-to-fit" },
            ]},
          ],
        },
        footer: {
          type: "box", layout: "vertical", backgroundColor: "#faf8f2", paddingAll: "12px",
          contents: [
            { type: "separator", color: "#e4ddd0", margin: "none" },
            { type: "button", action: { type: "uri", label: "💬 直接私訊我們", uri: "https://line.me/ti/p/@你的LineID" }, style: "link", color: "#8890a8", margin: "sm" },
          ],
        },
      },
      {
        type: "bubble",
        size: "mega",
        header: {
          type: "box", layout: "vertical",
          contents: [{ type: "image", url: "https://res.cloudinary.com/dxk4wyejt/image/upload/v1777286115/1_tl8cd5.png", size: "full", aspectMode: "cover", aspectRatio: "1.5:1" }],
          paddingAll: "0px",
        },
        body: {
          type: "box", layout: "vertical", backgroundColor: "#faf8f2", paddingAll: "18px",
          contents: [
            { type: "box", layout: "vertical", contents: [
              { type: "text", text: "蛋糕相關 Q&A", weight: "bold", size: "lg", color: "#3a4258" },
              { type: "text", text: "關於蛋糕訂購的常見問題", size: "xs", color: "#8890a8", margin: "sm", wrap: true },
            ]},
            { type: "separator", margin: "lg", color: "#e4ddd0" },
            { type: "box", layout: "vertical", margin: "lg", spacing: "sm", contents: [
              { type: "button", action: { type: "message", label: "🎂 如何預訂蛋糕", text: "預訂蛋糕" }, style: "primary", color: "#c4a98a", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "🍰 蛋糕品項", text: "蛋糕品項" }, style: "primary", color: "#c4a98a", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "✨ 客製化蛋糕、馬卡龍", text: "客製化" }, style: "primary", color: "#c4a98a", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "📦 蛋糕外送、宅配", text: "外送宅配" }, style: "primary", color: "#c4a98a", height: "sm", adjustMode: "shrink-to-fit" },
            ]},
          ],
        },
        footer: {
          type: "box", layout: "vertical", backgroundColor: "#faf8f2", paddingAll: "12px",
          contents: [
            { type: "separator", color: "#e4ddd0", margin: "none" },
            { type: "button", action: { type: "uri", label: "💬 直接私訊我們", uri: "https://line.me/ti/p/@你的LineID" }, style: "link", color: "#8890a8", margin: "sm" },
          ],
        },
      },
    ],
  },
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(200).send("LINE Bot is running.");

  const events = req.body.events || [];

  for (const event of events) {
    if (event.type !== "message" || event.message.type !== "text") continue;

    const userText = event.message.text.trim();
    const replyToken = event.replyToken;

    // includes 判斷，避免隱藏字元問題
    if (userText.includes("常見問題")) {
      await replyMessage(replyToken, [qaFlexMessage]);
    }
  }

  res.status(200).send("OK");
};
