import Comment from "./comments_components/Comment";

const Comments = () => {
    return(
        <div className="comments round display-card">
            <div className="display-card-name">
                <div> 
                    <div className="bar"></div>
                    <p> Comments </p>
                </div>
            </div> 
            <div className="display-card-comment-list">
                <div className="display-card-comment-list-inner">
                   <Comment user={{name:"Ethel" , handle: "@Ethel"}}/>
                   <Comment user={{name:"Peach" , handle: "@Peach"}}/>
                   <Comment user={{name:"Luigi" , handle: "@Luigi"}}/>
                   <Comment user={{name:"Bowser" , handle: "@Bowser"}}/>
                </div>
                <button className="full outline-dark round"> View all </button>
            </div>
        </div> 
    )
}


export default Comments;