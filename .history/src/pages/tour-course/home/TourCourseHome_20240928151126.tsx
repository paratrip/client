import { useGet } from '@hooks/useGet';
import { useMatch } from 'react-router-dom';
import { END_POINT } from '@utils/endpoint/endpoint';

import Header from '@components/layouts/Header';

import styles from './TourCourseHome.module.css';
import Container from '@components/ui/container';
import CourseSection from '@components/tour-course/section/course-section';
import { useState } from 'react';
import TourCourseList from '@components/tour-course/home/tour-course-list';

export type ResponseTourCourse = {
  courseId: number;
  paraglidingName: string;
  touristSpotName1: string;
  touristSpotName2: string;
  paraglidingRegion: string;
  touristSpotTags1: string[];
  touristSpotTags2: string[];
  paraglidingImageUrl: string;
  touristSpotImageUrl1: string;
  touristSpotImageUrl2: string;
};

export default function TourCourseHome() {
  const match = useMatch('/tour-course/:id');
  const region = match?.params.id;
  const [tags, setTags] = useState<string[]>([]);

  const { data, isLoading, isError, error } = useGet<ResponseTourCourse[]>({
    url: END_POINT + '/api/courses/list',
    queryKey: ['courses', String(region), ...tags],
  });
  // `?region=${region ? region : ''}&tags=${tags ? tags : ''}`,

  if (isLoading) return <div>...Loading</div>;
  if (isError && error) return <div>{error.message}</div>;

  const toggleTag = (tag: string) => {
    setTags(prevTags => {
      if (prevTags.includes(tag)) {
        return prevTags.filter(t => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  return (
    <>
      <Header type='main' />

      <Container>
        <h2 className={styles.h2}>
          패러글라이딩도 즐기고 <br />
          주변 광광지도 둘러보세요.
        </h2>

        <CourseSection
          tags={tags ?? []}
          onToggleTag={toggleTag}
          length={data?.length ?? 0}
        />

        <TourCourseList data={data ?? []} />
      </Container>
    </>
  );
}
