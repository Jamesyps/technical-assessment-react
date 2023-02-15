import PageBanner from '@/components/PageBanner';
import {fetchApiData} from '@/server/helpers';
import RouteListItem from '@/components/RouteListItem';
import Container from '@/components/Container';
import Filters from '@/components/Filters';
import Empty from '@/components/Empty';
import Pager from '@/components/Pager';

const getRoutes = async (params) => fetchApiData('routes', params);
const getRouteFilters = async () => fetchApiData('filters/routes');

const RoutePage = async ({ searchParams }) => {
  const routeData = getRoutes(searchParams);
  const filterData = getRouteFilters();

  // Enable concurrent loading: https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  const [routes, filters] = await Promise.all([ routeData, filterData ]);
  const hasRoutes = routes.length > 0;

  return (
    <>
      <PageBanner
        backgroundImage="/images/road-distance.jpg"
        backgroundOverlay={true}
        title="All Routes"
      />
      <section className="py-20">
        <Container className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h2 className="block mb-10 border-b border-gray-100 pb-5 text-3xl">
              Listing Routes
            </h2>
            {hasRoutes && (
              <>
                <ul className="mb-10 space-y-8">
                  {routes.map((route) => (
                    <li key={['route', route.id]}>
                      <RouteListItem
                        id={route.id}
                        title={route.title}
                        summary={route.summary}
                        image={route.image}
                        vehicle={route.vehicle}
                        distance={route.distance}
                      />
                    </li>
                  ))}
                </ul>
                {routes.length >= 10 && (
                  // If there are less than 10 we can assume a 'filtered' list and simulate partial results.
                  <Pager />
                )}
              </>
            )}
            {!hasRoutes && (
              <Empty
                title="No Results"
                message="Sorry, there are no routes matching those criteria."
              />
            )}
          </div>
          <div className="md:border-l md: border-gray-100 col-span-1 md:pl-6">
            <h3 className="block mb-10 border-b border-gray-100 pb-5 text-3xl">
              Filter Routes
            </h3>
            <Filters {...filters} values={searchParams} />
          </div>
        </Container>
      </section>
    </>
  )
}

export default RoutePage;
