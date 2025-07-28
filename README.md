# Shieldmaiden Plugin for Obsidian

This plugin allows you to access [shieldmaiden.app](https://shieldmaiden.app) directly from the Obsidian sidebar.

## Features

- Adds a shield icon to the ribbon that opens Shieldmaiden in the sidebar
- Provides a command "Open Shieldmaiden" accessible from the command palette
- Displays shieldmaiden.app in a dedicated sidebar view
- Seamlessly integrates with your Obsidian workspace

## Installation

### Manual Installation

1. Download the latest release files (`main.js`, `manifest.json`, and `styles.css`)
2. Create a folder named `shieldmaiden-plugin` in your vault's `.obsidian/plugins/` directory
3. Copy the downloaded files into this folder
4. Restart Obsidian
5. Go to Settings → Community Plugins and enable "Shieldmaiden"

### Development Installation

1. Clone this repository into your vault's `.obsidian/plugins/` directory
2. Navigate to the plugin directory in your terminal
3. Run `npm install` to install dependencies
4. Run `npm run build` to compile the plugin
5. Restart Obsidian and enable the plugin in Settings → Community Plugins

## Usage

Once installed and enabled, you can access Shieldmaiden in two ways:

1. **Ribbon Icon**: Click the shield icon in the left ribbon to open Shieldmaiden in the sidebar
2. **Command Palette**: Use Ctrl/Cmd + P to open the command palette, then search for "Open Shieldmaiden"

The Shieldmaiden view will open in the right sidebar, allowing you to use shieldmaiden.app alongside your notes.

## Requirements

- Obsidian v0.15.0 or higher
- Internet connection to access shieldmaiden.app

## Support

If you encounter any issues or have suggestions for improvements, please create an issue in this repository.
