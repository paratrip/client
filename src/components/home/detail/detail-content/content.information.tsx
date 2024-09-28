import styles from './content.module.css';

type DetailInformationProps = {
  address: string; // 주소
  tellNumber: string; //전화번호
  openingHour: string; // 운영 시간
  closedDays: string; //휴무일
};

export default function DetailInformation(props: DetailInformationProps) {
  const { address, tellNumber, openingHour, closedDays } = props;

  return (
    <section className={styles.information}>
      <ul className={styles.information__list}>
        <li className={styles.list__item}>
          <p>업체주소</p> <span>{address}</span>
        </li>
        <li className={styles.list__item}>
          <p>업체주소</p> <span>{tellNumber}</span>
        </li>
        <li className={styles.list__item}>
          <p>업체주소</p> <span>{openingHour}</span>
        </li>
        <li className={styles.list__item}>
          <p>업체주소</p> <span>{closedDays}</span>
        </li>
      </ul>
    </section>
  );
}
