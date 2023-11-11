
const cardContiner = document.querySelector("#card-container")
const start = () => {
    getAllElements()
}

const getAllElements = () => {
    fetch("/api/elements")
        .then((res) => {
            return res.json()
        })
        .then((elements) => {
            elements.forEach((element) => {
                createElementCard(element)
            })
        })
}

const createElementCard = (element) => {

    const elementCard = document.createElement("div")
    elementCard.classList.add("element-card")
    elementCard.classList.add(element.subcategory.split(" ").join("").toLowerCase())
    elementCard.id = element.name.toLowerCase()

    elementCardHeader = document.createElement("h2")
    elementCardHeader.textContent = `${element.atomic_number} - ${element.name} (${element.symbol})`
    elementCard.appendChild(elementCardHeader)

    const atomicMassProperty = document.createElement("strong")
    atomicMassProperty.textContent = "Atomic Mass: "
    const atomicMass = document.createElement("p")
    atomicMass.appendChild(atomicMassProperty)
    atomicMass.appendChild(document.createTextNode(element.atomic_mass))
    elementCard.appendChild(atomicMass)

    const subcategoryProperty = document.createElement("strong")
    subcategoryProperty.textContent = "Subcategory: "
    const subcategory = document.createElement("p")
    subcategory.appendChild(subcategoryProperty)
    subcategory.appendChild(document.createTextNode(element.subcategory))
    elementCard.appendChild(subcategory)

    const yearDiscoveredProperty = document.createElement("strong")
    yearDiscoveredProperty.textContent = "Year Discovered: "
    const yearDiscovered = document.createElement("p")
    yearDiscovered.appendChild(yearDiscoveredProperty)
    yearDiscovered.appendChild(document.createTextNode(element.year_discovered))
    elementCard.appendChild(yearDiscovered)

    cardContiner.appendChild(elementCard)

    const styles = window.getComputedStyle(elementCard)
    const backgroundColor = styles.getPropertyValue("background-color")
    const rgbValues = backgroundColor.slice(4, backgroundColor.length - 1).split(",")
    const red = parseInt(rgbValues[0])
    const green = parseInt(rgbValues[1])
    const blue = parseInt(rgbValues[2])
    const average = (red + green + blue) / 3
    if (average <= 100) elementCard.style.color = "white"
}

start()