
import FrenglishSDK from '@frenglish/sdk'

async function fetchConfigAndSetOutputs() {
  const apiKey = process.env.FRENGLISH_API_KEY;

  if (!apiKey) {
    // Use GitHub Actions error logging format
    console.error('::error::FRENGLISH_API_KEY secret is not set.');
    process.exit(1); // Exit with non-zero code to fail the step
  }

  try {
    console.log('Initializing Frenglish SDK...');
    // Initialize SDK instance using the function call pattern seen in your example
    // This assumes FrenglishSDK(apiKey) returns an instance
    const frenglish = FrenglishSDK(apiKey);

    console.log('Fetching default configuration from Frenglish SDK instance...');
    // Assume getDefaultConfiguration is an *instance* method based on the initialization pattern
    // If it's static, you'd call FrenglishSDK.getDefaultConfiguration(apiKey) instead
    const config = await frenglish.getDefaultConfiguration();

    // Validate the received configuration structure
    if (!config || !config.originLanguage || !config.languages || !Array.isArray(config.languages)) {
      console.error(`::error::Failed to retrieve a valid configuration object from SDK. Received: ${JSON.stringify(config)}`);
      process.exit(1);
    }

    const originLanguage = config.originLanguage;
    // Filter out the origin language from the list to get only target languages
    const targetLanguages = config.languages

    if (targetLanguages.length === 0) {
       // Use GitHub Actions warning logging format
       console.warn('::warning::No target languages found in the configuration after filtering out the origin language.');
       // Depending on requirements, you might want to exit(1) here or allow proceeding
    }

    const targetLangsString = targetLanguages.join(' '); // Create space-separated string for shell script later

    console.log(`Source Language Determined: ${originLanguage}`);
    console.log(`Target Languages Determined: ${targetLangsString}`);

    // Set outputs for subsequent steps using GitHub Actions command syntax
    // Ensure no extra characters are logged before/after these lines
    console.log(`::set-output name=source_lang::${originLanguage}`);
    console.log(`::set-output name=target_langs::${targetLangsString}`);

  } catch (error) {
    // Log error details using GitHub Actions format
    console.error(`::error::Error during Frenglish configuration fetch: ${error.message}`);
    // Optional: Log stack trace for more debugging
    // console.error(error.stack);
    process.exit(1);
  }
}

// Execute the async function
fetchConfigAndSetOutputs();