import { createBrowserRouter } from 'react-router';
import App from '@/layouts/AppLayout';

const router = createBrowserRouter([

  {
    path: '/',
    Component: App,
  },
]);
export default router;