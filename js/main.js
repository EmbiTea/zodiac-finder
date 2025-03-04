
// just makes sure that all <select> & <input> are reset upon refreshing
document.querySelector("#r-signs").options[0].selected = true;
document.querySelector("#c-signs").options[0].selected = true;
document.querySelector("#c-elements").options[0].selected = true;
document.querySelector("#z-date").value = "";

// --------------------------------------------------------- //
// ------------- <OPTION> TRANSLATED ARRAYS ---------------- //
const rSignList = document.querySelectorAll("#r-signs option");
const rSignArray = Array.from(rSignList).map(el => el.value);
    // [0] = "-----------"
    // [1] = "Aries"        [7] = "Libra"
    // [2] = "Taurus"       [8] = "Scorpio"
    // [3] = "Gemini"       [9] = "Sagittarius"
    // [4] = "Cancer"       [10] = "Capricorn"
    // [5] = "Leo"          [11] = "Aquarius"
    // [6] = "Virgo"        [12] = "Pisces"

const cSignList = document.querySelectorAll("#c-signs option");
const cSignArray = Array.from(cSignList).map(el => el.value);
    // [0] = "-----------"
    // [1] = "Rat"      [7] = "Horse"
    // [2] = "Ox"       [8] = "Goat"
    // [3] = "Tiger"    [9] = "Monkey"
    // [4] = "Rabbit"   [10] = "Rooster"
    // [5] = "Dragon"   [11] = "Dog"
    // [6] = "Snake"    [12] = "Pig"

const cElementList = document.querySelectorAll("#c-elements option");
const cElementArray = Array.from(cElementList).map(el => el.value);
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
		"Aries",		// [0]*	Mar. 21 - Apr. 19
		"Taurus",		// [1]	Apr. 20 - May 20
		"Gemini",		// [2]*	May 21 - Jun. 21
		"Cancer", 		// [3]*	Jun. 22 - Jul. 22
		"Leo",			// [4]*	Jul. 23 - Aug. 22
		"Virgo",		// [5]*	Aug. 23 - Sep. 22
		"Libra",		// [6]	Sep. 23 - Oct. 23
		"Scorpio",		// [7]	Oct. 24 - Nov. 21
		"Sagittarius",	// [8]	Nov 22. - Dec. 21
		"Capricorn",	// [9]*	Dec. 22 - Jan. 19
		"Aquarius",		// [10]*Jan. 20 - Feb. 18
		"Pisces"		// [11] Feb. 19 - Mar. 20
	],
	elements: [
		"Fire",		// [0]
		"Earth",	// [1]
		"Air",		// [2]
		"Water"		// [3]
	],
	cusps: [
		"Pisces-Aries",				// [0] Mar. 17-23
		"Aries-Taurus",				// [1] Apr. 16-22
		"Taurus-Gemini",			// [2] May 17-23
		"Gemini-Cancer",			// [3] Jun. 17-23
		"Cancer-Leo",				// [4] Jul. 19-25
		"Leo-Virgo",				// [5] Aug. 19-25
		"Virgo-Libra",				// [6] Sep. 19-25
		"Libra-Scorpio",			// [7] Oct. 19-25
		"Scorpio-Sagittarius",		// [8] Nov. 18-24
		"Sagittarius-Capricorn",	// [9] Dec. 18-24
		"Capricorn-Aquarius",		// [10] Jan. 16-23
		"Aquarius-Pisces",			// [11] Feb. 15-21
	]
};

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
	]
};
// --------------------------------------------------------- //
// --------------------------------------------------------- //

document.querySelector("#find-rDates").addEventListener("click", printRDates);
// document.querySelector("#find-cDates").addEventListener("click", printCDates);
document.querySelector("#find-signs").addEventListener("click", printSigns);

function printRDates() {
	let sign = document.querySelector("#r-signs").value;
	
	document.querySelector("#print-rDates").innerText = findRDates(sign);
	document.querySelector("#print-rcDates1").innerText = findRCDates1(sign);
	document.querySelector("#print-rcDates2").innerText = findRCDates2(sign);
}

function findRDates(sign){
	switch (sign) {
		case (rZodiac.signs[0]):	// Aries
			return `Mar. 21st–Apr. 19th`
		case (rZodiac.signs[1]):	// Taurus
			return `Apr. 20th–May 20th`
		case (rZodiac.signs[2]):	// Gemini
			return `May 21st–Jun. 21st`
		case (rZodiac.signs[3]):	// Cancer
			return `Jun. 22nd–Jul. 22nd`
		case (rZodiac.signs[4]):	// Leo
			return `Jul. 23rd–Aug. 22nd`
		case (rZodiac.signs[5]):	// Virgo
			return `Aug. 23rd–Sep. 22nd`
		case (rZodiac.signs[6]):	// Libra
			return `Sep. 23rd–Oct. 23rd`
		case (rZodiac.signs[7]):	// Scorpio
			return `Oct. 24th–Nov. 21st`
		case (rZodiac.signs[8]):	// Sagittarius
			return `Nov. 22nd–Dec. 21st`
		case (rZodiac.signs[9]):	// Capricorn
			return `Dec. 22nd–Jan. 19th`
		case (rZodiac.signs[10]):	// Aquarius
			return `Jan. 20th–Feb. 18th`
		case (rZodiac.signs[11]):	// Pisces
			return `Feb. 19th–Mar. 20th`
		default:
			return ``
	}
}

function findRCDates1(sign) {
	switch (sign) {
		case (rZodiac.signs[0]):	// Pisces-Aries
			return `${rZodiac.cusps[0]}: Mar. 17-23`
		case (rZodiac.signs[1]):	// Aries-Taurus
			return `${rZodiac.cusps[1]}: Apr. 16-22`
		case (rZodiac.signs[2]):	// Taurus-Gemini
			return `${rZodiac.cusps[2]}: May 17-23`
		case (rZodiac.signs[3]):	// Gemini-Cancer
			return `${rZodiac.cusps[3]}: Jun. 17-23`
		case (rZodiac.signs[4]):	// Cancer-Leo
			return `${rZodiac.cusps[4]}: Jul. 19-25`
		case (rZodiac.signs[5]):	// Leo-Virgo
			return `${rZodiac.cusps[5]}: Aug. 19-25`
		case (rZodiac.signs[6]):	// Virgo-Libra
			return `${rZodiac.cusps[6]}: Sep. 19-25`
		case (rZodiac.signs[7]):	// Libra-Scorpio
			return `${rZodiac.cusps[7]}: Oct. 19-25`
		case (rZodiac.signs[8]):	// Scorpio-Sagittarius
			return `${rZodiac.cusps[8]}: Nov. 18-24`
		case (rZodiac.signs[9]):	// Sagittarius-Capricorn
			return `${rZodiac.cusps[9]}: Dec. 18-24`
		case (rZodiac.signs[10]):	// Capricorn-Aquarius
			return `${rZodiac.cusps[10]}: Jan. 16-23`
		case (rZodiac.signs[11]):	// Aquarius-Pisces
			return `${rZodiac.cusps[11]}: Feb. 15-21`
		default:
			return ``
	}
}

function findRCDates2(sign) {
	switch (sign) {
		case (rZodiac.signs[0]):	// Aries-Taurus
			return `${rZodiac.cusps[1]}: Apr. 16-22`
		case (rZodiac.signs[1]):	// Taurus-Gemini
			return `${rZodiac.cusps[2]}: May 17-23`
		case (rZodiac.signs[2]):	// Gemini-Cancer
			return `${rZodiac.cusps[3]}: Jun. 17-23`
		case (rZodiac.signs[3]):	// Cancer-Leo
			return `${rZodiac.cusps[4]}: Jul. 19-25`
		case (rZodiac.signs[4]):	// Leo-Virgo
			return `${rZodiac.cusps[5]}: Aug. 19-25`
		case (rZodiac.signs[5]):	// Virgo-Libra
			return `${rZodiac.cusps[6]}: Sep. 19-25`
		case (rZodiac.signs[6]):	// Libra-Scorpio
			return `${rZodiac.cusps[7]}: Oct. 19-25`
		case (rZodiac.signs[7]):	// Scorpio-Sagittarius
			return `${rZodiac.cusps[8]}: Nov. 18-24`
		case (rZodiac.signs[8]):	// Sagittarius-Capricorn
			return `${rZodiac.cusps[9]}: Dec. 18-24`
		case (rZodiac.signs[9]):	// Capricorn-Aquarius
			return `${rZodiac.cusps[10]}: Jan. 16-23`
		case (rZodiac.signs[10]):	// Aquarius-Pisces
			return `${rZodiac.cusps[11]}: Feb. 15-21`
		case (rZodiac.signs[11]):	// Pisces-Aries
			return `${rZodiac.cusps[0]}: Mar. 17-23`
		default:
			return ``
	}
}

// function printCDates () {

// }

function printSigns() {
    let userDate = new Date(document.querySelector("#z-date").value);
	let rSign = findRSign(userDate);
	// const date = userDate.getUTCDate();
	// const month = userDate.getUTCMonth() + 1;
	// const year = userDate.getUTCFullYear();

    document.querySelector("#print-rSign").innerText = rSign;
    document.querySelector("#print-rElement").innerText = findRElement(rSign);
    document.querySelector("#print-rCusp").innerText = checkIfCusp(userDate);
    document.querySelector("#print-cSign").innerText = findCSign(userDate);
	document.querySelector("#print-cElement").innerText = findCElement(userDate);
}

function findRSign(userDate) {
	const month = userDate.getUTCMonth() + 1;
	const date = userDate.getUTCDate();
	
	switch (true) {
		case(month === 1 && date <= 19):
			return rZodiac.signs[9];
		case(month === 1 && date > 19):
			return rZodiac.signs[10];
		case(month === 2 && date <= 18):
			return rZodiac.signs[10];
		case(month === 2 && date > 18):
			return rZodiac.signs[11];
		case(month === 3 && date <= 20):
			return rZodiac.signs[11];
		case(month === 3 && date > 20):
			return rZodiac.signs[0];
		case(month === 4 && date <= 19):
			return rZodiac.signs[0];
		case(month === 4 && date > 19):
			return rZodiac.signs[1];
		case(month === 5 && date <= 20):
			return rZodiac.signs[1];
		case(month === 5 && date > 20):
			return rZodiac.signs[2];
		case(month === 6 && date <= 21):
			return rZodiac.signs[2];
		case(month === 6 && date > 21):
			return rZodiac.signs[3];
		case(month === 7 && date <= 22):
			return rZodiac.signs[3];
		case(month === 7 && date > 22):
			return rZodiac.signs[4];
		case(month === 8 && date <= 22):
			return rZodiac.signs[4];
		case(month === 8 && date > 22):
			return rZodiac.signs[5];
		case(month === 9 && date <= 22):
			return rZodiac.signs[5];
		case(month === 9 && date > 22):
			return rZodiac.signs[6];
		case(month === 10 && date <= 23):
			return rZodiac.signs[6];
		case(month === 10 && date > 23):
			return rZodiac.signs[7];
		case(month === 11 && date <= 21):
			return rZodiac.signs[8];
		case(month === 11 && date > 21):
			return rZodiac.signs[8];
		case(month === 12 && date <= 21):
			return rZodiac.signs[8];
		case(month === 12 && date > 21):
			return rZodiac.signs[9];
		default:
			return ``;
	}
}

function findRElement(sign) {
	switch (sign) {
		// *** NOT WORKING: Capricorn / Aquarius / Aries / Gemini / Cancer / Leo / Virgo ***
		// case (rZodiac.signs[8] || rZodiac.signs[4] || rZodiac.signs[0]):
		// 	return rZodiac.elements[0];
		// case (rZodiac.signs[1] || rZodiac.signs[5] || rZodiac.signs[9]):
		// 	return rZodiac.elements[1];
		// case (rZodiac.signs[6] || rZodiac.signs[10] || rZodiac.signs[2]):
		// 	return rZodiac.elements[2];
		// case (rZodiac.signs[11] || rZodiac.signs[7] || rZodiac.signs[3]):
		// 	return rZodiac.elements[3];
		case (rZodiac.signs[0]):
			return rZodiac.elements[0];
		case (rZodiac.signs[4]):
			return rZodiac.elements[0];
		case (rZodiac.signs[8]):
			return rZodiac.elements[0];
		case (rZodiac.signs[1]):
			return rZodiac.elements[1];
		case (rZodiac.signs[5]):
			return rZodiac.elements[1];
		case (rZodiac.signs[9]):
			return rZodiac.elements[1];
		case (rZodiac.signs[2]):
			return rZodiac.elements[2];
		case (rZodiac.signs[6]):
			return rZodiac.elements[2];
		case (rZodiac.signs[10]):
			return rZodiac.elements[2];
		case (rZodiac.signs[3]):
			return rZodiac.elements[3];
		case (rZodiac.signs[7]):
			return rZodiac.elements[3];
		case (rZodiac.signs[11]):
			return rZodiac.elements[3];
		default:
			return ``;
	}
}

function checkIfCusp(userDate) {
	const month = userDate.getUTCMonth() + 1;
	const date = userDate.getUTCDate();

	switch (true) {
		case (month === 1 && date >= 16 && date <= 23):
			return rZodiac.cusps[10];
		case (month === 2 && date >= 15 && date <= 21):
			return rZodiac.cusps[11];
		case (month === 3 && date >= 17 && date <= 23):
			return rZodiac.cusps[0];
		case (month === 4 && date >= 16 && date <= 22):
			return rZodiac.cusps[1];
		case (month === 5 && date >= 17 && date <= 23):
			return rZodiac.cusps[2];
		case (month === 6 && date >= 17 && date <= 23):
			return rZodiac.cusps[3];
		case (month === 7 && date >= 19 && date <= 25):
			return rZodiac.cusps[4];
		case (month === 8 && date >= 19 && date <= 25):
			return rZodiac.cusps[5];
		case (month === 9 && date >= 19 && date <= 25):
			return rZodiac.cusps[6];
		case (month === 10 && date >= 19 && date <= 25):
			return rZodiac.cusps[7];
		case (month === 11 && date >= 18 && date <= 24):
			return rZodiac.cusps[8];
		case (month === 12 && date >= 18 && date <= 24):
			return rZodiac.cusps[9];
		default:
			return `N/A`
	}
}

function findCSign(userDate) {
	// const month = userDate.getUTCMonth() + 1;
	// const date = userDate.getUTCDate();
	const year = userDate.getUTCFullYear();
	const remainder = year%12;
	// also needs a check to see if birthdate falls before the CNY of that year
	switch (true) {
		case (remainder === 0):
			return cZodiac.signs[0];
		case (remainder === 1):
			return cZodiac.signs[1];
		case (remainder === 2):
			return cZodiac.signs[2];
		case (remainder === 3):
			return cZodiac.signs[3];
		case (remainder === 4):
			return cZodiac.signs[4];
		case (remainder === 5):
			return cZodiac.signs[5];
		case (remainder === 6):
			return cZodiac.signs[6];
		case (remainder === 7):
			return cZodiac.signs[7];
		case (remainder === 8):
			return cZodiac.signs[8];
		case (remainder === 9):
			return cZodiac.signs[9];
		case (remainder === 10):
			return cZodiac.signs[10];
		case (remainder === 11):
			return cZodiac.signs[11];
	}
}

function findCElement(userDate){
	const year = userDate.getUTCFullYear();
	const lastDigit = Number(String(year).slice(-1));
	switch (true) {
		case (lastDigit === 4 || lastDigit === 5):
			return cZodiac.elements[0];
		case (lastDigit === 6|| lastDigit === 7):
			return cZodiac.elements[1];
		case (lastDigit === 8 || lastDigit === 9):
			return cZodiac.elements[2];
		case (lastDigit === 0 || lastDigit === 1):
			return cZodiac.elements[3];
		case (lastDigit === 2|| lastDigit === 3):
			return cZodiac.elements[4];
		default:
			return ``;
	}
}

// breakdown on functions needed AKA what i need:
    // [DONE] corresponds month & day to roman sign
        // [DONE] prints sign
        // [REFINED] prints element corresponding to sign
    // [DONE] checks if month & day fall within a roman cusp range -> prints roman cusps if applicable
    // [PARTIAL] corresponds year to chinese sign
        // prints sign (requires calculation on the year:)
            // [DONE] year%12 (we're working with the REMAINDER!)
                // [OBSOLETE (JS does it automatically)] if remainder === float integer:
                    // take the DECIMALS ONLY-> multiply by 12 -> round up/down accordingly [Math.round()]
            	// correspond resulting WHOLE INTEGER with animal (cZodiac.signs's indices already matched to answer (ex. 0 = monkey))
			// also first checks if birthdate is within january-february for precision (will need to figure out how to implement a way to consider the date of CNY from that year)
    // [DONE] corresponds LAST DIGIT OF BIRTH YEAR to chinese sign element
	// print up to 10 years for "List By Sign"'s Chinese Zodiac Results
