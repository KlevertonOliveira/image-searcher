import { useEffect, useState } from 'react';
import AmountSelector from './components/AmountSelector';
import EmptySearch from './components/EmptySearch';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ImageTypeSelector from './components/ImageTypeSelector';
import SortSelector from './components/SortSelector';
import { getImageListData } from './services/getImageListData';
import { AmountOptions } from './types/AmountOptions';
import { Image } from './types/Image';
import { ImageTypeOptions } from './types/ImageTypeOptions';
import { SortOptions } from './types/SortOptions';

function App() {

  const [imageList, setImageList] = useState([] as Image[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [amount, setAmount] = useState<AmountOptions>(15);
  const [sortOption, setSortOption] = useState<SortOptions | 'none'>('none');
  const [imageType, setImageType] = useState<ImageTypeOptions>('all');

  async function retrieveImageList(searchTerm: string, amount: AmountOptions, imageType: ImageTypeOptions) {
    try {
      const newImageList = await getImageListData(searchTerm, amount, imageType);
      setImageList(newImageList);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(searchTerm);
    if (!searchTerm) {
      setImageList([]);
      return;
    }

    retrieveImageList(searchTerm, amount, imageType);

  }, [searchTerm, amount, imageType]);

  return (
    <>
      <Header onChangeSearchTerm={setSearchTerm} />
      <main className="min-h-screen bg-[#E7ECEF] dark:bg-neutral-800">
        <section className='max-w-6xl mx-auto px-6 py-8'>
          <div className='bg-white dark:bg-neutral-700 py-8 px-4 rounded-lg'>
            {imageList.length === 0 ?
              (searchTerm ? <EmptySearch userHasTyped /> : <EmptySearch />)
              :
              (<>
                <div className="flex flex-wrap gap-4 sm:gap-8 justify-between overflow-hidden items-center">
                  <h2 className=' dark:text-white text-2xl font-semibold py-2 text-[#6096BA]'>Searching for: <span className='text-neutral-500 dark:text-neutral-400'>{searchTerm}</span></h2>
                  <div className='flex gap-4 flex-wrap'>
                    <AmountSelector amount={amount} onChangeAmount={setAmount} />
                    <SortSelector sortOption={sortOption} onSortOptionChange={setSortOption} />
                    <ImageTypeSelector imageType={imageType} onChangeImageType={setImageType} />
                  </div>
                </div>
                <ImageGallery imageList={imageList} />
              </>
              )
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
