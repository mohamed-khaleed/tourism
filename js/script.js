console.log("hi");




const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let copyBtn = document.querySelectorAll(".copy-btn");

copyBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    alert("your message are copied");
     btn.setAttribute("data-bs-title","copied")
    const v = btn.getAttribute("data-bs-title")
    console.log(v);
  })
);
// 

