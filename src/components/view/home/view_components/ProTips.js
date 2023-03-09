import Tip from "./pro_tips_components/Tip";

const ProTips = () => {
    return(
        <div className="pro_tips round display-card">
             <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <h3> Pro Tips </h3>
                </div>
            </div> 
            <p className="new_ideas"> Need some ideas for the next project? </p>
            <div className="tips">
                <Tip tip="Early access" time="3 mins read" tag="New"/>
                <Tip tip="Asset use guidelines" time="Time" tag="Small label"/>
                <Tip tip="Exclusive Downloads" time="2 mins read"/>
                <Tip tip="Behind the scenes" time="3 mins read" tag="Hot"/>
                <Tip tip="Asset use guidelines" time="Time" tag="Popular"/>
                <Tip tip="Life & work updates" time="3 mins read"/>
            </div>
        </div>
    )
}


export default ProTips;