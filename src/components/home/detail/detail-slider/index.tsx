import { useState } from 'react';

import next from '@assets/icons/next.svg';
import prev from '@assets/icons/prev.svg';

import SliderButton from '../silder-card-arrow';
import SliderCard from '../slider-card';

import styles from './slider.module.css';

const data = [
  {
    id: '+1',
    img: 'https://images.unsplash.com/photo-1723920785346-d29bed210134?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '+2',
    img: 'https://images.unsplash.com/photo-1723987513819-bafdc1b3dc13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '+3',
    img: 'https://images.unsplash.com/photo-1720491468850-368cd24ce9d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const SLIDER_ITEM = 600;

export default function DetailSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const [previousClientX, setPreviousClientX] = useState<number>(0);
  const [currentClientX, setCurrentClientX] = useState<number>(0);

  function dragStartHandler(e: React.DragEvent<HTMLUListElement>) {
    setPreviousClientX(e.clientX);
  }

  function dragHandler(e: React.DragEvent<HTMLUListElement>) {
    if (e.clientX < previousClientX && currentIndex < data.length) {
      setCurrentIndex(prev => prev + 1);
      setCurrentClientX(currentIndex * SLIDER_ITEM);
    }
    if (e.clientX > previousClientX && currentIndex > 1) {
      setCurrentIndex(prev => prev - 1);
      setCurrentClientX(prev => prev - SLIDER_ITEM);
    }
  }

  function prevHandler() {
    if (currentIndex > 1) {
      setCurrentIndex(prev => prev - 1);
      setCurrentClientX(prev => prev - SLIDER_ITEM);
    }
  }

  function nextHandler() {
    if (currentIndex < data.length) {
      setCurrentIndex(prev => prev + 1);
      setCurrentClientX(prev => prev + SLIDER_ITEM);
    }
  }

  return (
    <div className={styles['slider-container']}>
      <ul
        className={styles.container__item}
        style={{
          transform: `translateX(${-currentClientX}px) `,
        }}
        draggable='true'
        onDragStart={dragStartHandler}
        onDragEnter={dragHandler}
      >
        {data.map(item => (
          <SliderCard key={item.id} {...item} />
        ))}
      </ul>
      <nav className={styles.container__nav}>
        <SliderButton src={prev} onClick={prevHandler} />
        <p>
          {currentIndex} / {data.length}
        </p>
        <SliderButton src={next} onClick={nextHandler} />
      </nav>
    </div>
  );
}
