import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./discuss.css"
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Alert } from '@mui/material';
import { Helmet } from "react-helmet-async";
const Discuss = () => {
    const [discussions, setDiscussions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDiscussions, setFilteredDiscussions] = useState([]);
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({});
    var user_type = "";
    const handleDelete = async (id) => {
        // e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/delete-disscuss`, {"id":id})
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
    const getUser = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
            const { data } = await axios.get(url, { withCredentials: true });
            if(data.result[0]){
                if(data.result[0].type){
                    user_type=data.result[0].type
                }
            }
            setUser(data.result[0]);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        // For demonstration purposes, setting a static list of discussions
        getUser();
        const fetchData = async () => {
            try {
                axios
                    .get(`${process.env.REACT_APP_API_URL}/discuss`)
                    .then((response) => {
                        var staticDiscussions = response.data
                        setDiscussions(staticDiscussions);
                    }).catch((err) => {
                        setDiscussions([]);
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        // Filter discussions based on search term
        const filtered = discussions.filter(discussion =>
            discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDiscussions(filtered);
    }, [searchTerm, discussions]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <>
        <Helmet>
        <title>Discuss | Cyber Security Awarness</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for basic understanding of the Cyber Security"
        />
      </Helmet>
        <div className="container">
            <h2 className="title">Discuss List</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search discussions"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={handleSearch}>Search</button>
                <button className="create-button"><Link to="create-new" style={{ color: 'white' }}>Create New Discussion </Link></button>
            </div>
            <div className="discuss-list">
                {alert && alert.show && (
                    <Alert severity={alert.type ? "success" : "error"}>
                        {alert.msg}
                    </Alert>
                )}
                {filteredDiscussions.map(discussion => (
                    <div key={discussion.id} className="discuss">
                        <Link to={`discussion/${discussion.id}`} className='discuss-link'>
                            <span className="user-icon">{discussion.user_id[0]}  </span>
                            <span>{discussion.title}</span>
                        </Link>
                       
                        {user.type === 'admin'?
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(discussion.id)}>
                                Delete
                            </Button>
                            : ""}

                    </div>
                ))}

            </div>
        </div>
        </>
    );
};

export default Discuss;
