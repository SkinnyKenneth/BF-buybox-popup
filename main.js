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

    // Select elements using jQuery
    const openModalBtn = $(".open-modal > button");
    const closeModalBtn = $(".close-x");
    const popup = $(".container");

    // Open modal
    openModalBtn.click(function () {
        openPopup();
    });

    const openPopup = () => {
        openModalBtn.parent().addClass("closed");
        popup.removeClass("closed");
        console.log([popup.attr("class"), openModalBtn.attr("class")]);
    };

    // Close modal
    closeModalBtn.click(function () {
        popup.addClass("closed");
        setTimeout(function () {
            openModalBtn.parent().removeClass("closed");
        }, 300);
    });
});

// // opening and closing popup on click
// const openModalBtn = document.querySelector(".open-modal > button");
// const closeModalBtn = document.querySelector(".close-x");
// const popup = document.querySelector(".container");

// // open modal
// openModalBtn.onclick = () => openPopup();

// const openPopup = () => {
//     openModalBtn.parentElement.classList.add("closed");
//     popup.classList.remove("closed");
//     console.log([popup.classList, openModalBtn.classList])
// }

// // close modal
// closeModalBtn.addEventListener("click", () => {
//     popup.classList.add("closed");
//     setTimeout(() => {
//         openModalBtn.parentElement.classList.remove("closed");
//     }, 300);
// })

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
