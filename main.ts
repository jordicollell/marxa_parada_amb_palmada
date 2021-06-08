input.onSound(DetectedSound.Loud, function () {
    if (number == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        number = 1
    } else {
        basic.clearScreen()
        number = 0
    }
})
let number = 0
input.setSoundThreshold(SoundThreshold.Loud, 70)
number = 0
