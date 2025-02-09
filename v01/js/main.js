//pseudo:
    // first checks if date is valid, otherwise no results run through at all
        // 2 inputs:
            // month (string)
            // day (number) (use parseInt to omit string conflicts?)
        // if BOTH inputs invalid = alert 'both invalid' (MUST BE THE FIRST CHECK)
        // if it's just the month that's invalid = alert 'invalid month'
        // if it's just the day that's invalid = alert 'invalid day'
        // not a month = TO BE DETERMINED
    // if date is valid, do 3 things:
        // 1. find which zodiac sign matches date
        // 2. check if date falls within a cusp's date range (otherwise it's just N/A)
        // 3. print 1 & 2 results 

const monthList = [
    "january",      // 0    -   1-31
    "february",     // 1    -   1-29
    "march",        // 2    -   1-31
    "april",        // 3    -   1-30
    "may",          // 4    -   1-31
    "june",         // 5    -   1-30
    "july",         // 6    -   1-31
    "august",       // 7    -   1-31
    "september",    // 8    -   1-30
    "october",      // 9    -   1-31
    "november",     // 10   -   1-30
    "december"      // 11   -   1-31
]
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
    const month = document.querySelector('#month').value.toLowerCase()
    const day = parseInt(document.querySelector('#day').value)
    if( checkDate(month,day) == true ) {
        document.querySelector('#printSign').innerText = findSign(month,day)
        document.querySelector('#printCusp').innerText = checkIfCusp(month,day)
    }
}

function checkDate(month, day) {
    // if month & day == false -> 'both invalid'
    if(monthCheck(month) == false && dayCheck(day) == false){
        eraseResults()
        console.log('Invalid Month & Day Entered')
        return false
    }
    // at this point, month && day = true
    // if month == false = 'month invalid'
    if(monthCheck(month)==false){ 
        eraseResults()
        console.log('Invalid Month Entered')
        return false
    }
    // at this point, month && day = true
    // if day == false = 'day invalid'
    if(dayCheck(day)==false) { 
        eraseResults()
        console.log('Invalid Day Entered')
        return false
    }
    // // at this point, month && day = true
    console.log(`Date is Valid`)
    return true
}

function monthCheck(month) {
    if(!monthList.includes(month)){
        return false
    }
}

function dayCheck(day) {
    if(day < 1 || day > 31) {
        return false
    }
}

function findSign(month,day) {
    // january check
    if(month===monthList[0]) {
        if(day<=19){
            return signList[0]
        }else{
            return signList[1]
        }
    // february check
    } else if(month===monthList[1]) {
        if(day<=18) {
            return signList[1]
        } else {
            return signList[2]
        }
    // march check
    } else if(month===monthList[2]) {
        if(day<=20) {
            return signList[2]
        } else {
            return signList[3]
        }
    // april check
    } else if(month===monthList[3]) {
        if(day<=19) {
            return signList[3]
        } else {
            return signList[4]
        }
    // may check
    } else if(month===monthList[4]) {
        if(day<=20) {
            return signList[4]
        } else {
            return signList[5]
        }
    // june check
    } else if(month===monthList[5]) {
        if(day<=21) {
            return signList[5]
        } else {
            return signList[6]
        }
    // july check
    } else if(month===monthList[6]) {
        if(day<=22) {
            return signList[6]
        } else {
            return signList[7]
        }
    // august check
    } else if(month===monthList[7]) {
        if(day<=22) {
            return signList[7]
        } else {
            return signList[8]
        }
    // september check
    } else if(month===monthList[8]) {
        if(day<=22) {
            return signList[8]
        } else {
            return signList[9]
        }
    // october check
    } else if(month===monthList[9]) {
        if(day<=23) {
            return signList[9]
        } else {
            return signList[10]
        }
    // november check
    } else if(month===monthList[10]) {
        if(day<=21) {
            return signList[10]
        } else {
            return signList[11]
        }
    // december
    } else if(month===monthList[11]) {
        if(day<=21) {
            return signList[11]
        } else {
            return signList[0]
        }
    } else {
        alert("something went wrong")
    }
}

function checkIfCusp(month,day) {
    // if january 16-23
    if( month===monthList[0] && day>=16 && day<=23) {
        return cuspList[1]
    // if february 15-21
    } else if( month===monthList[1] && day>=15 && day<=21 ) {
        return cuspList[2]
    // if april 16-22
    } else if( month===monthList[3] && day>=16 && day<=22 ) {
        return cuspList[4]
    // if within 17-23
    } else if( day>=17 && day<=23 ) {
        // if march
        if(month===monthList[2]) {
            return cuspList[3]
        // if may
        } else if(month===monthList[4]) {
            return cuspList[5]
        // if june
        } else if(month===monthList[5]) {
            return cuspList[6]
        }
    // if within 19-25
    } else if( day>=19 && day<=25 ) {
        // if july
        if(month===monthList[6]) {
            return cuspList[7]
        // if august
        } else if(month===monthList[7]) {
            return cuspList[8]
        // if september
        } else if(month===monthList[8]) {
            return cuspList[9]
        // if october
        } else if(month===monthList[9]) {
            return cuspList[10]
        }
    // if within 18-24
    } else if( day>=18 && day<=24 ) {
        // if november
        if(month===monthList[10]) {
            return cuspList[11]
        // if december
        } else if(month===monthList[11]) {
            return cuspList[12]
        }
    } else {
        return cuspList[0]
    }
}

function eraseResults() {
    document.querySelector('#printSign').innerText = ""
    document.querySelector('#printCusp').innerText = ""
}