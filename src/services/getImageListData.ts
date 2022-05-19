import { AmountOptions } from '../types/AmountOptions';
import { Image } from '../types/Image';
import { ImageTypeOptions } from '../types/ImageTypeOptions';

export async function getImageListData(searchTerm: string, amount:AmountOptions, imageType:ImageTypeOptions) {

  const key = import.meta.env.VITE_APP_PIXABAY_API_KEY;
  const response = await fetch(
    `https://pixabay.com/api/?key=${key}&q=${searchTerm}&image_type=${imageType}&per_page=${amount}`
  );
  const data = await response.json();

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

  return imageList;
}