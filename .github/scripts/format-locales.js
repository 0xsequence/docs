const { execSync } = require("child_process");
const fs = require("fs");

const LOCALES_DIR = ".";

function formatJsonFile(filePath) {
  try {
    console.log(`Formatting ${filePath}...`);

    // Read the file
    const content = fs.readFileSync(filePath, "utf-8");

    // Parse and reformat the JSON
    const parsedJson = JSON.parse(content);
    const formattedContent = JSON.stringify(
      parsedJson,
      Object.keys(parsedJson).sort(),
      2
    );

    // Write the formatted content back to the file
    fs.writeFileSync(filePath, formattedContent + "\n");

    console.log(`✓ Formatted ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to format ${filePath}:`, error.message);
    return false;
  }
}

function formatAllLocalesFiles() {
  try {
    // Find all JSON files in the locales directory
    const output = execSync(`find ${LOCALES_DIR} -name "*.json"`)
      .toString()
      .trim();
    const files = output.split("\n").filter(Boolean);

    console.log("Found locales files:", files);
    return files.map(formatJsonFile);
  } catch (error) {
    console.error("Error finding locales files:", error.message);
    return [];
  }
}

function main() {
  // In the workflow context, we want to format all files (not just changed ones)
  const files = formatAllLocalesFiles();

  if (files.length === 0) {
    console.log("No locales files found. Nothing to format.");
    return;
  }

  // Count failures (formatAllLocalesFiles already formats the files)
  const failedCount = files.filter((success) => !success).length;

  if (failedCount > 0) {
    console.error(`Failed to format ${failedCount} file(s).`);
    process.exit(1);
  }

  console.log("All files formatted successfully!");
}

main();