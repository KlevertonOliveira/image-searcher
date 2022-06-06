import { ArrowUpIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';
import AnimatedPage from '../components/AnimatedPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchInput from '../components/Header/SearchInput';
import HelmetSEO from '../components/HelmetSEO';
import ImageGallery from '../components/ImageGallery';
import ImageTypeSelector from '../components/ImageTypeSelector';
import Loading from '../components/Loading';
import NoImageResult from '../components/NoImageResult';
import OrderSelector from '../components/OrderSelector';
import Pagination from '../components/Pagination';
import { getImageListData } from '../services/getApiData';
import { Image } from '../types/Image';
import { ImageTypeOptions } from '../types/ImageTypeOptions';
import { OrderOptions } from '../types/OrderOptions';
import { replaceWhitespaceWithPlusSign } from '../utils/replaceWhitespaceWithPlusSign';

function Home() {

  const [imageList, setImageList] = useState([] as Image[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState<OrderOptions>('popular');
  const [imageType, setImageType] = useState<ImageTypeOptions>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const { t } = useTranslation();

  async function retrieveImageList() {
    setIsFetching(true);

    try {
      const searchContent = replaceWhitespaceWithPlusSign(searchTerm);
      const { total, imageList } = await getImageListData(searchContent, orderBy, imageType, currentPage);
      setTotalImages(total);
      setImageList(imageList);
    }
    catch (error) {
      console.log(error);
      setTotalImages(0);
      setImageList([]);
    }

    setIsFetching(false);
  }

  useEffect(() => {
    if (isFetching) return;
    setCurrentPage(1);
    searchTerm ? retrieveImageList() : setImageList([]);
  }, [searchTerm, orderBy, imageType]);

  useEffect(() => {
    if (isFetching) return;
    searchTerm ? retrieveImageList() : setImageList([]);
  }, [currentPage]);

  return (
    <AnimatedPage>
      <HelmetSEO
        title={t('pagesHead.homepageTitle')}
        content={t('pagesHead.homepageDescription')}
      />

      <div className='flex flex-col min-h-screen'>
        <Header>
          <SearchInput onChangeSearchTerm={setSearchTerm} />
        </Header>
        <main className='flex-1'>
          <section className='max-w-6xl mx-auto px-4 py-12'>
            <div className='bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
              {isFetching ?
                (<Loading />)
                :
                (imageList.length === 0 ?
                  (searchTerm ? <NoImageResult userHasTyped /> : <NoImageResult />)
                  :
                  (<>
                    <div className="flex flex-wrap gap-4 sm:gap-8 justify-between overflow-hidden items-center">
                      <h2 className=' text-3xl font-semibold py-2 text-neutral-500 dark:text-white lg:text-3xl gap-2 flex flex-wrap'>
                        {t('homepage.searchingFor')}:
                        <span className='text-accent-light dark:text-focus-dark'>
                          {searchTerm}
                        </span>
                      </h2>
                      <div className='flex gap-4 flex-wrap p-2'>
                        <OrderSelector orderOption={orderBy} onOrderOptionChange={setOrderBy} />
                        <ImageTypeSelector imageType={imageType} onChangeImageType={setImageType} />
                      </div>
                    </div>
                    <ImageGallery imageList={imageList} />
                    <Pagination
                      currentPage={currentPage}
                      onChangePage={setCurrentPage}
                      totalImages={totalImages}
                    />
                  </>
                  )
                )
              }
            </div>
            {totalImages !== 0 && searchTerm &&
              <div className='mt-12 flex justify-center'>
                <Scroll to='top' smooth duration={1000}>
                  <button className='navigation-button focus-visible:focus-details'>
                    <ArrowUpIcon className='w-5 h-5 mr-2' />
                    <span>{t('navigationButtons.backToTop')}</span>
                  </button>
                </Scroll>
              </div>
            }
          </section>
        </main>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Home;
