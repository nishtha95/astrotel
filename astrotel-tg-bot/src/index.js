const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); 
const PORT = process.env.PORT || 8000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
module.exports = app;

// import { Telegraf } from "telegraf";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.TG_BOT_TOKEN);
// const bot = new Telegraf(process.env.TG_BOT_TOKEN || "");
// // bot.start((ctx) =>
// //   ctx.reply("Welcome to our counter app!", {
// //     reply_markup: {
// //       keyboard: [
// //         ["Increment by 5"],
// //         ["Deposit 1 TON"],
// //         ["Withdraw 0.7 TON"],
// //       ],
// //     },
// //   })
// // );
// bot.launch();

// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop ("SIGTERM"));