import { useTranslation } from 'react-i18next';
import codeTypingImg from '../../assets/images/code-typing-animate.svg';
import noResultImg from '../../assets/images/empty.svg';
import EmptySearchFeedback from './EmptySearchFeedback';


type EmptySearchProps = {
  userHasTyped?: boolean;
};

function EmptySearch({ userHasTyped }: EmptySearchProps) {

  const { t } = useTranslation();

  return !userHasTyped ?
    (<EmptySearchFeedback
      imgSrc={codeTypingImg}
      imgAlt={t('codeTypingImgAlt')}
      content={t('startTyping')}
    />
    )
    :
    (<EmptySearchFeedback
      imgSrc={noResultImg}
      imgAlt={t('noResultImgAlt')}
      content={t('noResultsFound')}
    />
    );
}

export default EmptySearch;