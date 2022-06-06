type NoImageResultFeedbackProps = {
  imgSrc: string;
  imgAlt: string;
  content: string;
};

function NoImageResultFeedback({ imgSrc, imgAlt, content }: NoImageResultFeedbackProps) {
  return (
    <div className='grid place-items-center'>
      <h1 className='text-center mb-8 text-2xl xs:text-3xl md:text-4xl md:mt-6 text-neutral-500 dark:text-white'>{content}</h1>
      <img src={imgSrc} alt={imgAlt} className='max-w-[25rem]' />
    </div>
  );
}

export default NoImageResultFeedback;