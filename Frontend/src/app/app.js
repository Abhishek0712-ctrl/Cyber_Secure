import { React } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./app.css";
import axios from "axios";

// Components
import Home from "../components/home/home"
import Navbar from "../components/navbar/navbar";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import NotFoundPage from "../components/home/NotFoundPage";
import Quiz from "../components/Quiz/quiz"
import Login from "../components/login/login";
import CreateNew from "../components/Discuss/createNew.js";
import Discuss from "../components/Discuss/discuss";
import Discussion from "../components/Discuss/discussion";
import Content from "../components/Content/contentPage.js";
import Footer from "../components/Footer/Footer.js";
import PasswordGenrator from "../components/passwordGenrator/passwordGenrator.js"
const App = () => {
	const [user, setUser] = useState(null);

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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/About" element={<About />} />
        <Route path = "/Contact" element={<Contact />} />
        <Route path = "/quiz" element={user ? <Quiz /> : <Login/>} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/discuss" element={ user ? <Discuss /> : <Login />} />
        <Route path = "/discuss/create-new" element={user ? <CreateNew /> : <Login/>} />
        <Route path = "/discuss/discussion/:id" element={user ? <Discussion /> : <Login />}  />
        <Route path = "/content" element = {<Content /> } />
        <Route path = "/password-genrator" element = {<PasswordGenrator/>} /> 
        <Route path = "/" element = {<Home />} />
        <Route path = "*" element={<NotFoundPage />} status={404} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
