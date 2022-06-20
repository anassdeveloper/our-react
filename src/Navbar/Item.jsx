import { Link } from "react-router-dom";

function Item({text, link, c}){
    return(
        <li className={"navbar-nav item-h" + " " + c}>
            <Link to={link} className="nav-link">{text}</Link>
        </li>
    )
}
export default Item;