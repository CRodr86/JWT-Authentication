import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    const history = useHistory();
    console.log("This is your token", store.token)

    const handleClick = () => {
        actions.login(username, email, password);
    };

    if(store.token && store.token != "" && store.token != undefined) history.push("/");

	return (
		<div className="text-center mt-5">
			<h1>Log in</h1>
            {(store.token && store.token != "" && store.token != undefined) ? (
                "You are logged in" + store.token
                ) : (
            <>
                <div className="row">
                <div className="col-12 my-3">
                        <input className="col-3" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="col-12 mb-3">
                        <input className="col-3" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-12 mb-3">                   
                        <input className="col-3" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button onClick={handleClick} type="button" className="btn btn-primary">Log in</button>
            </>
            )}
		</div>
	);
};
