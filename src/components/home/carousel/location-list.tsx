import type { ResponseParagliding } from './types';

import { useGet } from '@hooks/useGet';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';
import CardCarousel from './card.carousel';

export default function LocationListCarousel() {
  const { data, isLoading, isError, error } = useGet<ResponseParagliding[]>({
    queryKey: ['paragliding'],
    url: END_POINT_API_PARAGLIDING + '/paragliding/all',
  });

  return (
    <CardCarousel
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}
