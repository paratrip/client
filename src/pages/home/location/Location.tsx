import AuthHeader from '@components/auth/common/auth-header';

import ListCard from '@components/ui/list-card';
import Container from '@components/ui/container';

import styles from './Location.module.css';
import { useFetchQuery } from '@hooks/useFetchQuery';
import { END_POINT_PARAGLIDING } from '@utils/endpoint/endpoint';
import CustomSlider from '@components/ui/CustomSlider';
import { Link } from 'react-router-dom';

export default function Location() {
  const { data: region } = useFetchQuery({
    url: END_POINT_PARAGLIDING + '/region',
    queryKey: ['region'],
  });

  const { data: paragliding, isLoading } = useFetchQuery({
    url: END_POINT_PARAGLIDING + '/paragliding/all',
    queryKey: ['paragliding'],
  });

  return (
    <>
      <AuthHeader title='' />
      <Container>
        <section className={styles.section}>
          <header>
            <h2>지역별 패러글라이딩 장소</h2>
          </header>

          <nav className={styles.location__filter}>
            <CustomSlider
              data={region}
              sliderType='homeTag'
              filter={false}
              moreBtn={false}
              moreBtnPath=''
            />
          </nav>

          <ul>
            {isLoading ? (
              <>Loading...</>
            ) : (
              <>
                {paragliding.map(
                  (item: {
                    id: number;
                    imageUrl: string;
                    name: string;
                    heart: number;
                    cost: number;
                    region: string;
                  }) => (
                    <Link to={`/home/${item.id}`} key={'l' + item.id}>
                      <ListCard
                        src={item.imageUrl}
                        title={item.name}
                        likeCount={item.heart}
                        price={item.cost}
                        location={item.region}
                      />
                    </Link>
                  )
                )}
              </>
            )}
          </ul>
        </section>
      </Container>
    </>
  );
}
