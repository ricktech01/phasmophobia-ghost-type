var pg = document.getElementById("pg");
var pe = document.getElementById("pe");
var ev1 = document.getElementById("ev1");
var ev2 = document.getElementById("ev2");
var ev3 = document.getElementById("ev3");
var evNames = ["-", "EMF Level 5", "Fingerprints", "Freezing Temperatures", "Ghost Orb", "Ghost Writing", "Spirit Box"];
class Ghost {
	constructor(name, ...evidence){
		this.name = name;
		this.evidence = evidence;
	}
	hasEvi(evi){
		return(this.evidence.includes(evi));
	}
	otherEvi(evi1){
		var temp = this.evidence;
		for (var i = 0; i < 3; i++){
			if (temp == evi1)
				temp.splice(i, 1)
		}
		return temp;
	}
	otherEvi(evi1, ev2){
		var temp = this.evidence;
		for (var i = 0; i < 3; i++){
			if (temp == evi1)
				temp.splice(i, 1)
		}
		for (var i = 0; i < 2; i++){
			if (temp == evi2)
				temp.splice(i, 1)
		}
		return temp;
	}
}
var ghosts = [new Ghost("Banshee", 1, 2, 3), 
				new Ghost("Demon", 3, 5, 6),
				new Ghost("Jinn",1, 4, 6),
				new Ghost("Mare", 3, 4, 6),
				new Ghost("Oni", 1, 5, 6),
				new Ghost("Phantom", 1, 3, 4),
				new Ghost("Poltergeist", 2, 4, 6),
				new Ghost("Revenant", 1, 2, 5),
				new Ghost("Shade", 1, 4, 5),
				new Ghost("Sprit", 2, 5, 6),
				new Ghost("Wraith", 2, 3, 6),
				new Ghost("Yurei", 3, 4, 5)]


function update(){
	e1 = parseInt(ev1.value); e2 = parseInt(ev2.value);

	gl = [...ghosts];

	if (e1 > 0) {
		for (var i = 0; i < gl.length; i++){
			if (!gl[i].hasEvi(e1)) {
				gl.splice(i, 1); 
				i--;
			}

		}
	}
	if (e2 > 0) {
		for (var i = 0; i < gl.length; i++){
			if (!gl[i].hasEvi(e2)) {
				gl.splice(i, 1); 
				i--;
			}

		}
	}
	
	var posGhosts = "";
	var posEvi = [];

	for (var i = 0; i < gl.length; i++) {
		posGhosts += "\t- " +  gl[i].name + " (" + evNames[gl[i].evidence[0]] + ", " + evNames[gl[i].evidence[1]] + ", " + evNames[gl[i].evidence[2]] +") <br>";
		for (var j = 0; j < 3; j++){
			if (gl[i].evidence[j] != e1 && gl[i].evidence[j] != e2){
				if (!posEvi.includes(gl[i].evidence[j])){
					posEvi.push(gl[i].evidence[j]);
				}
			}
		}
	}
	console.log(posEvi);
	pg.innerHTML = posGhosts;
	var posEv = "";
	for (var i = 0; i<posEvi.length; i++){
		posEv += "\t- " + evNames[posEvi[i]] + "<br>"; 
	}
	pe.innerHTML = posEv;
	//out.innerHTML = ghosts[2].name + " " + evNames[parseInt(e1)] + " " + evNames[parseInt(e2)] + " " + evNames[parseInt(e3)];
	
	
}