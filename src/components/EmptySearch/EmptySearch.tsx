import codeTypingImg from '../../assets/code-typing-animate.svg';
import noResultImg from '../../assets/empty.svg';
import EmptySearchFeedback from './EmptySearchFeedback';


type EmptySearchProps = {
  userHasTyped?: boolean;
};

function EmptySearch({ userHasTyped }: EmptySearchProps) {
  return !userHasTyped ?
    (<EmptySearchFeedback
      imgSrc={codeTypingImg}
      imgAlt={"Hands typing code into computer's keyboard"}
      content='Start typing to begin your search!'
    />
    )
    :
    (<EmptySearchFeedback
      imgSrc={noResultImg}
      imgAlt={"Illustration of a person standing next to an empty box and shelf!"}
      content='No Results Found :('
    />
    );
}

export default EmptySearch;