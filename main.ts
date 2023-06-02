let achteruit = 0
let links = 0
let rechts = 0
let stop = 0
let vooruit = 0
let ir_waarde = 0
basic.forever(function () {
    achteruit = 6
    links = 22
    rechts = 79
    stop = 4
    vooruit = 27
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    if (vooruit == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (rechts == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (achteruit == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (links == ir_waarde) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (stop == ir_waarde) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
