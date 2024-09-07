import { Link } from 'react-router-dom';

import chevron_right from '@assets/icons/chevron_right.svg';

import styles from './terms-item.module.css';

type TermsSection = {
  heading: string;
  to?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TermsSection(props: TermsSection) {
  const { heading, to, id, ...outer } = props;
  return (
    <li className={styles.li}>
      <div>
        <input type='checkbox' name={id} id='' {...outer} />
        <label htmlFor={id}>{heading}</label>
      </div>
      {to && (
        <Link to={to}>
          <img src={chevron_right} alt={heading + ' 상세 보기'} />
        </Link>
      )}
    </li>
  );
}
