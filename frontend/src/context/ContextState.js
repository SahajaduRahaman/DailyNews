import React, { useReducer } from 'react'
import AuthContext from './ContextApi'

const initialState = {
    authToken : localStorage.getItem("authToken"),
}

const settingState = {
    oneSettings : {
        className: "center",
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        rows: 1,
        slidesPerRow: 1,
    },
    threeSettings : {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
        ],
    },
    fourSettings : {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
}

const ReducerFunction = (state, action) => {
    switch (action.type) {
        case "register" :
            return { authToken : localStorage.getItem("authToken") }

        case "login" :
            return { authToken : localStorage.getItem("authToken") }

        case "logout" :
            return { authToken : "" }

        default : {
            return state;
        }
    }
}

const ContextState = (props) => {

    const [state, dispatch] = useReducer(ReducerFunction, initialState)

    return (
        <AuthContext.Provider value={{state, dispatch, settingState}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextState