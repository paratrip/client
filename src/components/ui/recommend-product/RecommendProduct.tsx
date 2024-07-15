import styles from './style.module.css';

type RecommendProductProps = {
  className?: string;
  name: string;
  price: string;
  description: string;
  hr?: boolean;
};

export default function RecommendProduct(props: RecommendProductProps) {
  const { className, name, price, description, hr = false } = props;

  return (
    <section className={`${className} ${styles['recommend-section']}`}>
      <header className={styles.section__header}>
        <strong>{name}</strong>
        <p>
          {price} <span>원</span>
        </p>
      </header>

      <article>
        <p>{description}</p>
      </article>

      {hr && <hr />}
    </section>
  );
}
