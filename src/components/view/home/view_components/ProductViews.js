
const ProductViews = ({filter: Filter}) => {
    return(
        <div className="product_views round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <p> Product Views</p>
                </div>
                <Filter />
            </div> 
        </div>
    )
}


export default ProductViews;