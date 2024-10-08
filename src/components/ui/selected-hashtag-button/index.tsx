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
  const { tagName, tags = [], onToggleTag } = props;

  const selected = tags.find(tag => tag === tagName);

  const selectHandler = () => {
    onToggleTag(tagName);
  };

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
