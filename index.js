async function getJson() {
    return await fetch('./data.json')
    .then(function(response) {
        return response.json()
    })
}

const card = document.querySelectorAll(".card")

async function daily() {
    const data = await getJson()
    card.forEach((element) => {
        let atribute = data.find(card => card.title == element.getAttribute('id')) 
        document.getElementById(atribute.title+"hours").innerHTML = atribute.timeframes.daily.current + "hrs"
        document.getElementById(atribute.title+"previous").innerHTML = "Yesterday - " + atribute.timeframes.daily.previous + "hrs"
    });
}

async function weekly() {
    const data = await getJson()
    card.forEach((element) => {
        let atribute = data.find(card => card.title == element.getAttribute('id')) 
        document.getElementById(atribute.title+"hours").innerHTML = atribute.timeframes.weekly.current + "hrs"
        document.getElementById(atribute.title+"previous").innerHTML = "Last Week - " + atribute.timeframes.weekly.previous + "hrs"
    });
}

async function monthly() {
    const data = await getJson()
    card.forEach((element) => {
        let atribute = data.find(card => card.title == element.getAttribute('id')) 
        document.getElementById(atribute.title+"hours").innerHTML = atribute.timeframes.monthly.current + "hrs"
        document.getElementById(atribute.title+"previous").innerHTML = "Last Month - " + atribute.timeframes.monthly.previous + "hrs"
    });
}
