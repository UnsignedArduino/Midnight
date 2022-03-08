namespace SpriteKind {
    export const TilemapThing = SpriteKind.create()
}
function run_level_1 () {
    while (true) {
        pause(0)
    }
    return true
}
function spawn_tilemap_thing (tile: Image, thing_image: Image) {
    for (let location of tiles.getTilesByType(tile)) {
        tiles.setTileAt(location, assets.tile`transparency8`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
        sprite_tilemap_thing = sprites.create(thing_image, SpriteKind.TilemapThing)
        sprite_tilemap_thing.setFlag(SpriteFlag.Ghost, true)
        sprite_tilemap_thing.x = tiles.locationXY(location, tiles.XY.x)
        sprite_tilemap_thing.bottom = tiles.locationXY(location, tiles.XY.bottom)
    }
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
    spawn_tilemap_thing(assets.tile`tree_1`, assets.image`tree_1`)
    spawn_tilemap_thing(assets.tile`tile_tree_2`, assets.image`tree_2`)
    for (let sprite_tilemap_thing of sprites.allOfKind(SpriteKind.TilemapThing)) {
        sprite_tilemap_thing.z = sprite_tilemap_thing.bottom / 100
    }
}
let controls_enabled = false
let sprite_player: Sprite = null
let return_val = false
let sprite_tilemap_thing: Sprite = null
let level_tilemaps: tiles.WorldMap[] = []
let in_level = false
let current_level = 0
current_level = 0
in_level = false
level_tilemaps = [tiles.createSmallMap(tilemap`level_0`)]
scene.setBackgroundColor(15)
timer.background(function () {
    prepare_level(1)
    run_level(1)
})
game.onUpdate(function () {
    if (in_level) {
        sprite_player.z = sprite_player.bottom / 100
    }
})
