import React, { useEffect, useState } from "react";
import "./viewPosts.css";
import { navigate, useNavigate } from "react-router-dom";
import { deletePost } from "../../../../api/api_Admin/api_admin";
import { getPost } from "../../../../api/api_Admin/api_admin";


export const ViewPost = () => {
    const [posts, setPosts] = useState([])
    const hetposts = async () => {
        const data = await getPost()
        setPosts(data.Posts)
      console.log("data",data);
        
    }
    useEffect(() => {
        hetposts()
           }, [])
    const navigate = useNavigate()

    const gotoupdateposts = async () => {

        navigate("/admin/updatepost")
    }

    return (
        <>
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
                                <div className="picture-or-icon" />
                                <div className="frame-4">
                                    <div className="text-wrapper-3">
                                        {p.title}
                                    </div>
                                    <div className="text-wrapper-4"></div>
                                </div>
                            </div>
                            <p className="p"></p>
                            <button className="btnupdate" onClick={() => gotoupdateposts()}> Update</button>
                            <button className="btnupdate" onClick={async () => { await deletePost(); getPost() }} >Delete</button>
                        </div>
                        <div className="picture"></div>
                    </div>
                </div>
            </div>))}
        </>

    );
};
