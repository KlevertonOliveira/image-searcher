import { Image } from '../../types/Image';
import ImageCard from './ImageCard';

type ImageGalleryProps = {
  imageList: Image[];
};

function ImageGallery({ imageList }: ImageGalleryProps) {

  return (
    <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
      {imageList.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageGallery;