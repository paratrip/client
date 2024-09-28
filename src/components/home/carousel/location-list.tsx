import type { ResponseParagliding } from './types';

import { useGet } from '@hooks/useGet';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';
import CardCarousel from './card.carousel';

export default function LocationListCarousel({ data }) {
  return <CardCarousel data={data} />;
}
