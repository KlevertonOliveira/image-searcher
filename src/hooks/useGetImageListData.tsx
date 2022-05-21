import { useEffect, useState } from 'react';
import { Image } from '../types/Image';

function useGetImageListData() {

  const [imageListData, setImageListData] = useState([] as Image[]);

  async function getImageListData() {

    const key = import.meta.env.VITE_APP_PIXABAY_API_KEY;
    const response = await fetch(`https://pixabay.com/api/?key=${key}&q=dog&image_type=photo`);
    const data = await response.json();

    const imageList: Image[] = data.hits.map((image: any) => ({
      id: image.id,
      url: image.largeImageURL,
      pageURL: image.pageURL,
      tags: image.tags,
      views: image.views,
      likes: image.likes,
      downloads: image.downloads,
      user_id: image.user_id,
      userImageURL: image.userImageURL
    }));

    setImageListData(imageList);
  }

  useEffect(() => {
    getImageListData();
  }, []);

  return { imageListData };
}

export default useGetImageListData;