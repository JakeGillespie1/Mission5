function getPay() {
	// Calculate total cost for Jake's services
	let numHours = 0.0;
	numHours = parseFloat($('#numHours').val());

	//If user does not enter any values, then stop the function here!
	if (isNaN(numHours))
	{
		numHours = 0.0;
	}

	let pos1 = 0;
	pos1 = $('#numHourRate').attr('placeholder').indexOf('/');

	let numHourRate = 0.0;
	numHourRate = parseFloat($('#numHourRate').attr('placeholder').substring(1, pos1));

	let calculation = 0.0;
	calculation = numHours * numHourRate;

	//Print out the calculation, resize the box to fit the calculation and display the box
	$('#numTotalCost').val("Total cost of services: $" + calculation);
	$('#numTotalCost').css('color', '#3D3D3D');
	$('#numTotalCost').attr('size', $('#numTotalCost').val().length);
	$('#numTotalCost').css('display', 'block');
}