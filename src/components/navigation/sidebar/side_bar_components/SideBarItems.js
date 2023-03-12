import {FaAngleUp , FaAngleDown} from "react-icons/fa";

const SideBarItems = ({name , icon: Icon , dropdown}) => {
    return( 
        <li className={`side_bar-item ${dropdown ? 'has-sub' : ''} round`}>
            <div className="item-container">
                <div className="parent">
                    <span className="side_bar-icon"> <Icon /> </span> 
                    <span className="side_bar-name"> {name} </span>
                </div>
                {dropdown ? <span className="arrow">  <FaAngleDown /> </span>  : ''}
            </div>
            {dropdown ? 
            <ul className="sub_categories">
                <div className="dropdown">
                    {dropdown.map((list , index) => <li key={index}>{list}</li>)}
                </div>
            </ul>
            : ''}
        </li>
    );
}
export default SideBarItems;