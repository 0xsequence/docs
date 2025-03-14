// redirects.js - Custom JavaScript for handling API redirects
// This file will be automatically included in every documentation page

(function sequenceApiRedirects() {
  console.log('Sequence Docs: redirects.js loaded successfully');

  // Map of old API routes to new routes
  const redirects = {
    "/api/transactions/overview": "/api-references/transactions/overview",
    "/api/transactions/overview/": "/api-references/transactions/overview",
    "/api/analytics/overview": "/api-references/analytics/overview",
    "/api/analytics/overview/": "/api-references/analytics/overview",
    "/api/indexer/overview": "/api-references/indexer/overview",
    "/api/indexer/overview/": "/api-references/indexer/overview",
    "/api/metadata/overview": "/api-references/metadata/overview",
    "/api/metadata/overview/": "/api-references/metadata/overview",
    "/api/marketplace/overview": "/api-references/marketplace/overview",
    "/api/marketplace/overview/": "/api-references/marketplace/overview",
    "/api/infrastructure/overview": "/api-references/infrastructure/overview",
    "/api/infrastructure/overview/": "/api-references/infrastructure/overview",
    "/api/builder/overview": "/api-references/builder/overview",
    "/api/builder/overview/": "/api-references/builder/overview",
    "/api/node-gateway": "/api-references/node-gateway",
    "/api/node-gateway/": "/api-references/node-gateway"
  };

  // Function to handle redirects
  function handleRedirect() {
    // Get the current path
    const currentPath = window.location.pathname;
    
    // Handle Next.js data requests
    if (currentPath.includes('/_next/data/') && currentPath.endsWith('.json')) {
      // Extract the actual path from the Next.js data URL
      const match = currentPath.match(/_next\/data\/[^/]+\/(.+)\.json/);
      if (match && match[1]) {
        const actualPath = '/' + match[1];
        console.log('Sequence Docs: Detected Next.js data request for path:', actualPath);
        
        // Check if this path should be redirected
        for (const [oldPath, newPath] of Object.entries(redirects)) {
          if (actualPath === oldPath || actualPath === oldPath + '/') {
            // For Next.js data requests, we need to redirect to the corresponding data URL
            const newDataPath = currentPath.replace(match[1], newPath.substring(1));
            console.log('Sequence Docs: Redirecting Next.js data request to:', newDataPath);
            window.location.href = newDataPath;
            return;
          }
        }
      }
    }
    
    // More flexible path matching - normalize by removing trailing slash if present
    const normalizedPath = currentPath.endsWith('/') ? currentPath : currentPath + '/';
    const pathWithoutSlash = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    
    console.log('Sequence Docs: Checking paths:', currentPath, normalizedPath, pathWithoutSlash);
    
    // Check if any version of the path needs to be redirected
    if (redirects[currentPath]) {
      console.log('Sequence Docs: Redirecting from exact path to', redirects[currentPath]);
      window.location.href = redirects[currentPath];
    } else if (redirects[normalizedPath]) {
      console.log('Sequence Docs: Redirecting from normalized path to', redirects[normalizedPath]);
      window.location.href = redirects[normalizedPath];
    } else if (redirects[pathWithoutSlash]) {
      console.log('Sequence Docs: Redirecting from path without slash to', redirects[pathWithoutSlash]);
      window.location.href = redirects[pathWithoutSlash];
    }
  }

  // Execute redirect logic
  handleRedirect();

  // Also intercept fetch requests to handle Next.js data fetching
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (typeof url === 'string' && url.includes('/_next/data/') && url.endsWith('.json')) {
      console.log('Sequence Docs: Intercepted fetch for:', url);
      
      // Check if this is a request for a path that should be redirected
      for (const [oldPath, newPath] of Object.entries(redirects)) {
        const oldPathEncoded = encodeURIComponent(oldPath.replace(/^\//, ''));
        if (url.includes(oldPathEncoded)) {
          const newUrl = url.replace(oldPathEncoded, encodeURIComponent(newPath.replace(/^\//, '')));
          console.log('Sequence Docs: Redirecting fetch to:', newUrl);
          return originalFetch(newUrl, options);
        }
      }
    }
    return originalFetch(url, options);
  };
})();