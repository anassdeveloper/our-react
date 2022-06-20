import Card from "./Card"
const CardList = ({data}) => {
    const list = data.map((el, i) => {
        return <Card 
                 key={i}
                 id = {i}
                 name = {el.name}
                 url = {el.urls[0]}
                />
    })
    return(
      <div className="row">
        {list}
      </div>
    )
 }
 export default CardList;