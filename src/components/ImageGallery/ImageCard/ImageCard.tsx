import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Image } from '../../../types/Image';

type ImageCardProps = {
  image: Image;
};

function ImageCard({ image }: ImageCardProps) {

  const { t } = useTranslation();

  return (
    <Link className='w-full h-[250px] rounded-lg focus-link overflow-hidden relative'
      to={`/images/${image.id}`}
    >
      <div className='shadow-lg bg-white h-full rounded-lg'>
        <div className='h-full overflow-hidden'>
          <img
            className="h-full w-full object-cover rounded-lg object-top hover:scale-110 transition-transform duration-500"
            src={image.imageURL}
            alt={image.tags} />
        </div>

        {/* Overlay */}
        <div className='absolute bottom-0 right-0 text-white w-full p-3 bg-[rgba(0,0,0,0.7)] flex justify-between items-center overflow-hidden z-10 pointer-events-none'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm font-medium'>
              {image.tags.substring(0, 40)}
              {image.tags.length > 40 && '...'}
            </p>
            <p className='text-xs font-medium'>{t('imageOverlay.by')}: {image.author}</p>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default ImageCard;