let count = 0
const value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")

// calculation function
const calc = (btn) =>
  btn.addEventListener("click", function (e) {
    const target = e.target.classList
    if (target.contains("decrease")) {
      count--
    } else if (target.contains("increase")) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = "green"
    } else if (count < 0) {
      value.style.color = "red"
    } else {
      value.style.color = "black"
    }
    value.textContent = count
  })

// triggering the selected button
btns.forEach(calc)
