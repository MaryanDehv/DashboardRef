
const Overview = ({filter: Filter}) => {
    return(
        <div className="overview round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <p> overview </p>
                </div>
                <Filter />
            </div> 
            <div className="analytics-buttons">
                <div>customers</div>
                <div> income </div>
            </div>
            <div className="new_customers">
                <div className="new_customers-welcome">
                    <p>
                        Welcome  <span> <span className="hide"> 857 customers </span> with a personal message </span>
                    </p>
                    <button className="dark transparent white-txt bold round"> Send <span className="hide"> Message </span> </button>
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
                        <div></div>
                        <p>View All</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;