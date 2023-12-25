import React, { useEffect, useState } from "react";
import "./viewPosts.css";
import { navigate, useNavigate } from "react-router-dom";
import { deletePost } from "../../../../api/api_Admin/api_admin";
import { getPost } from "../../../../api/api_Admin/api_admin";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../../store/postSlice";


export const ViewPost = () => {
    const posts = useSelector(state=>state.post)
    console.log('posts',posts)
  const dispatch = useDispatch()
    const jibAllpost=async()=>{
  const data = await getPost()
  dispatch(setPost(data.Posts))
  console.log('data posts',data.Posts)
    }
  
    useEffect(()=>{
      jibAllpost()
     },[])
    const navigate = useNavigate()

    const gotoupdateposts = async () => {

        navigate("/admin/updatepost")
    }

    return (
        <>
        <button onClick={()=>navigate('/admin/addposts')} >add posts</button>
            { posts && posts.map((p,key) =>
            (<div key={key} className="element">
                <div className="frame">
                    <div className="group">
                        <div className="div">
                            <p className="text-wrapper">Part I . Version 1.1</p>
                            <div className="text-wrapper-2">Services</div>
                        </div>
                        <div className="icon" />
                    </div>
                    <div className="frame-2">
                        <div className="frame">
                            <div className="frame-3">
                            <div ></div>

                                
                                    <img src={p.image1} alt="cvbn"  style={{    "width":" 193px"
}} />
                                    </div>
                                <div className="frame-4">
                                    <div className="text-wrapper-3">
                                        {p.title}
                                    </div>
                                    <div className="frame-4">
                                    <div className="text-wrapper-3">
                                        {p.description}
                                    </div>
                                    
                                    <div className="text-wrapper-4"></div>
                                </div>
                            </div>
                            <p className="p"></p>
                            <button className="btnupdate" onClick={() => gotoupdateposts()}> Update</button>
                            {console.log('id',p._id)}
                            <button className="btnupdate" 
                             onClick={async()=>{ await deletePost(p._id); alert('rak tfesekh');jibAllpost()}} 
                            >Delete</button>
                        </div>
                  
                </div>
            </div></div>))}
        </>

    );
};
