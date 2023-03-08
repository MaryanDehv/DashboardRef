import Overview from "./Overview";
import PopularProducts from "./PopularProducts";
import ProductViews from "./ProductViews";
import Comments from "./Comments";
import ProTips from "./ProTips";
import RefundRequest from "./RefundRequest";
import MoreCustomers from "./MoreCustomers";
import Filter from "../../utils/Filter";

const Home = () => {
    return (
        <>
            <h3 className="main-heading"> Dashboard </h3>
            <div className="home grid-display">
                <Overview  filter={Filter}/>
                <PopularProducts />
                <ProductViews filter={Filter}/>
                <Comments />
                <ProTips />
                <RefundRequest />
                <MoreCustomers />
            </div>
        </>
    )
}

export default Home;