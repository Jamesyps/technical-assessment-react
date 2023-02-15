import classNames from 'classnames';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from '@/components/Container';

const PageBanner = ({ backgroundImage, backgroundOverlay = false, title, children }) => {
  return (
    <div className={
      classNames('relative', {
        'after:block after:absolute after:z-[1] after:inset-0 after:bg-black after:opacity-50 after:content-[\'*\']': backgroundOverlay
      })
    }>
      <Container className="relative py-24 z-10">
        <h1 className="text-5xl text-white">{title}</h1>
        {children}
      </Container>
      <Image src={backgroundImage} alt="" width={1280} height={320} className="absolute inset-0 w-full h-full object-cover z-0" priority />
    </div>
  );
};

PageBanner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  backgroundOverlay: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageBanner;
