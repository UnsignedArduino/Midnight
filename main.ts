function run_level_1 () {
    while (true) {
        pause(0)
    }
    return true
}
function run_level (level: number) {
    current_level = level
    in_level = true
    enable_controls(true)
    if (level == 1) {
        return_val = run_level_1()
    }
    in_level = false
    enable_controls(false)
    sprite_player.destroy()
    return return_val
}
function prepare_level (level: number) {
    make_player()
    if (level == 1) {
        prepare_level_1()
    }
}
function prepare_level_1 () {
	
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
let controls_enabled = false
let sprite_player: Sprite = null
let return_val = false
let in_level = false
let current_level = 0
prepare_level(1)
run_level(1)
