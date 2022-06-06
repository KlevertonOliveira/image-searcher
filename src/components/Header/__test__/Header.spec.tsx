import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';
import i18n from '../../../i18n';

const MockedHeader = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </I18nextProvider>
);

describe('Header Component - Language Tests', () => {
  it('should render the logo text "searcher" if current language is English', () => {
    const { getByText } = render(<MockedHeader />);
    const expression = getByText(/searcher/i);
    expect(expression).toBeInTheDocument();
  });

  it('should render the logo text "buscador" if current language is Portuguese', () => {
    const { getByText } = render(<MockedHeader />);
    act(() => { i18n.changeLanguage('pt'); });
    const translatedExpression = getByText(/buscador/i);
    expect(translatedExpression).toBeInTheDocument();
  });
});