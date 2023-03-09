
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
            <div className="graph">
                <div className="graph_main-view">
                    <div className="graph_bars-container">
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                        <div className="bar-container">
                        </div>
                    </div>
                    <div className="graph-x-axis">
                        <span> 22 </span>
                        <span> 23 </span>
                        <span> 24 </span>
                        <span> 25 </span>
                        <span> 26 </span>
                        <span> 27 </span>
                        <span> 28 </span>
                    </div>
                </div>
                <div className="graph-y-axis">
                        <span> 35 </span>
                        <span> 30 </span>
                        <span> 25 </span>
                        <span> 20 </span>
                        <span> 15 </span>
                        <span> 10 </span>
                        <span> 5 </span>
                    </div>
            </div>
        </div>
    )
}


export default ProductViews;