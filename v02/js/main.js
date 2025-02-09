//pseudo:
    // first checks if date is valid, otherwise doesn't look for results
        // 2 inputs:
            // month -- array made from select element's options
            // day   -- taken from input element (input type=number)
        // fail #1 = february 30-31 does not exist                        } both should return an
        // fail #2 = april/june/september/november 30 does not exist      } 'invalid date' error
    // if date is valid, do 3 things:
        // 1. find which zodiac sign matches date
        // 2. check if date falls within a cusp's date range (otherwise it's just N/A)
        // 3. print 1 & 2 results 

// just makes sure that <select> & <input> are reset upon refreshing
document.querySelector('#months').options[0].selected = true
document.querySelector('#days').value = ""

const monthArray = document.querySelectorAll('#months option')
const monthList = Array.from(monthArray).map(el => el.value);
    // [0] = "-----------"
    // [1] = "January"
    // [2] = "February"
    // [3] = "March"
    // [4] = "April"
    // [5] = "May"
    // [6] = "June"
    // [7] = "July"
    // [8] = "August"
    // [9] = "September"
    // [10] = "October"
    // [11] = "November"
    // [12] = "December"
const signList = [
    "Capricorn",    // 0
    "Aquarius",     // 1
    "Pisces",       // 2
    "Aries",        // 3
    "Taurus",       // 4
    "Gemini",       // 5
    "Cancer",       // 6
    "Leo",          // 7
    "Virgo",        // 8
    "Libra",        // 9
    "Scorpio",      // 10
    "Sagittarius"   // 11
]
const cuspList = [
    "N/A",                          // 0
    "Capricorn-Aquarius Cusp",      // 1
    "Aquarius-Pisces Cusp",         // 2
    "Pisces-Aries Cusp",            // 3
    "Aries-Taurus Cusp",            // 4
    "Taurus-Gemini Cusp",           // 5
    "Gemini-Cancer Cusp",           // 6
    "Cancer-Leo Cusp",              // 7
    "Leo-Virgo Cusp",               // 8
    "Virgo-Libra Cusp",             // 9
    "Libra-Scorpio Cusp",           // 10
    "Scorpio-Sagittarius Cusp",     // 11
    "Sagittarius-Capricorn Cusp"    // 12
]

document.querySelector('#findResults').addEventListener('click', findResults)

function findResults() {
    let month = document.querySelector('#months').value
    let day = parseInt(document.querySelector('#days').value)

    if(checkDate(month,day)) {
        console.log(`checkDate is returning true`)
        document.querySelector('#printSign').innerText = findSign(month,day)
        document.querySelector('#printCusp').innerText = checkIfCusp(month,day)
    }
}
function checkDate(month,day) {
    // Makes sure both month & day have a proper value
    if( month===monthList[0] || day==='' || day > 31) {
        alert(`Error: No Proper Date Entered`)
        return false
    }
    // Rejects Feb. 30/31 since they don't exist
    if( month===monthList[2] && day > 29 ){
        eraseResults()
        alert(`Invalid Date`)   
        return false
    }
    // Rejects April/June/September/November 31 since they don't exist
    if( day === 31 && ( month===monthList[4] || month===monthList[6] || month===monthList[9] || month===monthList[11] ) ) {
        eraseResults()
        alert(`Invalid Date`)
        return false
    }
    return true
}

function eraseResults() {
    document.querySelector('#printSign').innerText = ""
    document.querySelector('#printCusp').innerText = ""
}

function findSign(month,day) {
    if( month === monthList[1] ) {
        if( day <= 19 ) {
            return signList[0]
        } else {
            return signList[1]
        }
    }
    if( month === monthList[2] ) {
        if( day <= 18 ) {
            return signList[1]
        } else {
            return signList[2]
        }
    }
    if( month === monthList[3] ) {
        if( day <= 20 ) {
            return signList[2]
        } else {
            return signList[3]
        }
    }
    if( month === monthList[4] ) {
        if( day <= 19 ) {
            return signList[3]
        } else {
            return signList[4]
        }
    }
    if( month === monthList[5] ) {
        if( day <= 20 ) {
            return signList[4]
        } else {
            return signList[5]
        }
    }
    if( month === monthList[6] ) {
        if( day <= 21 ) {
            return signList[5]
        } else {
            return signList[6]
        }
    }
    if( month === monthList[7] ) {
        if( day <= 22 ) {
            return signList[6]
        } else {
            return signList[7]
        }
    }
    if( month === monthList[8] ) {
        if( day <= 22 ) {
            return signList[7]
        } else {
            return signList[8]
        }
    }
    if( month === monthList[9] ) {
        if( day <= 22 ) {
            return signList[8]
        } else {
            return signList[9]
        }
    }
    if( month === monthList[10] ) {
        if( day <= 23 ) {
            return signList[9]
        } else {
            return signList[11]
        }
    }
    if( month === monthList[11] ) {
        if( day <= 21 ) {
            return signList[10]
        } else {
            return signList[11]
        }
    }
    if( month === monthList[12] ) {
        if( day <= 21 ) {
            return signList[11]
        } else {
            return signList[0]
        }
    }
}

function checkIfCusp(month,day) {
    // checks if it's specifically January 16-23
    if( month===monthList[1] && day>=16 && day<=23) {
        return cuspList[1]
    // checks if it's specifically February 15-21
    }
    if( month===monthList[2] && day>=15 && day<=21 ) {
        return cuspList[2]
    // checks if it's specifically April 16-22
    }
    if( month===monthList[4] && day>=16 && day<=22 ) {
        return cuspList[4]
    }
    if( day>=17 && day<=23 ) {           // if day falls within 17-23, then:
        switch(month) {                             // check month:
            case monthList[3]:                          // March = Pisces-Aries
                return cuspList[3]
            case monthList[5]:                          // May = Taurus-Gemini
                return cuspList[5]
            case monthList[6]:                          // June = Gemini-Cancer
                return cuspList[6]
        }
    }
    if( day>=19 && day<=25 ) {           // if day falls within 19-25, then:
        switch(month) {                             // check month:
            case monthList[7]:                          // July = Cancer-Leo
                return cuspList[7]
            case monthList[8]:                          // August = Leo-Virgo
                return cuspList[8]
            case monthList[9]:                          // September = Virgo-Libra
                return cuspList[9]
            case monthList[10]:                         // October = Libra-Scorpio
                return cuspList[10]
        }
    }
    if( day>=18 && day<=24 ) {           // if day falls within 18-24, then:
        switch(month) {                             // check month:
            case monthList[11]:                         // November = Scorpio-Sagittarius
                return cuspList[11]
            case monthList[12]:                         // December = Sagittarius-Capricorn
                return cuspList[12]
        }
    }
    return cuspList[0]
}