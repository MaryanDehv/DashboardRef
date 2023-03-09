const RefundRequest = () => {
    return(
        <div className="refund_req round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <p> Refund Request </p>
                </div>
            </div> 
            <div className="refund_notice">
                <div className="icon"></div>
                <p> You have <span> 52 open refund requests </span> to action. This includes <span> 8 new requests. </span></p>
            </div>
            <button className="round outline-dark full"> Review refund requests </button>
        </div>
    )
}


export default RefundRequest;