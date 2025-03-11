#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Constants for security schemas
const API_KEY_AUTH = {
  type: "apiKey",
  in: "header",
  description: "Project access key for authenticating requests",
  name: "X-Access-Key"
};

const BEARER_AUTH = {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
  description: "JWT token for authenticating requests"
};

// API key for public endpoints
const PUBLIC_API_KEY = "AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI";

// Bearer token for secret endpoints
const SECRET_BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiZWU3NGU3ZmZkNzdkMThhZDJhOTg2ODEyZGE2MTc5ODk0MDY4ODZjIiwiaWF0IjoxNzQxNjg3NDg4LCJwcm9qZWN0IjoxNjgxNX0.LvTwKf0T6IBK9HuRFboXCNh2YY9d6EwDoQAlGYC80KQ";

/**
 * Update the security schemas in a JSON file based on the tags of each individual path.
 * @param {string} filePath - Path to the JSON file
 * @returns {boolean} - True if the file was updated successfully, false otherwise
 */
function updateJsonFile(filePath) {
  try {
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Check if the file has the components section
    if (!data.components) {
      data.components = {};
    }
    
    // Check if the file has the securitySchemes section
    if (!data.components.securitySchemes) {
      data.components.securitySchemes = {};
    }
    
    // Set up both security schemes
    data.components.securitySchemes = {
      "ApiKeyAuth": {
        ...API_KEY_AUTH,
        "description": `Public project access key for authenticating requests obtained on Sequence Builder. Example Test Key: ${PUBLIC_API_KEY}`
      },
      "BearerAuth": {
        ...BEARER_AUTH,
        "description": `Secret JWT token for authenticating requests obtained from Sequence Builder - should not be exposed publicly.`
      }
    };
    
    // Remove global security if it exists
    if (data.security) {
      delete data.security;
    }
    
    // If there's no paths section, nothing to do
    if (!data.paths) {
      console.log(`No paths found in file: ${filePath}`);
      return true;
    }
    
    let publicCount = 0;
    let secretCount = 0;
    
    // Update each path
    for (const pathUrl in data.paths) {
      const pathObj = data.paths[pathUrl];
      
      // Check each method (GET, POST, etc.)
      for (const method in pathObj) {
        const endpoint = pathObj[method];
        
        // Skip if this isn't an operation (e.g., parameters at path level)
        if (typeof endpoint !== 'object' || !endpoint) {
          continue;
        }
        
        // Determine if the endpoint is public or secret based on tags
        let isPublic = true; // Default to public
        
        if (endpoint.tags && endpoint.tags.length > 0) {
          if (endpoint.tags.includes('secret')) {
            isPublic = false;
          } else if (endpoint.tags.includes('public')) {
            isPublic = true;
          }
        }
        
        // Set the security for this endpoint
        if (isPublic) {
          endpoint.security = [{ "ApiKeyAuth": ["AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI"] }];
          publicCount++;
        } else {
          endpoint.security = [{ "BearerAuth": ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiMHhiZWU3NGU3ZmZkNzdkMThhZDJhOTg2ODEyZGE2MTc5ODk0MDY4ODZjIiwiaWF0IjoxNzQxNjg3NDg4LCJwcm9qZWN0IjoxNjgxNX0.LvTwKf0T6IBK9HuRFboXCNh2YY9d6EwDoQAlGYC80KQ"] }];
          secretCount++;
        }
      }
    }
    
    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    console.log(`Updated file ${filePath}: ${publicCount} public endpoints, ${secretCount} secret endpoints`);
    
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}: ${error.message}`);
    return false;
  }
}

/**
 * Main function to find and update all JSON files in the api-references directory.
 */
function main() {
  // Get the root directory of the project (parent of scripts directory)
  const rootDir = path.resolve(__dirname, '..');
  
  // Path to the api-references directory
  const apiReferencesDir = path.join(rootDir, 'api-references');
  
  console.log(`Searching for JSON files in: ${apiReferencesDir}`);
  
  // Find all JSON files in the api-references directory and its subdirectories
  const jsonFiles = glob.sync(path.join(apiReferencesDir, '**', '*.json'));
  
  console.log(`Found ${jsonFiles.length} JSON files`);
  
  // Count of updated files
  let updatedCount = 0;
  
  // Update each JSON file
  for (const filePath of jsonFiles) {
    if (updateJsonFile(filePath)) {
      updatedCount++;
    }
  }
  
  console.log(`\nUpdated ${updatedCount} out of ${jsonFiles.length} JSON files.`);
}

// Run the main function
main(); 