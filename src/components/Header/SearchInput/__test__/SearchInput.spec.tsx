import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { I18nextProvider } from 'react-i18next';
import SearchInput from '..';
import i18n from '../../../../i18n';

const mockedChangeSearchTerm = jest.fn();

const MockedSearchInput = () => (
  <I18nextProvider i18n={i18n}>
    <SearchInput onChangeSearchTerm={mockedChangeSearchTerm} />
  </I18nextProvider>
);

describe('Search Input Component', () => {

  describe('Funcionality Tests', () => {
    it('should render an empty input when page loads', () => {
      const { getByPlaceholderText } = render(<MockedSearchInput />);
      const inputElement = getByPlaceholderText(/search.../i) as HTMLInputElement;
      expect(inputElement.value).toBe("");
    });

    it('should not display clear button when input is empty', () => {
      const { getByPlaceholderText, queryByTestId } = render(<MockedSearchInput />);

      const inputElement = getByPlaceholderText(/search.../i) as HTMLInputElement;
      expect(inputElement.value).toBe("");

      const clearInputElement = queryByTestId(/clear/i);
      expect(clearInputElement).toBe(null);
    });

    it('should change input when user types', async () => {
      const user = userEvent.setup();

      const { getByPlaceholderText } = render(<MockedSearchInput />);
      const inputElement = getByPlaceholderText(/search.../i) as HTMLInputElement;
      const testingValue = 'Testing Value';

      await user.type(inputElement, testingValue);

      expect(inputElement.value).toEqual(testingValue);
    });

    it('should display the clear input button when input is not empty', async () => {
      const user = userEvent.setup();

      const { getByPlaceholderText, queryByTestId } = render(<MockedSearchInput />);

      const inputElement = getByPlaceholderText(/search.../i) as HTMLInputElement;
      const testingValue = 'Testing Value';

      await user.type(inputElement, testingValue);
      const clearInputElement = queryByTestId(/clear/i);

      expect(clearInputElement).not.toBe(null);
    });

    it('should clear the input when clear button is clicked', async () => {
      const user = userEvent.setup();

      const { getByPlaceholderText, queryByTestId } = render(<MockedSearchInput />);

      const inputElement = getByPlaceholderText(/search.../i) as HTMLInputElement;
      const testingValue = 'Testing Value';
      await user.type(inputElement, testingValue);

      const clearInputElement = queryByTestId(/clear/i);
      await user.click(clearInputElement!);

      expect(inputElement.value).toBe('');
    });
  });

  describe('Language Tests', () => {
    it("should render 'buscar...' at the input's placeholder when current language is Portuguese", () => {
      const { getByPlaceholderText } = render(<MockedSearchInput />);

      act(() => { i18n.changeLanguage('pt'); });

      const inputElement = getByPlaceholderText(/buscar.../i);
      expect(inputElement).toBeInTheDocument();
    });
  });

});