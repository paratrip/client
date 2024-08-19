import { Link } from 'react-router-dom';
import { LinkHTMLAttributes } from 'react';

import styles from './link-button.module.css';

type LinkButtonProps = {
  buttonStyle: 'border' | 'fill';
  to: string;
} & LinkHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton(props: LinkButtonProps) {
  const { buttonStyle, children, ...outer } = props;

  return (
    <Link className={styles[buttonStyle]} {...outer}>
      {children}
    </Link>
  );
}
