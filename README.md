# IELTS Reading Mock Test Platform

A modern, responsive web application for IELTS Reading practice with Telegram integration.

## Features
- Modern, user-friendly interface with smooth animations
- Individual passage practice (20 minutes each)
- Full reading test (60 minutes, 3 passages)
- Real-time timer with color-coded warnings
- Progress tracking with visual indicators
- Telegram integration for answer submission
- Mobile-responsive design

## Setup Instructions

### 1. Deploy to Vercel
1. Create a new repository on GitHub and upload all files
2. Go to [Vercel](https://vercel.com) and import your repository
3. Deploy with default settings

### 2. Telegram Bot Setup
1. Create a new bot via [@BotFather](https://t.me/botfather) on Telegram
2. Save your bot token
3. Create a Telegram group and add your bot
4. Get the chat ID (you can use @getidsbot to find it)
5. Update the `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `index.html`

### 3. Environment Variables (Optional)
For production, set these in Vercel project settings:
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## File Structure
- `index.html` - Main application with all UI
- `api/submit.js` - Serverless function for Telegram API
- `vercel.json` - Vercel configuration
- `package.json` - Project dependencies

## Usage
1. Enter your name and email
2. Choose between individual passages or full test
3. Read the passage and answer questions
4. Submit answers - they will be sent to your Telegram group
5. Review answers in Telegram for discussion

## Customization
- Add more passages by extending the JavaScript arrays
- Modify colors in CSS variables
- Adjust timers as needed
- Add more question types

## Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins, Inter)
- Vercel Serverless Functions
- Telegram Bot API
