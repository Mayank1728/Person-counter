let num = 0
let incrementBtn = document.getElementById("inc-btn")
incrementBtn.addEventListener("click", function() {
    let count = document.getElementById("count")
    num = parseInt(count.textContent)
    num += 1
    count.textContent = num
    console.log(num)

})

let saveBtn = document.getElementById("save-btn")
saveBtn.addEventListener("click", function() {
    let prev = document.getElementById("previous-entries")
    prev.innerHTML += `${num} - `
})
