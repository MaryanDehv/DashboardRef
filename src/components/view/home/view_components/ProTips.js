import Tip from "./pro_tips_components/Tip";
import {FaArrowRight , FaCalendarAlt , FaPencilRuler , FaVideo , FaPhoneAlt , FaRegCalendarCheck} from "react-icons/fa";

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
                <Tip tip="Early access" time="3 mins read" tag="New" icon={FaCalendarAlt}/>
                <Tip tip="Asset use guidelines" time="Time" tag="Small label" icon={FaArrowRight}/>
                <Tip tip="Exclusive Downloads" time="2 mins read" icon={FaPencilRuler}/>
                <Tip tip="Behind the scenes" time="3 mins read" tag="Hot" icon={FaVideo}/>
                <Tip tip="Asset use guidelines" time="Time" tag="Popular" icon={FaPhoneAlt}/>
                <Tip tip="Life & work updates" time="3 mins read" icon={FaRegCalendarCheck}/>
            </div>
        </div>
    )
}


export default ProTips;