let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count-el")
let hour = 6
let hourEl = document.getElementById("hour-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // let countStr = count + " - "
    let endTime = hour + 1
    let startEnd = `${hour} - ${endTime}pm: ` + count + "\n"
    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    hour += 1
}
