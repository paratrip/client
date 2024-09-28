import { useState } from 'react';

import ActionButton from '@components/ui/action-button';
import SelectedHashtagButton from '@components/ui/selected-hashtag-button';

import slider from '@assets/icons/slider.svg';

import FilterModal from '../filter-modal/filter-modal';

import styles from './course-section.module.css';
import SelectedButton from './selected-button';

// type CourseSectionProps = {
//   resultsCount: number;
// };

type CourseSectionProps = {
  tags: string[];
  onToggleTag: (tag: string) => void;
  length: number;
};

export default function CourseSection(props: CourseSectionProps) {
  const { tags, onToggleTag, length } = props;

  const [isModal, setIsModal] = useState<boolean>(false);

  function modalHandler() {
    setIsModal(prev => !prev);
  }

  return (
    <>
      {isModal && (
        <FilterModal
          tags={tags}
          closeHandler={modalHandler}
          onToggleTag={onToggleTag}
        />
      )}
      <section className={styles.course__section}>
        <article className={styles.section__article}>
          <ActionButton src={slider} alt='필터 버튼' onClick={modalHandler} />

          {tags.map((tag, index) => (
            <SelectedButton
              key={'s' + index}
              tagName={tag}
              onToggle={onToggleTag}
              position='list'
            />
          ))}
        </article>

        <article className={styles.section__count}>
          총<strong>{length}</strong>건
        </article>
      </section>
    </>
  );
}
