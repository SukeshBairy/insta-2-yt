import Post from "./Post"


const  posts= [
    {
        id:'123',
        username:'sssukesh',
        userImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloEtdphPMOFqaSw1qamjS4gLtVSDqGXlbAA&usqp=CAU',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloEtdphPMOFqaSw1qamjS4gLtVSDqGXlbAA&usqp=CAU',
        caption:'Hellooooooo',
    }
]

function Posts() {
    return (
        <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} username={post.username} userImg ={post.userImg} img={post.img} caption={post.caption} />
        ))}
           
        </div>
    )
}

export default Posts
