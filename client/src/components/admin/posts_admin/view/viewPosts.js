import React from "react";
import "./viewPosts.css";
import { Navigate, useNavigate } from "react-router-dom";
import {deletePost} from '../../api/api_admin'



export const ViewPost = ({posts,getPost}) => {
  console.log(posts,'posts')
  const Navigate=useNavigate()
  const gotoupdateposts = async()=>{

    Navigate("/admin/updatepost")
  }
  
    return (
        <div className="element">
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
                            <div className="picture-or-icon" />
                            <div className="frame-4">
                                <div className="text-wrapper-3">{posts.title}</div>
                                <div className="text-wrapper-4">{posts.description}</div>
                            </div>
                        </div>
                        <p className="p">{posts.description} </p>
                        <button class="btnupdate" onClick={()=>gotoupdateposts()}> Update</button>
                        <button class="btnupdate" onClick={async()=>{await deletePost(posts._id);getPost()}} >Delete</button>
                    </div>
                    <div className="picture">{posts.image1}</div> 
                </div>
            </div>
        </div>
    );
};
