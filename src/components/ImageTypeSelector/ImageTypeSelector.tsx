import { ImageTypeOptions, imageTypeOptions } from '../../types/ImageTypeOptions';
import { capitalizeWord } from '../../utils/capitalize';

type ImageTypeSelectorProps = {
  imageType: ImageTypeOptions;
  onChangeImageType: (imageType: ImageTypeOptions) => void;
};

function ImageTypeSelector({ imageType, onChangeImageType }: ImageTypeSelectorProps) {

  return (
    <div className='flex flex-col'>
      <label htmlFor="imageType" className='selector-label'>Type:</label>
      <select
        id='imageType'
        value={imageType}
        className='selector'
        onChange={(e) => onChangeImageType(e.target.value as ImageTypeOptions)}
      >
        {imageTypeOptions.map(option => <option key={option} value={option}>{capitalizeWord(option)}</option>)}
      </select>
    </div>
  );
}

export default ImageTypeSelector;