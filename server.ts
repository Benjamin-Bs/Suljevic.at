import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';

// Die Express-App, die als Serverless-Funktion verwendet wird
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  // Initialisiere den CommonEngine
  const commonEngine = new CommonEngine();

  // Setze die View-Engine auf HTML
  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Beispiel für die API-Endpunkte in Express
  // server.get('/api/**', (req, res) => { });

  // Statische Dateien aus dem /browser-Verzeichnis bereitstellen
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // Alle Routen werden durch CommonEngine verarbeitet
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    // Rendern der SSR-Seite mit CommonEngine
    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))  // HTML an den Client zurücksenden
      .catch((err) => next(err));      // Fehler an die nächste Middleware weitergeben
  });

  return server;
}

// Die Server-Funktion starten
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Starte den Express-Server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
