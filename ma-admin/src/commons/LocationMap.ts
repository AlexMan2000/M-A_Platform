const location2title = {
    "/management": "Project Management",
    "/list": "Project List",
    "/pipeline": "Buyer Pipeline",
    "/milestone": "Timeline & Milestone",
    "/dataroom": "Data Room",
    "/settings": "Settings",
}

const title2location = Object.fromEntries(
    Object.entries(location2title).map(elem => [elem[1], elem[0]]))

export { location2title, title2location};