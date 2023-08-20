// TODO: add daily skater total at bottom

let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count-el")
let startTime = 6
let startTimeEl = document.getElementById("startTime-el")

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {

  let endTime = (startTime + 1)
  console.log(`line 17 -  endtime is ${endTime}`)

  if (endTime < 6) {
    let startEnd = `${startTime} - ${endTime}am ` + count + "\n"

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime += 1
    startEnd = `${startTime} - ${endTime}am ` + count + "\n"

  }

  else if (endTime == 13) {
    endTime = 1
    let startEnd = `${startTime} - ${endTime}am ` + count + "\n"

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime = 1
    startEnd = `${startTime} - ${endTime}am ` + count + "\n"
  }

  else {
    let startEnd = `${startTime} - ${endTime}pm: ${count}` + "\n"

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime += 1
  }
  console.log(`The endtime after the save function is ${endTime}.`)
}

    // else endTime = endTime + startTime
