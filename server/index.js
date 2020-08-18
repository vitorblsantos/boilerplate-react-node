'use strict';

import 'dotenv/config';

import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { join } from 'path';
import { json } from 'body-parser';

import routes from './routes';

const server = express();

server.disable('x-powered-by')
server.use(express.static(join(__dirname, 'view')));
server.use(compression());
server.use(cors());
server.use(json());
server.use(routes);
server.listen(process.env.PORT || 5000);