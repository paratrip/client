import styles from './style.module.css';

type ContainerProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return <main className={styles.container}>{children}</main>;
}
