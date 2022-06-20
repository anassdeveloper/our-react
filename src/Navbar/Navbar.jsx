import Logo from "./Logo";
import List from "./List";
import "./navbar.scss";

function Navbar(){
    return(
        <div className="navbar-expand-lg navbar py-3">
            <div className="container">
                 <Logo />
                 <button className="navbar-toggler" type="button"
                 data-bs-toggle="collapse"
                 data-bs-target="#nav">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                 <List />
            </div>
        </div>
    )
}
export default Navbar;