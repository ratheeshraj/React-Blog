import "./post.css"
import img from "./post.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>
            </div>
            <span className="postTitle">
               Post Title
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
    <p className="postdesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit impedit distinctio labore facilis libero corrupti molestias unde est harum?

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit impedit distinctio labore facilis libero corrupti molestias unde est harum?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit impedit distinctio labore facilis libero corrupti molestias unde est harum?
    </p>
    </div>
  )
}
