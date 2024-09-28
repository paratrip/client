import link from '@assets/icons/ic_round-link.svg';

import { splitTicket } from './utils';

import styles from './content.module.css';

type ContentTicketProps = {
  ticket: string[];
  pageUrl: string;
};

export default function ContentTicket(props: ContentTicketProps) {
  const { ticket, pageUrl } = props;

  return (
    <>
      <header className={styles.tickets__header}>
        <div className={styles.header__information}>
          <h3>이용권</h3>
          <img src={link} alt='링크' />
          <a href={pageUrl}>{pageUrl}</a>
        </div>

        <p>상품 결제는 홈페이지를 이용해주세요!</p>
      </header>

      <ul className={styles.tickets}>
        {ticket.map((item, index) => {
          const [course, cost] = splitTicket(item);

          return (
            <li className={styles.tickets__item} key={'t' + index}>
              <span>{course}</span>
              <span>{cost}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
