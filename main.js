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
    const addedCartPopup = $(".added-to-cart-popup");
    
	// Open modal
	openModalBtn.click(function () {
        openPopup();
	});
    
	const openPopup = () => {
        openModalBtn.parent().addClass("closed");

		let timeout = 0;
		if (window.innerWidth <= 980) {
            timeout = 3800; 
            addedCartPopup.removeClass("closed");
        };
		setTimeout(() => {
            addedCartPopup.addClass("closed");
			popup.removeClass("closed");
		}, timeout);
	};

	// Close modal
	closeModalBtn.click(function () {
		popup.addClass("closed");
		openModalBtn.parent().removeClass("closed");
	});
});
