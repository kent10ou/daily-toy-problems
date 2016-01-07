

//var btn = document.createElement("BUTTON");        // Create a <button> element


var appendButton = function () {
	var callback = function (i) {
		return function () {
  		alert(i);
  	}
	}

	for (var i = 1; i <= 10; i++) {
		var btn = document.createElement("BUTTON");
  	var t = document.createTextNode(i)
		btn.appendChild(t);
    btn.onclick = callback(i);
		document.body.appendChild(btn);
	}
};
appendButton();

/*   										
var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("CLICK ME");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);                    // Append <button> to <body>

function createCallback( i ){
  return function(){
    alert('you clicked' + i);
  }
}

$(document).ready(function(){
  for(var i = 0; i < 20; i++) {
    $('#question' + i).click( createCallback( i ) );
  }
});
*/