const Product = ({status , product , earning , category}) => {
    return(
        <div className="product"> 
            <div className="details">
                <div className="image round"></div>
                <p className="title"> 
                    <span className="name"> {product}</span> 
                    <span className="category"> {category} </span>
                </p>
            </div> 
            <div className="data">
                <p className="earning"> {earning} </p>
                <span className={`product-state ${status}`}> {status} </span>
            </div>
        </div>
    )
}

export default Product;