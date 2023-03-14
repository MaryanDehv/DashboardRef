import SideBarItems from "./side_bar_components/SideBarItems";
import {FaTimes, FaAngleUp , FaSquareFull , FaSun , FaMoon , FaQuestionCircle , FaHome , FaShapes , FaUserAlt , FaHotel , FaChartPie , FaBahai, FaUser} from "react-icons/fa";
import { useState } from "react";

const navList = [
    {
        name: "Home",
        icon: FaHome,
        link: "#",
        path:process.env.PUBLIC_URL,
        subCategories: false
    } ,
    {
        name: "Products",
        icon: FaShapes,
        link: "#",
        path:process.env.PUBLIC_URL+"/products",
        subCategories: ["Dashboard" , "Drafts" , "Released" , "Comments" , "Scheduled"]
    } ,
    {
        name: "Customers",
        icon: FaUser,
        link: "#",
        path:"/customers",
        subCategories: false
    } ,
    {
        name: "Shop",
        icon: FaHotel,
        link: "#",
        path:"/shop",
        subCategories: false
    } ,
    {
        name: "Income",
        icon: FaChartPie,
        link: "#",
        path:"/income",
        subCategories: ["Earning" , "Refunds" , "Payouts" , "Statements"]
    } ,
    {
        name: "Promote",
        icon: FaBahai,
        link: "#",
        path:"/promote",
        subCategories: false
    } ,
]

const Sidebar = ({toggle}) => {
    const [darkMode , setDarkMode] = useState(true);

    const toggleTheme = (e) => {
        e.currentTarget.textContent.toLowerCase().includes('dark') 
        ? setDarkMode(true)
        : setDarkMode(false)
    }

    return (
        <>
            <div className="side_bar-logo-container">
                <FaSquareFull />
                <div className="close" onClick={() => toggle()}> <FaTimes /></div>
            </div>
            <ul className="side_bar-container nav">
                <div>
                    {
                        navList.map((list , index) => <SideBarItems path={list.path} key={index} name={list.name} icon={list.icon} dropdown={list.subCategories} />)
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
                        <div className={`mode ${darkMode ? '' : 'active'}`} onClick={toggleTheme}> <FaSun /> <span className="name"> Light </span></div>
                        <div className={`mode ${darkMode ? 'active' : ''}`} onClick={toggleTheme}> <FaMoon /> <span className="name"> Dark </span></div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;