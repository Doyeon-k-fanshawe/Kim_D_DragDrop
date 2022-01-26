(() => {
	// make the connections to the elements on the page
	// that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
				theGameBoard = document.querySelector(".puzzle-board");

	// theButtons becomes this:
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	// ]
	//

	function changeBgImg() {
		// debugger; //pause our code execution at this point
		// way 1 ------------------------
		// let key = this.dataset.bgref;
		// console.log(key);

		// theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`;
		// ------------------------------------------------------------------------- //
		// way 2 -----------------------------------------------------------------------------//
		theGameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		// `` => this is a javascript templete string. You can use it to wite a bit of inline javascript with will be interpreted at runtime
		// search for MDN Javascript Templete String
	}

	// these are the "triggers" we want the user to use to fire  off events
	theButtons.forEach(button => button.addEventListener("click", changeBgImg));

})();
