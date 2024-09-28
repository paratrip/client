import styles from './selected-button.module.css';

type FilterButtonProps = {
  position: string;
  tagName: string;
  onToggle: (tag: string) => void;
};

export default function SelectedButton(props: FilterButtonProps) {
  const { tagName, onToggle } = props;

  return (
    <button className={styles.hashtag} onClick={() => onToggle(tagName)}>
      {tagName}
    </button>
  );
}
