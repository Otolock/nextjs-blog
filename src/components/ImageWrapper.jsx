import Image from 'next/image';

function ImageWrapper({ src, alt, width, height }) {
  return <Image src={src} alt={alt} />;
}

export default ImageWrapper;
