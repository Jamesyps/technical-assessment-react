import 'server-only';
import axios from 'axios';

/**
 * Wrapper function for retrieving data from Next.js API routes.
 *
 * @param {String} endpoint
 * @param {Object} params
 * @returns {Promise<*[]|any>}
 */
export const fetchApiData = async (endpoint, params) => {
  try {
    const { data } = await axios.get(endpoint, {
      baseURL: 'http://0.0.0.0:3000/api',
      params
    });

    return data;
  } catch (error) {
    // Simple output here - otherwise use system such as Sentry to record exceptions properly.
    console.error(error);

    return [];
  }
}
