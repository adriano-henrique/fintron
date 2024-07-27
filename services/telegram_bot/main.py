import os
from dotenv import load_dotenv
from telegram import ForceReply, Update
import requests
from telegram.ext import Application, MessageHandler, CommandHandler, ContextTypes, filters

load_dotenv()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send a message when the command /start is issued."""
    user = update.effective_user
    await update.message.reply_html(
        rf"Hi {user.mention_html()}!",
        reply_markup=ForceReply(selective=True),
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send a message when the command /help is issued."""
    await update.message.reply_text("Help!")

async def health_check(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send a message when the command /health_check is issued."""
    api_url = "http://localhost:8080/api/v1/health"
    response = requests.get(api_url)
    if response.status_code == 200:
        await update.message.reply_text(response.json()["message"])
    else:
        await update.message.reply_text("Something went wrong")


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Echo the user message."""
    await update.message.reply_text(update.message.text)

def main() -> None:
    print("Starting Telegram Bot...")
    telegram_bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    application = Application.builder().token(telegram_bot_token).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("health_check", health_check))

    # on non command i.e message - echo the message on Telegram
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Run the bot until the user presses Ctrl-C
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()