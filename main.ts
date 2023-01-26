
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(12)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset();
})
radio.onReceivedNumber(function (receivedNumber: number) {
    console.log(receivedNumber)
})
radio.onReceivedValue(function (name: string, value: number) {
    console.log(name)
    console.log(value)
})
let serialRemote = 7
// 0...83
radio.setFrequencyBand(7)
// 0...7
radio.setTransmitPower(7)
// 0...255
radio.setGroup(5)
radio.setTransmitSerialNumber(true)
console.logValue("name", Utility.encodeSerial())
radio.onReceivedNumber(function(receivedNumber: number) {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    basic.showString(string)
    basic.showString(number)
})

