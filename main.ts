
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(78)
})

radio.onReceivedNumber(function(receivedNumber: number) {
    console.log(receivedNumber)
})
radio.onReceivedValue(function(name: string, value: number) {
    console.log(name)
    console.log(value)
})
let serialRemote = 7
// 0...83
radio.setFrequencyBand(7)
// 0...7
radio.setTransmitPower(7)
// 0...255
radio.setGroup(213)
radio.setTransmitSerialNumber(true)
console.logValue("name", control.deviceName())
radio.sendString("")
radio.sendValue("name", 7)
