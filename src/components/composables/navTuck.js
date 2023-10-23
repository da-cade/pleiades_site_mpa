export function navTuck(navElem) {
  var lastScrollTop;
  window.addEventListener("scroll", function (e) {
    var scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    // console.log("scrollTop", scrollTop, "window offset", window.pageYOffset);
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) {
      //if it will be greater than the previous
      navElem.classList.add("hideNav");
      //set the value to the negetive of height of navbar
    } else {
      navElem.classList.remove("hideNav");
    }

    lastScrollTop = scrollTop; //New Position Stored
  });
}