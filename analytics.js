// This file handles anonymous analytics loading
(function() {
    // Generate a simple analytics ID for GitHub Pages
    // This is a basic encryption that's just enough to prevent bots from scraping
    const getAnalyticsId = function() {
        // Use a simple encryption method specific to your site
        const encryptedParts = [
            'QkNNVFI0', // Part 1 (Base64 encoded)
            'RlpPTA==' // Part 2 (Base64 encoded)
        ];
        
        try {
            // Combine and decode the parts
            return 'G-' + atob(encryptedParts[0]) + atob(encryptedParts[1]);
        } catch (e) {
            console.error('Failed to generate analytics ID', e);
            return null;
        }
    };

    // Initialize Google Analytics
    const initAnalytics = function() {
        const analyticsId = getAnalyticsId();
        if (!analyticsId) return;
        
        // Google Analytics tag (gtag.js)
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', analyticsId);
        
        console.log('Analytics initialized');
    };

    // Load analytics
    initAnalytics();
})();
