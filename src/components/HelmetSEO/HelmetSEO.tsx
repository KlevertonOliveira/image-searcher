import { Helmet } from 'react-helmet-async';

type HelmetSEOProps = {
  title: string;
  content: string;
};

function HelmetSEO({ title, content }: HelmetSEOProps) {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel="shortcut icon" href="/src/assets/images/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
}
export default HelmetSEO;