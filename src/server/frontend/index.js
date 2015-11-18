import compression from 'compression';
import device from 'express-device';
import esteMiddleware from '../lib/esteMiddleware';
import express from 'express';
import favicon from 'serve-favicon';
import render from './render';
import config from '../config';

const path = require('path');

const app = express();

app.use(esteMiddleware());
app.use(compression());

const assetsDir = path.join(config.basePath, 'assets');
app.use('/img', express.static(path.join(assetsDir, 'img'), {maxAge: '200d'}));

app.use(favicon('assets/img/favicon.ico'));

// Serve the static assets. We can cache them as they include hashes.
app.use('/assets/img', express.static('../assets/img', {maxAge: '200d'}));
app.use('/_assets', express.static('build', {maxAge: '200d'}));

// Intl.
app.use('/node_modules/intl/dist', express.static('node_modules/intl/dist'));
app.use('/node_modules/intl/locale-data', express.static('node_modules/intl/locale-data'));

app.use(device.capture());
app.get('*', render);

app.on('mount', () => {
  console.log('App is available at %s', app.mountpath);
});

export default app;
