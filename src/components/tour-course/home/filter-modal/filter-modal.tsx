import { createPortal } from 'react-dom';
import styles from './filter-modal.module.css';
import Icon from '@components/ui/Icon';

type RegionResponseDto = {
  region: string;
};

type FilterModalProps = {
  closeHandler: () => void;
  data: RegionResponseDto[];
  onSelectLocation: (location: string) => void;
  onClearLocations: () => void; // 새로운 prop 추가
  selectedLocations: string[];
};

export default function FilterModal(props: FilterModalProps) {
  const {
    closeHandler,
    data,
    onSelectLocation,
    onClearLocations,
    selectedLocations,
  } = props;

  const handleLocationSelect = (region: string) => {
    if (selectedLocations.length >= 3 && !selectedLocations.includes(region)) {
      alert('3개 이상 선택할 수 없습니다.');
      return;
    }
    onSelectLocation(region);
  };

  const handleAllTagClick = () => {
    onClearLocations(); // 모든 선택된 지역을 비우는 함수 호출
  };

  return createPortal(
    <>
      <div className={styles.overlay} onClick={closeHandler} />
      <main className={styles.modal}>
        <button className={styles.closeButton}>
          <Icon iconType='closeModal' onClick={closeHandler} />
        </button>

        <div className={styles.buttonBox}>
          <button className={styles.AlltagButton} onClick={handleAllTagClick}>
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
