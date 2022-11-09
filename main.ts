function turnServo (speed: number) {
    servos.P2.run(speed)
}
// convert input to a percentage for the servo
// and also display input as a percentage of 43
function velocityConversion (input2: number) {
    basic.showNumber(Math.round(input2 / maxServo * glueManMagic))
    turnServo(input2 / maxServo * 100)
}
let maxServo = 0
let glueManMagic = 0
glueManMagic = 43
maxServo = 1023
basic.forever(function () {
    velocityConversion(pins.analogReadPin(AnalogPin.P0))
})
