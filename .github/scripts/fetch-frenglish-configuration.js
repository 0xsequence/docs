const fs = require('fs');

// Use dynamic import
(async () => {
  const { FrenglishSDK } = await import('@frenglish/sdk');

  async function fetchConfigAndSetOutputs() {
    const apiKey = process.env.FRENGLISH_API_KEY;

    if (!apiKey) {
      console.error('::error::FRENGLISH_API_KEY secret is not set.');
      process.exit(1);
    }

    // Check if GITHUB_OUTPUT path is available
    if (!process.env.GITHUB_OUTPUT) {
      console.error('::error::GITHUB_OUTPUT environment variable is not set. Are you running this script in GitHub Actions?');
      process.exit(1);
    }

    try {
      console.log('Initializing Frenglish SDK...');
      const frenglish = FrenglishSDK(apiKey); // Assuming this is correct based on your usage

      console.log('Fetching default configuration from Frenglish SDK instance...');
      const config = await frenglish.getDefaultConfiguration();

      if (!config || !config.originLanguage || !config.languages || !Array.isArray(config.languages)) {
        console.error(`::error::Failed to retrieve a valid configuration object from SDK. Received: ${JSON.stringify(config)}`);
        process.exit(1);
      }

      const originLanguage = config.originLanguage;
      const targetLanguages = config.languages; // Assuming 'languages' contains ALL languages including origin

      // It's safer to check if originLanguage is actually in the languages array before filtering
      const actualTargetLanguages = targetLanguages.filter(lang => lang !== originLanguage);

      if (actualTargetLanguages.length === 0) {
         console.warn('::warning::No target languages found in the configuration after filtering out the origin language.');
      }

      const targetLangsString = actualTargetLanguages.join(' '); // Create space-separated string

      console.log(`Source Language Determined: ${originLanguage}`);
      console.log(`Target Languages Determined: ${targetLangsString}`);

      // --- Use GITHUB_OUTPUT to set outputs ---
      // Write outputs to the file specified by GITHUB_OUTPUT
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `source_lang=${originLanguage}\n`);
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `target_langs=${targetLangsString}\n`);
      // --- End of GITHUB_OUTPUT usage ---

      console.log('Outputs set successfully.');

    } catch (error) {
      console.error(`::error::Error during Frenglish configuration fetch: ${error.message}`);
      process.exit(1);
    }
  }

  await fetchConfigAndSetOutputs();
})().catch(error => {
  console.error('::error::Fatal error executing script:', error);
  process.exit(1);
});