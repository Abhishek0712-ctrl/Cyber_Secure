import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./discuss.css"
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Alert } from '@mui/material';
import { Helmet } from "react-helmet-async";
const Discuss = (user) => {
    const [discussions, setDiscussions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDiscussions, setFilteredDiscussions] = useState([]);
    // const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({});
    var user_type = user.user.type;
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
   
    useEffect(() => {
        // For demonstration purposes, setting a static list of discussions
        const fetchData = async () => {
            try {
               await axios
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
    console.log(filteredDiscussions)
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

    };
    return (
        <>
        <Helmet>
        <title>Discuss | Cyber Security Awarness</title>
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
                            <span>{discussion.created_at}</span>
                       
                        {user_type === 'admin'?
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
