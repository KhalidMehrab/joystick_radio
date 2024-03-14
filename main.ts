radio.setGroup(1)
basic.forever(function () {
    if (bitcommander.readButton(BCButtons.Red)) {
        radio.sendNumber(1)
    }
    if (bitcommander.readButton(BCButtons.Green)) {
        radio.sendNumber(2)
    }
    if (bitcommander.readButton(BCButtons.Yellow)) {
        radio.sendNumber(3)
    }
    if (bitcommander.readButton(BCButtons.Blue)) {
        radio.sendNumber(4)
    }
    if (bitcommander.readButton(BCButtons.Joystick)) {
        radio.sendNumber(5)
    }
})
