import {FaFacebookF , FaTwitter , FaInstagram} from "react-icons/fa";

const MoreCustomers = () => {
    return(
        <div className="more_customers round display-card"> 
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <h3> Get More Customers </h3>
                </div>
            </div> 
            <p> 50% of new customers explore products because the author sharing the work on the social media network. Gain your earnings right now.</p>
            <div className="socials">
                <button className="outline-dark round"><span><FaFacebookF /></span> Facebook</button>
                <button className="outline-dark round"><span><FaTwitter /></span> Twitter</button>
                <button className="outline-dark round"><span><FaInstagram /></span> Instagram</button>
            </div>
        </div>
    )
}


export default MoreCustomers;