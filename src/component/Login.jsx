import React, {useEffect, useState} from "react";
import { IoIosCloseCircleOutline } from "react-icons/io"

export const closePopup = (statefunction, opacityfunction) => {
	
	const approot = document.getElementById("approot");
	approot.style.filter = "none";
	document.body.style.overflowY = "scroll";
	opacityfunction("0%");
	setTimeout(() => statefunction("none"), 600);
}

export const openPopup = (statefunction, opacityfunction) => {
	console.dir(document);
	const approot = document.getElementById("approot");
	approot.style.filter = "blur(5px)";
	document.body.style.overflowY = "hidden";

	statefunction("flex");
	setTimeout(() => opacityfunction("100%"), 1);
}

export const LoginForm = ({popupStyle, popupOpacity, setStyle, setOpacity} ) => {

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

//    const close = (ev) => {
//
//	    showPopup("none");
//    }
//
//    const onSuccess = e => {
//        alert("تم تسجيل الدخول")
//        console.log(e)
//    }
//
//    const onFailure = e => {
//        alert("فشلت عملية تسجيل الدخول")
//        console.log(e)
//    }
        return (
		<>
                <div className="signin-screen" id="login1" style={{display: popupStyle, opacity: popupOpacity}}>
                        <div className="signin-content">
				<div>
	                                <h3>تسجيل الدخول</h3>
        	                        <form action="/signin" method="post">
                	                        <input type="email" placeholder="إيميلك" name="email"/>
                        	                <input type="password" placeholder="باسوردك" name="password"/>
                                	        <input type="submit" value="تسجيل الدخول"/>
	                                </form>
				</div>
				<IoIosCloseCircleOutline style={{position: "relative", cursor: "pointer", scale: "1.5"}} onClick={() => closePopup(setStyle, setOpacity)} />
                        </div>
                </div>
		<span id="invisiblewall" style={{display: popupStyle, zIndex: "999998", width: "100%", height: "100%", position: "absolute"}}></span>
		</>
        );
}


