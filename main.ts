input.onButtonPressed(Button.A, function () {
    count += 1
})
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let count = 0
basic.forever(function () {
    strip.showBarGraph(count, 15)
})
