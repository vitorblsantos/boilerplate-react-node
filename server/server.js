'use strict';

import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

import routes from './routes';

const server = express();

server.disable('x-powered-by')

server.use(json());
server.use(cors());
server.use(routes);
server.listen(process.env.API_PORT || 5000);