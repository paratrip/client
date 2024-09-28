import TourCourseDetail from '@pages/tour-course/detail/TourCourseDetail';
import TourCourseHome from '@pages/tour-course/home/TourCourseHome';

export const TOUR_COURSE_ROUTES = [
  {
    path: 'tour-course/:id?',
    element: <TourCourseHome />,
  },
  {
    path: 'course/:id',
    element: <TourCourseDetail />,
  },
];
