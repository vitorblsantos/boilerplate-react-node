'use strict';

import 'dotenv/config';

import { json } from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const server = express();

server.disable('x-powered-by')

server.use(compression());
server.use(cors());
server.use(json());
server.use(routes);
server.listen(process.env.API_PORT || 5000);