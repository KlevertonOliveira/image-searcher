import { ChevronRightIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Image } from '../../../types/Image';

type ImageCardProps = {
  image: Image;
};

function ImageCard({ image }: ImageCardProps) {

  const { t } = useTranslation();

  return (
    <div className='w-full h-[250px]'>
      <div className="shadow-lg bg-white relative h-full rounded-md">
        <Link
          className='focus-link'
          to={`/images/${image.id}`}
        >
          <div className='h-full overflow-hidden'>
            <img
              className="overflow-hidden h-full w-full object-cover object-top hover:scale-110 transition-transform duration-500"
              src={image.imageURL}
              alt={image.tags} />
          </div>
        </Link>

        {/* Overlay */}
        <div className='absolute bottom-0 right-0 text-white w-full p-3 bg-[rgba(0,0,0,0.7)] flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm font-medium'>
              {image.tags.substring(0, 30)}
              {image.tags.length > 30 && '...'}
            </p>
            <p className='text-xs font-medium'>{t('imageOverlay.by')}: {image.author}</p>
          </div>
          <Link
            className='focus-link flex items-center rounded-sm hover:opacity-70 transition-opacity'
            to={`/images/${image.id}`}
          >
            <span className='text-sm font-medium'>
              {t('imageOverlay.more')}
            </span>
            <ChevronRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;