// /blog/1 {this route will handle the dynamic routes}

"use client"
import axios from 'axios'
import { useEffect } from 'react'
export default async function BlogPage({params}:any){

   const postId = (await params).postId; //[1,2,3]


//irrespective of subroutes all the routes will come to this page
    
    return (
        <div>
             Blog Page  : {JSON.stringify(postId)}  
        </div>
    )
}