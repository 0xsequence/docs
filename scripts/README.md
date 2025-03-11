# Scripts

This directory contains utility scripts for the Sequence documentation.

## Update Security Schemas

The `update_security_schemas.js` script updates the security schemas in all JSON files in the api-references directory and its subdirectories.

### Requirements

- Node.js (v12 or higher)
- npm

### Installation

Install dependencies:

```bash
cd scripts
npm install
```

### Usage

Run the script:

```bash
cd scripts
npm start
```

Or directly:

```bash
cd scripts
node update_security_schemas.js
```

### What the Script Does

The script:

1. Finds all JSON files in the api-references directory and its subdirectories
2. For each file, it analyzes the endpoints to determine if they are public or secret:
   - If an endpoint has a tag of 'public', it's considered public
   - If an endpoint has a tag of 'secret', it's considered secret
   - If no explicit tags are found, endpoints are considered public by default
3. Updates the security schemas accordingly:
   - If a file has ANY secret endpoints, it sets the BearerAuth schema with the token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiZWU3NGU3ZmZkNzdkMThhZDJhOTg2ODEyZGE2MTc5ODk0MDY4ODZjIiwiaWF0IjoxNzQxNjg3NDg4LCJwcm9qZWN0IjoxNjgxNX0.LvTwKf0T6IBK9HuRFboXCNh2YY9d6EwDoQAlGYC80KQ"
   - Otherwise, it sets the ApiKeyAuth schema with the key "AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI"
4. Updates the global security section for each file

### Output

The script will print:
- Each file it updates and whether it contains public or secret endpoints
- A summary of how many files were updated out of the total number of JSON files found 