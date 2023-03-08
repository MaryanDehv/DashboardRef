import Overview from "../view_components/Overview";
import PopularProducts from "../view_components/PopularProducts";
import ProductViews from "../view_components/ProductViews";
import Comments from "../view_components/Comments";
import ProTips from "../view_components/ProTips";
import RefundRequest from "../view_components/RefundRequest";
import MoreCustomers from "../view_components/MoreCustomers";
import Filter from "../../../utils/Filter";

const Home = () => {
    return (
        <>
            <h3 className="main-heading"> Dashboard </h3>
            <div className="home grid-display">
                <Overview filter={Filter} />
                <PopularProducts />
                <ProductViews filter={Filter} />
                <Comments />
                <ProTips />
                <RefundRequest />
                <MoreCustomers />
            </div>
        </>
    )
}

export default Home;