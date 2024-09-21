import ActionButton from '@components/ui/action-button';
import SelectedHashtagButton from '@components/ui/selected-hashtag-button';

import slider from '@assets/icons/slider.svg';

import styles from './course-section.module.css';
import { useState } from 'react';
import FilterModal from '../filter-modal/filter-modal';

// type CourseSectionProps = {
//   resultsCount: number;
// };

export default function CourseSection() {
  const [isModal, setIsModal] = useState<boolean>(false);

  // ! hashtag 목록
  // const [selectedList, setSelectedList] = useState();

  function modalHandler() {
    setIsModal(prev => !prev);
  }

  return (
    <>
      {isModal && <FilterModal closeHandler={modalHandler} />}
      <section className={styles.course__section}>
        <article className={styles.section__article}>
          <ActionButton src={slider} alt='필터 버튼' onClick={modalHandler} />

          <SelectedHashtagButton tagName='TEST' />
          <SelectedHashtagButton tagName='TEST' />
        </article>

        <article className={styles.section__count}>
          총<strong>24</strong>건
        </article>
      </section>
    </>
  );
}
