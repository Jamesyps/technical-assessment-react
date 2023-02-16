import getConfig from 'next/config';
import nextConnect from 'next-connect';

import {RouteService} from '@/server/services/RouteService';

const handler = nextConnect();
const routeService = new RouteService();
const { serverRuntimeConfig } = getConfig();

// Using next-connect allows you to implement express-like middleware into API routes
// which makes it possible to extract middleware for re-use and to
// sanitise user input as in the example below.
handler.use((req, res, next) => {
  const queryParamKeys = Object.keys(req.query);

  const invalidParams = queryParamKeys.filter((key) => !serverRuntimeConfig.queryParamsAllowList.includes(key));

  if (invalidParams.length > 0) {
    res.status(422).end(`Invalid filters in query string: [${invalidParams.join(', ')}]`);
    return;
  }

  next();
});

handler.get(async (req, res) => {
  const routes = await routeService.fetchRoutes(
    req.query
  );

  res.status(200).json(routes);
});

export default handler;
