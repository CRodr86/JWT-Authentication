import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Log in</h1>
			<div className="row">
                <div className="col-12 my-3">
                    <input className="col-3" type="text" placeholder="email"></input>
                </div>
                <div className="col-12 mb-3">                   
                    <input className="col-3" type="password" placeholder="password"></input>
                </div>
            </div>
            <button type="button" className="btn btn-primary">Log in</button>
		</div>
	);
};
