const SettingsObj = {
    oneSettings : {
        className: "center",
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
        slidesPerRow: 1,
    },
    threeSettings : {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    },
    fourSettings : {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    }
}

export default SettingsObj;