jQuery(function ($) {
    // changing button styles on select
    const selectBtns = $(".value-button");
  
    selectBtns.on("click", function () {
      selectBtns.removeClass("selected");
      $(this).addClass("selected");
    });
  
    // switching tier options based on value select
    const subOptions = $(".sub");
  
    selectBtns.on("click", function () {
      subOptions.removeClass("selected");
      subOptions.eq(selectBtns.index(this)).addClass("selected");
    });
  
    // update subscription title on click
    const subHeader = $(".sub-container > h2");
    const selectedValue = $(".value-button.selected");
  
    subHeader.text(selectedValue.text());
  
    selectBtns.on("click", function () {
      subHeader.text($(this).text());
    });
  });
  

// // changing button styles on select
// const selectBtns = document.querySelectorAll(".value-button");

// selectBtns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         selectBtns.forEach(btn => btn.classList.remove("selected"));
//         e.target.classList.add("selected");
//     })
// })

// // switching tier options based on value select
// const subOptions = document.querySelectorAll(".sub");

// selectBtns.forEach((btn, idx) => {
//     btn.addEventListener("click", (e) => {
//         subOptions.forEach(option => option.classList.remove("selected"));
//         subOptions[idx].classList.add("selected");
//     })
// })

// // update subscription title on click
// const subHeader = document.querySelector(".sub-container > h2");
// const selectedValue = document.querySelector(".value-button.selected")

// subHeader.innerText = selectedValue.innerText;

// selectBtns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         subHeader.innerText = e.target.innerText;
//     })
// })
