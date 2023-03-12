import SideBarItems from "./side_bar_components/SideBarItems";
import {FaSun , FaMoon , FaQuestionCircle , FaHome , FaShapes , FaUserAlt , FaHotel , FaChartPie , FaBahai, FaUser} from "react-icons/fa";

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

const Sidebar = () => {
    return (
        <>
            <div className="side_bar-logo-container">
                logo
            </div>
            <ul className="side_bar-container nav">
                <div>
                    {
                        navList.map((list , index) => <SideBarItems key="index" name={list.name} icon={list.icon} dropdown={list.subCategories} />)
                    }
                </div>
                <div className="side_bar-toggle-container">
                    <div className="side_bar-help-getting-started"> <span> <FaQuestionCircle /> </span> <p> Help getting started  </p><span className="notice"> 8 </span> </div>
                    <div className="side_bar-toggle-buttons"> 
                        <div className="mode unactive"> <FaSun /> <span claaName="name"> Light </span></div>
                        <div className="mode active"> <FaMoon /> <span className="name"> Dark </span></div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;