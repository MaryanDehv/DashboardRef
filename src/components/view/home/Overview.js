
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
            <div className="content customers">
                <div className="welcome-container">
                    <p>
                        Welcome 857 customers with a personal message
                    </p>
                    <button> Send Message </button>
                </div>
                <div className="new-customers-list">
                    <div className="avatars">
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
                    </div>
                    <div className="view-all circle">
                        <div></div>
                        <p>View All</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;