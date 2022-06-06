import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelmetSEO from '../components/HelmetSEO';
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
    return (
      <div className='grid min-h-screen place-items-center'>
        <Loading />
      </div>
    )
  }

  return (
    <AnimatedPage>
      <HelmetSEO
        title={`${t('pagesHead.imageInfoPageTitle')}${imageId}`}
        content={t('pagesHead.imageInfoPageDescription')}
      />
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex justify-center'>
          <div className='px-5 py-12 w-full flex flex-col gap-12 justify-evenly'>
            <section className='max-w-lg mx-auto bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
              {Object.keys(image).length === 0 ?
                <NoImageResult userHasTyped /> : <ImageDetails image={image} />
              }
            </section>
            <div className='mx-auto'>
              <Link
                className='navigation-button focus-link'
                to='/'
              >
                <ArrowLeftIcon className='w-5 h-5 mr-2' />
                <span>{t('navigationButtons.back')}</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default ImageInfo;