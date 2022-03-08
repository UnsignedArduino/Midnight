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
    tiles.loadMap(level_tilemaps[level - 1])
    if (level == 1) {
        prepare_level_1()
    }
    create_tilemap_things()
}
function prepare_level_1 () {
	
}
function make_player () {
    sprite_player = sprites.create(assets.image`player_face_down`, SpriteKind.Player)
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_left`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_look_left`,
    200,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_right`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_look_right`,
    200,
    characterAnimations.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_up`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_look_up`,
    200,
    characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_walk_down`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    sprite_player,
    assets.animation`player_look_down`,
    200,
    characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving)
    )
    scene.cameraFollowSprite(sprite_player)
}
function enable_controls (en: boolean) {
    controls_enabled = en
    if (en) {
        controller.moveSprite(sprite_player)
    } else {
        controller.moveSprite(sprite_player, 0, 0)
    }
}
function create_tilemap_things () {
	
}
let controls_enabled = false
let sprite_player: Sprite = null
let return_val = false
let level_tilemaps: tiles.WorldMap[] = []
let in_level = false
let current_level = 0
current_level = 0
in_level = false
level_tilemaps = [tiles.createSmallMap(tilemap`level_0`)]
scene.setBackgroundColor(15)
prepare_level(1)
run_level(1)
