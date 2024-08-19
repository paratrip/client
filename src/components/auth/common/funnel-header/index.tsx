import styles from './funnel-header.module.css';

type FunnelHeaderProps = {
  heading: string;
};

export default function FunnelHeader(props: FunnelHeaderProps) {
  const { heading } = props;

  return (
    <>
      <header className={styles.funnel__header}>
        <h3 className={styles.header__heading}>{heading}</h3>
      </header>
    </>
  );
}
