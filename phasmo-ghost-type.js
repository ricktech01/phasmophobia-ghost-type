var out = document.getElementById("out");
var ev1 = document.getElementById("ev1");
var ev2 = document.getElementById("ev2");
var ev3 = document.getElementById("ev3");

class Ghost {
	constructor(name, ...evidence){
		this.name = name;
		this.evidence = evidence;
	}
	hasEvi(evi){
		return(this.evidence.includes(evi));
	}
}
var ghosts = [new Ghost("Banshee", 1, 2, 3), 
				new Ghost("Demon", 3, 5, 6),
				new Ghost("Jinn",1, 4, 6),
				new Ghost("Mare", 3, 4, 6),
				new Ghost("Oni", 1, 3, 4),
				new Ghost("Phantom", 1, 3, 4),
				new Ghost("Poltergeist", 2, 4, 6),
				new Ghost("Revenant", 1, 2, 4),
				new Ghost("Spade", 1, 4, 5),
				new Ghost("Sprit", 2, 5, 6),
				new Ghost("Wraith", 2, 3, 6),
				new Ghost("Yurei", 3, 4, 5)]
var evNames ["-", "EMF Level 5", "Fingerprints", 
"Freezing Temperatures", "Ghost Orb", "Ghost Writing", "Spirit Box";
function update(){
	e1 = ev1.value; e2 = ev2.value; e3 = ev3.value;
	out.innerHTML = ghosts[2].name + " " + evNames[parseInt(e1)] + " " + evNames[parseInt(e2)] + " " + evNames[parseInt(e3)];
}