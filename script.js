function convert_dec(){
    var input = parseInt(document.getElementById("dec").value, 10);
    document.getElementById("bin").innerHTML = input.toString(2);
    document.getElementById("oct").innerHTML = input.toString(8);
    document.getElementById("hex").innerHTML = input.toString(16);   
}
function convert_bin(){
    var input = parseInt(document.getElementById("bin").value, 2);
    // var input = parseInt(input, 2)
    document.getElementById("dec").innerHTML = input.toString(10);
    document.getElementById("oct").innerHTML = input.toString(8);
    document.getElementById("hex").innerHTML = input.toString(16);
}
function convert_oct(){
    var input = parseInt(document.getElementById("oct").value, 8);
    document.getElementById("dec").innerHTML = input.toString(10);
    document.getElementById("bin").innerHTML = input.toString(2);
    document.getElementById("hex").innerHTML = input.toString(16);    
}
function convert_hex(){
    var input = parseInt(document.getElementById("hex").value, 16);
    document.getElementById("dec").innerHTML = input.toString(10);
    document.getElementById("bin").innerHTML = input.toString(2);
    document.getElementById("oct").innerHTML = input.toString(8);
}

  function decToBinaryReset() {
	 
    document.getElementById("dec").value = "";
      document.getElementById("bin").value = "";
      document.getElementById("hex").value = "";
      document.getElementById("oct").value = "";
    }