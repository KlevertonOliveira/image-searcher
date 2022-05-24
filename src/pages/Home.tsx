import { ArrowUpIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as Scroll } from 'react-scroll';
import EmptySearch from '../components/EmptySearch';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchInput from '../components/Header/SearchInput';
import ImageGallery from '../components/ImageGallery';
import ImageTypeSelector from '../components/ImageTypeSelector';
import OrderSelector from '../components/OrderSelector';
import Pagination from '../components/Pagination';
import { getImageListData } from '../services/getApiData';
import { Image } from '../types/Image';
import { ImageTypeOptions } from '../types/ImageTypeOptions';
import { OrderOptions } from '../types/OrderOptions';
import { replaceInputWhitespacesWithPlusSign } from '../utils/replaceInputWhitespacesWithPlusSign';

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
      const searchContent = replaceInputWhitespacesWithPlusSign(searchTerm);
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
    <>
      <Header>
        <SearchInput onChangeSearchTerm={setSearchTerm} />
      </Header>
      <main>
        <section className='max-w-6xl mx-auto px-6 py-16'>
          <div className='bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
            {imageList.length === 0 ?
              (searchTerm ? <EmptySearch userHasTyped /> : <EmptySearch />)
              :
              (<>
                <div className="flex flex-wrap gap-4 sm:gap-8 justify-between overflow-hidden items-center">
                  <h2 className=' text-2xl font-semibold py-2 text-[#6096BA] dark:text-neutral-400 lg:text-3xl gap-2 flex flex-wrap'>
                    {t('searchingFor')}:
                    <span className='text-neutral-500 dark:text-white'>
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
            }
          </div>
          {totalImages !== 0 && searchTerm &&
            <div className='mt-20 flex justify-center'>
              <Scroll to='top' smooth duration={1000}>
                <span className='directional-button'>
                  {t('backToTop')} <ArrowUpIcon className='w-5 h-5 ml-2' />
                </span>
              </Scroll>
            </div>
          }
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
