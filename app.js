document.addEventListener("DOMContentLoaded", () => {
 //  MENU ACTIVE STATE
 const menuItems = document.querySelectorAll(".menu-list-item");
 const menuLinks = document.querySelectorAll(".menu-link");

 menuLinks.forEach((link) => {
 link.addEventListener("click", () => {
menuItems.forEach((li) => li.classList.remove("active"));
 link.parentElement.classList.add("active");
 });
 });

 //  Mouse wheel scroll horizontally when hovering lists
 document.querySelectorAll(".movie-list").forEach((list) => {
list.addEventListener(
 "wheel",
(e) => {
 if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
 e.preventDefault();
 list.scrollLeft += e.deltaY;
}
},
 { passive: false }
 );
 });

 //  SEARCH FILTER
 const input = document.getElementById("movieSearch");
const clearBtn = document.getElementById("clearSearch");
const items = Array.from(document.querySelectorAll(".movie-list-item"));

 const normalize = (s) => (s || "").toLowerCase().trim().replace(/\s+/g, " ");

if (!input || !clearBtn || items.length === 0) return;

 const filter = () => {
 const q = normalize(input.value);

 items.forEach((item) => {
const title = normalize(item.getAttribute("data-title"));
 const match = title.includes(q);
 item.classList.toggle("is-hidden", q.length > 0 && !match);
 });
 };

 input.addEventListener("input", filter);

 clearBtn.addEventListener("click", () => {
  input.value = "";
  filter();
  input.focus();
 });

 filter();
});
