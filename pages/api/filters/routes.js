import nextConnect from 'next-connect';

import {RouteService} from '@/server/services/RouteService';

const handler = nextConnect();
const routeService = new RouteService();

handler.get(async (req, res) => {
  res.status(200).json(
    await routeService.fetchFilters()
  );
});

export default handler;
