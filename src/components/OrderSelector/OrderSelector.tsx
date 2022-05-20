import { OrderOptions, orderOptions } from '../../types/OrderOptions';
import { capitalizeWord } from '../../utils/capitalize';

type SortSelectorProps = {
  orderOption: OrderOptions;
  onOrderOptionChange: (orderOption: OrderOptions) => void;
};

function OrderSelector({ orderOption, onOrderOptionChange }: SortSelectorProps) {

  return (
    <div className='flex flex-col'>
      <label htmlFor="orderBy" className='selector-label'>Order By:</label>
      <select
        id='orderBy'
        value={orderOption}
        onChange={(e) => onOrderOptionChange(e.target.value as OrderOptions)}
        className='selector'
      >
        {orderOptions.map(option => <option key={option} value={option}>{capitalizeWord(option)}</option>)}
      </select>
    </div>
  );
}

export default OrderSelector;