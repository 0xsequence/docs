const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const LOCALES_DIR = "."; // Root directory to start search
const EXCLUDE_DIR = path.resolve(LOCALES_DIR, "node_modules"); // Absolute path to node_modules

function formatJsonFile(filePath) {
  try {
    console.log(`Formatting ${filePath}...`);

    // Read the file
    const content = fs.readFileSync(filePath, "utf-8");

    // Parse and reformat the JSON
    // Ensure content is not empty before parsing
    if (content.trim() === "") {
      console.warn(`✓ Skipping empty file: ${filePath}`);
      return true; // Treat empty files as success (nothing to format)
    }

    const parsedJson = JSON.parse(content);
    
    // Sort keys - handle non-object JSON (e.g., arrays, primitives)
    let formattedContent;
    if (typeof parsedJson === 'object' && parsedJson !== null && !Array.isArray(parsedJson)) {
      // Sort keys only for non-null, non-array objects
      const sortedKeys = Object.keys(parsedJson).sort();
      const sortedJson = {};
      sortedKeys.forEach(key => {
        sortedJson[key] = parsedJson[key];
      });
      formattedContent = JSON.stringify(sortedJson, null, 2);
    } else {
      // For arrays or primitives, just stringify with indentation
      formattedContent = JSON.stringify(parsedJson, null, 2);
    }


    // Write the formatted content back to the file
    // Add newline at the end for POSIX compatibility
    fs.writeFileSync(filePath, formattedContent + "\n", "utf-8");

    console.log(`✓ Formatted ${filePath}`);
    return true;
  } catch (error) {
    // Provide more context on parsing errors
    console.error(`✗ Failed to format ${filePath}: ${error.name} - ${error.message}`);
    return false;
  }
}

function formatAllLocalesFiles() {
  try {
    // Find all JSON files recursively starting from LOCALES_DIR
    const command = `find ${LOCALES_DIR} -type f -name "*.json"`;
    console.log(`Running command: ${command}`);
    const output = execSync(command).toString().trim();
    const allFiles = output.split("\n").filter(Boolean);

    // Filter out files within the node_modules directory
    const filesToFormat = allFiles.filter((filePath) => {
      const absoluteFilePath = path.resolve(filePath);
      // Check if the file path starts with the node_modules path
      return !absoluteFilePath.startsWith(EXCLUDE_DIR + path.sep) && // Exclude files *inside* node_modules
             absoluteFilePath !== EXCLUDE_DIR; // Exclude node_modules itself if it were a file somehow
    });

    console.log(`Found ${allFiles.length} total JSON files.`);
    console.log(`Excluded ${allFiles.length - filesToFormat.length} files within node_modules.`);
    console.log("Files to format:", filesToFormat);

    if (filesToFormat.length === 0) {
      return []; // Return empty array if no files left after filtering
    }

    return filesToFormat.map(formatJsonFile);
  } catch (error) {
    // Handle errors from the 'find' command itself
    console.error("Error finding JSON files:", error.message);
    if (error.stderr) {
       console.error("Find command stderr:", error.stderr.toString());
    }
    return [];
  }
}

function main() {
  const results = formatAllLocalesFiles(); // results is now an array of booleans (true for success, false for failure)

  if (results.length === 0) {
    console.log("No relevant JSON files found or processed. Nothing to format.");
    // Decide if this should be an error or not; exiting 0 is fine if it's expected
    process.exit(0);
  }

  // Count failures
  const failedCount = results.filter((success) => !success).length;

  if (failedCount > 0) {
    console.error(`\nFormatting complete, but failed for ${failedCount} file(s). See logs above.`);
    process.exit(1);
  }

  console.log("\nAll relevant JSON files formatted successfully!");
}

main();