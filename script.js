const header = document.querySelectorAll(".accordion-header");

header.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
    content;
    let sign = header.querySelector("span").innerText;
    sign = content.style.display === "block" ? "-" : "+";
    header.querySelector("span").innerText = sign;
  });
});
