import Image from 'next/image';
import PropTypes from 'prop-types';

const Empty = ({ title, message }) => {
  const hasMessage = message.length > 0;

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/images/empty.png" alt="Man looking into empty space"
        width={320}
        height={320}
        className="motion-safe:animate-pulse mb-10"
      />
      <strong className="block text-xl">
        {title}
      </strong>
      {hasMessage && (
        <p className="pt-3">{message}</p>
      )}
    </div>
  );
};

Empty.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Empty;
