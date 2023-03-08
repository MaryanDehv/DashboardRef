const Sidebar = () => {
    return (
        <>
            <div className="side_bar-logo-container">
                logo
            </div>
            <ul className="side_bar-container nav">
                <div>
                    <li className="side_bar-item active round"><div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Home </span></div></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Products </span></div> <span>  ^ </span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Customers </span></div><span>  ^ </span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Shop </span></div></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Income </span></div><span>  ^ </span></li>
                    <li className="side_bar-item round"> <div className="item-container"><span className="side_bar-icon"> icon </span> <span className="side_bar-name"> Promote </span></div></li>
                </div>
                <div className="side_bar-toggle-container">
                    <div className="side_bar-help-getting-started"> <span> ? </span> Help getting started <span> i </span> </div>
                    <div className="side_bar-toggle-buttons round"> 
                        <div> Light </div>
                        <div className="active round"> Dark </div>
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;