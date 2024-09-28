import { useMatch } from 'react-router-dom';

import AuthHeader from '@components/auth/common/auth-header';
import DetailHeader from '@components/home/detail/detail-header';
import DetailContent from '@components/home/detail/detail-content';

// import styles from './Detail.module.css';
import GrayContainer from '@components/ui/gray-container';
import { useGet } from '@hooks/useGet';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';

import styles from './Detail.module.css';

type ResponseDetail = {
  name: string;
  description: string;
  imageUrl: string;
  tickets: string[];
  cost: string;
  pageUrl: string;
  parkingLot: boolean;
  stroller: boolean;
  creditCard: boolean;
  closedDays: string;
  openingHour: string;
  tellNumber: string;
  latitude: 0;
  longitude: 0;
  address: string;
};

export default function Detail() {
  const match = useMatch('/home/:id');
  const id = match?.params.id;

  const { data, isLoading, isError, error } = useGet<ResponseDetail>({
    url: END_POINT_API_PARAGLIDING + '/detail/' + id,
    queryKey: ['detail', `${id}`],
  });

  if (isLoading) return <div>...Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <AuthHeader />

      <img className={styles.detail__image} src={data?.imageUrl} />
      <GrayContainer>
        <DetailHeader
          to='/'
          name={data?.name as string}
          cost={data?.cost as string}
        />

        <DetailContent
          name={data?.name ?? ''}
          tickets={data?.tickets ?? []}
          pageUrl={data?.pageUrl ?? ''}
          parkingLot={data?.parkingLot ?? false}
          stroller={data?.stroller ?? false}
          creditCard={data?.creditCard ?? false}
          closedDays={data?.closedDays ?? ''}
          openingHour={data?.openingHour ?? ''}
          tellNumber={data?.tellNumber ?? ''}
          latitude={data?.latitude ?? 0}
          longitude={data?.longitude ?? 0}
          address={data?.address ?? ''}
        />
      </GrayContainer>
    </>
  );
}
