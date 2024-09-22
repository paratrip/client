import Header from '@components/layouts/Header';

import styles from './TourCourseHome.module.css';
import Container from '@components/ui/container';
import CourseSection from '@components/tour-course/home/section/course-section';
import CourseCard from '@components/tour-course/home/card/course-card';

export default function TourCourseHome() {
  return (
    <>
      <Header type='main' />

      <Container>
        <h2 className={styles.h2}>
          패러글라이딩도 즐기고 <br />
          주변 광광지도 둘러보세요.
        </h2>

        {/*  TODO  CourseSection  Props 타입 */}
        <CourseSection />
        <CourseCard
          href='/tour-course/detail/1'
          image='https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
          title='가족끼리 즐기는 패러글라이딩 코스'
          location='서울'
          hashtags={[{ tag: '태그1', href: '' }]}
          locations={[{ tag: '태그1', href: '' }]}
        />
        <CourseCard
          href='/tour-course/detail/2'
          image='https://plus.unsplash.com/premium_photo-1695302441138-f68978135eff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
          title='가족끼리 즐기는 패러글라이딩 코스'
          location='서울'
          hashtags={[{ tag: '태그1', href: '' }]}
          locations={[{ tag: '태그1', href: '' }]}
        />
      </Container>
    </>
  );
}
