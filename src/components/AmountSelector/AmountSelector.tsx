import { AmountOptions, amountOptions } from '../../types/AmountOptions';

type AmountSelectorProps = {
  amount: AmountOptions;
  onChangeAmount: (amount: AmountOptions) => void;
};

function AmountSelector({ amount, onChangeAmount }: AmountSelectorProps) {

  return (
    <div className='flex flex-col'>
      <label htmlFor="amount" className='selector-label'>Amount:</label>
      <select
        id='amount'
        value={amount}
        className='selector'
        onChange={(e) => onChangeAmount(Number(e.target.value) as AmountOptions)}
      >
        {amountOptions.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default AmountSelector;