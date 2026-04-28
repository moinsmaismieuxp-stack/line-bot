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
          type: "box",
          layout: "vertical",
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
              { type: "button", action: { type: "message", label: "📍 地址、電話、營業時間", text: "地址" }, style: "secondary", color: "#3a4258", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "📅 訂位與甜點預留", text: "訂位" }, style: "secondary", color: "#3a4258", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "🛵 外送說明", text: "外送" }, style: "secondary", color: "#3a4258", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "💳 付款方式", text: "付款" }, style: "secondary", color: "#3a4258", height: "sm", adjustMode: "shrink-to-fit" },
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
              { type: "button", action: { type: "message", label: "🎂 如何預訂蛋糕", text: "預訂蛋糕" }, style: "secondary", color: "#6b4a30", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "🍰 蛋糕品項", text: "蛋糕品項" }, style: "secondary", color: "#6b4a30", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "✨ 客製化蛋糕、馬卡龍", text: "客製化" }, style: "secondary", color: "#6b4a30", height: "sm", adjustMode: "shrink-to-fit" },
              { type: "button", action: { type: "message", label: "📦 蛋糕外送、宅配", text: "外送宅配" }, style: "secondary", color: "#6b4a30", height: "sm", adjustMode: "shrink-to-fit" },
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

const autoReplies = {
  地址: "📍 地址：台灣某市某區某路1號\n📞 電話：02-1234-5678\n🕐 營業時間：週二至週日 12:00–20:00（週一公休）",
  訂位: "📅 訂位說明\n目前提供電話訂位，請來電 02-1234-5678\n或直接私訊我們預留～",
  外送: "🛵 外送說明\n目前合作平台：Uber Eats、Foodpanda\n店內消費滿 NT$500 享免運優惠",
  付款: "💳 付款方式\n現金、信用卡、LINE Pay、街口支付均可使用",
  預訂蛋糕: "🎂 預訂蛋糕流程\n1. 私訊告知口味、尺寸、取件日期\n2. 確認後付訂金 50%\n3. 取件當天付清尾款",
  蛋糕品項: "🍰 目前蛋糕品項\n・6吋 NT$680 起\n・8吋 NT$980 起\n詳細口味請私訊詢問～",
  客製化: "✨ 客製化服務\n・造型蛋糕需提前 7 天預訂\n・馬卡龍最低訂購 12 顆\n請私訊告知需求，我們會盡快回覆！",
  外送宅配: "📦 宅配說明\n全台低溫宅配，運費 NT$200\n需提前 3 天訂購，出貨後提供追蹤碼",
};

async function replyMessage(replyToken, messages) {
  console.log("Sending reply, token:", replyToken);
  const res = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ replyToken, messages }),
  });
  const data = await res.json();
  console.log("Line API response:", JSON.stringify(data));
  return data;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(200).send("LINE Bot is running.");

  console.log("Webhook received:", JSON.stringify(req.body));

  const events = req.body.events || [];
  console.log("Events count:", events.length);

  for (const event of events) {
    console.log("Event:", event.type, event.message?.type, event.message?.text);
    if (event.type !== "message" || event.message.type !== "text") continue;

    const userText = event.message.text.trim();
    const replyToken = event.replyToken;

    if (userText === "QA" || userText === "常見問題" || userText === "qa") {
      await replyMessage(replyToken, [qaFlexMessage]);
      continue;
    }

    if (autoReplies[userText]) {
      await replyMessage(replyToken, [{ type: "text", text: autoReplies[userText] }]);
      continue;
    }

    console.log("No match for:", userText);
  }

  res.status(200).send("OK");
};
