import './singlePost.css'
import img from './post1.jpg'
export default function SinglePost() {
  return (
    <div className='singlePost'> 
       <div className="singlePostWrapper">
        <img className='singlePostImg' src={img} alt='post'/>
        <h1 className="singlePostTitle">Single Post Title
        <div className="singlePostEdit">
        <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i class="singlePostIcon fa-solid fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author : <b>Ratheesh</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro cumque magnam reprehenderit recusandae vitae ad enim? Quia qui fuga, minus quam sed asperiores modi commodi, tenetur amet iure, iste facilis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et hic consequuntur vel accusantium excepturi, eius doloremque reprehenderit commodi vero, ea rem maiores. Dolore labore libero mollitia eum velit modi ullam!
        </p>
       </div>
    </div>
  )
}
