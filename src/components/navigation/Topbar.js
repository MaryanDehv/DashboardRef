import Dropdown  from "./utils/template/Dropdown";
import Message from "./utils/dropdown_items/Message";
import Notification from "./utils/dropdown_items/Notification";
import Account from "./utils/dropdown_items/Account";
import { FaBell , FaBars , FaCommentAlt , FaPlus , FaSearch} from "react-icons/fa";
import {Toggler as toggler} from "../functions/Toggler";

const Topbar = ({toggle}) => {
    

    return (
        <nav className="top_bar">
            <div className="top_bar-hamburger" onClick={() => toggle()}> <FaBars /> </div>
            <div className="top_bar-search-container">
                <div className="search-icon"> <FaSearch /> </div>
                <input className="round" type="text" placeholder="search" />
                <div className="shortcut">⌘ F</div>
            </div>
            <div className="top_bar-nav-container">
                <button className="top_bar-create blue-btn white-txt round"> <span className="top_bar-icon add"> <FaPlus /> </span> Create </button>
                <div className="top_bar-icon message"> 
                    <FaCommentAlt onClick={(e) =>toggler(e , '.top_bar-icon-dropdown' , 1)}/>
                    <ul className="top_bar-icon-dropdown round">
                        <h3> Message </h3>
                        <Dropdown component={Message} />
                        <button className="blue-btn white-txt full mt-20 round"> View in message center </button>
                    </ul>
                </div>

                <div className="top_bar-icon notification" >
                    <FaBell  onClick={(e) => toggler(e , '.top_bar-icon-dropdown' , 1)}/>
                    <ul className="top_bar-icon-dropdown round">
                        <h3> Notification </h3>
                        <Dropdown component={Notification} />
                        <a className="button blue-btn white-txt full mt-20 round" href="/notifications"> See all notifications </a>
                    </ul>
                </div>

                <div className="top_bar-icon top_bar-avatar"> 
                    <div onClick={(e) => toggler(e , '.top_bar-icon-dropdown' , 1)}></div>
                    <ul className="top_bar-icon-dropdown round">
                        <Dropdown component={Account} />
                    </ul>
                </div>

            </div> 
        </nav>
    )
}

export default Topbar;