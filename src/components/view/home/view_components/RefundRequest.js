import {FaShoppingBasket} from "react-icons/fa";

const RefundRequest = () => {
    return(
        <div className="refund_req round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <h3> Refund Request </h3>
                </div>
            </div> 
            <div className="refund_notice">
                <div className="icon"> <FaShoppingBasket /></div>
                <p> You have <span className="refund-requests"> 52 open refund requests </span> to action. This includes <span className="new-requests"> 8 new requests. </span></p>
            </div>
            <button className="round outline-dark full"> Review refund requests </button>
        </div>
    )
}


export default RefundRequest;