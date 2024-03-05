namespace SpriteKind {
    export const deathBlock = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ValueJump == 1) {
        mySprite.ay = 500
        mySprite.setVelocity(75, 0)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 8 8 8 8 8 f . . . 
            . . . . . f 8 8 8 d d d d f . . 
            . . . . f f 8 8 d f d d f d c . 
            . . . f d d 8 8 d f d d f d c . 
            . . . c d b 8 8 d d d d 8 8 d c 
            f f . c d b 8 8 d d c d d d d c 
            f 8 f . c f 8 8 d d d c c c c c 
            f 8 f . . f f 8 8 d d d d d f . 
            f 8 f . f 8 8 8 8 f f f f f . . 
            f 8 f f 8 8 8 8 8 8 8 f . . . . 
            . f f 8 8 8 8 f 8 f f 8 f . . . 
            . . f 8 8 8 8 f 8 f f 8 f . . . 
            . . . f 8 f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 8 8 8 8 8 f . . . 
            . . . . . f 8 8 8 d d d d f . . 
            . . . . . f 8 8 d f d d f d c . 
            . . . . f f 8 8 d f d d f d c . 
            . . . f d d 8 8 d d d d 8 8 d c 
            . . . c d b 8 8 d d c d d d d c 
            f f . c d b 8 8 8 d d c c c c c 
            f 8 f . c f f 8 8 8 d d d d f . 
            f 8 f . f 8 8 8 8 f f f f f f . 
            f 8 f f 8 8 8 8 8 8 8 f f f f . 
            . f f 8 8 8 8 f 8 f d d f d d f 
            . . f 8 8 8 8 f 8 f b d f b d f 
            . . f 8 f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 8 8 8 8 8 f . . . 
            . . . . f f 8 8 8 d d d d f . . 
            . . . f d d 8 8 d d d d d d c . 
            . . . c d b 8 8 d f d d f d c . 
            f f . c d b 8 8 d f d d f d d c 
            f 8 f . c f 8 8 d d d d 8 8 d c 
            f 8 f . . f 8 8 8 d c d d d d c 
            f 8 f . . f f 8 8 8 d c c c f . 
            f 8 f . f 8 8 8 8 f f f f f . . 
            . f f f 8 8 8 8 8 8 8 f . . . . 
            . . f 8 8 8 8 f 8 8 f 8 f f . . 
            . . f 8 8 8 f f f 8 8 f f 8 f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f 8 8 8 8 8 f . . . 
            . . . f d d 8 8 8 8 d d d f . . 
            . . . c d b 8 8 8 d d d d d c . 
            . . . c d b 8 8 d d d d d d c . 
            . f f . c f 8 8 d f d d f d d c 
            f 8 f . . f 8 8 d f d d f d d c 
            f 8 f . . f 8 8 d d d d 8 8 d c 
            f 8 f . . f f 8 8 d c d d d f . 
            f 8 f . f 8 8 8 8 8 d f f f . . 
            . f f f 8 8 8 8 8 8 8 f . . . . 
            . . f f b 8 8 8 8 8 f f . . . . 
            . . f f d d c 8 8 f f 8 f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f 8 8 8 8 8 f . . . 
            . . . . . f 8 8 8 d d d d f . . 
            . . . . f f 8 8 d f d d f d c . 
            . . . f d d 8 8 d f d d f d c . 
            . . . c d b 8 8 d d d d 8 8 d c 
            . . . c d b 8 8 d d c d d d d c 
            . . . . c f 8 8 8 d d c c c c c 
            . . . . . f f 8 8 8 d d d d f . 
            . . . . f 8 8 8 8 f f f f f . . 
            f f . f 8 8 8 8 8 8 f f . . . . 
            f 8 . f 8 8 f 8 8 f 8 8 f . . . 
            f 8 . f 8 8 8 f 8 8 f 8 8 f . . 
            f 8 f f 8 f b b f b d f d b f . 
            f f f f 8 b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
function spawnFood (list: Sprite[]) {
    if (info.score() <= 1) {
        tiles.placeOnRandomTile(list._pickRandom(), assets.tile`myTile3`)
        pause(100)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ValueJump == 1) {
        mySprite.ay = -500
        mySprite.setVelocity(75, 0)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f f f f f . . . . 
            . . . f d b b d d c d d f . . . 
            . . . f 2 f f b d f b d f . . . 
            . . f 2 2 2 2 f 2 f f 2 f . . . 
            . f f 2 2 2 2 f 2 f f 2 f . . . 
            f 2 f f 2 2 2 2 2 2 2 f . . . . 
            f 2 f . f 2 2 2 2 f f f f f . . 
            f 2 f . . f f 2 2 d d d d d f . 
            f 2 f . c f 2 2 d d d c c c c c 
            f f . c d b 2 2 d d c d d d d c 
            . . . c d b 2 2 d d d d 2 2 d c 
            . . . f d d 2 2 d f d d f d c . 
            . . . . f f 2 2 d f d d f d c . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . . . f f f f f . . . . 
            `,img`
            . . f f f f . . . . . . . . . . 
            . . f d d c f . . . . . . . . . 
            . . f 2 f f f f f f f f f f f f 
            . . f 2 2 2 2 f 2 f b d f b d f 
            . f f 2 2 2 2 f 2 f d d f d d f 
            f 2 f f 2 2 2 2 2 2 2 f f f f . 
            f 2 f . f 2 2 2 2 f f f f f f . 
            f 2 f . c f f 2 2 2 d d d d f . 
            f f . c d b 2 2 2 d d c c c c c 
            . . . c d b 2 2 d d c d d d d c 
            . . . f d d 2 2 d d d d 2 2 d c 
            . . . . f f 2 2 d f d d f d c . 
            . . . . . f 2 2 d f d d f d c . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . . . f f f f f . . . . 
            `,img`
            . . f f f . . . f f f f f f f . 
            . f d d c f . . f d d d c d d f 
            . f b f f f f f f c d d b d d f 
            . . f 2 2 2 f f f 2 2 f f 2 f . 
            . . f 2 2 2 2 f 2 2 f 2 f f . . 
            . f f f 2 2 2 2 2 2 2 f . . . . 
            f 2 f . f 2 2 2 2 f f f f f . . 
            f 2 f . . f f 2 2 2 d c c c f . 
            f 2 f . . f 2 2 2 d c d d d d c 
            f 2 f . c f 2 2 d d d d 2 2 d c 
            f f . c d b 2 2 d f d d f d d c 
            . . . c d b 2 2 d f d d f d c . 
            . . . f d d 2 2 d d d d d d c . 
            . . . . f f 2 2 2 d d d d f . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . . . f f f f f . . . . 
            `,img`
            . . . . . . f f f f f f f . . . 
            . . . . . f f d d d c d d f . . 
            . . . . f f f c d d b d d f . . 
            . . f f d d c 2 2 f f 2 f . . . 
            . . f f b 2 2 2 2 2 f f . . . . 
            . f f f 2 2 2 2 2 2 2 f . . . . 
            f 2 f . f 2 2 2 2 2 d f f f . . 
            f 2 f . . f f 2 2 d c d d d f . 
            f 2 f . . f 2 2 d d d d 2 2 d c 
            f 2 f . . f 2 2 d f d d f d d c 
            . f f . c f 2 2 d f d d f d d c 
            . . . c d b 2 2 d d d d d d c . 
            . . . c d b 2 2 2 d d d d d c . 
            . . . f d d 2 2 2 2 d d d f . . 
            . . . . f f f 2 2 2 2 2 f . . . 
            . . . . . . . f f f f f . . . . 
            `,img`
            . f f f f f f f f f f f f f . . 
            f f f f 2 b d d f d d f d d f . 
            f 2 f f 2 f b b f b d f d b f . 
            f 2 . f 2 2 2 f 2 2 f 2 2 f . . 
            f 2 . f 2 2 f 2 2 f 2 2 f . . . 
            f f . f 2 2 2 2 2 2 f f . . . . 
            . . . . f 2 2 2 2 f f f f f . . 
            . . . . . f f 2 2 2 d d d d f . 
            . . . . c f 2 2 2 d d c c c c c 
            . . . c d b 2 2 d d c d d d d c 
            . . . c d b 2 2 d d d d 2 2 d c 
            . . . f d d 2 2 d f d d f d c . 
            . . . . f f 2 2 d f d d f d c . 
            . . . . . f 2 2 2 d d d d f . . 
            . . . . . . f 2 2 2 2 2 f . . . 
            . . . . . . . f f f f f . . . . 
            `],
        200,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.deathBlock, function (sprite, otherSprite) {
    game.gameOver(false)
})
function spawnDeathblock (list2: Sprite[]) {
    if (info.score() >= 2) {
        tiles.placeOnRandomTile(list2._pickRandom(), assets.tile`myTile3`)
        pause(100)
    }
}
info.onScore(1, function () {
    mySprite.setVelocity(150, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    pause(2000)
})
info.onScore(5, function () {
    mySprite.setVelocity(300, 0)
})
let list2: Sprite[] = []
let list: Sprite[] = []
let sprite5: Sprite = null
let sprite4: Sprite = null
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let ValueJump = 0
ValueJump = 0
scene.setBackgroundImage(img`
    cccccccccccccceeeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555ccccccccccccccccccccccccccccccccceeeeeeecccccccccccccceeeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccccccccccccccccc555cccccccccc5555ccccccccccccccccccccccccccccccccceeeeeeecccccccccccccceeeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccccccccccccccccc555ccccccccc55555ccccccccccccccccccccccccccccccccceeeeeeecccccccccccccceeeeeccccccccccccccccccccc
    ccccccccccccccceeeeeccccccccccccccccccccccccccccccccccccccccccc555cccccccc5555555ccccccccccccccccccccccccccccccccceeeeeecccccccccccccceeeeeccccccccccccccccccccc
    ccccccccccccccceeeeecccccccccccccccccccccccccccccccccccccccccc555555cccccc555555555cccccccccccccccccccccccccccccccceeeeecccccccccccccceeeeeccccccccccccccccccccc
    ccccccccccccccceeeeecccccccccccccccccccccccccccccccccccccccccc555555cccc55555555555ccccccc555cccccccc5555cccccccccceeeeeeccccccccccccceeeeeccccccccccccccccccccc
    ccccccccccccccceeeeeccccccccccccccccccccccccccccccc555555ccccc555555cc55555555555555cccc55555ccccc5555555cccccccccceeeeeeecccccccccccceeeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccc5555555555c55555555cc55555555555555cccc55555ccccc5555555555ccccccceeeeeeecccccccccccceeeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccc5555555555c55555555cc555555222555555c55555555cccc5552222555ccccccceeeeeeeccccccccccccceeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccc555222255555555555555555552222555555c5555555555c55522255555cccccccceeeeeeccccccccccccceeeeccccccccccccccccccccc
    cccccccccccccceeeeeeccccccccccccccccccccccccccccccc555222255555555555555555222255555555555555555c5552225555cccccccccceeeeeccccccccccccceeeeecccccccccccccccccccc
    cccccccccccccceeeeecccccccccccccccccccccccccccccccc55522225555222555555555222222555555555555555555552225555cccccccccceeeeeecccccccccccceeeeecccccccccccccccccccc
    ccccccccccccceeeeeecccccccccccccccccccccccccccccccc55522225555222555555555222222555555555222555555522255555cccccccccceeeeeecccccccccccceeeeecccccccccccccccccccc
    ccccccccccccceeeeeeccccccccccccccccccccccccccccccccc55522255522222555555522222222555555552225555555222555cccccccccccceeeeeeeccccccccccceeeeeeccccccccccccccccccc
    ccccccccccccceeeeeeccccccccccccccccccccccccccccccccc55555555522222555555522222222555555522225555555222555cccccccccccceeeeeeeccccccccccceeeeeeccccccccccccccccccc
    cccccccccccceeeeeeeccccccccccccccccccccccccccccccccc5555555552222255555552222222255555552222555555555555cccccccccccccceeeeeeccccccccccceeeeeeecccccccccccccccccc
    cccccccccccceeeeeeccccccccccccccccccccccccccccccccccc555555522222225555522222222225555522222255555555555cccccccccccccceeeeeeccccccccccceeeeeeeeccccccccccccccccc
    ccccccccccceeeeeeeccccccccccccccccccccccccccccccccccc55555552222222555552222222222555552222225555555555cccccccccccccccceeeeeeccccccccccceeeeeeeecccccccccccccccc
    ccccccccccceeeeeeeccccccccccccccccccccccccccccccccccc55555552222222555552222222222555552222225555555555cccccccccccccccceeeeeeccccccccccceeeeeeeeeccccccccccccccc
    cccccccccceeeeeeecccccccccccccccccccccccccccccccccccc5555555555555555555555555555555555555555555555555ccccccccccccccccceeeeeecccccccccccceeeeeeeeccccccccccccccc
    cccccccccceeeeeeecccccccccccccccccccccccccccccccccccc5555555555555555555555555555555555555555555555555ccccccccccccccccceeeeeeccccccccccccceeeeeeeeeccccccccccccc
    cccccccccceeeeeeccccccccccccccccccccccccccccccccccccc5555555555555555555555555555555555555555555555555ccccccccccccccccceeeeeecccccccccccccceeeeeeeeccccccccccccc
    cccccccccceeeeeeccccccccccccccccccccccccccccccccccccc5555fff5555555fff55555555555555fff555555fff555555cccccccccccccccceeeeeeeccccccccccccccceeeeeeeecccccccccccc
    cccccccccceeeeecccccccccccccccccccccccccccccccccccccc5555fff5555555fff55555555555555fff555555fff55555cccccccccccccccceeeeeeeeccccccccccccccceeeeeeeeeccccccccccc
    cccccccccceeeeecccccccccccccccccccccccccccccccccccccc5555fff5555555fff55555555555555fff555555fff55555ccccccccccccccceeeeeeeeccccccccccccccccceeeeeeeeecccccccccc
    cccccccccceeeeecccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555cccccccccccccceeeeeeeeecccccccccccccccccceeeeeeeecccccccccc
    cccccccccceeeeecccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555ccccccccccccceeeeeeeeecccccccccccccccccccceeeeeeeeccccccccc
    ccccccccceeeeeecccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555cccccccccccceeeeeeeeeeccccccccccccccccccccceeeeeeeccccccccc
    ccccccccceeeeeecccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555ccccccccccceeeeeeeeeeccccccccccccccccccccccceeeeeeecccccccc
    ccccccccceeeeeecccccccccccccccccccccccccccccccccccccc555555555555555555555555555555555555555555555555cccccccccceeeeeeeeeecccccccccccccccccccccccceeeeeeecccccccc
    ccccccccceeeeeeccccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffccccccccceeeeeeeeeecccccccccccccccccccccccccceeeeeecccccccc
    ccccccccceeeeecccccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffccccccccceeeeeeeeeccccccccccccccccccccccccccceeeeeecccccccc
    ccccccccceeeeecccccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcccccccceeeeeeeecccccccccccccccccccccccccccccceeeeeeccccccc
    ccccccccceeeeecccccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffcccccccceeeeeeeccccccccccccccccccccccccccccccceeeeeeccccccc
    ccccccccceeeeeccccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeeeeccccccccccccccccccccccccccccccceeeeeeccccccc
    ccccccccceeeeeccccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeeecccccccccccccccccccccccccccccccceeeeeeccccccc
    ccccccccceeeeeccccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeecccccccccccccccccccccccccccccccccceeeeeccccccc
    ccccccccceeeeeccccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeecccccccccccccccccccccccccccccccccceeeeeccccccc
    ccccccccceeeeeecccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeecccccccccccccccccccccccccccccccccceeeeeccccccc
    ccccccccceeeeeecccccccccccccccccccccccccccccccfffffffddddddddddddddddddddddddddddddddddddddddddeeeeeeffffffcceeeeecccccccccccccccccccccccccccccccccceeeeeccccccc
    ccccccccceeeeeecccccccccccccccccccccccccffffffdddddddfffff222fffffffdddddddddddfffff222ffffffffddddddfffffffffffffcccccccccccccccccccccccccccccccccceeeeeccccccc
    ccccccccceeeeeecccccccccccccccccccccccccffffffdddddddfffff222fffffffdddddddddddfffff222ffffffffddddddfffffffffffffcccccccccccccccccccccccccccccccccceeeeeccccccc
    cccccccccceeeeeeccccccccccccccccccccccccffffffdddddddfffff222fffffffdddddddddddfffff222ffffffffddddddfffffffffffffcccccccccccccccccccccccccccccccccceeeeeccccccc
    cccccccccceeeeeeccccccccccccccccccccccccddddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddddddddddddddddeeeeeedddddddffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccceeeeeeccccccccccccccccccccccccddddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddddddddddddddddeeeeeedddddddffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccceeeeeeecccccccccccccccccccccccddddddddddddddddddeeeeeeeeeeeeeeeedddddddddddddddddddddddddddeeeeeedddddddffffffffcccccccccccccccccccccccccceeeeeccccccc
    ccccccccccceeeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    ccccccccccceeeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    ccccccccccceeeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccddddddcccccccddddddddddddddddddddddddddcccccccdddddddddddddddeeeeeefffffffffffffffcccccccccccccccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccdddddddddddddccccccccccccccccccccccccccddddddddddddddddddddddeeeeeeffffffffffffffffffffffffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccdddddddddddddccccccccccccccccccccccccccddddddddddddddddddddddeeeeeeffffffffffffffffffffffffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccdddddddddddddccccccccccccccccccccccccccddddddddddddddddddddddeeeeeeffffffffffffffffffffffffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeecccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddeeeeeefffffffffffffbbbbbbbbdddddddffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeeeccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddeeeeeefffffffffffffbbbbbbbbdddddddffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeeeccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddddddddddeeeeeefffffffffffffbbbbbbbbdddddddffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffccccccccccccceeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffccccccccccccceeeeeccccccc
    ccccccccccccceeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffcccccccccccceeeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffcccccccccccceeeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffcccccccccccceeeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddeeeeeeeeeeeeeeeefffffffffffffffffffdddddddddddddddffffffccccccccccceeeeeeeccccccc
    cccccccccccceeeeeecccccccccccccccccccccccccccccccccccfffffffffffffffffffffeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffccccccccccceeeeeecccccccc
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffffffffffffffffffeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffcccccccccceeeeeeecccccccc
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffffffffffffffffffeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffcccccccccceeeeeeecccccfff
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffcccccccccccccccceeeeeeccccfffff
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffcccccccccccccccceeeeeeccccfffff
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffccccccccccccccceeeeeecccccfffff
    cccccccccccceeeeeccccccccccccccccccccccccccccccccccccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffccccccccccccccceeeeeecccccfffff
    cccccccccccceeeeecccccccccccccccccccccccccccccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeeecccccfffff
    cccccccccccceeeeecccccccccccccccccccccccccccccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeeecccccfffff
    fffccccccccceeeeecccccccccccccccccccccccccccccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeecccccccffff
    fffccccccccceeeeecccccccccccccccccccccccccccccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeecccccccffff
    fffcccccccceeeeeecccccccccccccccccccccccccccccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeeccccccfffff
    ffffccccccccccccccccccccccccccccccccccccceeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeecccccffffff
    ffffccccccccccccccccccccccccccccccccccccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeecccccffffff
    ffffccccccccccccccccccccccccccccccccccccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeefffffffccccccccccccccceeeeecccccffffff
    fffffcccccccccccccccccccccccccccccccccccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeefffffffccccccccccccccccccccccccfffffff
    ffffffccccccccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffccccccccccccccccccccccccfffffff
    ffffffffccccccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffcccccccccccccccccccccccffffffff
    fffffffffcccccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffccccccccccccccccccccccfffffffff
    ffffffffffccccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffccccccccccccccccccccccfffffffff
    fffffffffffcccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffcccccccccccccccccccccffffffffff
    ffffffffffffccccccccccccccccccccccccffffbbbbbbdddddddfffffeeeeeeeeeeeeeeeefffffbbbbbbbbbbbbbbbbfffffffffffffffffffeeeeeeeefffffffcccccccccccccccccccccffffffffff
    fffffffffffffcccccccccccccccccccccccffffdddddddddddddffffffffffffffffffffffffffddddddddddddddddbbbbbbffffffffffffffffffffffffffffcccccccccccccccccccffffffffffff
    ffffffffffffffccccccccccccccccccccccffffdddddddddddddffffffffffffffffffffffffffddddddddddddddddbbbbbbffffffffffffffffffffffffffffccccccccccccccccccfffffffffffff
    ffffffffffffffffffccccccccccccccccccffffdddddddddddddffffffffffffffffffffffffffddddddddddddddddbbbbbbffffffffffffffffffffffffffffccccccccccccccccccfffffffffffff
    fffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccfffffffffffffff
    ffffffffffffffffffffccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffffffffffcccccccccccccccffffffffffffffff
    ffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mySprite4.setPosition(103, 38)
mySprite4.sayText("Bring Me Food Or Perish YOU MONKEY", 5000, false)
pause(5000)
timer.after(500, function () {
    ValueJump = 1
    info.setScore(0)
    mySprite = sprites.create(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `, SpriteKind.Player)
    mySprite2 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    mysprite3 = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.Food)
    sprite4 = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    sprite5 = sprites.create(img`
        . . . . . . c c c c c c . . . . 
        . . . . c c b b d d d d c . . . 
        . . . c c b b d d d d d d c . . 
        . . c b b d b d d d d d d b c . 
        . c b b b d b b d d d d d b c . 
        . c b b b d d b d d d d b b c . 
        c b c b b b d d b b b b b c c . 
        c b c c b b b b d d d b c c c . 
        c b b c c c c c c c c c c c c . 
        c c b b b b b b c c b d d d b c 
        c c c c c c c c c d d d d d d c 
        c c c c c c c b c b d d d d d b 
        c b b b c c c b c c b d d d c b 
        c c b b b c c b b c c c c b b c 
        c c c c c c c c b b b b b b c c 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.deathBlock)
    mySprite.sayText("I better run", 2000, true)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 8 8 8 8 8 f . . . 
        . . . . . f 8 8 8 d d d d f . . 
        . . . . f f 8 8 d f d d f d c . 
        . . . f d d 8 8 d f d d f d c . 
        . . . c d b 8 8 d d d d 8 8 d c 
        f f . c d b 8 8 d d c d d d d c 
        f 8 f . c f 8 8 d d d c c c c c 
        f 8 f . . f f 8 8 d d d d d f . 
        f 8 f . f 8 8 8 8 f f f f f . . 
        f 8 f f 8 8 8 8 8 8 8 f . . . . 
        . f f 8 8 8 8 f 8 f f 8 f . . . 
        . . f 8 8 8 8 f 8 f f 8 f . . . 
        . . . f 8 f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 8 8 8 8 8 f . . . 
        . . . . . f 8 8 8 d d d d f . . 
        . . . . . f 8 8 d f d d f d c . 
        . . . . f f 8 8 d f d d f d c . 
        . . . f d d 8 8 d d d d 8 8 d c 
        . . . c d b 8 8 d d c d d d d c 
        f f . c d b 8 8 8 d d c c c c c 
        f 8 f . c f f 8 8 8 d d d d f . 
        f 8 f . f 8 8 8 8 f f f f f f . 
        f 8 f f 8 8 8 8 8 8 8 f f f f . 
        . f f 8 8 8 8 f 8 f d d f d d f 
        . . f 8 8 8 8 f 8 f b d f b d f 
        . . f 8 f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 8 8 8 8 8 f . . . 
        . . . . f f 8 8 8 d d d d f . . 
        . . . f d d 8 8 d d d d d d c . 
        . . . c d b 8 8 d f d d f d c . 
        f f . c d b 8 8 d f d d f d d c 
        f 8 f . c f 8 8 d d d d 8 8 d c 
        f 8 f . . f 8 8 8 d c d d d d c 
        f 8 f . . f f 8 8 8 d c c c f . 
        f 8 f . f 8 8 8 8 f f f f f . . 
        . f f f 8 8 8 8 8 8 8 f . . . . 
        . . f 8 8 8 8 f 8 8 f 8 f f . . 
        . . f 8 8 8 f f f 8 8 f f 8 f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f 8 8 8 8 8 f . . . 
        . . . f d d 8 8 8 8 d d d f . . 
        . . . c d b 8 8 8 d d d d d c . 
        . . . c d b 8 8 d d d d d d c . 
        . f f . c f 8 8 d f d d f d d c 
        f 8 f . . f 8 8 d f d d f d d c 
        f 8 f . . f 8 8 d d d d 8 8 d c 
        f 8 f . . f f 8 8 d c d d d f . 
        f 8 f . f 8 8 8 8 8 d f f f . . 
        . f f f 8 8 8 8 8 8 8 f . . . . 
        . . f f b 8 8 8 8 8 f f . . . . 
        . . f f d d c 8 8 f f 8 f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f 8 8 8 8 8 f . . . 
        . . . . . f 8 8 8 d d d d f . . 
        . . . . f f 8 8 d f d d f d c . 
        . . . f d d 8 8 d f d d f d c . 
        . . . c d b 8 8 d d d d 8 8 d c 
        . . . c d b 8 8 d d c d d d d c 
        . . . . c f 8 8 8 d d c c c c c 
        . . . . . f f 8 8 8 d d d d f . 
        . . . . f 8 8 8 8 f f f f f . . 
        f f . f 8 8 8 8 8 8 f f . . . . 
        f 8 . f 8 8 f 8 8 f 8 8 f . . . 
        f 8 . f 8 8 8 f 8 8 f 8 8 f . . 
        f 8 f f 8 f b b f b d f d b f . 
        f f f f 8 b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    200,
    true
    )
    list = [mySprite2, mysprite3, sprite4]
    list2 = [sprite5]
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
})
music.play(music.createSong(hex`008a000408320200001c00010a006400f4016400000400000000000000000000000000050000040c0300001800021d201c004000021b9f40005800021b205c008000021d2080009800012498009c0001259c00b0000122b400bc000122bc00c000011bc000c8000122c800cc000122cc00d0000120d000d8000124d800dc00011bdc00e400011de400e8000124e800ec000124ec00f0000124f000f4000124f400f8000124f8000001012400011801012418011c0101251c013001012234013c0101223c014001011b40014801012248015001012250015801012258015c0101245c016001012060016401019f64017001011d80019801012498019c0101259c01b0010122b401bc010122bc01c001011bc001c8010122c801cc010122cc01d0010120d001d8010124d801dc01011bdc01e401011de401e8010124e801ec010124ec01f0010124f001f4010124f401f8010124f8010002012400021802012418021c0201251c023002012234023c0201223c024002011b40024802012248025002012250025802012258025c0201245c026002012060026402019f64027002011d80028802012988029002012990029402012994029802012798029c0201299c02a8020127a802ac020122ac02b4020124b402b8020125c002c8020127c802d0020127d002d4020127d402d8020124d802dc020127dc02e8020124e802ec02011dec02f402019ff402f802012000030803012908031003012910031403012914031803012718031c0301291c032803012728032c0301222c033403012434033803012540034803012748035003012750035403012754035803012458035c0301275c036803012468036c03011d6c037403019f74037803012080038803012988039003012990039403012994039803012798039c0301299c03a40301aba403ac0301abac03b803012ac003c8030127c803d0030127d003d8030127d803dc030127dc03e0030125e003e4030125e403e8030124f003f4030124f403f8030124f803fc030124fc031404012414041c0401251c043004012234043804012238043c0401223c044004019f40044404019f44045004011e50045804012458045c04011e5c047804012080049804021d209c04c004021b9f01001c000f05001202c102c20100040500280000006400280003140006020004540000000400010d08000c00010d10001400010d18001c00010d1c002000010f24002800010f2c003000010f30003400010f38003c00010f40004400011448004c00011450005400011458005c0001145c0060000114`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    spawnFood(list)
    spawnDeathblock(list2)
})
