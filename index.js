let num = 0
const incrementBtn = document.getElementById("inc-btn")
const saveBtn = document.getElementById("save-btn")
const decBtn = document.getElementById("dec-btn")
const count = document.getElementById("count")


// as user clicks on increment button
incrementBtn.addEventListener("click", function() {
    num = parseInt(count.textContent)
    num += 1
    count.textContent = num
})

// as user clicks on save btn
saveBtn.addEventListener("click", function() {
    const prev = document.getElementById("previous-entries")
    prev.innerHTML += `${num} - `
})

//as user clicks on decrement button
decBtn.addEventListener("click", function() {
    num = num - 1
    if (num >= 0) {
        count.textContent = num
    }
    else {
        count.textContent = 0
    }
})
