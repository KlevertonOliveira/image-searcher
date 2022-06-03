import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import ThemeSwitcher from '..';
import { ThemeProvider } from '../../../../contexts/ThemeContext';
import i18n from '../../../../i18n';

const MockedThemeSwitcher = () => (
  <ThemeProvider>
    <I18nextProvider i18n={i18n}>
      <ThemeSwitcher />
    </I18nextProvider>
  </ThemeProvider>
);

describe('LanguageDropdownMenu Component - Tests', () => {

  describe('Functionality Tests', () => {
    it('should render a theme switcher button', () => {
      const { getByRole } = render(<MockedThemeSwitcher />);
      const themeSwitcherElement = getByRole('button');

      expect(themeSwitcherElement).toBeInTheDocument();
    });

    it(`should toggle app's theme when theme switcher button is clicked`, async () => {
      const user = userEvent.setup();

      const { getByRole } = render(<MockedThemeSwitcher />);
      const themeSwitcherElement = getByRole('button');

      await user.click(themeSwitcherElement);
      expect(themeSwitcherElement.title).toBe('Switch to Light Mode');
    });
  })

  describe('Language Tests', () => { })
})