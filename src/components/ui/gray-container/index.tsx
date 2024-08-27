import { ReactNode, memo } from 'react';

import style from './style.module.css';

type GrayContainerProps = { children?: ReactNode; className?: string };

const GrayContainer = memo(function GrayContainer(props: GrayContainerProps) {
  const { className, children } = props;

  return (
    <section className={`${className} ${style['gray-container']}`}>
      {children}
    </section>
  );
});

export default GrayContainer;
