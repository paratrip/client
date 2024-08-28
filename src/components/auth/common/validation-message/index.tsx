import styles from './validation-message.module.css';

type ValidationMessageProps = {
  type: 'error' | 'success' | 'info';
  message: string;
};

export default function ValidationMessage(props: ValidationMessageProps) {
  const { type, message } = props;

  return (
    <section className={styles.container}>
      <p className={styles[type]}>{message}</p>
    </section>
  );
}
