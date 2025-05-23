# OneSignal User Update Tool

A web-based tool for managing OneSignal user updates, allowing you to apply tags and track conversion rates across your user base.

## Features

- Apply tags to OneSignal users in batches
- Control conversion rate percentage
- Process updates in 3 batches with 1-minute intervals
- Real-time progress tracking
- Detailed logging of operations

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/onesignal-user-update-tool.git
cd onesignal-user-update-tool
```

2. Open `index.html` in your web browser

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

## Configuration

The tool uses the following OneSignal credentials:
- App ID: `5e605fcd-de88-4b0a-a5eb-5c18b84d52f3`
- API Key: Configured in the script

## Files

- `index.html` - Main interface
- `script.js` - Core functionality
- `styles.css` - Styling

## License

MIT License 