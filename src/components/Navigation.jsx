import { NavLink} from "react-router-dom";
import css from "./components-css/Navigation.module.css"
export default function Navigation(){
    return(
        <header className={css.header}>
            <nav>
                <ul className={css.list}>
                    <li>
                    <NavLink className={({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link} to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive }) => isActive ? `${css.link} ${css.active}` : css.link} to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}