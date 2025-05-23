# Momenta Analytics - OneSignal User Update Tool

A web-based tool for managing OneSignal user tags and updates.

## Live Demo

Visit the live demo: [Momenta Analytics Tool](https://cbenedikter.github.io/MomentaAnalytics/)

## Features

- Update OneSignal user tags in batches
- Set conversion percentage (default: 5%)
- Add multiple tags with key-value pairs
- Secure credential management
- Real-time progress tracking
- Detailed logging

## Setup

1. Clone this repository:
```bash
git clone https://github.com/cbenedikter/MomentaAnalytics.git
cd MomentaAnalytics
```

2. Copy `config.template.js` to `config.js`
3. Edit `config.js` and add your OneSignal credentials:
```javascript
const config = {
    APP_ID: "your-app-id-here",
    API_KEY: "your-api-key-here"
};
```

4. Open `index.html` in your browser

## Security Note

The `config.js` file is excluded from version control to protect your API credentials. Make sure to:
- Never commit your `config.js` file
- Keep your API credentials secure
- Use environment variables in production

## Usage

1. Select "Make User Updates" from the operation dropdown
2. Set your desired conversion percentage (1-100%)
3. Add one or more tags with key-value pairs
4. Click "Run User Updates" to start the process
5. Monitor progress in the log output

## Files

- `index.html` - Main interface
- `styles.css` - Styling
- `script.js` - Core functionality
- `config.js` - API credentials (not tracked in git)
- `config.template.js` - Template for creating config.js

## Development

This project is built with vanilla JavaScript and HTML/CSS. No build process is required.

## Troubleshooting

If the tool is not working:
1. Make sure you have created `config.js` from `config.template.js`
2. Verify your OneSignal credentials are correct
3. Check the browser console for error messages
4. Ensure you have at least one tag configured
5. Verify your internet connection

## Common Issues

1. **Nothing happens when clicking "Run User Updates"**
   - Check if `config.js` exists and contains valid credentials
   - Open browser console (F12) to see error messages
   - Verify that at least one tag is configured

2. **API Authentication Errors**
   - Double-check your APP_ID and API_KEY
   - Make sure the API key has the correct permissions
   - Verify the API key format is correct

3. **No Progress Updates**
   - Check if the progress section is visible
   - Look for any error messages in the log output
   - Verify your internet connection

4. **Script Not Loading**
   - Ensure all files are in the same directory
   - Check if `config.js` is properly included in `index.html`
   - Clear browser cache and reload the page

## License

MIT License 