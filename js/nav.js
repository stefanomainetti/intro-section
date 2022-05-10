const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const backdrop = document.querySelector(".backdrop");
const featuresDropdownToggle = document.querySelector(
  "#features-dropdown-toggle"
);
const companyDropdownToggle = document.querySelector(
  "#company-dropdown-toggle"
);
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    backdrop.setAttribute("data-backdrop", true);
    console.log(featuresDropdownToggle);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    backdrop.setAttribute("data-backdrop", false);
  }
  primaryNav.classList.remove("stop-transition");
});

featuresDropdownToggle.addEventListener("click", () => {
  const target = featuresDropdownToggle.getAttribute("aria-controls");
  const dropdownList = document.querySelector("#" + target);
  const visibility = dropdownList.getAttribute("data-visible");
  if (visibility === "false") {
    dropdownList.setAttribute("data-visible", true);
    featuresDropdownToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    dropdownList.setAttribute("data-visible", false);
    featuresDropdownToggle.setAttribute("aria-expanded", false);
  }
});

companyDropdownToggle.addEventListener("click", () => {
  const target = companyDropdownToggle.getAttribute("aria-controls");
  const dropdownList = document.querySelector("#" + target);
  const visibility = dropdownList.getAttribute("data-visible");
  if (visibility === "false") {
    dropdownList.setAttribute("data-visible", true);
    companyDropdownToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    dropdownList.setAttribute("data-visible", false);
    companyDropdownToggle.setAttribute("aria-expanded", false);
  }
});

window.addEventListener("resize", () => {
  primaryNav.classList.add("stop-transition");
});
