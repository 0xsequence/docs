// Databeat integration
(function() {
  // Initialize databeat global object
  window.databeat = window.databeat || null;
  
  // Load Databeat script from CDN (updated to v0.9.3)
  const s = document.createElement('script');
  s.src = 'https://unpkg.com/@databeat/tracker@0.9.3/dist/databeat-tracker.mjs';
  s.async = true;
  s.onload = initDatabeat;
  document.head.appendChild(s);
  
  // Initialize Databeat
  function initDatabeat() {
    if (!window.Databeat) return;
    
    // Create databeat instance
    window.databeat = new window.Databeat(
      'https://databeat.sequence.app',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MTcxMjIxNDYzNn0.qWxTAvdiD1mWUZaEMFwp3_Xq-aFmMzzoIU8h4a8xG9c',
      { flushInterval: 1000, defaultEnabled: true }
    );
    
    // Track initial pageview
    trackPageview();
    
    window.addEventListener('popstate', () => setTimeout(trackPageview, 300));
  }
  
  // Helper function to track pageviews
  function trackPageview() {
    if (!window.databeat) return;
    window.databeat.track({
      event: 'VIEW',
      source: location.pathname,
      props: { title: document.title, url: location.href, referrer: document.referrer }
    });
  }
})(); 