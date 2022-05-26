import { useTranslation } from 'react-i18next';
import codeTypingImg from '../../assets/images/code-typing-animate.svg';
import noResultImg from '../../assets/images/empty.svg';
import NoImageResultFeedback from './NoImageResultFeedback';

type NoImageResultProps = {
  userHasTyped?: boolean;
};

function NoImageResult({ userHasTyped }: NoImageResultProps) {

  const { t } = useTranslation();

  return !userHasTyped ?
    (<NoImageResultFeedback
      imgSrc={codeTypingImg}
      imgAlt={t('codeTypingImgAlt')}
      content={t('startTyping')}
    />
    )
    :
    (<NoImageResultFeedback
      imgSrc={noResultImg}
      imgAlt={t('noResultImgAlt')}
      content={t('noResultsFound')}
    />
    );
}

export default NoImageResult;