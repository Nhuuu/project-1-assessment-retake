document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");

	var calculate = document.querySelector('#converter');
	calculate.addEventListener('submit',function(e){
		e.preventDefault();
	    var temp = document.getElementById('tempInput').value;
		var output = document.getElementById('output');
		output.textContent = (((temp - 32) * 5 /9) + "C"); 
	    })
})