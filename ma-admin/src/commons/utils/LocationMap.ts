const location2title = {
    "/dashboard":"Home",
    "/inquiries": "New Inquiries",
    "/list": "Listed Project",
    "/pipeline": "Buyer Database",
    "/management": "Project Management",
    "/milestone": "Timeline & Milestone",
    "/dataroom": "Data Room",
    "/settings": "Settings",
}

const title2location = Object.fromEntries(
    Object.entries(location2title).map(elem => [elem[1], elem[0]]))

const locationToIndex = Object.fromEntries(
    Object.entries(location2title).map((elem,index) => [elem[0],index])
)


export { location2title, title2location, locationToIndex};