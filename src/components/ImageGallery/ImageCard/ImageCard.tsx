import { ChevronRightIcon } from '@heroicons/react/outline';
import { Image } from '../../../types/Image';

type ImageCardProps = {
  image: Image;
};

function ImageCard({ image }: ImageCardProps) {
  return (
    <div className='rounded-lg w-full h-full'>
      <div className="rounded-lg shadow-lg bg-white relative h-full">
        <a href="#!">
          <img className="rounded-lg overflow-hidden" src={image.url} alt={image.tags} />
        </a>
        <div className='absolute bottom-0 right-0 text-white w-full p-3 bg-[rgba(0,0,0,0.7)] rounded flex justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>{image.tags}</p>
            <p className='text-xs'>By: {image.user}</p>
          </div>
          <button className='flex items-center hover:opacity-70 transition-opacity'>
            <span className='text-sm'>More</span>
            <ChevronRightIcon className='h-4 w-4' /></button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;