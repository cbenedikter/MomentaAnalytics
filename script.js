// OneSignal User Update Tool - JavaScript Functions

// Fixed list of external IDs
const FIXED_EXTERNAL_IDS = [
    "A7K9M3X8P2Q1", "B8L0N4Y9Q3R2", "C9M1O5Z0R4S3", "D0N2P6A1S5T4",
    "E1O3Q7B2T6U5", "F2P4R8C3U7V6", "G3Q5S9D4V8W7", "H4R6T0E5W9X8",
    "I5S7U1F6X0Y9", "J6T8V2G7Y1Z0", "K7U9W3H8Z2A1", "L8V0X4I9A3B2",
    "M9W1Y5J0B4C3", "N0X2Z6K1C5D4", "O1Y3A7L2D6E5", "P2Z4B8M3E7F6",
    "Q3A5C9N4F8G7", "R4B6D0O5G9H8", "S5C7E1P6H0I9", "T6D8F2Q7I1J0",
    "U7E9G3R8J2K1", "V8F0H4S9K3L2", "W9G1I5T0L4M3", "X0H2J6U1M5N4",
    "Y1I3K7V2N6O5", "Z2J4L8W3O7P6", "A3K5M9X4P8Q7", "B4L6N0Y5Q9R8",
    "C5M7O1Z6R0S9", "D6N8P2A7S1T0", "E7O9Q3B8T2U1", "F8P0R4C9U3V2",
    "G9Q1S5D0V4W3", "H0R2T6E1W5X4", "I1S3U7F2X6Y5", "J2T4V8G3Y7Z6",
    "K3U5W9H4Z8A7", "L4V6X0I5A9B8", "M5W7Y1J6B0C9", "N6X8Z2K7C1D0",
    "O7Y9A3L8D2E1", "P8Z0B4M9E3F2", "Q9A1C5N0F4G3", "R0B2D6O1G5H4",
    "S1C3E7P2H6I5", "T2D4F8Q3I7J6", "U3E5G9R4J8K7", "V4F6H0S5K9L8",
    "W5G7I1T6L0M9", "X6H8J2U7M1N0", "Y7I9K3V8N2O1", "Z8J0L4W9O3P2",
    "A9K1M5X0P4Q3", "B0L2N6Y1Q5R4", "C1M3O7Z2R6S5", "D2N4P8A3S7T6",
    "E3O5Q9B4T8U7", "F4P6R0C5U9V8", "G5Q7S1D6V0W9", "H6R8T2E7W1X0",
    "I7S9U3F8X2Y1", "J8T0V4G9Y3Z2", "K9U1W5H0Z4A3", "L0V2X6I1A5B4",
    "M1W3Y7J2B6C5", "N2X4Z8K3C7D6", "O3Y5A9L4D8E7", "P4Z6B0M5E9F8",
    "Q5A7C1N6F0G9", "R6B8D2O7G1H0", "S7C9E3P8H2I1", "T8D0F4Q9I3J2",
    "U9E1G5R0J4K3", "V0F2H6S1K5L4", "W1G3I7T2L6M5", "X2H4J8U3M7N6",
    "Y3I5K9V4N8O7", "Z4J6L0W5O9P8", "A5K7M1X6P0Q9", "B6L8N2Y7Q1R0",
    "C7M9O3Z8R2S1", "D8N0P4A9S3T2", "E9O1Q5B0T4U3", "F0P2R6C1U5V4",
    "G1Q3S7D2V6W5", "H2R4T8E3W7X6", "I3S5U9F4X8Y7", "J4T6V0G5Y9Z8",
    "K5U7W1H6Z0A9", "L6V8X2I7A1B0", "M7W9Y3J8B2C1", "N8X0Z4K9C3D2",
    "O9Y1A5L0D4E3", "P0Z2B6M1E5F4", "Q1A3C7N2F6G5", "R2B4D8O3G7H6",
    "S3C5E9P4H8I7", "T4D6F0Q5I9J8", "U5E7G1R6J0K9", "V6F8H2S7K1L0"
];

// OneSignal credentials will be loaded from config.js
let APP_ID;
let API_KEY;

// Load configuration
function loadConfig() {
    console.log('Loading configuration...');
    if (typeof config === 'undefined') {
        console.error('Configuration object not found');
        log('❌ Configuration file not found. Please create a config.js file with your OneSignal credentials.', 'error');
        return false;
    }
    
    console.log('Config object found:', config);
    APP_ID = config.APP_ID;
    API_KEY = config.API_KEY;
    
    console.log('APP_ID:', APP_ID);
    console.log('API_KEY:', API_KEY ? 'Present' : 'Missing');
    
    if (!APP_ID || !API_KEY || APP_ID === 'YOUR_APP_ID_HERE' || API_KEY === 'YOUR_API_KEY_HERE') {
        console.error('Invalid credentials');
        log('❌ Please configure your OneSignal credentials in config.js', 'error');
        return false;
    }
    
    console.log('Configuration loaded successfully');
    return true;
}

let selectedConversionPercentage = 5;

function showConfig() {
    const operation = document.getElementById('operation').value;
    const configSection = document.getElementById('config-section');
    
    if (operation === 'user_updates') {
        configSection.style.display = 'block';
    } else {
        configSection.style.display = 'none';
    }
}

function applyConversion() {
    const conversionInput = document.getElementById('conversion-percentage');
    const conversionStatus = document.getElementById('conversion-status');
    const percentage = parseInt(conversionInput.value);

    if (isNaN(percentage) || percentage < 1 || percentage > 100) {
        conversionStatus.innerHTML = '<span class="error">Please enter a valid percentage between 1 and 100</span>';
        return;
    }

    selectedConversionPercentage = percentage;
    conversionStatus.innerHTML = `<span class="success">Conversion set to ${percentage}%</span>`;
}

function addTagField() {
    const container = document.getElementById('tag-container');
    const tagItem = document.createElement('div');
    tagItem.className = 'tag-item';
    tagItem.innerHTML = `
        <input type="text" placeholder="Key" class="tag-key">
        <input type="text" placeholder="Value" class="tag-value">
        <button class="remove-tag" onclick="removeTag(this)">Remove</button>
    `;
    container.appendChild(tagItem);
}

function removeTag(button) {
    button.parentElement.remove();
}

function log(message, type = 'info') {
    const logOutput = document.getElementById('log-output');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    const span = document.createElement('span');
    span.className = type;
    span.textContent = logEntry;
    
    logOutput.appendChild(span);
    logOutput.scrollTop = logOutput.scrollHeight;
}

function updateProgress(current, total) {
    const percentage = (current / total) * 100;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `Processing ${current} of ${total} users (${Math.round(percentage)}%)`;
}

async function runScript() {
    console.log('Starting script execution...');
    
    // Check configuration first
    if (!loadConfig()) {
        console.error('Configuration check failed');
        return;
    }

    // Get tags
    const tagItems = document.querySelectorAll('.tag-item');
    const tags = {};
    let hasValidTags = false;

    tagItems.forEach(item => {
        const key = item.querySelector('.tag-key').value.trim();
        const value = item.querySelector('.tag-value').value.trim();
        if (key) {
            tags[key] = value;
            hasValidTags = true;
        }
    });

    console.log('Tags collected:', tags);

    if (!hasValidTags) {
        console.error('No valid tags found');
        alert('Please add at least one tag');
        return;
    }

    // Calculate number of users to update based on conversion percentage
    const numUsersToUpdate = Math.ceil((FIXED_EXTERNAL_IDS.length * selectedConversionPercentage) / 100);
    const selectedUsers = FIXED_EXTERNAL_IDS.slice(0, numUsersToUpdate);

    console.log('Number of users to update:', numUsersToUpdate);
    console.log('Selected users:', selectedUsers);

    // Show progress section
    document.getElementById('progress-section').style.display = 'block';
    document.getElementById('run-btn').disabled = true;
    document.getElementById('log-output').innerHTML = '';

    log('🚀 Starting tag update process...', 'info');
    log(`📊 Will update ${numUsersToUpdate} out of ${FIXED_EXTERNAL_IDS.length} users (${selectedConversionPercentage}% conversion)`, 'info');
    log(`🏷️  Tags to apply: ${JSON.stringify(tags)}`, 'info');

    let processed = 0;
    let successCount = 0;
    let errorCount = 0;

    // Process users in exactly 3 batches
    const batchSize = Math.ceil(numUsersToUpdate / 3);
    
    for (let i = 0; i < numUsersToUpdate; i += batchSize) {
        const batch = selectedUsers.slice(i, i + batchSize);
        log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1} of 3 (${batch.length} users)...`, 'info');

        for (const externalId of batch) {
            try {
                const url = `https://api.onesignal.com/apps/${APP_ID}/users/by/external_id/${externalId}`;
                console.log('Making API request to:', url);
                
                const response = await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${API_KEY}`
                    },
                    body: JSON.stringify({
                        properties: {
                            tags: tags
                        }
                    })
                });

                console.log('API Response status:', response.status);
                const responseText = await response.text();
                console.log('API Response:', responseText);

                processed++;
                updateProgress(processed, numUsersToUpdate);

                if (response.ok) {
                    log(`✅ ${externalId} updated successfully`, 'success');
                    successCount++;
                } else {
                    log(`❌ ${externalId} failed: ${response.status} ${responseText}`, 'error');
                    errorCount++;
                }
            } catch (error) {
                console.error('Error processing user:', error);
                processed++;
                updateProgress(processed, numUsersToUpdate);
                log(`❌ ${externalId} failed: ${error.message}`, 'error');
                errorCount++;
            }
        }

        // Wait 1 minute between batches (except after the last batch)
        if (i + batchSize < numUsersToUpdate) {
            log('⏳ Waiting 60 seconds before next batch...', 'info');
            await new Promise(resolve => setTimeout(resolve, 60000)); // 60 seconds = 1 minute
        }
    }

    log('\n🎉 All batches processed!', 'success');
    log(`📈 Summary: ${successCount} successful, ${errorCount} failed, ${numUsersToUpdate} total`, 'info');
    
    document.getElementById('run-btn').disabled = false;
}