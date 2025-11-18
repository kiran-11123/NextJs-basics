// /blog/1 {this route will handle the dynamic routes}

export default function BlogPage({params}:any){

    const postId = params.postId
    return (
        <div>
             Blog Page  : {postId}
        </div>
    )
}