// make grid function

function makeGrid(height,width){
	var canvas = document.getElementById('sizePicker');
	var grid_cells = '';

	// creating the grid canvas(h X w) matrix of the user input
	for (var x = 1; x <= height; x++) {
		grid_cells += '<tr class="cell-r' + x + '"></tr>';
		for(var y = 1; y<= width;y++){ //looping over the clss
			grid_cells += '<td class="cell"  '+ x + 'cell_xy' + y + '"></td>';
		}
	}

	//adding the canvas grid to the table element
	canvas.innerHTML = grid_cells;
	cell_click();
}
	

function form_submit() {
	event.preventDefault();
	//get values of height and width from the user input
	var height = document.getElementById('inputHeight').value;
	var width = document.getElementById('inputWidth').value;
	makeGrid(height,width);
}


function cell_click() {
	var cells = document.getElementByClassName('cell');
	for(var i = 0; i < cells.length;i++){
		cells[i].addEventListener('click',function(event){
			var clickedCell = event.target;
			clickedCell.style.backgroundColor = selectedColor;
		})
}
}

var colorPicker = document.getElementById("colorPicker");
var selectedColour = colorPicker.value; 
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);


document.getElementById('sizePicker').onsubmit = function(){
	form_submit();
}
