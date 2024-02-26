namespace SpriteKind {
    export const deathBlock = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(scoreFR == 0)) {
        mySprite.ay = 400
        mySprite.setVelocity(75, 0)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
function spawnFood (list: any[]) {
    for (let index = 0; index < 1e+26; index++) {
        if (scoreFR == 0 || scoreFR != 0) {
            mySprite2.setPosition(randint(locationTILe, locationTILe), randint(locationTILe, locationTILe))
            pause(5000)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(scoreFR == 0)) {
        mySprite.ay = -400
        mySprite.setVelocity(75, 0)
        pause(1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . c d 2 d c . . . . . 
    . . . b c c d 2 2 2 d c c b . . 
    . . b d d 2 2 2 2 2 2 2 d d b . 
    . . . b c c d 2 2 2 d c c b . . 
    . . . . . . c d 2 d c . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, function (sprite, location) {
    info.changeScoreBy(1)
})
info.onScore(20, function () {
    mySprite.setVelocity(200, 0)
})
let locationTILe = 0
let mySprite2: Sprite = null
let scoreFR = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ....8888888................8888888....
    ..88fffffff88............88fffffff88..
    .8fffffffffff8.........18fffffffffff8.
    .8ff1111111ff81.......118ff1111111ff8.
    8ff11fffff11ff81...11118ff11fffff11ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1ff888ff1ff8fff111ff8ff1ff888ff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff11fffff11ff81...11118ff11fffff11ff8
    .8ff1111111ff81.......118ff1111111ff8.
    .8fffffffffff8.........18fffffffffff8.
    ..88fffffff88............88fffffff88..
    ....8888888................8888888....
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    `, SpriteKind.Player)
info.setScore(0)
scoreFR = info.score()
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mysprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . c d 2 d c . . . . . 
    . . . b c c d 2 2 2 d c c b . . 
    . . b d d 2 2 2 2 2 2 2 d d b . 
    . . . b c c d 2 2 2 d c c b . . 
    . . . . . . c d 2 d c . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
animation.runImageAnimation(
mySprite,
[img`
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ....8888888................8888888....
    ..88fffffff88............88fffffff88..
    .8fffffffffff8.........18fffffffffff8.
    .8ff1111111ff81.......118ff1111111ff8.
    8ff11fffff11ff81...11118ff11fffff11ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1ff888ff1ff8fff111ff8ff1ff888ff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff11fffff11ff81...11118ff11fffff11ff8
    .8ff1111111ff81.......118ff1111111ff8.
    .8fffffffffff8.........18fffffffffff8.
    ..88fffffff88............88fffffff88..
    ....8888888................8888888....
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    `,img`
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ....8888888................8888888....
    ..88fffffff88............88fffffff88..
    .8fffffffffff8.........18fffffffffff8.
    .8ff111111fff81.......118ff111111fff8.
    8ff11ffff11fff81...11118ff11fffff1fff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1ff888ff1ff8fff111ff8ff1ff888ff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fff8fff1ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8ff11fffff11ff81...11118ff11fffff11ff8
    .8ff1111111ff81.......118ff1111111ff8.
    .8fffffffffff8.........18fffffffffff8.
    ..88fffffff88............88fffffff88..
    ....8888888................8888888....
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    `,img`
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ...........................8888888....
    ....8888888..............88fffffff88..
    ..88fffffff88...........8fffffffffff8.
    .8fffffffffff8..........8ff1111111ff8.
    .8ff1111111ff81.......18ff11fffff11ff8
    8ff11fffff11ff81...11118ff1fffffff1ff8
    8ff1fffffff1ff811111fff8ff1fff8fff1ff8
    8ff1fff8fff1ff8ffffffff8ff1ff888ff1ff8
    8ff1ff888ff1ff8fff111ff8ff1fff8fff1ff8
    8ff1fff8fff1ff8ffffffff8ff1fffffff1ff8
    8ff1fffffff1ff811111fff8fff1fffff11ff8
    8fff11ffff11ff81...111118fff111111ff8.
    .8fff111111ff81.......118fffffffffff8.
    .8fffffffffff8...........88fffffff88..
    ..88fffffff88..............8888888....
    ....8888888...........................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    `,img`
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ....8888888................8888888....
    ..88fffffff88............88fffffff88..
    .8fffffffffff8.........18fffffffffff8.
    .8ffff111ffff81.......118ffff111ffff8.
    8fff111f111fff81...11118fff111f111fff8
    8fff1fffff1fff811111fff8fff1fffff1fff8
    8ff1ff8f8ff1ff8ffffffff8ff1ff8f8ff1ff8
    8ff1fff8fff1ff8fff111ff8ff1fff8fff1ff8
    8ff1ff8f8ff1ff8ffffffff8ff1ff8f8ff1ff8
    8ff1fffffff1ff811111fff8ff1fffffff1ff8
    8fff1fffff1fff81...11118fff1fffff1fff8
    .8ff111f111ff81.......118ff111f111ff8.
    .8ffff111ffff8.........18ffff111ffff8.
    ..88fffffff88............88fffffff88..
    ....8888888................8888888....
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    `],
500,
true
)
let list = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . c d 2 d c . . . . . 
    . . . b c c d 2 2 2 d c c b . . 
    . . b d d 2 2 2 2 2 2 2 d d b . 
    . . . b c c d 2 2 2 d c c b . . 
    . . . . . . c d 2 d c . . . . . 
    . . . . . . . c 2 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . c d 5 d c . . . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . . . . c d 5 d c . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
mySprite.setVelocity(75, 0)
mySprite.x = 25
mySprite.ay = 400
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbb33333b3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111dd1111dd311bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111d1111d1d111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111ddddddddddddddddddd11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11d111111111111111111111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    3333333333333333333333333333333333333333333333333333333333333bbb11111d1111111111111111111111111db3333333333333b333333333333333333333333333333333333333333333333
    b33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1dd11111ddddddddd1dddddddddddddd1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    3333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1dddddddd11111111111111111dddddd1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    333333333333333333bb33bb3333bb3333333333333b3333333333333333331dddddddddd1111111111111111dddddd11333333333333333b33333333bbb3333333333333333333333bbbbbbbb33333
    33333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1d1111111111111111111111dddddd1dd11bbbbbbb33bbbbbbbbbbbbbbbbbb333333333333333bbbbbbbbbbbbbbbbbbbb
    3333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111111133333333333333b3333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111111133333333333333b3333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333331d1111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333d111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333d111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333331111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333d111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333311111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333
    33333333333333333333333333333333333333333333333333333333333331dd11111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333331d11111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333331311111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333311111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333331111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333311111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333331111111111111111133333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333311111111111113333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ...............................................................................................................................................................
    ........................................bbbb...............................................................................bbbbbbbbbbbbb.......................
    ...............................bb.....bbbbbbbb.............................................................................bbbbbbbbbbbbb.......................
    .............................bbbb....bbbbbbbbbb...................................................................bbbb.....bbbbbbbbbbbbb...............bbbbbb..
    .............................bbbb....bbbbbbbbb.................................bbd...............................bbbbbbb...bbbbbbbbbbbbb..............bbbbbbbb.
    .............................bbbbb...bbbbbbbbb................................bbbb...............................bbbbbbb...bbbbbbbbbbbbb.............bbbbbbbbbb
    ...6...........bbbb....bbb...bbbbb...bbbbbbbbb........bb.....................dbbbbb..............................bbbbbbb...bbbbbbbbbbbbb............bbbbbbbbbbb
    ...bbbbbb....bbbbbb..bbbbbb..bbbbb...bbbbbbbbb.......bbbb............bbd....bbbbbbbd......dbbbd..................bbbbbbb...bbbbbbbbbbbbb............bbbbbbbbbbb
    .bbbbbbbb...bbbbbbb.bbbbbbbb.bbbbb...bbbbbbbbb....bbbbbbb...........bbbbd...bbbbbbbd.....bbbbbb..................bbbbbbb...bbbbbbbbbbbbb............bbbbbbbbbbb
    bbbbbbbbb...bbbbbbb.bbbbbbbb.bbbbb...bbbbbbbbb....bbbbbbb..........dbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbb...b........bbbbbbbbbbb
    bbbbbbbbb...bbbbbbb.bbbbbbbb.bbbbbb..bbbbbbbbb....bbbbbbb..........dbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbb..bbb......bbbbbbbbbbbb
    bbbbbbbbbb..bbbbbbb.bbbbbbbbbbbbbbb..bbbbbbbbb....bbbbbbbb..........bbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbb.bbbb......bbbbbbbbbbbb
    bbbbbbbbbb..bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbb.........bbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbbbbbbb......bbbbbbbbbbbb
    bbbbbbbbbb..bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbbbd......dbbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbbbbbbb......bbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbbbbb....dbbbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbbbbbbb..bbb.bbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbbbbbd..dbbbbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbbbbbdddbbbbbbbbb...bbbbbbbd.....bbbbbbb.................bbbbbbb...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbb...bbbbbbbbbbbbbdbbbbbbbbb..dbbbbbbbd.....bbbbbb..................bbbbbbb...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbd.....bbbbbb..................bbbbbbb..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbb.bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbd.....bbbbbb....bb............bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbd.dbbbbbb....bbbb..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbb.bbbbbbb...bbbbbbb........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbb.......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.bbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ...............................................................................................................................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ........................................................................................................c......................................................
    ......................................................................................................cccccc...................................................
    ....................................................................................................ccffffff...................................................
    ..................................................................................................fffffffffffc.................................................
    .................................................................................................ccfffffffffffc................................................
    ...............................................................................................defbfffffffffffc................................................
    ...............................................................................................cffbfffffffffffff...............................................
    ...............................................................................................cffbfffffffffffff...............................................
    ...............................................................................................cffbfffffffffffff...............................................
    ...............................................................................................cccbfffffffffffff...............................................
    ...............................................................................................cffbfffffffffffff...............................................
    ...............................................................................................cccbfffffffffffff...............................................
    ...............................................................................................cccbfffffffffffff...............................................
    ...............................................................................................cffbfffffcccfffff.......................................bcccbb..
    ...............................................................................ccd.............cffbfffffcccfffff......................................bccccccb.
    ..............................................................................cccc.............cffbfffffffffffffc....................................bccccccccb
    .............................................................................dccccc............cffbfffffffffffffc...................................bbccccccbcb
    .....................................................................ccd....cccccccd..........dcffbfffffffffffffc...................................bbccccccccb
    ....................................................................ccccd...cc6c666d...........cccbfffffffffffffc...................................bbccccccccb
    ...................................................................dcc66b...ccc666cd............ccbfffffffffffffc...................................bbbccbccccb
    ...................................................................dc66cb...cc6666cd............ffbfffffffffffffc..................................bbbccccccccb
    ....................................................................ccccb...cccccccd............ccbfffffffffffffc..................................bbbccccccccc
    ...................................................................cccccb...ccccc66d............ffbfffffffffffffc..................................bbbccbbccccc
    ..................................................................dc666cb...ccc66bcd............ccbffffffccccfffc..................................bbbccccccccc
    .................................................................dccccccb...cccccbcd............ffbffffffccccfffc...............................b..bbbccccccccc
    ................................................................dbccccccb...cccccbcd............ffbfffffffffffffc.............................bcc..bbcccccccccc
    ................................................................bcccccccb...ccccc6cd............ccbfffffffffffffc.............................ccc..bbcccccc6c6c
    ................................................................bcc66bccb..dccc6666d...........cffbfffffffffffffc............................cbccbbbccccccccccc
    ....ff.........................................................cccbbccccb..cccc666bd...........cffbfffffffffffffc............................cccccbbccccbbccccc
    ffffff........................................................c6bcccccccb..ccccccccd...........cffefffffffffffffc............................ccccccbccccccccccc
    fffffff.......................................................ccc66cccccbbcccccccccddcd.d......cffefffffffffffffc............................cccccccccccccccccc
    fffffff.......................................................ccccccccccbcccccbbb66dccc........cffefffffffffffffc............................cccccccccccccccccc
    ffbffff.......................................................ccbbcccccccccccccccccccccd.......cccbfffffffccbfffc............................cbbcccccc6ccccccbc
    ffcfffff......................................................ccbccccccccccccccccbcccccd.......cccbffffffccccfffc............................cbccccccccccccbcff
    ffffffff......................................................ccccbccccccbbccccccbcccccd.......cffbffffffcccffffc............................ccccccccccbbbccfff
    ffffffff......................................................ccbcccccccbbcccccccccccccd.......cffbfffffffffffffc.............................ccccccccbffffffff
    ffffffff......................................................ccbbcccccccccccccccccccccd.......cffbfffffffffffffc............................cccccccccbffffffff
    ffffffff......................................................ccccccccccccccbbcccccccccd.......cccbfffffffffffffc..............ccc..........666cccccccbffffffff
    ffffffff......................................................cccccccccccbbbcccbbccccccd.......cccbfffffffffffffc.............ffffc........cccccccccccfffffffff
    ffffffff......................ccccccc..cc..ccc................ccccccccccccccccccccccccc........ccfefffffccbfffffc...........fffffff.......ccccccccbbcffffffffff
    ffcfffffc.....................cccccbccccc.ccccc...............cccccccccccccccccccccbcccc.......cccbfffffcfcfffffc...........fffffff.......cccccccbccfffffffffff
    ffcfffffcc....................cccccccccccccccccccc............cc6bccccbcb6cccccccccbcffc.......cccbfffffffffffffcc.........ffffffff.......ccccccbffffffffffffff
    ffffffffffc.................cccccccccccccccccccccc............cccccccccccbccccccccb6cfffc......cffbfffffffffffffcc.........ffffffff.....ccccccccbffffffffffffff
    ffffffffffcc................cccccccccccccccccccccc.............ccccccccccbccccccc6cffffffc.....cffbffffccfcfffffccc.......fffffffff......cccccccbffffffffffffff
    fffbffffffff...............cccccccccbbcccccccccccc.............cccccccbcccccccccbcffffffffc....cccbfffcbbcbfffffccc.......fffffffff...ccccccccccbffdcbffffdbcff
    fffffffffffff..............cccccccccccccccccccccccc............cfffcccbccccccccbbffffffffff....cccbfffcddcdfffffcbcfc.....fffffffff...ccccccccccbffffffffffffff
    fffffffffffffffc...c.......ccccccccccccccccccccccccc...........ffffccccccccccccbbffffffffff....cffbfffffffffffffbcfffc...ffffffffffc.cccccccccccbffffffffffffff
    fffffffffffffffc..cc.....cccccccccccccccccccccccccccc.c...ccc.ccffffcccccccccccbbffffffffffffc.cffbffffffffffffcbfffffc.cffffffffffcccccccccccccbffffffffffffff
    fffffffffffffffff.cc.....cccccccccccccccccccccccccccccc...ccccccfffffccccccccccbbffffffffccfccccffeffffffffffffbcffffffcfffffffffffcccccccccccccbffffffffffffff
    ffffffffccbffffffccc.....cccccccccccccccccccccccccccccccccbffffffffffccccccccccbbfffffffc6cfffccffffffffffffffcdfffffffffffffffffffcccccccccccccbffbfcffffffffb
    ffffffffffffffffffccc..cccccccccccccccccccccccccccccccccc6ccfffffffffccccccccccbbcffffffcbcfffccffffffffffffffcdfffffffffffffffffffcccccccccccccbffffffffffffff
    ffffffffffffffffffccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccccbbfcccccccccfffccccccffffffcccccdfffffffffffffffffffcccccccccccccbffffffffffffff
    fffffffffffffffffffccccccccccccccccccccccccccccccccccccbbffffffffffffffffccccccbcccfffffffffffffffffffffffbcfffffffffffffffffffffffccccccdccccccbffffffffffffff
    fffffffffffffffffffccccccccccccccccccccccccccccccccccccdbcfccccccccccccffcccc66cf6cfffffffffffffffffffffccdcfffffffffffffffffffffffcccccbcbcccccbffffffffffffff
    fffffffffffffffffffffffcccdccccccccccccccccccccccccccccdbcffffffffffcffcfcccc6cff6ccfffffffffffffffffcccccdcfffffffffffffffffffffffcccccccccccccbffffffffffffff
    cfffffcffffffffffffffffffccccccccccccccccccccccccccccccdbcfffffffffccffffcccc6cff6cffffffffffffffffffcccccdcfffffffffffffffffffffffcccccccccccbccffffcfffffffff
    fffffffffffffffffffffffffbcccccccccccccccccccccccccccccdbcffffffffcccffffcccc6ccf6c8fffffffffffffffffffffcdcfffffffffffffffffffffffbcccccccbcbcfcffffffffffffff
    fffffffffffffffffffffffffccccccccccbcccccccccccccccccccdbcffffffffcccffcfccccb66f6cffffffffffffffffffffffcdcfffffffffffffffffffffffcccccccccbfffcffffffffffffff
    ffffffffffffffffffffffffffcccbcccccffffffffffcccccccbccdbcfccccccccccffcfccccb6cf6cfffffffffffffffffcccffcdcfffffffffffffffffffffffffcccccbcffffcffffffffffffff
    fffffffffffffffffffffffffffccccbcffffffffffffcccccbbcccbbffffffcffcfcfccfcccc66ff6cfffffffffffffffffbccffcdcffffffffffffffffffffffffffbccbcfffffcffffffffffffff
    ffffffffffffffffffffffffffffccbcffffffffffffffcccccccccdbcffffffffcffcfffccccffcf6cfffffffffffffffffdbcbfcdcffffffffffffffffffffffffffccbcffffffcffffffffffffff
    fffffffffffffffffffffffffffffcbffffffffffffffffccccccccdbcfffffffffccfffffffcffff6cffffffffffffffffffffffcdcffffffffffffffffffffffffffcccfffffffcffbfbffffffffb
    ffffffffcffffffffffffffffffffccfffffffffffffffffcbcccccdbcfffffffffcccccffffcffff6cffffffffffffffffffffffcdcfffffffffffffffffffffffffffccfffffffcffffffffffffff
    fffffffffffffffffffffffffffffccffffffffffffffffffcccdccdbffccccccccfffffccffcffff6cffffffffffffffffffbcffcdcfffffffffffffffffffffffffffccfffffffcffffffffffffff
    ffffffffffffffffffffffffffffffcffffffffffffffffffccccccdbffccccccffccccfffffcffff6cffffffffffffffcccccccfcdcfbccffffffffffffffffffffffffffffffffcffffffffffffff
    fffffffffffffffccfffffffffffccccccccfffffffffffffccccccdbffffffffffccfcfffffcffff6cfffffffffffffbbfffffffcdcfdcffffffffffffffffffffffffffcccccffcffffcccccfffff
    ffffffffffffffcfcccffffffccffffffffffffffffffffffccccccdbcffffffffffffffffffcffff6cfffffffffffffdbfffffffcdcfdcffffcffffffffffffffffffffffffffffcffffccffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccccccccc66cccccccccccccbbccccccccdccbccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(-5, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer1)
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer2)
tiles.setCurrentTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
locationTILe = assets.tile`myTile0`
