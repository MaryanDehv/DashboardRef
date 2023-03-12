import Newcustomers from "./overview_components/Newcustomers";
import AnalyticsTabs from "./overview_components/AnalyticsTabs";

const Overview = ({filter: Filter}) => {
    return(
        <div className="overview round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <h3> Overview </h3>
                </div>
                <Filter />
            </div> 
            <AnalyticsTabs />
            <Newcustomers />
        </div>
    );
}

export default Overview;