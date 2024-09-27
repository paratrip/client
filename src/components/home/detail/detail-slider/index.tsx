// import { useState } from 'react';

// import next from '@assets/icons/next.svg';
// import prev from '@assets/icons/prev.svg';

// import SliderButton from '../silder-card-arrow';
// import SliderCard from '../slider-card';

// import styles from './slider.module.css';

// type DetailSliderProps = {
//   imageUrl: string;
// };

// const SLIDER_ITEM = 600;

// export default function DetailSlider() {
//   const [currentIndex, setCurrentIndex] = useState<number>(1);

//   const [previousClientX, setPreviousClientX] = useState<number>(0);
//   const [currentClientX, setCurrentClientX] = useState<number>(0);

//   function dragStartHandler(e: React.DragEvent<HTMLUListElement>) {
//     setPreviousClientX(e.clientX);
//   }

//   function dragHandler(e: React.DragEvent<HTMLUListElement>) {
//     if (e.clientX < previousClientX && currentIndex < data.length) {
//       setCurrentIndex(prev => prev + 1);
//       setCurrentClientX(currentIndex * SLIDER_ITEM);
//     }
//     if (e.clientX > previousClientX && currentIndex > 1) {
//       setCurrentIndex(prev => prev - 1);
//       setCurrentClientX(prev => prev - SLIDER_ITEM);
//     }
//   }

//   function prevHandler() {
//     if (currentIndex > 1) {
//       setCurrentIndex(prev => prev - 1);
//       setCurrentClientX(prev => prev - SLIDER_ITEM);
//     }
//   }

//   function nextHandler() {
//     if (currentIndex < data.length) {
//       setCurrentIndex(prev => prev + 1);
//       setCurrentClientX(prev => prev + SLIDER_ITEM);
//     }
//   }

//   return (
//     <div className={styles['slider-container']}>
//       <ul
//         className={styles.container__item}
//         style={{
//           transform: `translateX(${-currentClientX}px) `,
//         }}
//         draggable='true'
//         onDragStart={dragStartHandler}
//         onDragEnter={dragHandler}
//       >
//         {data.map(item => (
//           <SliderCard key={item.id} {...item} />
//         ))}
//       </ul>
//       <nav className={styles.container__nav}>
//         <SliderButton src={prev} onClick={prevHandler} />
//         <p>
//           {currentIndex} / {data.length}
//         </p>
//         <SliderButton src={next} onClick={nextHandler} />
//       </nav>
//     </div>
//   );
// }
