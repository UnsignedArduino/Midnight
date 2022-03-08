function set_level (level: number) {
    if (level == 1) {
        level_1()
    } else {
        return
    }
    current_level = level
}
function make_player () {
    sprite_player = sprites.create(img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 f f f 1 f f f f 1 f f f 1 . 
        . 1 f f f 1 f f f f 1 f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `, SpriteKind.Player)
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 f 1 f f f f f 1 . . . . 
        . . 1 f f f 1 f f f f f 1 . . . 
        . . 1 f f f f 1 1 1 f f 1 . . . 
        . 1 f f f f f f f f 1 1 1 . . . 
        . 1 f f 1 1 1 1 1 f f f 1 . . . 
        . 1 1 1 f f f f f 1 1 1 1 1 . . 
        . 1 f f f f f 1 f f f f f 1 . . 
        . . 1 f f f f 1 f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f 1 . . . . . 
        . . . . 1 1 f f f 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . 1 f 1 f f f f 1 1 . . . . 
        . . 1 f f f 1 f f f f f 1 . . . 
        . . 1 f f f f 1 1 1 f f 1 . . . 
        . 1 f f f f f f f f 1 1 1 . . . 
        . 1 f f 1 1 1 1 f f f f 1 . . . 
        . 1 1 1 f f f f 1 1 1 1 1 1 . . 
        . 1 f f f f 1 f f f f f f 1 . . 
        . . 1 f f f 1 f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 f f f f f f 1 . . . . . 
        . . . 1 f f f f f f 1 . . . . . 
        . . 1 f f f f f f f f 1 . . . . 
        . . 1 f f f 1 1 1 f f 1 . . . . 
        . . . 1 1 1 . . . 1 1 . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 f 1 f f f f f 1 . . . . 
        . . 1 f f f 1 f f f f f 1 . . . 
        . . 1 f f f f 1 1 1 f f 1 . . . 
        . 1 f f f f f f f f 1 1 1 . . . 
        . 1 f f 1 1 1 1 1 f f f 1 . . . 
        . 1 1 1 f f f f f 1 1 1 1 1 . . 
        . 1 f f f f f 1 f f f f f 1 . . 
        . . 1 f f f f 1 f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f f 1 . . . . 
        . . . 1 f f f f f f 1 . . . . . 
        . . . . 1 1 f f f 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 f f f f f 1 f 1 . . . 
        . . . 1 f f f f f 1 f f f 1 . . 
        . . . 1 f f 1 1 1 f f f f 1 . . 
        . . . 1 1 1 f f f f f f f f 1 . 
        . . . 1 f f f 1 1 1 1 1 f f 1 . 
        . . 1 1 1 1 1 f f f f f 1 1 1 . 
        . . 1 f f f f f 1 f f f f f 1 . 
        . . 1 f f f f f 1 f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . . 1 f f f f f f 1 . . . 
        . . . . . . 1 f f f 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . 1 1 f f f f 1 f 1 . . . 
        . . . 1 f f f f f 1 f f f 1 . . 
        . . . 1 f f 1 1 1 f f f f 1 . . 
        . . . 1 1 1 f f f f f f f f 1 . 
        . . . 1 f f f f 1 1 1 1 f f 1 . 
        . . 1 1 1 1 1 1 f f f f 1 1 1 . 
        . . 1 f f f f f f 1 f f f f 1 . 
        . . 1 f f f f f f 1 f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . . 1 f f f f f f 1 . . . 
        . . . . . 1 f f f f f f 1 . . . 
        . . . . 1 f f f f f f f f 1 . . 
        . . . . 1 f f 1 1 1 f f f 1 . . 
        . . . . . 1 1 . . . 1 1 1 . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 f f f f f 1 f 1 . . . 
        . . . 1 f f f f f 1 f f f 1 . . 
        . . . 1 f f 1 1 1 f f f f 1 . . 
        . . . 1 1 1 f f f f f f f f 1 . 
        . . . 1 f f f 1 1 1 1 1 f f 1 . 
        . . 1 1 1 1 1 f f f f f 1 1 1 . 
        . . 1 f f f f f 1 f f f f f 1 . 
        . . 1 f f f f f 1 f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . . 1 f f f f f f 1 . . . 
        . . . . . . 1 f f f 1 1 . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f 1 1 f f f 1 . . . 
        . . 1 1 1 1 1 f f 1 1 1 1 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 1 f f f f f f f f f f f 1 . 
        . 1 f f f f f f f f f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f 1 1 f f f 1 . . . 
        . . . 1 1 1 1 f f 1 1 1 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 f f f f f f f f f f f f 1 . 
        . 1 1 f f f f f f f f f f 1 1 . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f f 1 . . 
        . . . 1 f f f 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 . . . . . . . . . 
        `,img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f 1 1 f f f 1 . . . 
        . . 1 1 1 1 1 f f 1 1 1 1 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 1 f f f f f f f f f f f 1 . 
        . 1 f f f f f f f f f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f 1 1 f f f 1 . . . 
        . . . 1 1 1 1 f f 1 1 1 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 1 f f f f f f f f f f 1 1 . 
        . 1 1 f f f f f f f f f f 1 1 . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 f f f 1 . . . 
        . . . . . . . . . 1 1 1 . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f 1 1 f f f 1 . . . 
        . . 1 1 1 1 1 f f 1 1 1 1 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 1 f f f f f f f f f f f 1 . 
        . 1 f f f f f f f f f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f 1 1 1 1 1 1 f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . 1 1 f f f 1 f f 1 f f f f 1 . 
        . 1 f f f f 1 f f 1 f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 f f f 1 1 1 1 1 1 f f f 1 . 
        . 1 1 1 1 f f f f f f 1 1 1 1 . 
        . . 1 f f f 1 f f 1 f f f 1 . . 
        . . 1 f f f 1 f f 1 f f f 1 . . 
        . . . 1 f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 f f f f f f f f 1 . . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . 1 f f 1 1 1 1 . . . . . 
        . . . . 1 1 1 . . . . . . . . . 
        `,img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f 1 1 1 1 1 1 f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . 1 f f f f 1 f f 1 f f f 1 1 . 
        . 1 f f f f 1 f f 1 f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . 1 f f f 1 1 1 1 1 1 f f f 1 . 
        . 1 1 1 1 f f f f f f 1 1 1 1 . 
        . . 1 f f f 1 f f 1 f f f 1 . . 
        . . 1 f f f 1 f f 1 f f f 1 . . 
        . . 1 f f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 1 . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . . 1 1 1 1 f f 1 . . . . 
        . . . . . . . . . 1 1 1 . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    sprite_player,
    [img`
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f 1 1 1 1 1 1 f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . 1 1 f f f 1 f f 1 f f f f 1 . 
        . 1 f f f f 1 f f 1 f f f f 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 1 1 f f f f f f 1 1 1 . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving)
    )
}
function enable_controls (en: boolean) {
    controls_enabled = en
    if (en) {
        controller.moveSprite(sprite_player)
    } else {
        controller.moveSprite(sprite_player, 0, 0)
    }
}
function level_1 () {
	
}
let controls_enabled = false
let sprite_player: Sprite = null
let current_level = 0
make_player()
set_level(1)
enable_controls(true)
