import { useTranslation } from 'react-i18next';
import { ImageTypeOptions, imageTypeOptions } from '../../types/ImageTypeOptions';

type ImageTypeSelectorProps = {
  imageType: ImageTypeOptions;
  onChangeImageType: (imageType: ImageTypeOptions) => void;
};

function ImageTypeSelector({ imageType, onChangeImageType }: ImageTypeSelectorProps) {

  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
      <label htmlFor="imageType" className='selector-label'>{t('imageTypeSelector.typeCategory')}:</label>
      <select
        id='imageType'
        value={imageType}
        className='selector'
        onChange={(e) => onChangeImageType(e.target.value as ImageTypeOptions)}
      >
        {imageTypeOptions.map(option => <option key={option} value={option}>{t(`imageTypeSelector.${option}`)}</option>)}
      </select>
    </div>
  );
}

export default ImageTypeSelector;