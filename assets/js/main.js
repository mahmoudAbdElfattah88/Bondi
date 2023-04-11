// Toggle Filter
let filter = document.querySelectorAll(".filter li")
    
filter.forEach((e) => {
  e.addEventListener("click", () => {
    filter.forEach((li) => {
      li.classList.remove("active","btn-danger");
    });
    e.classList.toggle("active");
    e.classList.toggle("btn-danger");
    });
})