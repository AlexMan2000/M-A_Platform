const location2title = {
    "/dashboard":"Home",
    "/list": "Listed Project",
    "/pipeline": "Buyer Database",
    "/management": "Project Management",
    "/milestone": "Timeline & Milestone",
    "/inquires": "New Inquiries",
    "/dataroom": "Data Room",
    "/settings": "Settings",
}

const title2location = Object.fromEntries(
    Object.entries(location2title).map(elem => [elem[1], elem[0]]))

const locationToIndex = Object.fromEntries(
    Object.entries(location2title).map((elem,index) => [elem[0],index])
)


export { location2title, title2location, locationToIndex};