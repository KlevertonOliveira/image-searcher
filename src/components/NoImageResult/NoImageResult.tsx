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
      imgAlt={t('noImageResult.codeTypingImgAlt')}
      content={t('noImageResult.startTyping')}
    />
    )
    :
    (<NoImageResultFeedback
      imgSrc={noResultImg}
      imgAlt={t('noImageResult.emptyResultsImgAlt')}
      content={t('noImageResult.emptyResults')}
    />
    );
}

export default NoImageResult;