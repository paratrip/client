import { createPortal } from 'react-dom';

import type { ResponseRecommended } from '@components/home/recommend-location/recommend-list';
import type { TOUR_THEME } from '@utils';

import { useGet } from '@hooks/useGet';
import { transformRegion } from '@utils/helpers/transfrom-region';

import { END_POINT } from '@utils/endpoint/endpoint';

import SelectedHashtagButton from '@components/ui/selected-hashtag-button';

import styles from './filter-modal.module.css';

type Region = {
  region: string;
};

type FilterModalProps = {
  closeHandler: () => void;
  onToggleTag?: (tag: string) => void;
};

export default function FilterModal(props: FilterModalProps) {
  const { closeHandler, onToggleTag } = props;

  const { data: recommendeds } = useGet<ResponseRecommended[]>({
    url: END_POINT + '/api/tags',
    queryKey: ['recommendeds', 'tags'],
  });

  const { data: regions } = useGet<Region[]>({
    url: END_POINT + '/api/paragliding/region',
    queryKey: ['course', 'region'],
  });

  return createPortal(
    <>
      <div className={styles.overlay} onClick={closeHandler} />
      <main className={styles.modal}>
        <ul className={styles.regions}>
          {recommendeds?.map((region, index) => (
            <SelectedHashtagButton
              key={'rt' + index}
              tagName={region.rlteTatsNm ?? ''}
              onToggleTag={onToggleTag}
              position='modal'
            />
          ))}
        </ul>

        <div className={styles.br} />

        <ul className={styles.regions}>
          {regions?.map((region, index) => (
            <SelectedHashtagButton
              key={'rt' + index}
              tagName={transformRegion(region.region) ?? ''}
              onToggleTag={onToggleTag}
              position='modal'
            />
          ))}
        </ul>
      </main>
    </>,
    document.getElementById('modal')!
  );
}
