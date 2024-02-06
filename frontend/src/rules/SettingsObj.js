const SettingsObj = {
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

export default SettingsObj;