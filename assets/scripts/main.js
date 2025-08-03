document.addEventListener("DOMContentLoaded", () => {
  const plans = document.querySelector(".plans")
  const mainCard = plans.querySelector("article:nth-child(3)")
  const cards = plans.querySelectorAll("article")
  let revealed = false

  plans.addEventListener("mouseenter", () => {
    if (!revealed) {
      plans.classList.add("reveal")
      revealed = true
    }
  })

  cards.forEach((card, index) => {
    if (index !== 2) {
      card.addEventListener("mouseenter", () => {
        mainCard.style.backgroundColor = "var(--shape-base)"
      })
    } else {
      card.addEventListener("mouseenter", () => {
        mainCard.style.backgroundColor = "var(--shape-hover)"
      })

      card.addEventListener("mouseleave", () => {
        if (plans.classList.contains("reveal")) {
          mainCard.style.backgroundColor = "var(--shape-base)"
        }
      })
    }
  })
})
