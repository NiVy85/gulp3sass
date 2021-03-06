// Data
var alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
var colors = ['#FF9CEE', '#E7FFAC', '#C5A3FF', '#FFBEBC'];

var page = document.querySelector('html');

document.addEventListener('click', function (event) {
	// Get mouse coordinates
	var mcordsx = event.clientX;
	var mcordsy = event.clientY;

	// Create element
	var bletter = document.createElement('span');

	// Style element
	bletter.style.position = 'absolute';
	bletter.style.fontFamily = 'Arial, Helvetica, sans-serif';
	bletter.style.fontSize = '2rem';
	bletter.style.fontWeight = 'bold';
	bletter.style.cursor = 'default';
	bletter.style.top = mcordsy - 32 + 'px';
	bletter.style.left = mcordsx + 'px';
	var randalp = Math.floor(Math.random() * 26);
	var randcol = Math.floor(Math.random() * 4);
	bletter.style.color = colors[randcol];
	bletter.innerHTML = alphabet[randalp];

	//Add element
	page.appendChild(bletter);
});
