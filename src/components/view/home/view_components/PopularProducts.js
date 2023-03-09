import Product from "./popular_products_components/Product";

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
                        <Product status="deactive" product="Crypter - NFT" earning="$2,453.80" category="UI Kit"/>
                        <Product status="active" product="Bento Matte 3D" earning="$105.60" category="Illustration 1.0"/>
                        <Product status="deactive" product="Excellent material" earning="$648.60" category="3D chair"/>
                    </div>
                </div>
                <button className="full outline-dark round"> All Products </button>
            </div>
        </div>
    )
}


export default PopularProducts;