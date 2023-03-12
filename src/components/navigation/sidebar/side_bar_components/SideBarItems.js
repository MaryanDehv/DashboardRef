import {FaAngleUp , FaAngleDown} from "react-icons/fa";
import { useState } from "react";

    

const SideBarItems = ({name , icon: Icon , dropdown}) => {
    const [listDropDown , setListDropDown] = useState();

    const toggleDropDown = () => {
        setListDropDown(!listDropDown)
    }

    return( 
        <li className={`side_bar-item ${dropdown ? 'has-sub' : ''} round`}>
            <div className="item-container" onClick={() => toggleDropDown()}>
                <div className="parent">
                    <span className="side_bar-icon"> <Icon /> </span> 
                    <span className="side_bar-name"> {name} </span>
                </div>
                {dropdown ? <span className="arrow">  {listDropDown ? <FaAngleDown /> : <FaAngleUp /> }</span>  : ''}
            </div>
            {dropdown ? 
            <ul className={`sub_categories ${listDropDown ? '' : 'hidden'}`}>
                <div className="dropdown">
                    {dropdown.map((list , index) => <li key={index}>{list}</li>)}
                </div>
            </ul>
            : ''}
        </li>
    );
}
export default SideBarItems;