const FilterCat = (news, category) => {
    const FilteredNews = news.filter((item) => item.category === category)

    const ModifiedNews = FilteredNews.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        return dateB - dateA;
    });

    return ModifiedNews;
}

export default FilterCat