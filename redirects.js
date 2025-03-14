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

  // Get the current path
  const currentPath = window.location.pathname;
  
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
})();