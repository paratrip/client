import { useState } from 'react';
import Button from '../button';
import styles from './selected-hashtag-button.module.css';

type SelectedHashtagButtonProps = {
  tagName: string;
  onToggleTag: (tag: string) => void;
  position: 'list' | 'modal';
  tags: string[];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SelectedHashtagButton(
  props: SelectedHashtagButtonProps
) {
  const { tagName, tags, onToggleTag } = props;

  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    setSelected(true);
    onToggleTag(tagName);
  };

  console.log(tagName, selected);

  return (
    <>
      <Button
        className={tags ? styles['selected-hashtag'] : styles['hashtag']}
        onClick={selectHandler}
      >
        #{tagName}
      </Button>
    </>
  );
}
