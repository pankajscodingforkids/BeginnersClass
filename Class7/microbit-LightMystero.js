let PlayMusic = 0
let light = 0
function LightToSound() {
    if (light < 10) {
        music.ringTone(131)
    } else if (light < 20) {
        music.ringTone(147)
    } else if (light < 30) {
        music.ringTone(165)
    } else if (light < 40) {
        music.ringTone(175)
    } else if (light < 50) {
        music.ringTone(196)
    } else if (light < 60) {
        music.ringTone(220)
    } else if (light < 70) {
        music.ringTone(247)
    } else if (light < 80) {
        music.ringTone(262)
    } else if (light < 90) {
        music.ringTone(294)
    } else if (light < 100) {
        music.ringTone(330)
    } else if (light < 110) {
        music.ringTone(349)
    } else if (light < 120) {
        music.ringTone(392)
    } else if (light < 130) {
        music.ringTone(440)
    } else if (light < 140) {
        music.ringTone(494)
    } else if (light < 150) {
        music.ringTone(523)
    } else if (light < 160) {
        music.ringTone(587)
    } else if (light < 170) {
        music.ringTone(659)
    } else if (light < 180) {
        music.ringTone(698)
    } else if (light < 190) {
        music.ringTone(784)
    } else {
        music.ringTone(880)
    }
}
input.onButtonPressed(Button.B, function () {
    PlayMusic = 0
})
input.onButtonPressed(Button.A, function () {
    PlayMusic = 1
})
basic.forever(function () {
    light = input.lightLevel()
    basic.pause(100)
    led.plotBarGraph(
    light,
    256
    )
    if (PlayMusic == 1) {
        music.rest(music.beat(BeatFraction.Sixteenth))
        LightToSound()
    } else {
        music.rest(music.beat(BeatFraction.Whole))
    }
})
