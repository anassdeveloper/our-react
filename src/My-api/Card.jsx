const Card = ({id, name, url}) => {
    return(
        <div className="col-4">
         <div className="card shadow-sm  my-2 py-1 px-1 text-center"  key={id}>
            <h2>{name}</h2>
            <img src={url} alt="" width="100%" height="210" />
         </div>
        </div>
    )
}
export default Card;