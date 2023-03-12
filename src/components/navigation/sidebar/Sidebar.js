import SideBarItems from "./side_bar_components/SideBarItems";
import {FaTimes, FaAngleUp , FaSquareFull , FaSun , FaMoon , FaQuestionCircle , FaHome , FaShapes , FaUserAlt , FaHotel , FaChartPie , FaBahai, FaUser} from "react-icons/fa";

const navList = [
    {
        name: "Home",
        icon: FaHome,
        link: "#",
        subCategories: false
    } ,
    {
        name: "Products",
        icon: FaShapes,
        link: "#",
        subCategories: ["Dashboard" , "Drafts" , "Released" , "Comments" , "Scheduled"]
    } ,
    {
        name: "Customers",
        icon: FaUser,
        link: "#",
        subCategories: false
    } ,
    {
        name: "Shop",
        icon: FaHotel,
        link: "#",
        subCategories: false
    } ,
    {
        name: "Income",
        icon: FaChartPie,
        link: "#",
        subCategories: ["Earning" , "Refunds" , "Payouts" , "Statements"]
    } ,
    {
        name: "Promote",
        icon: FaBahai,
        link: "#",
        subCategories: false
    } ,
]

const Sidebar = ({toggle}) => {
    return (
        <>
            <div className="side_bar-logo-container">
                <FaSquareFull />
                <div className="close" onClick={() => toggle()}> <FaTimes /></div>
            </div>
            <ul className="side_bar-container nav">
                <div>
                    {
                        navList.map((list , index) => <SideBarItems key={index} name={list.name} icon={list.icon} dropdown={list.subCategories} />)
                    }
                </div>
                <div className="side_bar-user">
                    <div className="details">
                        <div className="avatar"></div>
                        <div className="username">
                            <div className="name"> Tran Mau Tri Tram</div>
                            <div className="role"> Visual Designer</div>
                        </div>
                    </div>
                    <div className="icon"> <FaAngleUp /></div>
                </div>
                <div className="side_bar-toggle-container">
                    <div className="side_bar-help-getting-started"> <span> <FaQuestionCircle /> </span> <p> Help getting started  </p><span className="notice"> 8 </span> </div>
                    <div className="side_bar-toggle-buttons"> 
                        <div className="mode unactive"> <FaSun /> <span className="name"> Light </span></div>
                        <div className="mode active"> <FaMoon /> <span className="name"> Dark </span></div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;