function buscarRequest() {
	document.getElementById("search-button").style.display = "none";
	document.getElementById("loading-button").style.display = "block";

	const verifierCampos = document.querySelector(".verifier-date-feedback p");

	userID = document.getElementById("user").value;
	dInicial = document.getElementById("date-initial").value;
	dFinal = document.getElementById("date-final").value;

	if (
		(userID != "") &
		(dInicial <= dFinal) &
		(dInicial != "") &
		(dFinal != "")
	) {
		verifierCampos.style.display = "none";
		document.getElementById("search-button").style.display = "none";
		document.getElementById("loading-button").style.display = "block";

		var myModal = new bootstrap.Modal(
			document.getElementById("exampleModal"),
			{}
		);

		setTimeout(function () {
			myModal.show();
			verifierCampos.style.display = "none";
			document.getElementById("search-button").style.display = "block";
			document.getElementById("loading-button").style.display = "none";
		}, 5000);
	} else {
		verifierCampos.style.display = "block";
		document.getElementById("search-button").style.display = "block";
		document.getElementById("loading-button").style.display = "none";
	}
}
