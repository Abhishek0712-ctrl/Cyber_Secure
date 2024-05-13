// createNew.js
import React, { useState, useEffect } from 'react';
import { TextField} from "@mui/material";
import {Button, Alert } from "@mui/material";
import axios from 'axios';
import { Helmet } from "react-helmet-async";



const CreateNew = () => {
  const [alert, setAlert] = useState({});
  const [user, setUser] = useState('');
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
		getUser();
	}, []);
  const [msgParam, setMsgParam] = useState({
    title: "",
    description: "",
    user_id : "",
    created_at : new Date()
  });
  const handleSave = (e) => {
    e.preventDefault();
  
    msgParam.user_id = user.name;
    if(!msgParam.title || !msgParam.description || !msgParam.user_id){
      setAlert({
        show: true,
        type: false,
        msg: "Please Fill all the mandetory filed.",
      });

    }
    else{
      axios.post(`${process.env.REACT_APP_API_URL}/create-new`, msgParam)
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
  };

  const handleChange = (e) =>{
    setMsgParam({ ...msgParam, [e.target.name]: e.target.value });
  }
  return (
    <>
    <Helmet>
        <title>Create Discuss | Cyber Security Awarness</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for basic understanding of the Cyber Security"
        />
      </Helmet>
    <div className="container">
      <h1 className="title">New Discussion</h1>
      <TextField
        // type="Title"
        variant="outlined"
        label="Title"
        fullWidth
        onChange={handleChange}
        name="title"
        value={msgParam?.title}
      />
      <TextField
        variant="outlined"
        multiline
        minRows={5}
        label="Your Query"
        fullWidth
        onChange={handleChange}
        name="description"
        value={msgParam?.message}
        // error={checkError("message")}
      />
      <Button
        sx={{ marginTop: "10px", maxWidth: 100 }}
        variant="outlined"
        color="success"
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
    </>
  );
};

export default CreateNew;
