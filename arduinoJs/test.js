const five = require("johnny-five");
const keypress = require("keypress");

keypress(process.stdin);

var board = new five.Board();

board.on("ready", ()=>{
    console.log("Use up and Down arrows for CW and CCW respectively. Space to stop.");
    var servo = new five.Servo.Continuous(10);
    
    process.stdin.resume();
    process.stdin.setEncoding("utf8");
    process.stdin.setRawMode(true);

    process.stdin.on("keypress", (ch, key)=>{
        if (!key) { // if no key is pressed, return, i.e do nothing
        return;
        }

        if (key.name === "q") {
            console.log("Qutitting");
            process.exit();
        } else if (key.name === "up") {
            console.log("CW");
            servo.cw();
        }
        else if (key.name === "down") {
            console.log("CCW");
            servo.ccw();
        }
        else if (key.name === "space") {
            console.log("Stopping");
            servo.stop();
        }

    })
})