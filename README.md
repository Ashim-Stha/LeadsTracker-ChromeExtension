
# Leads Tracker Chrome Extension

Leads Tracker is a simple Chrome extension that allows users to save and manage their leads (URLs) directly from the browser. This extension provides functionalities to save the current tab, add custom URLs, and delete all saved leads.

## Features

- Save the current tab URL
- Add custom URLs
- View saved URLs as a list
- Delete all saved URLs

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded/cloned this repository.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Use the input field to add a custom URL and click "Submit".
3. Click "Save tab" to save the URL of the current tab.
4. Double-click the "Delete ALL" button to clear all saved leads.
5. The saved URLs will be displayed as a list in the popup.

## Files

- `chromeext.html`: The HTML file for the extension's popup.
- `chromeext.js`: The JavaScript file that contains the logic for handling user interactions and managing leads.
- `manifest.json`: The manifest file that defines the extension's metadata and permissions.

## Code Overview

### HTML

The HTML file defines the structure of the popup, including input fields and buttons for user interactions.

### JavaScript

The JavaScript file handles the following:

- Retrieving and storing leads in `localStorage`.
- Rendering the list of saved leads.
- Adding new leads from user input or the current tab.
- Clearing all saved leads.

### Manifest

The manifest file specifies the extension's name, version, popup HTML file, and required permissions.

## Development

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## License

This project is licensed under the MIT License.
