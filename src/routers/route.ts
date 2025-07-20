import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/home/index";
import DestinationLayout from "@/layouts/destinationLayout";
import BookmarkPage from './../pages/bookmark/index';
import BookingPage from './../pages/booking/index';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/destination/:id",
    Component: DestinationLayout,
  },
  {
  path: "/bookmark",
  Component: BookmarkPage,
},
{
  path: "/booking",
  Component: BookingPage,
}
]);
export default router;
