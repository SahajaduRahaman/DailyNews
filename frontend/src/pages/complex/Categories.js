import React from "react"
import Side from "./Side"
import CategoryCardTop from "./CategoryCardTop"
import CategoryCardBtm from "./CategoryCardBtm"
import "../../styles/Categories.css"
import AuthContext from '../../context/ContextApi';
import { useContext } from 'react';

const Categories = () => {
    const initialState = useContext(AuthContext)
    const oneSettings = initialState.settingState.oneSettings;
    const threeSettings = initialState.settingState.threeSettings;
    const fourSettings = initialState.settingState.fourSettings;

    return (
        <>
            <main>
                <div className='container'>
                    <section className='mainContent'>
                        <CategoryCardTop title="Politics" settings={fourSettings}/>
                        <CategoryCardTop title="Technology" settings={threeSettings}/>
                        <CategoryCardTop title="Country" settings={fourSettings}/>
                        <CategoryCardTop title="World" settings={threeSettings}/>
                        <CategoryCardTop title="Business" settings={fourSettings}/>
                        <CategoryCardTop title="Education" settings={threeSettings}/>
                        <CategoryCardTop title="Career" settings={fourSettings}/>
                        <CategoryCardTop title="Entertainment" settings={threeSettings}/>
                        <CategoryCardTop title="Sports" settings={fourSettings}/>
                        <CategoryCardBtm title="Others" settings={oneSettings}/>
                    </section>
                    <section className='sideContent'>
                        <Side />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Categories
