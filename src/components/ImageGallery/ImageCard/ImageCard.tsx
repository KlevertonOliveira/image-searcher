import { ChevronRightIcon } from '@heroicons/react/outline';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from '../../../types/Image';

type ImageCardProps = {
  image: Image;
};

function ImageCard({ image }: ImageCardProps) {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='w-full h-[250px]'>
      <div className="shadow-lg bg-white relative h-full">
        <Link
          className='focus:outline-none focus-visible:outline-4 focus-visible:outline-focus-light dark:focus-visible:outline-focus-dark'
          to={`/images/${image.id}`}
        >
          <img
            className="overflow-hidden h-full w-full object-cover object-top"
            src={image.imageURL}
            alt={image.tags} />
        </Link>
        <div className='absolute bottom-0 right-0 text-white w-full p-3 bg-[rgba(0,0,0,0.7)] flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm font-medium'>
              {image.tags.substring(0, 30)}
              {image.tags.length > 30 && '...'}
            </p>
            <p className='text-xs font-medium'>{t('by')}: {image.author}</p>
          </div>
          <button
            className='flex items-center rounded-md h-fit py-1 hover:opacity-70 transition-opacity text-sm font-medium focus-visible:focus-details'
            onClick={() => navigate(`/images/${image.id}`)}
          >
            {t('more')}
            <ChevronRightIcon className='h-4 w-4 mt-0.5' /></button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;