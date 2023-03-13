import {FaShoppingBag , FaWaveSquare , FaAngleUp , FaAngleDown , FaInfoCircle} from "react-icons/fa";
import {Toggler as toggler} from "../../../../functions/Toggler";

const AnalyticsTabs = () => {
    return(
        <div className="analytics_tabs round">

            <div className="tab customers round" onClick={(e) => toggler(e , '.tab')} active>
                <div className="tab-inner">
                    <div className="icon">
                        <FaShoppingBag />
                    </div>
                    <div className="data">
                        <div className="caveat"><span>Customers</span><span className="caveat-icon"><FaInfoCircle /></span></div>
                        <div className="number">1024</div>
                        <span className="trend increase"><span className="trend_direction"><FaAngleUp /></span> <span className="percentage">37.8%</span></span>
                    </div>
                </div>
            </div>

            <div className="tab income round" onClick={(e) => toggler(e , '.tab')}>
                <div className="tab-inner">
                    <div className="icon">
                        <FaWaveSquare />
                    </div>
                    <div className="data">
                        <div className="caveat"><span>Income</span><span className="caveat-icon"><FaInfoCircle /></span></div>
                        <div className="number">1024</div>
                        <span className="trend decrease"><span className="trend_direction"><FaAngleDown /></span> <span className="percentage">37.8%</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsTabs;