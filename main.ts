function doSomething () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.forever(function () {
    doSomething()
})
