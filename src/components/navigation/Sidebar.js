import {FaSun , FaMoon , FaQuestionCircle , FaAngleUp , FaAngleDown , FaHome , FaShapes , FaUserAlt , FaHotel , FaChartPie , FaBahai} from "react-icons/fa";

const Sidebar = () => {
    return (
        <>
            <div className="side_bar-logo-container">
                logo
            </div>
            <ul className="side_bar-container nav">
                <div>
                    <li className="side_bar-item active round"><div className="item-container"><span className="side_bar-icon"> <FaHome />  </span> <span className="side_bar-name"> Home </span></div></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> <FaShapes /> </span> <span className="side_bar-name"> Products </span></div> <span className="arrow">  <FaAngleDown /> </span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> <FaUserAlt /></span> <span className="side_bar-name"> Customers </span></div><span className="arrow"> <FaAngleDown /></span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> <FaHotel />  </span> <span className="side_bar-name"> Shop </span></div></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> <FaChartPie /></span> <span className="side_bar-name"> Income </span></div><span className="arrow">  <FaAngleDown /></span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"><FaBahai /> </span> <span className="side_bar-name"> Promote </span></div></li>
                </div>
                <div className="side_bar-toggle-container">
                    <div className="side_bar-help-getting-started"> <span> <FaQuestionCircle /> </span> <p> Help getting started  </p><span className="notice"> 8 </span> </div>
                    <div className="side_bar-toggle-buttons round"> 
                        <div className="mode unactive"> <FaSun /> <span claaName="name"> Light </span></div>
                        <div className="mode active round"> <FaMoon /> <span className="name"> Dark </span></div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;