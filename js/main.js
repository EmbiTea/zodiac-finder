
// just makes sure that all <select> & <input> are reset upon refreshing
document.querySelector("#r-signs").options[0].selected = true
document.querySelector("#c-signs").options[0].selected = true
document.querySelector("#c-types").options[0].selected = true
document.querySelector("#z-date").value = ""

// --------------------------------------------------------- //
// ------------- <OPTION> TRANSLATED ARRAYS ---------------- //
const rSignList = document.querySelectorAll("#r-signs option")
const rSignArray = Array.from(rSignList).map(el => el.value)
    // [0] = "-----------"
    // [1] = "Aries"        [7] = "Libra"
    // [2] = "Taurus"       [8] = "Scorpio"
    // [3] = "Gemini"       [9] = "Sagittarius"
    // [4] = "Cancer"       [10] = "Capricorn"
    // [5] = "Leo"          [11] = "Aquarius"
    // [6] = "Virgo"        [12] = "Pisces"

const cSignList = document.querySelectorAll("#c-signs option")
const cSignArray = Array.from(cSignList).map(el => el.value)
    // [0] = "-----------"
    // [1] = "Rat"      [7] = "Horse"
    // [2] = "Ox"       [8] = "Goat"
    // [3] = "Tiger"    [9] = "Monkey"
    // [4] = "Rabbit"   [10] = "Rooster"
    // [5] = "Dragon"   [11] = "Dog"
    // [6] = "Snake"    [12] = "Pig"

const cTypeList = document.querySelectorAll("#c-types option")
const cTypeArray = Array.from(cTypeList).map(el => el.value)
    // [0] = "-----------"
    // [1] = "Wood"
    // [2] = "Fire"
    // [3] = "Earth"
    // [4] = "Metal"
    // [5] = "Water"

// --------------------------------------------------------- //
// ---------------- DATA REFERENCE ARRAYS ------------------ //
const rZodiac = {
	signs: [
		"Aries",		// [0]	
		"Taurus",		// [1]
		"Gemini",		// [2]
		"Cancer", 		// [3]
		"Leo",			// [4]
		"Virgo",		// [5]
		"Libra",		// [6]
		"Scorpio",		// [7]
		"Sagittarius",	// [8]
		"Capricorn",	// [9]
		"Aquarius",		// [10]
		"Pisces"		// [11]
	],
	elements: [
		"Fire",		// [0]
		"Earth",	// [1]
		"Air",		// [2]
		"Water"		// [3]
	],
	cusps: [
		"Pisces-Aries",				// [0]
		"Aries-Taurus",				// [1]
		"Taurus-Gemini",			// [2]
		"Gemini-Cancer",			// [3]
		"Cancer-Leo",				// [4]
		"Leo-Virgo",				// [5]
		"Virgo-Libra",				// [6]
		"Libra-Scorpio",			// [7]
		"Scorpio-Sagittarius",		// [8]
		"Sagittarius-Capricorn",	// [9]
		"Capricorn-Aquarius",		// [10]
		"Aquarius-Pisces",			// [11]
        "N/A"                       // [12]
	],
	ranges: [	// cusp ranges:
		"16-23",	//	[0] January Only
		"15-21",	//	[1] February Only
		"16-22",	//	[2] April Only
		"17-23",	//	[3] March & May-June
		"19-25",	//	[4] July-October
		"18-24"		//	[5] November-December
	]
}

const cZodiac = {
	signs: [	// matched index accordingly for calculation purposes 
		"Monkey",	//	[0]
		"Rooster",	//	[1]
		"Dog",		//	[2]
		"Pig",		//	[3]
		"Rat",		//	[4]
		"Ox",		//	[5]
		"Tiger",	//	[6]
		"Rabbit",	//	[7]
		"Dragon",	//	[8]
		"Snake",	//	[9]
		"Horse",	//	[10]
		"Goat", 	//	[11]
	],
	elements: [ // last digit of birth year:
		"Wood",		//	[0] 4-5
		"Fire",		//	[1] 6-7
		"Earth",	//	[2] 8-9
		"Metal",	//	[3] 0-1
		"Water"		//	[4] 2-3
	],
	calcSign(year) {
		// divide year by 12
			// if year%12 === some # of a remainder && remainder === float integer => take the decimals, multiply by 12, round up/down accordingly, return resulting whole integer
		// correspond resulting whole integer with animal 
	}
}
// --------------------------------------------------------- //
// --------------------------------------------------------- //

document.querySelector("#find-rDates").addEventListener("click",findRDatesResults)
document.querySelector("#find-cDates").addEventListener("click",findCDatesResults)
document.querySelector("#find-zResults").addEventListener("click",findSignResults)

function findSignResults() {
    let date = document.querySelector("#z-date").value

    document.querySelector("#print-rSign").innerText = findRomanSign(date)
    document.querySelector("#print-rCusp").innerText = checkIfCusp(date)
}

// breakdown on functions needed AKA what i need:
    // corresponds month & day to roman sign
        // prints sign
        // prints element corresponding to sign
    // checks if month & day fall within a roman cusp range
        // prints roman cusps (2)
    // corresponds year to chinese sign
        // prints sign (requires calculation on the year:)
            // divide year by 12 (we are working with the remainders NOT the whole numbers!)
                // if remainder === float integer:
                    // take the DECIMALS => multiply by 12 => round up/down accordingly
            // correspond resulting WHOLE INTEGER with animal (cZodiac.signs's indices already matched to answer (ex. 0 = monkey))
    // corresponds LAST DIGIT OF BIRTH YEAR to chinese sign element

