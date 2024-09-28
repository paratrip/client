import AuthHeader from '@components/auth/common/auth-header';
import Container from '@components/ui/container';
import ListCard from '@components/ui/list-card';

import styles from './Popular.module.css';
import { useGet } from '@hooks/useGet';
import { ResponseParagliding } from '@components/home/carousel/types';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';

export default function Popular() {
  const { data } = useGet<ResponseParagliding[]>({
    url: 'https://euics.co.kr/api/paragliding/list/sorted-by-likes',
    queryKey: ['sorted-by-likes'],
  });

  return (
    <>
      <AuthHeader title='' />
      <Container>
        <section className={styles.section}>
          <header>
            <h2>패글과 함께하는 추천 여행 지역</h2>
          </header>

          <ul>
            {data?.map((item, index) => (
              <ListCard
                key={'l' + index}
                src={item.imageUrl}
                title={item.name}
                likeCount={item.heart}
                price={item.cost}
                location={item.region}
              />
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
