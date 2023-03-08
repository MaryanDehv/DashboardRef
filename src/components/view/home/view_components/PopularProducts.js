const PopularProducts = () => {
    return(
        <div className="popular_products round display-card"> 
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <p> Popular Product </p>
                </div>
            </div> 

            <div className="display-card-product-list">
                <div className="display-card-product-list-inner">
                    <div className="display-card-product-list-heading">
                        <p> Products </p>
                        <p> Earning</p>
                    </div>
                    <div className="display-card-products">
                        <div className="product"> 
                            <div className="details">
                                <div className="image round"></div>
                                <p className="title"> <span className="name"> Crypter - NFT </span> <span className="category"> UI Kit </span></p>
                            </div> 
                            <div className="data">
                                <p className="earning"> $2,453.80 </p>
                                <span className="product-state active"> Active </span>
                            </div>
                        </div>
                        <div className="product"> 
                            <div className="details">
                                <div className="image round"></div>
                                <p className="title"> <span className="name"> Crypter - NFT </span> <span className="category"> UI Kit </span></p>
                            </div> 
                            <div className="data">
                                <p className="earning"> $2,453.80 </p>
                                <span className="product-state deactive"> Deactive </span>
                            </div>
                        </div>
                        <div className="product"> 
                            <div className="details">
                                <div className="image round"></div>
                                <p className="title"> <span className="name"> Crypter - NFT </span> <span className="category"> UI Kit </span></p>
                            </div> 
                            <div className="data">
                                <p className="earning"> $2,453.80 </p>
                                <span className="product-state active"> Active </span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="full outline-dark round"> All Products </button>
            </div>
        </div>
    )
}


export default PopularProducts;