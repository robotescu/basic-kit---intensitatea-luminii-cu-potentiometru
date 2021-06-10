let luminozitate = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    luminozitate = pins.analogReadPin(AnalogPin.P0)
    led.setBrightness(luminozitate)
})
