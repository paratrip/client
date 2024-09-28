import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RecoilRoot } from 'recoil';
import { useKakaoLoader } from '@hooks/useKaKaoLoader';

import { routes } from './routes/routes';
import { queryClient } from '@services/react-query';
import Modal from '@components/ui/Modal';

export default function App() {
  useKakaoLoader();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={routes} />
        <Modal />
      </RecoilRoot>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
