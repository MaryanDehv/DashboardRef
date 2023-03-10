import {FaArrowRight} from "react-icons/fa";

const Newcustomers = () => {
    return(
        <div className="new_customers">
            <div className="new_customers-welcome">
                <p>
                    Welcome  <span> <span className="hide"> 857 customers </span> with a personal message </span>
                </p>
                <button className="outline-dark round"> Send <span className="hide"> Message </span> </button>
            </div>
            <div className="new_customers-list">
                <div className="avatar circle">
                    <div></div>
                    <p>Gladyce</p>
                </div>
                <div className="avatar circle">
                    <div></div>
                    <p>Elbert</p>
                </div>
                <div className="avatar circle">
                    <div></div>
                    <p>Elbert</p>
                </div>
                <div className="view_all circle">
                    <div><FaArrowRight /></div>
                    <p>View All</p>
                </div>
            </div>
        </div>
    );
}

export default Newcustomers;