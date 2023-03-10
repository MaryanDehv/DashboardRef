import {FaAngleUp , FaAngleDown} from "react-icons/fa";

const Filter = () => {
    return(
        <ul className="filter round">
            <li>
                <div className="filter-subject"> <span> All time </span> <span> <FaAngleUp /></span> </div>
                <ul className="filter-dropdown hidden round">
                    <li> water </li>
                    <li> Cheese </li>
                </ul>
            </li>
        </ul>
    )
}


export default Filter