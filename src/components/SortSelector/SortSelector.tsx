import { SortOptions, sortOptions } from '../../types/SortOptions';

type SortSelectorProps = {
  sortOption: SortOptions | 'none';
  onSortOptionChange: (sortOption: SortOptions) => void;
};

function SortSelector({ sortOption, onSortOptionChange }: SortSelectorProps) {

  return (
    <div className='flex flex-col'>
      <label htmlFor="orderBy" className='selector-label'>Order By:</label>
      <select
        id='orderBy'
        value={sortOption}
        onChange={(e) => onSortOptionChange(e.target.value as SortOptions)}
        className='selector'
      >
        <option value="none" disabled>Choose a category</option>
        {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default SortSelector;