import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name:"post",
    initialState:[
        {
            title: "test redux",
            description: "I test redux",
            image1: "https://www.adobe.com/express/learn/blog/media_114b76a23afe9ee97a6d31503ae2ce6edf0140dd2.jpeg?width=1200&format=pjpg&optimize=medium",
            partenaires: "test image partenaires"
        },{
            title: "test redux",
            description: "I test redux",
            image1: "https://www.adobe.com/express/learn/blog/media_114b76a23afe9ee97a6d31503ae2ce6edf0140dd2.jpeg?width=1200&format=pjpg&optimize=medium",
            partenaires: "test image partenaires"
        },{
            title: "test redux",
            description: "I test redux",
            image1: "https://www.adobe.com/express/learn/blog/media_114b76a23afe9ee97a6d31503ae2ce6edf0140dd2.jpeg?width=1200&format=pjpg&optimize=medium",
            partenaires: "test image partenaires"
        },{
            title: "test redux",
            description: "I test redux",
            image1: "https://www.adobe.com/express/learn/blog/media_114b76a23afe9ee97a6d31503ae2ce6edf0140dd2.jpeg?width=1200&format=pjpg&optimize=medium",
            partenaires: "test image partenaires"
        }
    ],
    reducers:{
        setPost:(state,action)=>{
            return action.payload
        }
    }
})


export const {setPost} = postSlice.actions

export default postSlice.reducer