var debug=true;

var a_clock_stopping_fouls = [
"Guard A63 in a three-point stance lifts his hand from the ground prior to the snap.  ",
"As Team A breaks its huddle, A22 and A33 continue in motion laterally as their teammates all stop and set into their positions. A22 comes to a stop but A33 continues his motion at the snap. All eleven players are never set for one second before the ball is snapped.  ",
"A substitute enters Team A's huddle, and no teammate leaves the field. Then Team A breaks the huddle with 12 players.  ",
"Team A commits a delay of game foul"
];

var b_clock_stopping_fouls = [
"Defensive tackle B77 jumps into the neutral zone and makes contact with an opponent.  ",
"B66 jumps through the neutral zone and is moving unabated toward the QB as the ball is snapped.  "
]

var a_live_ball_fouls_at_snap =  [
"Team A players all set for one second, then A22 and A33 start in motion (no false start). At the snap, A22 has been set for one second while A33 continues his motion.  ",
"Team A is lined up with 5 men in the backfield at the snap.  "
];

var b_live_ball_fouls_at_snap = [
"B77 is lined up in the neutral zone at the snap but does not make contact.  ",
"Defensive tackle B73 is flagged for being in the neutral zone at the snap.  ",
"Team B has 12 men on the field at the snap.  "
];

var a_live_ball_fouls = [
"Right tackle A77 is flagged for holding.  "
];

var b_live_ball_fouls = [
"Defensive tackle B73 is flagged for holding.  ",
"Safety B12 commits defensive pass interference.  ",
"B65 commits a personal foul (hands to the face) during the down.  "
]

//Runoff: 0 - none, 1 - B's option, 2 - A's option
//Foul: 0 - none, 1 - A foul, 2 - B foul
//Start: 0 - Ready, 1 - Snap, 2 - Running
var endingPlays = [
	{text: "QB A22 throws an illegal forward pass to A9 who is tackled short of the line to gain.  " ,
	 runoff: 0,
	 clock: 25,
	 foul: 1,
	 start: 0,
	 cop: 0},
	 {text: "QB A22 throws an illegal forward pass to A9 who is tackled beyond of the line to gain.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 1,
	 start: 0,
	 cop: 0},
	 {text: "As he is about to be tackled near the sideline, ball carrier A22 throws the ball backward and out of bounds to stop the clock.  ",
	 runoff: 1,
	 clock: 25,
	 foul: 1,
	 start: 0,
	 cop: 0},
	 {text: "QB A22 throws an illegal forward pass which falls incomplete beyond the neutral zone.  ",
	 runoff: 1,
	 clock: 25,
	 foul: 1,
	 start: 1,
	 cop: 0},
	 {text: "QB A22 throws an illegal forward pass which falls incomplete behind the neutral zone.  ",
	 runoff: 1,
	 clock: 25,
	 foul: 1,
	 start: 1,
	 cop: 0},
	 {text: "A22 is tackled by the facemask short of the line to gain.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 2,
	 start: 0,
	 cop: 0},
	 {text: "A22 is tackled by the facemask beyond the line to gain.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 2,
	 start: 0,
	 cop: 0},
	 {text: "The ball carrier is tackled inbounds short of the line to gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 2,
	 cop: 0},
	 {text: "The ball carrier is tackled inbounds short of the line to gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 2,
	 cop: 0},
	 {text: "The ball carrier is tackled inbounds beyond the line to gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 0,
	 cop: 0},
	 {text: "The ball carrier is tackled inbounds beyond the line to gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 0,
	 cop: 0},
	 {text: "The quarterback's forward pass is incomplete.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 1,
	 cop: 0},
	 {text: "The quarterback's forward pass is incomplete.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 1,
	 cop: 0},
	 {text: "Team A's punt is short and is recovered behind the neutral zone by A34 who is immediately tackled.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 0,
	 start: 1,
	 cop: 0},
	 {text: "A2's pass is intercepted at the 50 by B54, who runs for a short gain then is tackled.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 0,
	 start: 1,
	 cop: 1},
	 {text: "B89 intercepts the pass and is tackled at the 50 yard line.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 0,
	 start: 1,
	 cop: 1},
	 {text: "A32 is tackled for no gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 2,
	 cop: 0},
	 {text: "Runner A22 fumbles the ball at the 50 yard line and it goes out of bounds at the B45 yard line.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 0,
	 cop: 0},
	 {text: "B35 intercepts a pass and returns it for a touchdown.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 0,
	 start: 1,
	 cop: 1},
	 {text: "B35 intercepts a pass and is tackled at the A-20.  ",
	 runoff: 0,
	 clock: 25,
	 foul: 0,
	 start: 0,
	 cop: 1},
	 {text: "A22 runs out of bounds short of the line to gain.  ",
	 runoff: 0,
	 clock: 40,
	 foul: 0,
	 start: 1,
	 cop: 0}

]

// 0 - A, 1 - B, 2 - Both
var helmet_plays = [
	{text: "During the play A66's helmet comes off.  "  ,
	 team: 0},
	 	{text: "During the play, A55 loses his helmet.  ",
	 team: 0},
	 	{text: "During the play A33's helmet comes off.  ",
	 team: 0},
	 	{text: "During the play B35's helmet comes off.  ",
	 team: 1},
	 	{text: "During the play helmets come off A77 and B53.  ",
	 team: 2}
]

var injury_plays = [
	{text: "During the play A82 is injured.  " ,
	 team: 0},
	 {text: "During the play, A55 is injured.  "  ,
	 team: 0},
	 {text: "During the play B75 is injured.  " ,
	 team: 1},
	 {text: "During the play, B78 is injured.  "  ,
	 team: 1},
	 {text: "During the play both A66 and B39 go down with injuries.  "  ,
	 team: 2}
]

var runner = getParameterByName("runner")
var orgRunner = getParameterByName("theOrg")
var runCount = 0

var CFOPlays = [
[0,-1,-1,-1,-1,-1],
[-1,0,-1,-1,-1,-1],
[1,-1,-1,-1,-1,-1],
[-1,-1,0,-1,-1,-1,8],
[-1,-1,-1,0,-1,-1,8],
[2,-1,-1,-1,-1,-1],
[-1,-1,-1,0,-1,-1,2],
[-1,-1,-1,-1,-1,-1,2,0],
[-1,-1,-1,-1,-1,-1,2,3,-1],
[-1,-1,-1,-1,-1,-1,2,-1,0],
[-1,-1,-1,-1,-1,-1,2,-1,2],
[-1,-1,-1,-1,-1,-1,8,1,-1],
[-1,-1,-1,-1,0,-1,8,1,-1],
[-1,-1,-1,1,-1,-1,8,1,-1],
[-1,-1,-1,-1,-1,-1,9,1,-1],
[-1,-1,-1,-1,-1,-1,9,3,-1],
[-1,-1,-1,-1,-1,-1,8,4,-1],
[-1,-1,-1,-1,-1,-1,8,-1,1],
[-1,-1,-1,-1,-1,-1,8,-1,3],
[-1,-1,-1,-1,-1,-1,11,-1,1],
[-1,-1,-1,-1,-1,-1,11,-1,2],
[-1,-1,-1,-1,-1,-1,8,-1,4],
[-1,-1,-1,-1,-1,-1,8,0,0],
[-1,-1,-1,-1,-1,-1,8,0,3],
[-1,-1,-1,-1,-1,-1,8,3,3],
[-1,-1,-1,-1,-1,-1,8,3,0],
[-1,-1,-1,-1,-1,-1,10,3,3]
]

var orgPlays = [
[-1,-1,-1,-1,-1,1,15,3],
[-1,-1,1,0,-1,-1,16,-1,3],
[-1,-1,-1,-1,-1,-1,0],
[-1,-1,-1,-1,-1,-1,5],
[-1,-1,-1,-1,-1,-1,12,-1,4],
[-1,-1,-1,2,-1,-1,17],
[-1,-1,-1,-1,-1,2,18,-1,3],
[0,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,8,-1,0],
[2,-1,-1,-1,-1,-1],
[3,-1,-1,-1,-1,-1],
[-1,1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,1,19,-1,3],
[-1,-1,-1,-1,-1,-1,20,3,-1],
[-1,-1,-1,-1,-1,-1,16,-1,0],
[-1,-1,-1,-1,-1,-1,12,-1,3]
]

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function randElement(array, place) {
	place = typeof place !== 'undefined' ? place : -1;
	pick = Math.floor(Math.random() * array.length)
	pick_debug[place] = pick
	return array[pick]
}

function randElementMaybe(array, chance, place) {
	if(Math.random() > chance/100) { 
		place = typeof place !== 'undefined' ? place : -1;
		pick_debug[place] = -1
		return null 
	}
	pick = Math.floor(Math.random() * array.length)
	pick_debug[place] = pick
	return array[pick]
}

var prob_debug = []
var pick_debug = [-1, -1, -1, -1, -1, -1]

function test(place) {
	var play_probs = [10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20]
	if(Math.random() < play_probs[place]/100) {
		return true
	}
	pick_debug[place] = -1
	return false
}

function oneOfFourMaybe(place) {
	var play_probs = [40, 20]
	if(Math.random() < play_probs[place]/100) {
		return pick(0,3)
	}
	return 0
}

function pick(min, max) {
	var pick = Math.floor(Math.random() * (max - min + 1)) + min;
	return pick;
}

var all = [a_clock_stopping_fouls, b_clock_stopping_fouls, a_live_ball_fouls_at_snap, b_live_ball_fouls_at_snap, a_live_ball_fouls, b_live_ball_fouls];

var a_foul
var b_foul
var helmets_off // 0 - none, 1 - A only, 2 - B only, 3 - Both
var injuries
var runoff_option // 1 - B runoff option, 2 - A runoff option, 3- None
var dead
var forty_clock
var ready_snap 

function generatePlay() {
	_gaq.push(['_trackEvent', 'button', 'pushed'])
	var param = getParameterByName("play")
	if(param != "") {
		var storedPlays = param.replace(/\s+/g, '').split(',');
		for(var i=0; i<storedPlays.length; i++) { storedPlays[i] = +storedPlays[i]; } 
		console.log(storedPlays)
	} else {
		storedPlays = []
	} 
	if(runner=="true") {
		storedPlays = CFOPlays[runCount]
		runCount++
		if(runCount>=27) { runCount = 0 }
	}
	if(orgRunner=="true") {
		storedPlays = orgPlays[runCount]
		runCount++
		if(runCount>=16) { runCount = 0 }
	}
	a_foul=false
	b_foul=false
	helmets_off = 0 // 0 - none, 1 - A only, 2 - B only, 3 - Both
	injuries = 0
	runoff_option = 0 // 1 - B runoff option, 2 - A runoff option, 3- None
	dead=false
	forty_clock=false
	ready_snap = 0 //0 - ready, 1 - snap, 2 - running
	pick_debug = [-1, -1, -1, -1, -1, -1]
	play = ""
	if(storedPlays.length>0) {
		for (i=0; i<6; i++) {
			if(storedPlays[i]>-1) {
				play+=all[i][storedPlays[i]]
				if(i==0 || i==1) {
					i==0 ? a_foul=true : b_foul=true
					i==0 ? runoff_option=1 : runoff_option=2
					dead=true
					break
				}
				if(i==0 || i==2 || i==4 ) {
					a_foul = true
				}
				if(i==1 || i==3 || i==5) {
					b_foul = true
				}
			}
		}
	} else {
		for (i=0; i<6; i++) {
			if(test(i)) {
				play+=randElement(all[i], i);
				if(i==0 || i==1) {
					i==0 ? a_foul=true : b_foul=true
					i==0 ? runoff_option=1 : runoff_option=2
					dead=true
					break
				}
				if(i==0 || i==2 || i==4 ) {
					a_foul = true
				}
				if(i==1 || i==3 || i==5) {
					b_foul = true
				}
			}
		}
	}

	if(!dead) {
		var ending_play, helmet_play, injury_play
		if(storedPlays.length>0) {
			ending_play = endingPlays[storedPlays[6]]
			if(storedPlays[7] > -1) helmet_play = helmet_plays[storedPlays[7]]
			if(storedPlays[8] > -1) injury_play = injury_plays[storedPlays[8]]
		} else {
			ending_play = randElement(endingPlays, 6)
			helmet_play = randElementMaybe(helmet_plays, 30, 7)
			injury_play = randElementMaybe(injury_plays, 30, 8)
		}
		play+=ending_play.text
		a_foul = a_foul || (ending_play.foul == 1)
		b_foul = b_foul || (ending_play.foul == 2)
		runoff_option = ending_play.runoff
		if(a_foul && b_foul) { runoff_option = 0 }

		//Forty clock only set if there are no fouls
		forty_clock = (ending_play.clock==40 && !a_foul && !b_foul)
		ready_snap = ending_play.start
		if(ready_snap == 2 && (a_foul || b_foul)) { ready_snap = 0 }
		if(ending_play.cop && b_foul && ready_snap == 1) { ready_snap = 0 }

		if(helmet_play || injury_play) {
			if(helmet_play) {
				helmets_off = helmet_play;
				play+=helmets_off.text
			} 
			if(injury_play) {
				injuries = injury_play;
				play+=injuries.text;
			}

			/* Calculating the state of the 40 clock */
			if((injury_play != null && injury_play.team > 0) || (helmet_play != null && helmet_play.team > 0)) {
				forty_clock = true
			} else {
				forty_clock = false
			}
			
			if(ready_snap == 2) { 
				ready_snap = 0 
				//No runoff (yet) and no offsetting fouls
				if(runoff_option == 0 && (!a_foul && !b_foul)) {
					if(injury_play != null && helmet_play != null && injury_play.team != helmet_play.team) {
						runoff_option = 0
					} else if((injury_play != null && injury_play.team == 0) || (helmet_play != null && helmet_play.team == 0)) {
						runoff_option = 1
					} else if((injury_play != null && injury_play.team == 1) || (helmet_play != null && helmet_play.team == 1)) {
						runoff_option = 2
					}
				}
			}

			/* Calculate the runoff state.  Complicated due to offesetting fouls/injuries/hemlets off */
			//No runoff for offseting helmet/injuries
			if((injury_play != null && injury_play.team == 3) || (helmet_play != null && helmet_play.team == 3)) {
				runoff_option = 0
			}
			//Runoff option from foul, and offsetting injury/helmet
			else if(
				((injury_play != null && injury_play.team == 1) || (helmet_play != null && helmet_play.team == 1)) && (a_foul && ending_play.runoff==1) ||
				((injury_play != null && injury_play.team == 2) || (helmet_play != null && helmet_play.team == 2) && runoff_option == 2)
			  ) {
				runoff_option = 0
			}

			

		}		
	}

	console.log(pick_debug)
	



	var situation_text = "<p style=font-size:120%;><i><b>Situation:</b> " + play + "</i></p>";
	var debug_text = "<b>Answers:</b><br>" +
		"A foul: "+ a_foul + 
		"<br>B foul:  " + b_foul +
		"<br>Helmets off: " + (helmets_off==1 ? "A" : helmets_off==2 ? "B" : helmets_off==3 ? "Both" : "None") +
		"<br>Injuries: " + (injuries==1 ? "A" : injuries==2 ? "B" : injuries==3 ? "Both" : "Neither") +
		"<br>Runoff option: " + (runoff_option==1 ? "B's choice" : runoff_option==2 ? "A's choice" : runoff_option==3 ? "Neither" : "Neither") +
		"<br>Play clock: " + (forty_clock ? "40" : "25") +
		"<br>Clock starts on: " + (ready_snap==0 ? "Ready" : ready_snap==1 ? "Snap" : "Running") +
		"<br>Debug info: " + pick_debug
	document.getElementById("demo").innerHTML = situation_text; 
	document.getElementById("debug").hidden = true;
	document.getElementById("debug").innerHTML = debug_text; 
	document.getElementById("answer").innerHTML = "";
	resetButtons()

}

function resetButtons() {
	document.getElementById("aFoul").checked = false;
	document.getElementById("bFoul").checked = false;
	document.getElementById("noRunoff").checked = false
	document.getElementById("aRunoff").checked = false
	document.getElementById("bRunoff").checked = false
	document.getElementById("25clock").checked = false
	document.getElementById("40clock").checked = false
	document.getElementById("readyClock").checked = false
	document.getElementById("snapClock").checked = false
	document.getElementById("runningClock").checked = false
}

function gradeAnswers() {
	document.getElementById("debug").hidden = false;
	var wrongHTML = "<p style=color:red;font-size:150%;font-family:'Georgia';>Incorrect</p>";
	if(document.getElementById("aFoul").checked != a_foul) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;
	}
	if(document.getElementById("bFoul").checked != b_foul) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;
	}
	if(runoff_option == 1 && !document.getElementById("bRunoff").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if(runoff_option == 2 && !document.getElementById("aRunoff").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if((runoff_option == 0 || runoff_option == 3) && !document.getElementById("noRunoff").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if(forty_clock != document.getElementById("40clock").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if(ready_snap == 0 && !document.getElementById("readyClock").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if(ready_snap == 1 && !document.getElementById("snapClock").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	if(ready_snap == 2 && !document.getElementById("runningClock").checked) {
		document.getElementById("answer").innerHTML = wrongHTML
		return;	
	}
	document.getElementById("answer").innerHTML = "<p style=color:green;font-size:150%;font-family:'Georgia';>Correct!</p>";

}