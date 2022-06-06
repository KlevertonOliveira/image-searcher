import axios from 'axios';
import { Image } from '../types/Image';
import { ImageTypeOptions } from '../types/ImageTypeOptions';
import { OrderOptions } from '../types/OrderOptions';

const key = process.env.VITE_APP_PIXABAY_API_KEY;
const URL = `https://pixabay.com/api/?key=${key}`

export async function getImageListData(
  searchTerm: string,
  orderBy: OrderOptions,
  imageType: ImageTypeOptions,
  page: number
) {

  const { data } = await axios.get(
    `${URL}&q=${searchTerm}&order=${orderBy}&image_type=${imageType}&page=${page}&per_page=18`
  );  

  const total:number = data.total;

  const imageList: Image[] = data.hits.map((image: any) => ({
    id: image.id,
    author: image.user,
    tags: image.tags,
    type: image.type,
    views: image.views,
    likes: image.likes,
    downloads: image.downloads,
    imageURL: image.webformatURL,
    pageURL: image.pageURL,
  }));

  return {total, imageList};
}

export async function getSingleImageData(id:string){

  const { data } = await axios.get(`${URL}&id=${id}`);

  const imageData: Image[] = data.hits.map((image: any) => ({
    id: image.id,
    author: image.user,
    tags: image.tags,
    type: image.type,
    views: image.views,
    likes: image.likes,
    downloads: image.downloads,
    imageURL: image.webformatURL,
    pageURL: image.pageURL,
  }));

  return imageData[0];
}