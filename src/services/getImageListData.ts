import { Image } from '../types/Image';
import { ImageTypeOptions } from '../types/ImageTypeOptions';
import { OrderOptions } from '../types/OrderOptions';

export async function getImageListData(searchTerm: string, orderBy:OrderOptions, imageType:ImageTypeOptions, page: number) {

  const key = import.meta.env.VITE_APP_PIXABAY_API_KEY;
  const response = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${searchTerm}&order=${orderBy}&image_type=${imageType}&page=${page}&per_page=30`
  );
  const data = await response.json();

  const total:number = data.total;
  console.log(data.totalHits);
  

  const imageList: Image[] = data.hits.map((image: any) => ({
    id: image.id,
    url: image.largeImageURL,
    type: image.type,
    pageURL: image.pageURL,
    tags: image.tags,
    views: image.views,
    likes: image.likes,
    downloads: image.downloads,
    user: image.user,
    userImageURL: image.userImageURL
  }));

  return {total, imageList};
}