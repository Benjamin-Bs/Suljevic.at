import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';  
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import AppServerModule from './src/main.server';
import { render } from '@netlify/angular-runtime/common-engine'
// const netlifyCommonEngine = await import('@netlify/angular-runtime/common-engine');
// const render = netlifyCommonEngine.render;


export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// For netlify
// * https://github.com/netlify/angular-runtime?tab=readme-ov-file
const commonEngine = new CommonEngine()

export async function netlifyCommonEngineHandler(request: Request, context: any): Promise<Response> {
  return await render(commonEngine)
}

run();
