
const Message = () => {
    const messageObj = [
        {
            name: "Jarret Waelchi",
            message: "When do you release the code..."
        } ,
        {
            name: "Orval Casper",
            message: "When do you release the code..."
        }
    ];

    return (
        messageObj.map((message , index) => 
            <li key={index} className="block round">
                <div className="avatar"> </div>
                <div className="details">
                    <div className="user"><p className="name"> {message.name}</p><p className="time">10am</p></div>
                    <p className="message-content"> {message.message}</p>
                </div>
            </li>
        )
    )
}

export default Message;