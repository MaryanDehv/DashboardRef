import {FaAngleUp , FaAngleDown} from "react-icons/fa";

const Filter = () => {

    const toggleDropDown = (view) => {
        // todo: close others when one open
        const dropdown = view.currentTarget.parentNode.querySelector('.filter-dropdown ');
        dropdown.setAttribute('data-hidden' , !(dropdown.attributes['data-hidden'].nodeValue == "true"))
    }

    return(
        <ul className="filter round" onClick={(e) => toggleDropDown(e)}>
            <li>
                <div className="filter-subject"> <span> All time </span> <span> <FaAngleUp /></span> </div>
                <ul className="filter-dropdown round" data-hidden="true">
                    <li> water </li>
                    <li> Cheese </li>
                </ul>
            </li>
        </ul>
    )
}


export default Filter