function Followers () {
    for (let index = 0; index < 4; index++) {
        count = 0
        for (let index = 0; index < 8; index++) {
            strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(count + 4, neopixel.colors(NeoPixelColors.Blue))
            strip.setPixelColor(count - 4, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(200)
            strip.clear()
            strip.show()
            count += 1
        }
    }
}
input.onButtonPressed(Button.A, function () {
    count = 0
    for (let index = 0; index < 8; index++) {
        strip.clear()
        strip.setPixelColor(count, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(7 - count, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
        count += 1
    }
})
function RainbowShower () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 16; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
}
let count = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
