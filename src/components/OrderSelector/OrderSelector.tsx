import { useTranslation } from 'react-i18next';
import { OrderOptions, orderOptions } from '../../types/OrderOptions';

type SortSelectorProps = {
  orderOption: OrderOptions;
  onOrderOptionChange: (orderOption: OrderOptions) => void;
};

function OrderSelector({ orderOption, onOrderOptionChange }: SortSelectorProps) {

  const { t } = useTranslation();

  return (
    <div className='flex flex-col'>
      <label htmlFor="orderBy" className='selector-label'>{t('orderBy')}:</label>
      <select
        id='orderBy'
        value={orderOption}
        onChange={(e) => onOrderOptionChange(e.target.value as OrderOptions)}
        className='selector'
      >
        {orderOptions.map(option => <option key={option} value={option}>{t(option)}</option>)}
      </select>
    </div>
  );
}

export default OrderSelector;