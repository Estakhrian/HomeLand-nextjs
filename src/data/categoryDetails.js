{/** لیست دسته بندی محصولات برای نمایش در سایت */ }

const categoryDetails = [
    {
        id: 1,
        title: "انواع سرخ کن",
        brands: "فیلیپس ، بوش ، ال جی ",
        image: "/images/categoryImg/fryer.png",
        category: "air-fryer",
    },
    {
        id: 2,
        title: "انواع قهوه ساز",
        brands: "فیلیپس ، بوش ، ال جی.",
        image: "/images/categoryImg/coffeMaker.png",
        category: "coffee-maker"
    },
    {
        id: 3,
        title: "انواع چای ساز",
        brands: "فیلیپس ، بوش ، ال جی ",
        image: "/images/categoryImg/teaMaker.png",
        category: "tea-maker"
    },
    {
        id: 4,
        title: "انواع  جاروبرقی",
        brands: "فیلیپس ، بوش ، ال جی ",
        image: "/images/ProductImg/47db3fed-8824-44b2-bf05-e8877166abc6.png",
        category: "vacuum-cleaner"
    },

]

const categoryDetails2 = [
    {
        id: 5,
        title: "انواع هود",
        brands: "دوو ، سامسونگ ، ال جی ",
        image: "/images/ProductImg/hood.png",
        category: "range-hood"
    },
    {
        id: 6,
        title: "انواع آبمیوه گیر ",
        brands: "دوو ، سامسونگ ، ال جی ",
        image: "/images/ProductImg/abmive.png",
        category: "juicer"
    },
    {
        id: 7,
        title: "انواع اجاق گاز",
        brands: "دوو ، سامسونگ ، ال جی ",
        image: "/images/ProductImg/ghaz.png",
        category: "gas-stove"
    },
    {
        id: 8,
        title: "انواع لباس شویی",
        brands: "دوو ، سامسونگ ، ال جی ",
        image: "/images/ProductImg/lebas.png",
        category: "washing-machine"
    },
]


{/**لیست دسته بندی کردن محصولات برای استفاده در منو */ }
const category = [
    {
        name: "جاروبرقی",
        category: "vacuum-cleaner"
    },
    {
        name: "قهوه ساز",
        category: "coffee-maker"
    },
    {
        name: "چای ساز",
        category: "tea-maker"
    },
    {
        name: "سرخ کن",
        category: "air-fryer",
    },
    {
        name: "اجاق گاز",
        category: "gas-stove"
    },
    {
        name: "لباسشویی",
        category: "washing-machine"
    },
    {
        name: "هود",
        category: "range-hood"
    },
    {
        name: "آبمیوه گیر",
        category: "juicer"
    }
]
export { categoryDetails, categoryDetails2, category }