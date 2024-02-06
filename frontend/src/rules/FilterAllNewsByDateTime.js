const FilterAllNewsByDateTime = (news) => {
    const FilteredNews = news.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
    
        return dateB - dateA;
    });

    return FilteredNews;
}

export default FilterAllNewsByDateTime;