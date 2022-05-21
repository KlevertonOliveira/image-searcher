import { ChevronRightIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { Image } from '../../../types/Image';

type ImageCardProps = {
  image: Image;
};

function ImageCard({ image }: ImageCardProps) {

  const { t } = useTranslation();

  return (
    <div className='rounded-lg w-full h-[250px]'>
      <div className="rounded-lg shadow-lg bg-white relative h-full">
        <a href="#!">
          <img className="rounded-lg overflow-hidden h-full w-full object-cover" src={image.url} alt={image.tags} />
        </a>
        <div className='absolute bottom-0 right-0 text-white w-full p-3 bg-[rgba(0,0,0,0.7)] rounded flex justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>
              {image.tags.substring(0, 30)}
              {image.tags.length > 30 && '...'}
            </p>
            <p className='text-xs'>{t('by')}: {image.user}</p>
          </div>
          <button className='flex items-center hover:opacity-70 transition-opacity'>
            <span className='text-sm'>{t('more')}</span>
            <ChevronRightIcon className='h-4 w-4' /></button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;