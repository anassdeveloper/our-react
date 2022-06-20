import Item from "./Item";
function List(){
    return(
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto text-center">
               <Item text="Home" c="active" link = "/"/>
               <Item text="Services" c= {null} link = "/services" />
               <Item text="About" c = {null} link = "/about"/>
               <Item text="Contact" c ={null} link = "/contact" />
            </ul>
        </div>
    )
}
export default List;