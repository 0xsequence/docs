![Sequence: Build the best web3 games and experiences](images/sequence-header.jpg)

# Sequence Documentation
Welcome to the Sequence docs! Your infrastructure for chains, games, and apps.

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```bash
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```bash
mintlify dev
```

We use Mintlify as the documentation framework. For more information on what components are available to structure your content, please refer to their [documentation](https://mintlify.com/docs/page).

## Update Security Schemas Script

This repository includes a script to update the security schemas in all JSON files in the api-references directory and its subdirectories.

### Requirements

- Node.js (v12 or higher)
- npm

### Installation

Install dependencies:

```bash
npm install
```

### Usage

Run the script:

```bash
npm start
```

Or directly:

```bash
node update_security_schemas.js
```

### What the Script Does

The script:

1. Finds all JSON files in the api-references directory and its subdirectories
2. For each file, it determines if the endpoint is public or secret based on its path
   - If the file path contains '/secret/', it's considered a secret endpoint
   - Otherwise, it's considered a public endpoint
3. Updates the security schemas accordingly:
   - For public endpoints, it sets the ApiKeyAuth schema with the key "AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI"
   - For secret endpoints, it sets the BearerAuth schema with the token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiZWU3NGU3ZmZkNzdkMThhZDJhOTg2ODEyZGE2MTc5ODk0MDY4ODZjIiwiaWF0IjoxNzQxNjg3NDg4LCJwcm9qZWN0IjoxNjgxNX0.LvTwKf0T6IBK9HuRFboXCNh2YY9d6EwDoQAlGYC80KQ"
4. Updates the global security section for each file

### Output

The script will print:
- Each file it updates and whether it's a public or secret endpoint
- A summary of how many files were updated out of the total number of JSON files found

## Contributing

We welcome contributions from the community to help improve our documentation! Here's how you can contribute:

1. **Fork the repository** and create your branch from `main`.
2. **Make your changes** to the documentation.
3. **Test your changes** locally using the Mintlify CLI. We also recommend running `mintlify broken-links` after adding your changes and before creating a PR to validate any broken-links.
4. **Submit a pull request** with a clear description of your changes.

Our team reviews pull requests regularly and will provide feedback as needed. For substantial changes, please open an issue first to discuss what you'd like to change.

If you find any errors or have suggestions for improvements but don't want to contribute directly, please open an issue describing the problem or enhancement.

Thank you for helping make Sequence documentation better for everyone!

### Troubleshooting

Mintlify has a max capacity for large files such as high quality images or videos. If you deploy and your video or image is not showing on the preview link in your PR, we recommend deploying these first to a CDN in order to serve them.
