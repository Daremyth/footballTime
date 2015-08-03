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
"QB A22 throws an illegal forward pass to A9 who is tackled short of the line to gain.  ",
"QB A22 throws an illegal forward pass to A9 who is tackled beyond of the line to gain.  "
]

var a_live_ball_fouls_play_ending_time = [
"As he is about to be tackled near the sideline, ball carrier A22 throws the ball backward and out of bounds to stop the clock.  ",
"QB A22 throws an illegal forward pass which falls incomplete beyond the neutral zone.  ",
"QB A22 throws an illegal forward pass which falls incomplete behind the neutral zone.  "
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
"The quarterback's forward pass is incomplete.  ",
];

var play_ends_clock_stops_25 = [
"Team A's punt is short and is recovered behind the neutral zone by A34 who is immediately tackled.  ",
"A2's pass is intercepted at the 50 by B54, who runs for a short gain then is tackled.  "
]

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

function oneOfFourMaybe(place) {
	var play_probs = [80, 80]
	if(Math.random() < play_probs[place]/100) {
		return pick(0,3)
	}
	return 0
}

function pick(min, max) {
	var pick = Math.floor(Math.random() * (max - min + 1)) + min;
	setDebug(pick)
	return pick;
}

var all = [a_clock_stopping_fouls, b_clock_stopping_fouls, a_live_ball_fouls_at_snap, b_live_ball_fouls_at_snap, a_live_ball_fouls, b_live_ball_fouls, 
/*6*/ a_live_ball_fouls_play_ending, a_live_ball_fouls_play_ending_time, b_live_ball_fouls_play_ending, play_ends_clock_runs, play_ends_clock_stops, play_ends_clock_stops_25, 
/*12*/ a_helmet_off, b_helmet_off, a_and_b_helmet_off, a_injury, b_injury, a_and_b_injury];

function generatePlay() {
	var play = ""
	var a_foul=false
	var b_foul=false
	var helmets_off = 0 // 0 - none, 1 - A only, 2 - B only, 3 - Both; BITMASK FTW
	var injuries = 0
	var runoff_option = 0 // 1 - B runoff option, 2 - A runoff option, 3- None
	var dead=false
	var forty_clock=false
	for (i=0; i<6; i++) {
		if(test(i)) {
			play+=randElement(all[i]);
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
	if(!dead) {
		var ending_play = pick(6,11)
		if(ending_play == 6 || ending_play == 7 ) { a_foul = true; runoff_option=1 }
		if(ending_play == 8) { b_foul = true }
		if(ending_play == 9 || ending_play==10) { forty_clock = true }
		console.log(ending_play)
		play+=randElement(all[ending_play])
		helmet_play = oneOfFourMaybe(0)
		if(helmet_play>0) {
			helmets_off = helmet_play;
			if(ending_play!=10) { runoff_option = helmet_play; }
			if(helmet_play==2) { forty_clock = true } else { forty_clock = false }
			play+=randElement(all[helmet_play+11])
		}
		console.log(helmet_play)
		injury_play = oneOfFourMaybe(0)
		if(injury_play>0) {
			injuries = injury_play;
			if(ending_play!=10) { runoff_option = injury_play; }
			if(injury_play==2) { forty_clock = true } else { if(helmet_play!=2) { forty_clock = false }}
			play+=randElement(all[injury_play+14])
		}
		console.log(injury_play)
		//Opposing actions = no runoff
		if(injury_play + helmet_play == 3 || injury_play == 3 || helmet_play == 3) { runoff_option = false }
		if(a_foul || b_foul) { runoff_option = false }
	}
	



	var situation_text = "Situation: " + play;
	if(debug) {
		situation_text += "<br><br>Debug info:<br>" +
		"A foul: "+ a_foul + 
		"<br>B foul:  " + b_foul +
		"<br>Helmets off: " + (helmets_off==1 ? "A" : helmets_off==2 ? "B" : helmets_off==3 ? "Both" : "None") +
		"<br>Injuries: " + (injuries==1 ? "A" : injuries==2 ? "B" : injuries==3 ? "Both" : "Neither") +
		"<br>Runoff option: " + (runoff_option==1 ? "B's choice" : runoff_option==2 ? "A's choice" : runoff_option==3 ? "Neither" : "Neither") +
		"<br>Play clock: " + (forty_clock ? "40" : "25")
	}
	document.getElementById("demo").innerHTML = situation_text; 
}