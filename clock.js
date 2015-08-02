var debug=true;

var a_clock_stopping_fouls = [
"Guard A63 in a three-point stance lifts his hand from the ground prior to the snap.  ",
"As Team A breaks its huddle, A22 and A33 continue in motion laterally as their teammates all stop and set into their positions. A22 comes to a stop but A33 continues his motion at the snap. All eleven players are never set for one second before the ball is snapped.  ",
"A substitute enters Team A's huddle, and no teammate leaves the field. Then Team A breaks the huddle with 12 players.  "
];

var b_clock_stopping_fouls = [
"Defensive tackle B77 jumps into the neutral zone and makes contact with an opponent.  "
]

var a_live_ball_fouls_at_snap =  [
"Team A players all set for one second, then A22 and A33 start in motion (no false start). At the snap, A22 has been set for one second while A33 continues his motion.  ",
"Team A is lined up with 5 men in the backfield at the snap.  "
];

var b_live_ball_fouls_at_snap = [
"B77 is lined up in the neutral zone at the snap but does not make contact.  ",
"Defensive tackle B73 is flagged for being in the neutral zone at the snap.  "
];

var a_live_ball_fouls = [
"Right tackle A77 is flagged for holding.  "
];

var b_live_ball_fouls = [
"Defensive tackle B73 is flagged for holding.  "
]

var a_live_ball_fouls_play_ending = [
"As he is about to be tackled near the sideline, ball carrier A22 throws the ball backward and out of bounds to stop the clock.  "
];

var b_live_ball_fouls_play_ending = [
"A22 is tackled by the facemask short of the line to gain.  ",
"A22 is tackled by the facemask beyond the line to gain.  "
]

var play_ends_clock_runs = [
"The ball carrier is tackled inbounds short of the line to gain.  "
];

var play_ends_clock_stops = [
"The ball carrier is tackled inbounds beyond the line to gain.  ",
"The quarterback's forward pass is incomplete.  "
];

var a_helmet_off = [
"During the play A66's helmet comes off.  ",
"During the play, A55 loses his helmet.  ",
"During the play A33's helmet comes off.  "
];

var b_helmet_off = [
"During the play B35's helmet comes off.  ",
"During the play, B77 loses his helmet.  "
];

var a_and_b_helmet_off = [
"During the play helmets come off A77 and B53.  "
]

var a_injury = [
"During the play A82 is injured.  ", 
"During the play, A55 is injured.  "
];

var b_injury = [
"During the play B75 is injured.  ",
"During the play, B78 is injured.  "
];

var a_and_b_injury = [
"During the play both A66 and B39 go down with injuries.  "
]

function randElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var prob_debug = []
function setDebug(place) {
	prob_debug[place] = true
}

function test(place) {
	var play_probs = [10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20]
	if(Math.random() < play_probs[place]/100) {
		setDebug(place)
		return true
	}
	return false
}

function oneOfThreeMaybe(place) {
	var play_probs = [80, 80]
	if(Math.random() < play_probs[place]/100) {
		return pick(1,3)
	}
	return 0
}

function pick(min, max) {
	var pick = Math.floor(Math.random() * (max - min + 1)) + min;
	setDebug(pick)
	return pick;
}

var all = [a_clock_stopping_fouls, b_clock_stopping_fouls, a_live_ball_fouls_at_snap, b_live_ball_fouls_at_snap, a_live_ball_fouls, b_live_ball_fouls, 
/*6*/ a_live_ball_fouls_play_ending, b_live_ball_fouls_play_ending, play_ends_clock_runs, play_ends_clock_stops, 
/*10*/ a_helmet_off, b_helmet_off, a_and_b_helmet_off, a_injury, b_injury, a_and_b_injury];

function generatePlay() {
	var play = ""
	var a_foul=false
	var b_foul=false
	var helmets_off = 0; // 0 - none, 1 - A only, 2 - B only, 3 - Both; BITMASK FTW
	var injuries = 0;
	var dead=false
	for (i=0; i<6; i++) {
		if(test(i)) {
			play+=randElement(all[i]);
			if(i==0 || i==1) {
				i==0 ? a_foul=true : b_foul=true
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
	if(!dead) {
		var ending_play = pick(6,9)
		if(ending_play == 6) { a_foul = true }
		if(ending_play == 7) { b_foul = true }
		play+=randElement(all[ending_play])
		helmet_play = oneOfThreeMaybe(0)
		if(helmet_play>0) {
			helmets_off = helmet_play;
			play+=randElement(all[helmet_play+9])
		}
		injury_play = oneOfThreeMaybe(0)
		if(injury_play>0) {
			injuries = injury_play;
			play+=randElement(all[injury_play+12])
		}
	}
	



	var situation_text = "Situation: " + play;
	if(debug) {
		situation_text += "<br><br>Debug info:<br>" +
		"A foul: "+ a_foul + 
		"<br>B foul:  " + b_foul +
		"<br>Helmets off: " + (helmets_off==1 ? "A" : helmets_off==2 ? "B" : "Both") +
		"<br>Injuries: " + (injuries==1 ? "A" : injuries==2 ? "B" : "Both")
	}
	document.getElementById("demo").innerHTML = situation_text; 
}