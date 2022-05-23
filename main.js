/**
 * 14012109-3: Compiler Construction 
 * Programming Assignement 2    
 * Student ID: 
 * Student Name: 
 * Section No.: 
 */


function parse(input){
    return parseS(input);
}

/********** DO NOT MODIFY CODE ABOVE! *************/

function parseS(input) {
    // Add your implementation here
}

function parseE(input) {
    // Add your implementation here
}

function parseB(input){
    // Add your implementation here
}

function match(symbol , input){
    // Add your implementation here
}


/********** DO NOT MODIFY CODE BELOW *************/
function reportError(input) {
    throw SyntaxError("Cannot parse input: " + input);
}

module.exports = {
    parser: {parse: parse}
}