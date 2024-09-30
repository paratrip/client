import styles from './slider-card.module.css';

type SliderCardProps = {
  id: string;
  img: string;
};

export default function SliderCard(props: SliderCardProps) {
  const { img } = props;

  return (
    <li className={styles.li}>
      <img src={img} />
    </li>
  );
}
