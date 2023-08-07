import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/Favorites-context";

function MainNavigation() {
  const favoritesCTX = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add new Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
            My Favorites
            <pan className={classes.badge}>{favoritesCTX.totalFavorites}</pan>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;