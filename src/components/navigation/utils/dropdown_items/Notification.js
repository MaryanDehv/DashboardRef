
const Notification = () => {
    const notificationObj = [
        {
            name: "Jarret Waelchi",
            handle: "@Jarret",
            action: "comment",
            product: "Smiles - 3D icons"
        } ,
        {
            name: "Janice",
            handle: "@Ethel",
            action: "liked",
            product: "Smiles - 3D icons"
        } ,
    ];

    return (
        notificationObj.map((notif , index) => 
            <li key={index} className="block round">
                <div className="avatar"><span class="icon"></span></div>
                <div className="details">
                    <div className="user"><p className="name"> {notif.name} <span className="handle"> {notif.handle}</span></p><p className="time">10am</p></div>
                    <p className="message-content"> <span className="action"> {notif.action} </span> <strong>{notif.product}</strong></p>
                </div>
            </li>
        )
    )
}

export default Notification;