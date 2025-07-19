import { createBrowserRouter } from 'react-router';
import HomePage from '@/pages/home/index';
import DestinationLayout from '@/layouts/destinationLayout';

const router = createBrowserRouter([

  {
    path: '/',
    Component: HomePage,
  },
  {
    path: "/destination/:id",
    Component: DestinationLayout,
  },
]);
export default router;