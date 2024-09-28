import { useState } from 'react';
import Button from '../button';
import styles from './selected-hashtag-button.module.css';

type SelectedHashtagButtonProps = {
  tagName: string;
  onToggleTag: (tag: string) => void;
  position: 'list' | 'modal';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SelectedHashtagButton(
  props: SelectedHashtagButtonProps
) {
  const { tagName, position = 'modal', onToggleTag } = props;

  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    setSelected(true);
    onToggleTag(tagName);
  };

  console.log(tagName, selected);

  return (
    <>
      <Button
        className={selected ? styles['selected-hashtag'] : styles['hashtag']}
        onClick={selectHandler}
      >
        #{tagName}
      </Button>
    </>
  );
}
