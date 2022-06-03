import { ArrowLeftIcon } from '@heroicons/react/solid';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

export function NotFound() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{t('pagesHead.notFoundPageTitle')}</title>
        <meta name='description' content={t('pagesHead.notFoundPageDescription')} />
        <link rel="shortcut icon" href="/src/assets/images/favicon.ico" type="image/x-icon" />
      </Helmet>

      <div className='min-h-screen flex flex-col' data-testid='404'>
        <Header />
        <main className='flex-1 grid items-center xs:justify-items-center'>
          <div className='mx-5 flex flex-col gap-1 xs:flex-row xs:gap-6 lg:mx-0'>

            <span className='text-accent-light dark:text-neutral-400 font-bold text-5xl md:text-6xl'>404</span>

            <div>
              <div className='xs:border-l-[3px] border-slate-400 dark:border-neutral-500 xs:pl-6'>
                <h1 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white tracking-wide'>{t('notFoundPage.title')}</h1>
                <p className='mt-3 text-sm md:text-base font-light text-neutral-700 dark:text-white tracking-wider'>{t('notFoundPage.description')}</p>
              </div>
              <button
                className='mt-3 xs:mt-8 xs:ml-6 navigation-button focus-visible:focus-details'
                onClick={() => navigate('/')}
              >
                <ArrowLeftIcon className='w-5 h-5 mr-2' />
                <span>{t('navigationButtons.backToHome')}</span>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default NotFound;