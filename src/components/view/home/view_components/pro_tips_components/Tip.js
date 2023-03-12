const Tip = ({tip , author , time , tag , icon: Icon}) => {
    return(
        <div className={`tip ${tip == 'Asset use guidelines' ? 'tip-asset' : ''}`}>
            <div className="icon"><Icon /></div>
            <div className="details">
                <h4> {tip} </h4>
                <div className="author">
                {tag ? <span className="tag dark"> {tag} </span> : ''}
                    <div className="read-time">
                        <div className="image"></div>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tip;