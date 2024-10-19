export default function Post({post}){
    console.log(post)
    const {title, userId, id, body} = post;
    return (
        <div className="postStyle">
            <h5>Title : {title}</h5>
            <p><small>User ID : {userId} </small></p>
            <p><small>Post ID : {id} </small></p>
            <p>{body}</p>
        </div>
    )
}