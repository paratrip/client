import { createPortal } from 'react-dom';
import styles from './communityFilterModal.module.css';
import Icon from '@components/ui/Icon';
import { useState, useEffect } from 'react';

type RegionResponseDto = {
  region: string;
};

type FilterModalProps = {
  closeHandler: () => void;
  data: RegionResponseDto[];
  onSelectLocation: (location: string) => void;
  onClearLocations: () => void;
  selectedLocations: string[];
};

export default function CommunityFilterModal(props: FilterModalProps) {
  const {
    closeHandler,
    data,
    onSelectLocation,
    onClearLocations,
    selectedLocations,
  } = props;

  const [isAllSelected, setIsAllSelected] = useState(true);

  useEffect(() => {
    setIsAllSelected(selectedLocations.length === 0);
  }, [selectedLocations]);

  const handleLocationSelect = (region: string) => {
    if (selectedLocations.length >= 3 && !selectedLocations.includes(region)) {
      alert('3개 이상 선택할 수 없습니다.');
      return;
    }
    onSelectLocation(region);
    setIsAllSelected(false);
  };

  const handleAllTagClick = () => {
    onClearLocations();
    setIsAllSelected(true);
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={closeHandler} />
      <main className={styles.modal}>
        <button className={styles.closeButton}>
          <Icon iconType='closeModal' onClick={closeHandler} />
        </button>

        <div className={styles.buttonBox}>
          <button
            className={`${styles.tagButton} ${
              isAllSelected ? styles.selected : ''
            }`}
            onClick={handleAllTagClick}
          >
            #전체
          </button>
          {data.map((item, index) => (
            <button
              key={index}
              className={`${styles.tagButton} ${
                selectedLocations.includes(item.region) ? styles.selected : ''
              }`}
              onClick={() => handleLocationSelect(item.region)}
            >
              #{item.region}
            </button>
          ))}
        </div>
      </main>
    </>,
    document.getElementById('modal')!
  );
}
