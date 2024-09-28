import { useState } from 'react';
import Button from '../button';
import styles from './selected-hashtag-button.module.css';

type SelectedHashtagButtonProps = {
  tagName: string;
  onToggleTag: (tag: string) => void | ;
  position: 'list' | 'modal';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SelectedHashtagButton(
  props: SelectedHashtagButtonProps
) {
  const { tagName, position = 'modal', onToggleTag } = props;

  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    setSelected(prev => !prev);
    onToggleTag(tagName);
  };

  console.log(tagName, selected);

  return (
    <>
      {position === 'modal' ? (
        <Button
          className={selected ? styles['selected-hashtag'] : styles['hashtag']}
          onClick={selectHandler}
        >
          #{tagName}
        </Button>
      ) : (
        <Button className={styles['selected-hashtag']} onClick={selectHandler}>
          #{tagName}
        </Button>
      )}
    </>
  );
}
