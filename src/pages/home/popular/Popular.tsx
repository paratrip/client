import AuthHeader from '@components/auth/common/auth-header';
import Container from '@components/ui/container';
import ListCard from '@components/ui/list-card';

import styles from './Popular.module.css';

export default function Popular() {
  return (
    <>
      <AuthHeader title='' />
      <Container>
        <section className={styles.section}>
          <header>
            <h2>패글과 함께하는 추천 여행 지역</h2>
          </header>

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
