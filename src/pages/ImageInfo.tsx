import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageDetails from '../components/ImageDetails';
import Loading from '../components/Loading';
import NoImageResult from '../components/NoImageResult';
import { getSingleImageData } from '../services/getApiData';
import { Image } from '../types/Image';

function ImageInfo() {

  const [image, setImage] = useState({} as Image);
  const [isLoading, setIsLoading] = useState(false);

  let { imageId } = useParams();
  const { t } = useTranslation();

  async function retrieveImage() {
    setIsLoading(true);

    try {
      const imageData = await getSingleImageData(imageId!);
      setImage(imageData);
    }
    catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    imageId && retrieveImage();
  }, [imageId]);

  if (isLoading) {
    return <div className='grid min-h-screen place-items-center'><Loading /></div>;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex justify-center'>
        <div className='max-w-6xl px-4 py-8 w-full flex flex-col gap-8'>
          <section className='order-2 max-w-lg mx-auto lg:max-w-full lg:mx-0 bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
            {Object.keys(image).length === 0 ?
              <NoImageResult userHasTyped /> : <ImageDetails image={image} />
            }
          </section>
          <section className='order-1 w-fit'>
            <Link to='/'>
              <span className='directional-button w-fit'>
                <ArrowLeftIcon className='w-5 h-5 mr-2' />
                {t('back')}
              </span>
            </Link>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default ImageInfo;