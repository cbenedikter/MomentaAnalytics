# Momenta Analytics - OneSignal User Update Tool

A web-based tool for managing OneSignal user updates, allowing you to apply tags and track conversion rates across your user base. This tool is designed to help you manage user data in batches with controlled conversion rates.

## Live Demo

Visit the live demo: [Momenta Analytics Tool](https://cbenedikter.github.io/MomentaAnalytics/)

## Features

- Apply tags to OneSignal users in batches
- Control conversion rate percentage (default: 5%)
- Process updates in 3 batches with 1-minute intervals
- Real-time progress tracking
- Detailed logging of operations
- Secure credential management

## Setup

1. Clone this repository:
```bash
git clone https://github.com/cbenedikter/MomentaAnalytics.git
cd MomentaAnalytics
```

2. Create a `config.js` file in the root directory with your OneSignal credentials:
```javascript
const config = {
    APP_ID: "YOUR_APP_ID_HERE",
    API_KEY: "YOUR_API_KEY_HERE"
};
```

3. Open `index.html` in your web browser

## Security Note

The `config.js` file is excluded from git to protect your API credentials. Never commit this file to version control. Each user should create their own `config.js` file with their credentials.

## Usage

1. Select "Make User Updates" from the operation dropdown
2. Set your desired conversion percentage (default: 5%)
3. Add the tags you want to apply to users
4. Click "Run User Updates" to start the process

The tool will:
- Process users in 3 batches
- Wait 1 minute between each batch
- Show real-time progress and logs
- Display a summary upon completion

## Files

- `index.html` - Main interface
- `script.js` - Core functionality
- `styles.css` - Styling
- `config.js` - Configuration file (not included in repository)

## Development

This project is built with vanilla JavaScript and HTML/CSS. No build process is required.

## License

MIT License 