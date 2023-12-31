import {} from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups.jsx";
import NewMeetupsPage from "./pages/NewMeetups.jsx";
import Favorites from "./pages/Favorites.jsx";
import { FavoritesContextProvider } from "./store/Favorites-context.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllMeetUpsPage />,
      },
      {
        path: "/new-meetups",
        element: <NewMeetupsPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesContextProvider>
    <RouterProvider router={router} />
  </FavoritesContextProvider>
);
