const cards = document.querySelectorAll(".plans article")
let principal = document.querySelector(".plans article:nth-child(3)")

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (card !== principal) {
      principal.style.backgroundColor = "var(--shape-base)"
    }
  })

  card.addEventListener("mouseleave", () => {
    if (card === principal) {
      principal.style.backgroundColor = "var(--shape-hover)"
    }
  })
})
