// /blog/1 {this route will handle the dynamic routes}

import axios from 'axios'
import { useEffect } from 'react'
export default async function BlogPage({params}:any){

    const postId = params.postId

    useEffect(()=>{

        const response = await axios.post(`http://localhost:3000/api/v1/get_data/${postId}`);
        const data = response.data

    },[])
    return (
        <div>
             Blog Page  : {postId}
        </div>
    )
}