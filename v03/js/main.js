// v03 changes:
    // 1. shove current HTML sections into a ""Roman Zodiac" category" + make "Search By Date" its own "subcategory" within
    // 2. prepare for future implement of chinese zodiacs
        // will have to go back through current ID/Class/Function/Variable names to make them more specific
        // MAKE IT MAKE SENSE.
    // 3. introduce "Search By Sign" "Roman Zodiac" subcategory
        // user inputs a sign (<select>)
        // finds corresponding dates to sign (and its cusps)
        // prints results

// just makes sure that all <select> & <input> are reset upon refreshing
document.querySelector("#r-months").options[0].selected = true
document.querySelector("#r-days").value = ""
document.querySelector("#r-signs").options[0].selected = true

// --------------------------------------------------------- //
// ------------- <OPTION> TRANSLATED ARRAYS ---------------- //
const rMonthArray = document.querySelectorAll("#r-months option")
const rMonthList = Array.from(rMonthArray).map(el => el.value)
    // [0] = "-----------"
    // [1] = "January"      [7] = "July"
    // [2] = "February"     [8] = "August"
    // [3] = "March"        [9] = "September"
    // [4] = "April"        [10] = "October"
    // [5] = "May"          [11] = "November"
    // [6] = "June"         [12] = "December"

const rSignArray = document.querySelectorAll("#r-signs option")
const rSignList = Array.from(rSignArray).map(el => el.value)
    // [0] = "-----------"
    // [1] = "Aries"        [7] = "Libra"
    // [2] = "Taurus"       [8] = "Scorpio"
    // [3] = "Gemini"       [9] = "Sagittarius"
    // [4] = "Cancer"       [10] = "Capricorn"
    // [5] = "Leo"          [11] = "Aquarius"
    // [6] = "Virgo"        [12] = "Pisces"

// --------------------------------------------------------- //
// ---------------- DATA REFERENCE ARRAYS ------------------ //
const rCuspList = [
    "N/A",                          // [0]
    "Capricorn-Aquarius Cusp",      // [1]
    "Aquarius-Pisces Cusp",         // [2]
    "Pisces-Aries Cusp",            // [3]
    "Aries-Taurus Cusp",            // [4]
    "Taurus-Gemini Cusp",           // [5]
    "Gemini-Cancer Cusp",           // [6]
    "Cancer-Leo Cusp",              // [7]
    "Leo-Virgo Cusp",               // [8]
    "Virgo-Libra Cusp",             // [9]
    "Libra-Scorpio Cusp",           // [10]
    "Scorpio-Sagittarius Cusp",     // [11]
    "Sagittarius-Capricorn Cusp"    // [12]
]

const rCuspDateRanges = [
    "16-23",    // [0] = January Only
    "15-21",    // [1] = February Only
    "16-22",    // [2] = April Only
    "17-23",    // [3] = March & May-June
    "19-25",    // [4] = July-October
    "18-24"     // [5] = November-December
]
// --------------------------------------------------------- //
// --------------------------------------------------------- //

document.querySelector("#find-rSign").addEventListener("click", findRSignResults)
document.querySelector("#find-rDates").addEventListener("click",findRDatesResults)

function findRSignResults() {
    let month = document.querySelector("#r-months").value
    let day = parseInt(document.querySelector("#r-days").value)

    if(checkDate(month,day)) {
        console.log(`checkDate is returning true`)
        document.querySelector("#print-rSign").innerText = findRomanSign(month,day)
        document.querySelector("#print-rCusp").innerText = checkIfCusp(month,day)
    }
}

function findRomanSign(month,day) {
    if( month === rMonthList[1] ) {
        if( day <= 19 ) {
            return rSignList[10]
        } else {
            return rSignList[11]
        }
    }
    if( month === rMonthList[2] ) {
        if( day <= 18 ) {
            return rSignList[11]
        } else {
            return rSignList[12]
        }
    }
    if( month === rMonthList[3] ) {
        if( day <= 20 ) {
            return rSignList[12]
        } else {
            return rSignList[1]
        }
    }
    if( month === rMonthList[4] ) {
        if( day <= 19 ) {
            return rSignList[1]
        } else {
            return rSignList[2]
        }
    }
    if( month === rMonthList[5] ) {
        if( day <= 20 ) {
            return rSignList[2]
        } else {
            return rSignList[3]
        }
    }
    if( month === rMonthList[6] ) {
        if( day <= 21 ) {
            return rSignList[3]
        } else {
            return rSignList[4]
        }
    }
    if( month === rMonthList[7] ) {
        if( day <= 22 ) {
            return rSignList[4]
        } else {
            return rSignList[5]
        }
    }
    if( month === rMonthList[8] ) {
        if( day <= 22 ) {
            return rSignList[5]
        } else {
            return rSignList[6]
        }
    }
    if( month === rMonthList[9] ) {
        if( day <= 22 ) {
            return rSignList[6]
        } else {
            return rSignList[7]
        }
    }
    if( month === rMonthList[10] ) {
        if( day <= 23 ) {
            return rSignList[7]
        } else {
            return rSignList[8]
        }
    }
    if( month === rMonthList[11] ) {
        if( day <= 21 ) {
            return rSignList[8]
        } else {
            return rSignList[9]
        }
    }
    if( month === rMonthList[12] ) {
        if( day <= 21 ) {
            return rSignList[9]
        } else {
            return rSignList[10]
        }
    }
}
function checkIfCusp(month,day) {
    // checks specifically for January 16-23
    if( month===rMonthList[1] && day>=16 && day<=23) {
        return rCuspList[1]
    // checks specifically February 15-21
    }
    if( month===rMonthList[2] && day>=15 && day<=21 ) {
        return rCuspList[2]
    // checks specifically for April 16-22
    }
    if( month===rMonthList[4] && day>=16 && day<=22 ) {
        return rCuspList[4]
    }
    if( day>=17 && day<=23 ) {          // if day falls within 17-23, then:
        switch(month) {                     // check month:
            case rMonthList[3]:             // March = Pisces-Aries
                return rCuspList[3]
            case rMonthList[5]:             // May = Taurus-Gemini
                return rCuspList[5]
            case rMonthList[6]:             // June = Gemini-Cancer
                return rCuspList[6]
        }
    }
    if( day>=19 && day<=25 ) {          // if day falls within 19-25, then:
        switch(month) {                     // check month:
            case rMonthList[7]:                 // July = Cancer-Leo
                return rCuspList[7]
            case rMonthList[8]:                 // August = Leo-Virgo
                return rCuspList[8]
            case rMonthList[9]:                 // September = Virgo-Libra
                return rCuspList[9]
            case rMonthList[10]:                // October = Libra-Scorpio
                return rCuspList[10]
        }
    }
    if( day>=18 && day<=24 ) {          // if day falls within 18-24, then:
        switch(month) {                     // check month:
            case rMonthList[11]:                // November = Scorpio-Sagittarius
                return rCuspList[11]
            case rMonthList[12]:                // December = Sagittarius-Capricorn
                return rCuspList[12]
        }
    }
    return rCuspList[0]
}

function findRDatesResults() {
    let sign = document.querySelector("#r-signs").value

    document.querySelector("#print-rDates").innerText = findRomanDates(sign)
    document.querySelector("#print-rcDates1").innerText = findRCDateRanges1(sign)
    document.querySelector("#print-rcDates2").innerText = findRCDateRanges2(sign)
}

function findRomanDates(sign) {
    switch(sign) {
        case rSignList[1]:      // Aries
            return `March 21st — April 19th`
        case rSignList[2]:      // Taurus
            return `April 20th — May 20th`
        case rSignList[3]:      // Gemini
            return `May 21st — June 21st`
        case rSignList[4]:      // Cancer
            return `June 22nd — July 22nd`
        case rSignList[5]:      // Leo
            return `July 23rd — August 22nd`
        case rSignList[6]:      // Virgo
            return `August 23rd — September 22nd`
        case rSignList[7]:      // Libra
            return `September 23rd — October 23rd`
        case rSignList[8]:      // Scorpio
            return `October 24th — November 21st`
        case rSignList[9]:      // Sagittarius
            return `November 22nd — December 21st`
        case rSignList[10]:     // Capricorn
            return `December 22nd — January 19th`
        case rSignList[11]:     // Aquarius
            return `January 20th — February 18th`
        case rSignList[12]:     // Pisces
            return `February 19th — March 20th`
    }
}
function findRCDateRanges1(sign) {
    switch(sign) {
        case rSignList[1]:      // Aries
            return `${rCuspList[3]} — March ${rCuspDateRanges[3]}`
        case rSignList[2]:      // Taurus
            return `${rCuspList[4]} — April ${rCuspDateRanges[2]}`
        case rSignList[3]:      // Gemini
            return `${rCuspList[5]} — May ${rCuspDateRanges[3]}`
        case rSignList[4]:      // Cancer
            return `${rCuspList[6]} — June ${rCuspDateRanges[3]}`
        case rSignList[5]:      // Leo
            return `${rCuspList[7]} — July ${rCuspDateRanges[4]}`
        case rSignList[6]:      // Virgo
            return `${rCuspList[8]} — August ${rCuspDateRanges[4]}`
        case rSignList[7]:      // Libra
            return `${rCuspList[9]} — September ${rCuspDateRanges[4]}`
        case rSignList[8]:      // Scorpio
            return `${rCuspList[10]} — October ${rCuspDateRanges[4]}`
        case rSignList[9]:      // Sagittarius
            return `${rCuspList[11]} — November ${rCuspDateRanges[5]}`
        case rSignList[10]:     // Capricorn
            return `${rCuspList[12]} — December ${rCuspDateRanges[5]}`
        case rSignList[11]:     // Aquarius
            return `${rCuspList[1]} — January ${rCuspDateRanges[0]}`
        case rSignList[12]:     // Pisces
            return `${rCuspList[2]} — February ${rCuspDateRanges[1]}`
    }
}
function findRCDateRanges2(sign) {
    switch(sign) {
        case rSignList[1]:      // Aries
            return `${rCuspList[4]} — April ${rCuspDateRanges[2]}`
        case rSignList[2]:      // Taurus
            return `${rCuspList[5]} — May ${rCuspDateRanges[3]}`
        case rSignList[3]:      // Gemini
            return `${rCuspList[6]} — June ${rCuspDateRanges[3]}`
        case rSignList[4]:      // Cancer
            return `${rCuspList[7]} — July ${rCuspDateRanges[4]}`
        case rSignList[5]:      // Leo
            return `${rCuspList[8]} — August ${rCuspDateRanges[4]}`
        case rSignList[6]:      // Virgo
            return `${rCuspList[9]} — September ${rCuspDateRanges[4]}`
        case rSignList[7]:      // Libra
            return `${rCuspList[10]} — October ${rCuspDateRanges[4]}`
        case rSignList[8]:      // Scorpio
            return `${rCuspList[11]} — November ${rCuspDateRanges[5]}`
        case rSignList[9]:      // Sagittarius
            return `${rCuspList[12]} — December ${rCuspDateRanges[5]}`
        case rSignList[10]:     // Capricorn
            return `${rCuspList[1]} — January ${rCuspDateRanges[0]}`
        case rSignList[11]:     // Aquarius
            return `${rCuspList[2]} — February ${rCuspDateRanges[1]}`
        case rSignList[12]:     // Pisces
            return `${rCuspList[3]} — March ${rCuspDateRanges[3]}`
    }
}

function checkDate(month,day) {
    // Makes sure both month & day have a proper value
    if( month===rMonthList[0] || day===NaN || day > 31) {
        alert(`Error: No Proper Date Entered`)
        return false
    }
    // Rejects Feb. 30/31
    if( month===rMonthList[2] && day > 29 ){
        eraseResults()
        alert(`Invalid Date`)   
        return false
    }
    // Rejects April/June/September/November 31
    if( day === 31 && ( month===rMonthList[4] || month===rMonthList[6] || month===rMonthList[9] || month===rMonthList[11] ) ) {
        eraseResults()
        alert(`Invalid Date`)
        return false
    }
    return true
}
function eraseResults() {
    document.querySelector("#print-rSign").innerText = ""
    document.querySelector("#print-rCusp").innerText = ""
    document.querySelector("#print-rDates").innerText = ""
    document.querySelector("#print-rcDates1").innerText = ""
    document.querySelector("#print-rcDates2").innerText = ""
}