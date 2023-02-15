import nextConnect from 'next-connect';

import {RouteService} from '@/server/services/RouteService';

const handler = nextConnect();
const routeService = new RouteService();

handler.get(async (req, res) => {
  const routes = await routeService.fetchRoutes(
    req.query
  );

  res.status(200).json(routes);
});

export default handler;
