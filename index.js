function shout (Hello){return "Hello".toUpperCase();}
function whisper(hello){return "Hello".toLowerCase();}
function logShout(Hello){console.log("Hello".toUpperCase());}
function logWhisper(Hello){console.log("Hello".toLowerCase());}



const condition1 = 'I can\'t hear you!'
const condition2 = 'YES INDEED!'
const condition3 = 'I would love to!'

condition1 === string.toLowerCase
condition2 === string.toUpperCase

const value1 = 'Let\'s have dinner together!'

function sayHiToHeadphonedRoommate(string){
    if (string === "Let\'s have dinner together!"){
        return 'I would love to!'
    }
    else if (string === string.toLowerCase()){
        return 'I can\'t hear you!'
    }
    else {
        return 'YES INDEED!'
    }
}