import React, { useContext } from "react"
import Side from "./Side"
import CategoryCardTop from "./CategoryCardTop"
import CategoryCardBtm from "./CategoryCardBtm"
import "../../styles/Categories.css"
import SettingsObj from "../../rules/SettingsObj"
import AuthContext from "../../context/ContextApi"
import FilterCat from "../../rules/FilterCat"
import Lottie from "lottie-react"
import LoadingJsn from "../../assets/Loading.json"


const Categories = () => {
    const { oneSettings, threeSettings, fourSettings} = SettingsObj
    const News = useContext(AuthContext)
    const allNews = News.myNews.allNews

    const politics = FilterCat(allNews, "politics");
    const technology = FilterCat(allNews, "technology");
    const country = FilterCat(allNews, "country");
    const world = FilterCat(allNews, "world");
    const business = FilterCat(allNews, "business");
    const education = FilterCat(allNews, "education");
    const career = FilterCat(allNews, "career");
    const entertainment = FilterCat(allNews, "entertainment");
    const sports = FilterCat(allNews, "sports");
    const others = FilterCat(allNews, "others");

    return (
        <>
            <main>
                <div className='container'>
                    <section className='mainContent'>
                        <CategoryCardTop title="Politics" news={politics} settings={fourSettings}/>
                        <CategoryCardTop title="Technology" news={technology} settings={threeSettings}/>
                        <CategoryCardTop title="Country" news={country} settings={fourSettings}/>
                        <CategoryCardTop title="World" news={world} settings={threeSettings}/>
                        <CategoryCardTop title="Business" news={business} settings={fourSettings}/>
                        <CategoryCardTop title="Education" news={education} settings={threeSettings}/>
                        <CategoryCardTop title="Career" news={career} settings={fourSettings}/>
                        <CategoryCardTop title="Entertainment" news={entertainment} settings={threeSettings}/>
                        <CategoryCardTop title="Sports" news={sports} settings={fourSettings}/>
                        <CategoryCardBtm title="Others" news={others} settings={oneSettings}/>
                    </section>
                    <section className='sideContent'>
                        <Side news={allNews}/>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Categories
