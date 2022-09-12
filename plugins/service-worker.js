self.addEventListener('install', event => console.log('ServiceWorker installed'));

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }