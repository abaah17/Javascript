// Select color input
// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
// var on_Submit = document.getElementById('sx'); 
// document.getElementById('sx').onclick = function() {
//    alert("button was clicked");
// }​


function clik() {
	// event.preventDefault();
	var height = document.getElementById('inputHeight').value();
	var width  = document.getElementById('inputWidth').value();
	alert('Height: '+height +" "+"Width: "+width);

	// body...
}


// on_Submit.addEventListener('click',function (event){
// 	event.preventDefault();
// 	height = document.getElementById('inputHeight').value();
// 	width  = document.getElementById('inputWidth').value();
// 	makeGrid(height,width);
// 	console.log('Height: '+height +" "+"Width: "+width);

	
// })


// function makeGrid(x,y) {
// 	var tag =document.getElementbyTag('tr')
// 	tag.remove();

// 	// Your code goes here!
// 	for (var r = 1; i <= x; i++) {
// 	pixel_Canvas= document.getElementById('pixelCanvas');
// 	pixelCanvas.append['<tr id=table'+1+'></tr>'];
// 		for (var c = 1; c<=y; c++) {
// 			pxtable = document.getElementById('table'+i);
// 			pxtable.append['<td></td>'];
// 		}
// 	}

// }





