import Button from '../button';
import styles from './selected-hashtag-button.module.css';

type SelectedHashtagButtonProps = {
  tagName: string;
};

export default function SelectedHashtagButton(
  props: SelectedHashtagButtonProps
) {
  const { tagName } = props;

  return <Button className={styles['selected-hashtag']}>#{tagName}</Button>;
}
