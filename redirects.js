// redirects.js - Custom JavaScript for handling API redirects
// This file will be automatically included in every documentation page

(function sequenceApiRedirects() {
  // Map of old API routes to new routes
  const redirects = {
    "/api/transactions/overview": "/api-references/transactions/overview",
    "/api/analytics/overview": "/api-references/analytics/overview",
    "/api/indexer/overview": "/api-references/indexer/overview",
    "/api/metadata/overview": "/api-references/metadata/overview",
    "/api/marketplace/overview": "/api-references/marketplace/overview",
    "/api/infrastructure/overview": "/api-references/infrastructure/overview",
    "/api/builder/overview": "/api-references/builder/overview",
    "/api/node-gateway": "/api-references/node-gateway"
  };

  // Get the current path
  const currentPath = window.location.pathname;
  
  // Check if the current path needs to be redirected
  if (redirects[currentPath]) {
    // Redirect to the new path
    window.location.href = redirects[currentPath];
  }
})();