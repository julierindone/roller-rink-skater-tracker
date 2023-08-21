// TODO: add daily skater total at bottom

let saveEl = document.getElementById("save-el")
let count = 0
let countEl = document.getElementById("count-el")

// Doors open at 6, so the first count starts at 6. 
let startTime = 6
let startTimeEl = document.getElementById("startTime-el")

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let endTime = (startTime + 1)

  // I chose conditionals to determine the change from PM to AM,
  // but I may switch to a switch if I come back to this.

  // If the hour ends in the AM. Xanadu never stays open until 6am,
  // so there's no need to differentiate between 6am and 6pm; 
  if (endTime < 6) {
    let startEnd = `${startTime} - ${endTime}am: ` + count + "\n"

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime += 1
  }

  // If it's midnight, we need the next hour to be 1, not 13.
  else if (endTime == 13) {
    endTime = 1
    let startEnd = `${startTime} - ${endTime}am: ` + count + "\n"

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime = 1
  }

  // The majority of the hours will end in the PM.
  // It would probably be more efficient to have this be the first conditional since it'll be the option most frequently used.
  else {
    let startEnd = `${startTime} - ${endTime}pm: ${count}` + "\n"

    // midnight is an AM, so this conditional takes care of that:
    if (endTime == 12) {
      startEnd = `${startTime} - ${endTime}am: ${count}` + "\n"
    }

    saveEl.innerText += startEnd
    countEl.textContent = 0
    count = 0
    startTime += 1
  }
}
