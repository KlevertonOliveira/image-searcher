import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageInfo from '../components/ImageInfo';
import { getSingleImageData } from '../services/getApiData';
import { Image } from '../types/Image';

function ImageDetails() {

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
    return <h1>Loading...</h1>;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 flex justify-center'>
        <div className='max-w-6xl px-4 py-10 w-full flex flex-col gap-10'>
          <section className='order-2 max-w-md mx-auto lg:max-w-full lg:mx-0 bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
            <ImageInfo image={image} />
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

export default ImageDetails;