// Databeat integration
(function() {
  // Initialize databeat global object
  window.databeat = window.databeat || null;
  
  console.log('Databeat: Initializing tracker...');
  
  // Load Databeat script from local file instead of CDN
  const s = document.createElement('script');
  s.src = '/snippets/dist/databeat-tracker.umd.js';
  s.async = true;
  s.onload = function() {
    console.log('Databeat: Script loaded successfully');
    console.log('Available global objects:', Object.keys(window).filter(key => key.includes('ata')));
    initDatabeat();
  };
  s.onerror = function(error) {
    console.error('Databeat: Failed to load script', error);
  };
  document.head.appendChild(s);
  
  // Initialize Databeat
  function initDatabeat() {
    // Based on the UMD file, it's likely exposed as DatabeatTracker instead of Databeat
    const DatabeatConstructor = window.DatabeatTracker || window.Databeat;
    
    if (!DatabeatConstructor) {
      console.error('Databeat: Constructor is not defined after loading script');
      console.log('Available global objects:', Object.keys(window).filter(key => key.includes('ata')));
      return;
    }
    
    console.log('Databeat: Creating instance...');
    
    // Create databeat instance
    try {
      // Access the Databeat property from the DatabeatTracker object
      // Looking at the UMD file, it exports the Databeat constructor
      const Constructor = DatabeatConstructor.Databeat || DatabeatConstructor;
      
      window.databeat = new Constructor(
        'https://databeat.sequence.app',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzZXEtZG9jcyIsImV4cCI6MTcxMjIxNDYzNn0.qWxTAvdiD1mWUZaEMFwp3_Xq-aFmMzzoIU8h4a8xG9c',
        { flushInterval: 1000, defaultEnabled: true }
      );
      console.log('Databeat: Instance created successfully');
    } catch (error) {
      console.error('Databeat: Error creating instance', error);
      return;
    }
    
    // Track initial pageview
    trackPageview();
    
    window.addEventListener('popstate', () => setTimeout(trackPageview, 300));
  }
  
  // Helper function to track pageviews
  function trackPageview() {
    if (!window.databeat) {
      console.error('Databeat: Failed to track pageview - databeat not initialized');
      return;
    }
    window.databeat.track({
      event: 'VIEW',
      source: location.pathname,
      props: { title: document.title, url: location.href, referrer: document.referrer }
    });
  }
})(); 