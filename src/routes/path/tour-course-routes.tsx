import { lazy } from 'react';

const TourCourseHome = lazy(
  () => import('@pages/tour-course/home/TourCourseHome')
);
const TourCourseDetail = lazy(
  () => import('@pages/tour-course/detail/TourCourseDetail')
);

export const TOUR_COURSE_ROUTES = [
  {
    path: 'tour-course',
    element: <TourCourseHome />,
  },
  {
    path: 'tour-course/detail/:id',
    element: <TourCourseDetail />,
  },
];
