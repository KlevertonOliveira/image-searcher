import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { I18nextProvider } from 'react-i18next';
import Footer from '..';
import i18n from '../../../i18n';

const MockedFooter = () => (
  <I18nextProvider i18n={i18n}>
    <Footer />
  </I18nextProvider>
);

describe('Footer Component - Tests', () => {
  it('should render the text "© 2022 - Kleverton Oliveira"', () => {
    const { getByText } = render(<MockedFooter />);
    const expression = getByText(/© 2022 - Kleverton Oliveira/i);
    expect(expression).toBeInTheDocument();
  });

  it('should render the text "All rights reserved" if current language is English', () => {
    const { getByText } = render(<MockedFooter />);
    const translatedExpression = getByText(/All rights reserved./i);
    expect(translatedExpression).toBeInTheDocument();
  });

  it('should render "Todos os direitos reservados" if current language is Portuguese', () => {
    const { getByText } = render(<MockedFooter />);

    act(() => { i18n.changeLanguage('pt'); });
    const translatedExpression = getByText(/Todos os direitos reservados./i);
    expect(translatedExpression).toBeInTheDocument();
  });
});