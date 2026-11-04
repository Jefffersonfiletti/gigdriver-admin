// Service worker mínimo: só existe para o Chrome aceitar instalar o painel.
// Não guarda nada em cache, então os dados sempre vêm do servidor.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
