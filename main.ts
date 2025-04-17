let blue = 0
let Red = 0
let Led_1 = 0
let Led_2 = 0
let Led_3 = 0
voiceRecognition.init()
voiceRecognition.setVolume(7)
voiceRecognition.setMuteMode(voiceRecognition.MUTE.OFF)
voiceRecognition.setWakeTime(100)
basic.forever(function () {
    voiceRecognition.getCMDID()
    if (voiceRecognition.checkCMDID()) {
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W137)) {
            basic.showIcon(IconNames.ArrowWest)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W82)) {
            basic.clearScreen()
            basic.turnRgbLedOff()
            Led_3 = 0
            Led_2 = 0
            Led_1 = 0
            basic.showString("Bye!")
        }
        // Led 1 an
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W5)) {
            Led_1 = 1
        }
        // Led 1 an
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W9)) {
            Led_1 = 0
        }
        // Led 1 aus
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W6)) {
            Led_2 = 1
        }
        // Led 2 an
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
            Led_2 = 0
        }
        // Led 2 aus
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W7)) {
            Led_3 = 1
        }
        // Led 2 an
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord2(voiceRecognition.LearningCommandWords.W10)) {
            Led_3 = 0
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W116)) {
            blue = 1
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W121)) {
            blue = 0
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W142)) {
            basic.showIcon(IconNames.ArrowNorth)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W141)) {
            basic.showIcon(IconNames.ArrowEast)
        }
        if (voiceRecognition.readCMDID() == voiceRecognition.checkWord3(voiceRecognition.FixedCommandWords.W138)) {
            basic.showIcon(IconNames.ArrowSouth)
        }
    }
    if (Led_1 == 0 && (Led_2 == 0 && Led_3 == 0)) {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
    if (Led_1 == 1 && (Led_2 == 0 && Led_3 == 0)) {
        if (0 == blue) {
            basic.setLedColors(0x0000ff, 0x000000, 0x000000)
        }
        if (1 == blue) {
            basic.setLedColors(0xff0000, 0x000000, 0x000000)
        }
    }
    if (Led_1 == 1 && (Led_2 == 1 && Led_3 == 0)) {
        if (0 == blue) {
            basic.setLedColors(0x0000ff, 0x0000ff, 0x000000)
        }
        if (1 == blue) {
            basic.setLedColors(0xff0000, 0xff0000, 0x000000)
        }
    }
    if (Led_1 == 1 && (Led_2 == 1 && Led_3 == 1)) {
        if (0 == blue) {
            basic.setLedColors(0x0000ff, 0x0000ff, 0x0000ff)
        }
        if (1 == blue) {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
    }
    if (Led_1 == 0 && (Led_2 == 1 && Led_3 == 1)) {
        if (0 == blue) {
            basic.setLedColors(0x000000, 0x0000ff, 0x0000ff)
        }
        if (1 == blue) {
            basic.setLedColors(0x000000, 0xff0000, 0xff0000)
        }
    }
    if (Led_1 == 1 && (Led_2 == 0 && Led_3 == 1)) {
        if (0 == blue) {
            basic.setLedColors(0x0000ff, 0x000000, 0x0000ff)
        }
        if (1 == blue) {
            basic.setLedColors(0xff0000, 0x000000, 0xff0000)
        }
    }
    if (Led_1 == 0 && (Led_2 == 0 && Led_3 == 1)) {
        if (0 == blue) {
            basic.setLedColors(0x000000, 0x000000, 0x0000ff)
        }
        if (1 == blue) {
            basic.setLedColors(0x000000, 0x000000, 0xff0000)
        }
    }
    if (Led_1 == 0 && (Led_2 == 1 && Led_3 == 0)) {
        if (0 == blue) {
            basic.setLedColors(0x000000, 0x0000ff, 0x000000)
        }
        if (1 == blue) {
            basic.setLedColors(0x000000, 0xff0000, 0x000000)
        }
    }
})
