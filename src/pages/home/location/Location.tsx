import AuthHeader from '@components/auth/common/auth-header';
import Button from '@components/ui/button';

import ListCard from '@components/ui/list-card';
import Container from '@components/ui/container';

import styles from './Location.module.css';

export default function Location() {
  return (
    <>
      <AuthHeader title='' />
      <Container>
        <section className={styles.section}>
          <header>
            <h2>지역별 패러글라이딩 장소</h2>
          </header>

          <nav className={styles.location__filter}>
            <Button>전체</Button>
            <Button>전체</Button>
            <Button>전체</Button>
          </nav>

          <ul>
            <ListCard
              src='https://images.unsplash.com/photo-1724250973924-0209b9a64c13?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='테스트'
              likeCount={12}
              price={77000}
              location='서울'
            />
            <ListCard
              src='https://images.unsplash.com/photo-1724250973924-0209b9a64c13?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='테스트'
              likeCount={12}
              price={77000}
              location='서울'
            />
          </ul>
        </section>
      </Container>
    </>
  );
}
