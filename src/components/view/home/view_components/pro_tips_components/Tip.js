const Tip = ({tip , author , time , tag}) => {
    return(
        <div class="tip">
            <div className="icon"></div>
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