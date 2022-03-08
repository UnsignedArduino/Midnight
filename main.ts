namespace SpriteKind {
    export const TilemapThing = SpriteKind.create()
    export const UntouchedThing = SpriteKind.create()
    export const TouchedThing = SpriteKind.create()
}
function run_level_1 () {
    fade(false, false)
    wait_for_overlap_and_a(sprite_thing_1, assets.image`stump_1_pressed`)
    swap_tile(assets.tile`left_front_fence_gate_closed0`, assets.tile`left_front_fence_gate_open`, true)
    swap_tile(assets.tile`right_front_fence_gate_closed`, assets.tile`right_front_fence_gate_open`, true)
    wait_for_location(tiles.getTilesByType(assets.tile`tile_target`))
    animate_screen_leaving(0, 100)
    fade(true, true)
    return true
}
function get_overlapping_sprite (target: Sprite, kind: number) {
    for (let sprite of sprites.allOfKind(kind)) {
        if (target.overlapsWith(sprite)) {
            return sprite
        }
    }
    return [][0]
}
function swap_tile (old_tile: Image, new_tile: Image, de_wall: boolean) {
    for (let location of tiles.getTilesByType(old_tile)) {
        tiles.setTileAt(location, new_tile)
        if (de_wall) {
            tiles.setWallAt(location, false)
        }
    }
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
function wait_for_overlap_and_a (target: Sprite, new_image: Image) {
    while (!(sprite_player.overlapsWith(target) && controller.A.isPressed())) {
        pause(0)
    }
    target.setKind(SpriteKind.TouchedThing)
    target.setImage(new_image)
}
function animate_screen_leaving (velx: number, vely: number) {
    enable_controls(false)
    sprite_player.setVelocity(velx, vely)
    sprite_player.setFlag(SpriteFlag.Ghost, true)
}
function prepare_level (level: number) {
    make_player()
    tiles.loadMap(tiles.copyMap(level_tilemaps[level - 1]))
    if (level == 1) {
        prepare_level_1()
    }
    create_tilemap_things()
}
function prepare_level_1 () {
    location = tiles.getTilesByType(assets.tile`tile_stump_1`)[0]
    tiles.setTileAt(location, assets.tile`transparency8`)
    tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
    sprite_thing_1 = sprites.create(assets.image`stump_1`, SpriteKind.UntouchedThing)
    sprite_thing_1.x = tiles.locationXY(location, tiles.XY.x)
    sprite_thing_1.bottom = tiles.locationXY(location, tiles.XY.bottom)
    sprite_thing_1.z = sprite_thing_1.bottom / 100
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
function wait_for_location (locs_in_list: any[]) {
    while (true) {
        pause(0)
        for (let location of locs_in_list) {
            if (sprite_player.tilemapLocation().column != location.column) {
                continue;
            }
            if (sprite_player.tilemapLocation().row != location.row) {
                continue;
            }
            return
        }
    }
}
function enable_controls (en: boolean) {
    controls_enabled = en
    if (en) {
        controller.moveSprite(sprite_player, 100, 100)
    } else {
        controller.moveSprite(sprite_player, 0, 0)
    }
}
function fade (fade_in: boolean, block: boolean) {
    if (fade_in) {
        color.startFade(color.originalPalette, color.Black, 1000)
    } else {
        color.startFade(color.Black, color.originalPalette, 1000)
    }
    if (block) {
        color.pauseUntilFadeDone()
    }
}
function create_tilemap_things () {
    spawn_tilemap_thing(assets.tile`tree_1`, assets.image`tree_1`)
    spawn_tilemap_thing(assets.tile`tile_tree_2`, assets.image`tree_2`)
    spawn_tilemap_thing(assets.tile`tile_tree_3`, assets.image`tree_3`)
    for (let location of tiles.getTilesByType(assets.tile`tile_target`)) {
        sprite_tilemap_thing = sprites.create(assets.image`ground`, SpriteKind.TilemapThing)
        sprite_tilemap_thing.setFlag(SpriteFlag.Ghost, true)
        sprite_tilemap_thing.z = -1
        tiles.placeOnTile(sprite_tilemap_thing, location)
    }
    for (let sprite_tilemap_thing of sprites.allOfKind(SpriteKind.TilemapThing)) {
        sprite_tilemap_thing.z = sprite_tilemap_thing.bottom / 100
    }
}
let controls_enabled = false
let location: tiles.Location = null
let sprite_player: Sprite = null
let return_val = false
let sprite_tilemap_thing: Sprite = null
let sprite_thing_1: Sprite = null
let level_tilemaps: tiles.WorldMap[] = []
let in_level = false
let current_level = 0
stats.turnStats(true)
color.setPalette(
color.Black
)
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
game.onUpdate(function () {
	
})
