import { LinkIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { Image } from '../../types/Image';

function ImageDetails({ image }: { image: Image; }) {

  const { t } = useTranslation();

  return (
    <article className='flex flex-col gap-8'>
      <div className='h-full w-full min-h-[10rem]'>
        <img
          src={image.imageURL}
          alt={image.tags}
          className='bg-white rounded-lg h-full w-full object-cover'
        />
      </div>
      <div className='m-2 flex h-full justify-center flex-col gap-3'>
        {Object.entries(image).map(([key, value]) => {
          if (key === 'id') return;

          if (key.endsWith('URL')) {
            return (
              <div key={key}>
                <span className='property-title flex items-center'>
                  {t(`imageDetails.${key}`)}:
                  <a
                    className='property-value focus-visible:focus-details'
                    href={value as string}
                    target='_blank'
                    title={`${t('imageDetails.visit')} ${t(`imageDetails.${key}`)}`}
                  >
                    <LinkIcon className='w-5 h-5' />
                  </a>
                </span>
              </div>
            );
          }

          return (
            <div key={key}>
              <span className='property-title'>{t(`imageDetails.${key}`)}: </span>
              <span className='property-value'>
                {typeof value === 'number' ?
                  (value.toLocaleString())
                  :
                  (key === 'type' ? t(`imageDetails.${value}`) : t(value))
                }
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default ImageDetails;