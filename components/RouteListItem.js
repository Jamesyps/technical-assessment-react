import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Tag from '@/components/Tag';

const RouteListItem = ({ id, title, image, summary, distance, vehicle }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[240px]">
        <Image src={image} alt={`Preview image of ${title}`} width={240} height={180} className="block w-full lg:w-[240px] max-w-none" />
      </div>
      <div className="pt-4 lg:pt-0 lg:pl-6">
        <div>
          <dl className="flex text-sm space-x-6">
            <div className="flex space-x-1">
              <dt className="font-medium">Miles</dt>
              <dd className="tabular-nums">{distance.miles}</dd>
            </div>
            <div className="flex space-x-1">
              <dt className="font-medium">Kilometers</dt>
              <dd className="tabular-nums">{Math.round(distance.kilometers)}</dd>
            </div>
          </dl>
        </div>
        <Link href={`/routes/${encodeURIComponent(id)}`} className="block mb-3 text-2xl font-bold hover:text-yellow-600 hover:underline underline-offset-4">
          {title}
        </Link>
        <p className="leading-relaxed text-sm">
          {summary}
        </p>
        <div className="space-y-3 space-x-3">
          <Tag label="manufacturer" value={vehicle.manufacturer} />
          <Tag label="model" value={vehicle.model} variant="red" />
          <Tag label="type" value={vehicle.type} variant="green" />
        </div>
      </div>
    </div>
  );
};

RouteListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  distance: PropTypes.shape({
    miles: PropTypes.number.isRequired,
    kilometers: PropTypes.number.isRequired,
  }),
  vehicle: PropTypes.shape({
    type: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }),
  date: PropTypes.string
};

export default RouteListItem;
