import AuthHeader from '@components/auth/common/auth-header';
import Button from '@components/ui/button';

import ListCard from '@components/ui/list-card';
import Container from '@components/ui/container';

import styles from './Location.module.css';
import { useGet } from '@hooks/useGet';
import { ResponseParagliding } from '@components/home/carousel/types';
import { useState } from 'react';
import RegionTags from '@components/home/carousel/region-tags';

export default function Location() {
  const [region, setRegion] = useState('');

  const { data } = useGet<ResponseParagliding[]>({
    queryKey: ['paragliding', region],
    url: `https://euics.co.kr/api/paragliding/list/region?regionCode=${region}`,
  });

  const regionHandler = (region: string) => {
    setRegion(region);
  };

  return (
    <>
      <AuthHeader title='' />
      <Container>
        <section className={styles.section}>
          <header>
            <h2>지역별 패러글라이딩 장소</h2>
          </header>

          <nav className={styles.location__filter}>
            <RegionTags onRegion={regionHandler} />
          </nav>

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
