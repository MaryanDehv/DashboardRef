import Graph from "./product_view_components/Graph";

const ProductViews = ({filter: Filter}) => {
    return(
        <div className="product_views round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <h3> Product Views</h3>
                </div>
                <Filter />
            </div> 
            <Graph />
        </div>
    )
}


export default ProductViews;