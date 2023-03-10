import {FaCommentAlt , FaHeart , FaShareAlt} from "react-icons/fa";

const Comment = ({user}) => {
    return(
        <div className="comment">
            <div className="image round"></div>
            <div className="container">
                <div className="details">
                    <div className="user">
                        <span className="name">
                            {user.name}
                        </span>
                        <span className="handle">
                            {user.handle}
                        </span>
                    </div>
                    <span className="time">
                        1h
                    </span>
                </div>
                <div className="product">
                    <p> Smiles - 3D </p>
                </div>
                <div className="content">
                    Great Work
                </div>
                <div className="actions">
                    <FaCommentAlt />
                    <FaHeart />
                    <FaShareAlt />
                </div>
            </div>
        </div>
    )
}


export default Comment;