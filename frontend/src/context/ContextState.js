import React, { useReducer } from 'react'
import AuthContext from './ContextApi'

const initialState = {
    authToken : localStorage.getItem("authToken"),
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

const news = {
    allNews : [],
}

const NewsReducer = (myNews, action) => {
    switch (action.type) {
        case "allNews" :
            return  {...myNews, allNews : action.payload }
        case "addNews" :
            return {...myNews, allNews : [ ...myNews.allNews, action.payload ]}
        case "editNews" :
            return {...myNews, allNews : [...myNews.allNews.filter((item) => 
                item._id !== action.payload._id
            ), action.payload ]}
        case "deleteNews" :
            return {...myNews, allNews : [...myNews.allNews.filter((item) =>
                item._id !== action.payload
            )]}
        default : {
            return myNews;
        }
    }
}


const ContextState = (props) => {
    const [state, dispatch] = useReducer(ReducerFunction, initialState)
    const [myNews, setMyNews] = useReducer(NewsReducer, news)

    return (
        <AuthContext.Provider value={{state, dispatch, myNews, setMyNews}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextState