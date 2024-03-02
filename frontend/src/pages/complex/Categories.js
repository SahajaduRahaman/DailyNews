import React, { useContext } from "react"
import Side from "./Side"
import CategoryCardTop from "./CategoryCardTop"
import CategoryCardBtm from "./CategoryCardBtm"
import "../../styles/Categories.css"
import SettingsObj from "../../rules/SettingsObj"
import AuthContext from "../../context/ContextApi"
import FilterCat from "../../rules/FilterCat"
import SampleNews from "../components/SampleNews"


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
                        {politics ?
                            <CategoryCardTop title="Politics" news={politics} settings={fourSettings}/>
                        :
                            <SampleNews title="Politics" settings={fourSettings}/>
                        }
                        {technology ?
                            <CategoryCardTop title="Technology" news={technology} settings={threeSettings}/>
                        :
                            <SampleNews title="Technology" settings={fourSettings}/>
                        }
                        {country ?
                            <CategoryCardTop title="Country" news={country} settings={fourSettings}/>
                        :
                            <SampleNews title="Country" settings={fourSettings}/>
                        }
                        {world ?
                            <CategoryCardTop title="World" news={world} settings={threeSettings}/>
                        :
                            <SampleNews title="World" settings={fourSettings}/>
                        }
                        {business ?
                            <CategoryCardTop title="Business" news={business} settings={fourSettings}/>
                        :
                            <SampleNews title="Business" settings={fourSettings}/>
                        }
                        {education ?
                            <CategoryCardTop title="Education" news={education} settings={threeSettings}/>
                        :
                            <SampleNews title="Education" settings={fourSettings}/>
                        }
                        {career ?
                            <CategoryCardTop title="Career" news={career} settings={fourSettings}/>
                        :
                            <SampleNews title="Career" settings={fourSettings}/>
                        }
                        {entertainment ?
                            <CategoryCardTop title="Entertainment" news={entertainment} settings={threeSettings}/>
                        :
                            <SampleNews title="Entertainment" settings={fourSettings}/>
                        }
                        {sports ?
                            <CategoryCardTop title="Sports" news={sports} settings={fourSettings}/>
                        :
                            <SampleNews title="Sports" settings={fourSettings}/>
                        }
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
