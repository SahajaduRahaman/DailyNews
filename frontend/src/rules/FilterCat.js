const FilterCat = (news, category) => {
    if (category === "allNews") {
        const ModifiedNews = news.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
        
            return dateB - dateA;
        });
    
        return ModifiedNews;
    }
    const FilteredNews = news.filter((item) => item.category === category)

    const ModifiedNews = FilteredNews.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        return dateB - dateA;
    });

    return ModifiedNews;
}

export default FilterCat