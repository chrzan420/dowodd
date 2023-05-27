let literki = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
"L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let wagi = [7,3,1,7,3,1,7,3];
let liczby = [1,2,3,4,5,6,7,8,9]

function generuj(){
	
	let cyfry = "";
	let litery = "";
	let suma = 0;
	
	for(var i=0; i<3; i++){
    litery = litery + literki[Math.floor(Math.random() * literki.length)];
	}
	console.log(litery);

	for(var i=0; i<5; i++){
	cyfry = cyfry + liczby[Math.floor(Math.random() * liczby.length)];
    suma = suma + (cyfry[i] * wagi[i]);
	suma %= 10;
	}
	console.log(suma);
	console.log(cyfry);
	

document.getElementById("wynik").innerText = litery + suma + cyfry;
}

