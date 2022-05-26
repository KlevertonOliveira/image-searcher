import { LinkIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { Image } from '../../types/Image';

function ImageInfo({ image }: { image: Image; }) {

  const { t } = useTranslation();

  return (
    <div className='flex flex-wrap gap-8'>
      <div className='max-w-lg max-h-96'>
        <img
          src={image.imageURL}
          alt={image.tags}
          className='bg-white rounded-lg h-full w-full object-cover object-top'
        />
      </div>
      <div className='m-2 flex h-full justify-center flex-col gap-3'>
        {Object.entries(image).map(([key, value]) => {
          if (key === 'id') return;

          if (key.endsWith('URL')) {
            return (
              <div key={key}>
                <span className='property-title flex items-center'>
                  {t(key)}:
                  <a className='property-value' href={value as string} target='_blank'>
                    <LinkIcon className='w-5 h-5' />
                  </a>
                </span>
              </div>
            );
          }

          return (
            <div key={key}>
              <span className='property-title'>{t(key)}: </span>
              <span className='property-value'>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default ImageInfo;