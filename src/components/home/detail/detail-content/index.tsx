import ContentInformation from './content.information';
import ContentTicket from './content.ticket';
import ContentMap from './content.map';

import styles from './content.module.css';

type DetailContentProps = {
  name: string;
  tickets: string[];
  pageUrl: string;
  parkingLot: boolean;
  stroller: boolean;
  creditCard: boolean;
  closedDays: string;
  openingHour: string;
  tellNumber: string;
  latitude: number;
  longitude: number;
  address: string;
};

export default function DetailContent(props: DetailContentProps) {
  const {
    name,
    tickets,
    pageUrl,
    // parkingLot,
    // stroller,
    // creditCard,
    closedDays,
    openingHour,
    tellNumber,
    latitude,
    longitude,
    address,
  } = props;

  return (
    <main className={styles.main}>
      <header className={styles.main__header}>
        <h3>상품상세</h3>
      </header>

      <DetailContent.ContentTicket ticket={tickets} pageUrl={pageUrl} />

      <div className={styles.section__header}>
        <h3>상품상세</h3>
      </div>

      <DetailContent.ContentInformation
        address={address}
        tellNumber={tellNumber}
        openingHour={openingHour}
        closedDays={closedDays}
      />

      <DetailContent.ContentMap
        name={name}
        latitude={latitude ?? 0}
        longitude={longitude ?? 0}
      />
    </main>
  );
}

DetailContent.ContentTicket = ContentTicket;
DetailContent.ContentInformation = ContentInformation;
DetailContent.ContentMap = ContentMap;
