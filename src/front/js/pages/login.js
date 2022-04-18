import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        fetch('https://3001-crodr86-jwtauthenticati-fbdd0lorso9.ws-eu40.gitpod.io/api/token', opts)
        .then(resp => {
            if(resp.status === 200) return resp.json();
            else alert("Error!")
        })
        .then()
        .catch(error => {
            console.error("There was an error!", error);
        })
    }

	return (
		<div className="text-center mt-5">
			<h1>Log in</h1>
			<div className="row">
                <div className="col-12 my-3">
                    <input className="col-3" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-12 mb-3">                   
                    <input className="col-3" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary">Log in</button>
		</div>
	);
};
