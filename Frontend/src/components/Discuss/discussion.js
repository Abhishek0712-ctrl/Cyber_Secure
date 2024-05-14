// Discussion.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Alert } from '@mui/material';
import axios from 'axios';
import { Helmet } from "react-helmet-async";
import './discussion.css'
const Discussion = (user) => {
    const [alert, setAlert] = useState({});
    const { id } = useParams();
    // const [user, setUser] = useState(null)
    // setUser(user.user.type)
    console.log(user.user);
    var user_type = user.user.type
    // to post the comment
    const [msgParam, setMsgParam] = useState({
        content :"",
        user_id : "",
        discuss_id : ""
    })

    const handleDelete = async (id) => {
        axios.post(`${process.env.REACT_APP_API_URL}/delete-comment`, {"id":id})
            .then((res) => {
                setAlert({
                    show: true,
                    type: true,
                    msg: "Message Sent Succesfully!",
                });

            })
            .catch((err) => {
                setAlert({
                    show: true,
                    type: false,
                    msg: "Please try again",
                });
            })
    }
    const handleSave = (e) => {
        e.preventDefault();
        msgParam.user_id = user.name
        msgParam.discuss_id = id;
        axios.post(`${process.env.REACT_APP_API_URL}/create-comment`, msgParam)
        .then((res)=>{
            setAlert({
                show: true,
                type: true,
                msg: "Message Sent Succesfully!",
              });

        })
        .catch((err)=>{
            setAlert({
                show: true,
                type: false,
                msg: "Please try again",
              });
        })
    }
    // to get relative comment
    const [discussion, setDiscussion] = useState({
        title : "",
        description : "",
        created_at :"",
        user_id:""

    });    
    const [comments, setComments] = useState([]);
    useEffect(() => {
        // to get the current user;
        // getUser();
        const fetchData = async () => {
            try{
                await axios.get(`${process.env.REACT_APP_API_URL}/discuss-id/${id}`)
                .then((response)=>{
                    var fulldiscuss = response.data;
                    var commentsList = [];
                    var discussionItem = {
                        "title":fulldiscuss[1][0].title,
                        "description":fulldiscuss[1][0].description,
                        "created_at":fulldiscuss[1][0].created_at,
                        "user_id":fulldiscuss[1][0].user_id
                    }
                    setDiscussion(discussionItem);
                    if(fulldiscuss[0]){
                        fulldiscuss[0].map((item)=>{
                            console.log(item)
                            commentsList.push({
                                "comment_id":item.comment_id,
                                "discuss_id":item.discuss_id,
                                "comment_user_id" : item.comment_user_id,
                                "commet_created_at":item.commet_created_at,
                                "content":item.content
                            })
                        })
                    }
                    setComments(commentsList)
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [id]);  
    const handleChange = (e) => {
        setMsgParam({ ...msgParam, [e.target.name]: e.target.value });
    }
    console.log(comments)
    return (
        <>
        <Helmet>
        <title>Discussion | Cyber Security Awarness</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for basic understanding of the Cyber Security"
        />
      </Helmet>
        <div className='discussion-container'>
            {discussion && (
                <div className='discussion-title'>
                    <h2>{discussion.title}</h2>
                    <p>{discussion.description}</p>
                </div>
            )}
            <h3>Comments</h3>
            <div className="discuss-list">
                {alert && alert.show && (
                    <Alert severity={alert.type ? "success" : "error"}>
                        {alert.msg}
                    </Alert>
                )}
                {console.log("arnafdd", comments)}
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <div className='comment_'>
                            <span className = "d-user-icon">{comment.comment_user_id[0]}  </span>
                            <span>{comment.content}</span>
                        </div>
                        <span>{comment.commet_created_at}</span>

                        {user_type === 'admin'?
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(comment.comment_id)}>
                            Delete
                        </Button>
                        : ""}

                    </div>

                ))}
                
            </div>
            <TextField
                variant="outlined"
                multiline
                minRows={5}
                sx={{ marginTop: "40px"}}
                label="Your Comment"
                fullWidth
                onChange={handleChange}
                name="content"
            />
            <div className='button-status'>
            <Button
                sx={{ marginTop: "10px", marginBottom:"10px", maxWidth: 100 }}
                variant="outlined"
                color="primary"
                onClick={handleSave}
            >
                Post
            </Button>
            {alert && alert.show && (
                <Alert severity={alert.type ? "success" : "error"}>
                {alert.msg}
                </Alert>
            )}
            </div>
        </div>
        </>
    );
};

export default Discussion;