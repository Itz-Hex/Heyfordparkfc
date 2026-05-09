import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { TeamsPage } from "./pages/TeamsPage";
import { TeamPage } from "./pages/TeamPage";
import { NewsPage } from "./pages/NewsPage";
import { NewsArticlePage } from "./pages/NewsArticlePage";
import { JoinPage } from "./pages/JoinPage";
import { LocationsPage } from "./pages/LocationsPage";
import { ClubInfoPage } from "./pages/ClubInfoPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutPage },
      { path: "teams", Component: TeamsPage },
      { path: "teams/:slug", Component: TeamPage },
      { path: "news", Component: NewsPage },
      { path: "news/:slug", Component: NewsArticlePage },
      { path: "join", Component: JoinPage },
      { path: "locations", Component: LocationsPage },
      { path: "club-info", Component: ClubInfoPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
