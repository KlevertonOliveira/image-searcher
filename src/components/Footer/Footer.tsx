import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className='p-5 bg-accent-light dark:bg-neutral-700 text-white flex flex-col items-center text-center'>
      <span className='font-bold text-lg'>© 2022 - Kleverton Oliveira</span>
      <span className='font-medium text-sm text-neutral-600 dark:text-neutral-400'>{t('allRightsReserved')}.</span>
    </footer>
  );
}

export default Footer;