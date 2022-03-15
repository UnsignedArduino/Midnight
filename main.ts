namespace SpriteKind {
    export const TilemapThing = SpriteKind.create()
    export const UntouchedThing = SpriteKind.create()
    export const TouchedThing = SpriteKind.create()
    export const ToggleableThing = SpriteKind.create()
    export const OnToggleableThing = SpriteKind.create()
    export const Particle = SpriteKind.create()
}
function run_level_1 () {
    fade(false, false)
    wait_for_overlap_and_a(sprite_things[0], assets.image`stump_1_pressed`, SpriteKind.UntouchedThing)
    swap_tile(assets.tile`left_front_fence_gate_closed0`, assets.tile`left_front_fence_gate_open`, false)
    swap_tile(assets.tile`right_front_fence_gate_closed`, assets.tile`right_front_fence_gate_open`, false)
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
function swap_tile (old_tile: Image, new_tile: Image, do_wall: boolean) {
    for (let location of tiles.getTilesByType(old_tile)) {
        tiles.setTileAt(location, new_tile)
        tiles.setWallAt(location, do_wall)
    }
}
function prepare_level_3 () {
    sprite_things.push(make_toggleable_thing(tiles.getTilesByType(assets.tile`tile_rock`), true, true, assets.image`actual_rock`))
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
function is_overlapping_and_a (target: Sprite, new_image: Image, kind: number) {
    if (sprite_player.overlapsWith(target) && target.kind() == kind && controller.A.isPressed()) {
        if (target.kind() == SpriteKind.UntouchedThing) {
            target.setKind(SpriteKind.TouchedThing)
        } else if (target.kind() == SpriteKind.ToggleableThing) {
            target.setKind(SpriteKind.OnToggleableThing)
        } else if (target.kind() == SpriteKind.OnToggleableThing) {
            target.setKind(SpriteKind.ToggleableThing)
        }
        target.setImage(new_image)
        return true
    } else {
        return false
    }
}
function wait_for_button (press: boolean, check_for_on_target: boolean) {
    if (press) {
        if (check_for_on_target) {
            while (!(controller.A.isPressed()) && !(is_on_location(tiles.getTilesByType(assets.tile`tile_target`)))) {
                pause(0)
            }
        } else {
            while (!(controller.A.isPressed())) {
                pause(0)
            }
        }
    } else {
        if (check_for_on_target) {
            while (controller.A.isPressed() && !(is_on_location(tiles.getTilesByType(assets.tile`tile_target`)))) {
                pause(0)
            }
        } else {
            while (controller.A.isPressed()) {
                pause(0)
            }
        }
    }
}
function run_level (level: number) {
    current_level = level
    in_level = true
    spawn_particles = true
    enable_controls(true)
    if (level == 1) {
        return_val = run_level_1()
    } else if (level == 2) {
        return_val = run_level_2()
    } else if (level == 3) {
        return_val = run_level_3()
    }
    spawn_particles = false
    in_level = false
    enable_controls(false)
    sprite_player.destroy()
    return return_val
}
function wait_for_overlap_and_a (target: Sprite, new_image: Image, kind: number) {
    if (controller.A.isPressed()) {
        wait_for_button(false, true)
    }
    while (true) {
        pause(0)
        if (is_overlapping_and_a(target, new_image, kind)) {
            break;
        }
        if (controller.A.isPressed()) {
            wait_for_button(false, true)
        }
    }
}
function make_toggleable_thing (loc_in_list: any[], clear_tile: boolean, wall_tile: boolean, image2: Image) {
    location = loc_in_list[0]
    if (clear_tile) {
        tiles.setTileAt(location, assets.tile`transparency8`)
    }
    if (wall_tile) {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
    }
    sprite_thing = sprites.create(image2, SpriteKind.ToggleableThing)
    sprite_thing.x = tiles.locationXY(location, tiles.XY.x)
    sprite_thing.bottom = tiles.locationXY(location, tiles.XY.bottom)
    sprite_thing.z = sprite_thing.bottom / 100
    return sprite_thing
}
function animate_screen_leaving (velx: number, vely: number) {
    enable_controls(false)
    sprite_player.setVelocity(velx, vely)
    sprite_player.setFlag(SpriteFlag.Ghost, true)
}
function prepare_level (level: number) {
    make_player()
    tiles.loadMap(tiles.copyMap(level_tilemaps[level - 1]))
    tiles.placeOnRandomTile(sprite_player, assets.tile`start`)
    tiles.setTileAt(tiles.getTilesByType(assets.tile`start`)[0], assets.tile`transparency8`)
    sprite_things = []
    if (level == 1) {
        prepare_level_1()
    } else if (level == 2) {
        prepare_level_2()
    } else if (level == 3) {
        prepare_level_3()
    }
    create_tilemap_things()
}
function prepare_level_1 () {
    sprite_things.push(make_untouched_thing(tiles.getTilesByType(assets.tile`tile_stump_1`), true, true, assets.image`stump_1`))
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
function make_untouched_thing (loc_in_list: any[], clear_tile: boolean, wall_tile: boolean, image2: Image) {
    location = loc_in_list[0]
    if (clear_tile) {
        tiles.setTileAt(location, assets.tile`transparency8`)
    }
    if (wall_tile) {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
    }
    sprite_thing = sprites.create(image2, SpriteKind.UntouchedThing)
    sprite_thing.x = tiles.locationXY(location, tiles.XY.x)
    sprite_thing.bottom = tiles.locationXY(location, tiles.XY.bottom)
    sprite_thing.z = sprite_thing.bottom / 100
    return sprite_thing
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
function run_level_3 () {
    fade(false, false)
    while (!(is_on_location(tiles.getTilesByType(assets.tile`tile_target`)))) {
        pause(0)
        if (is_overlapping_and_a(sprite_things[0], assets.image`rock_pressed`, SpriteKind.ToggleableThing)) {
            swap_tile(assets.tile`left_front_fence_gate_closed0`, assets.tile`left_front_fence_gate_open`, false)
            swap_tile(assets.tile`right_front_fence_gate_closed`, assets.tile`right_front_fence_gate_open`, false)
        } else if (is_overlapping_and_a(sprite_things[0], assets.image`actual_rock`, SpriteKind.OnToggleableThing)) {
            swap_tile(assets.tile`left_front_fence_gate_open`, assets.tile`left_front_fence_gate_closed0`, true)
            swap_tile(assets.tile`right_front_fence_gate_open`, assets.tile`right_front_fence_gate_closed`, true)
        }
        if (controller.A.isPressed()) {
            wait_for_button(false, true)
        }
    }
    animate_screen_leaving(0, -100)
    fade(true, true)
    return true
}
function run_level_2 () {
    fade(false, false)
    while (!(is_on_location(tiles.getTilesByType(assets.tile`tile_target`)))) {
        pause(0)
        if (is_overlapping_and_a(sprite_things[0], assets.image`stump_1_pressed`, SpriteKind.UntouchedThing)) {
            set_tiles([tiles.getTileLocation(8, 9)], assets.tile`left_left_fence_gate_open`, false)
            set_tiles([tiles.getTileLocation(8, 10)], assets.tile`right_left_fence_gate_open`, false)
            tiles.setWallAt(tiles.getTileLocation(8, 8), false)
        }
        if (is_overlapping_and_a(sprite_things[1], assets.image`stump_1_pressed`, SpriteKind.UntouchedThing)) {
            set_tiles([tiles.getTileLocation(11, 9)], assets.tile`left_left_fence_gate_closed`, true)
            set_tiles([tiles.getTileLocation(11, 10)], assets.tile`right_left_fence_gate_closed`, true)
            tiles.setWallAt(tiles.getTileLocation(11, 8), true)
        }
        if (is_overlapping_and_a(sprite_things[2], assets.image`stump_1_pressed`, SpriteKind.UntouchedThing)) {
            set_tiles([tiles.getTileLocation(14, 9)], assets.tile`left_left_fence_gate_open`, false)
            set_tiles([tiles.getTileLocation(14, 10)], assets.tile`right_left_fence_gate_open`, false)
            tiles.setWallAt(tiles.getTileLocation(14, 8), false)
        }
        if (controller.A.isPressed()) {
            wait_for_button(false, true)
        }
    }
    animate_screen_leaving(100, 0)
    fade(true, true)
    return true
}
function is_on_location (locs_in_list: any[]) {
    for (let location of locs_in_list) {
        if (sprite_player.tilemapLocation().column != location.column) {
            continue;
        }
        if (sprite_player.tilemapLocation().row != location.row) {
            continue;
        }
        return true
    }
    return false
}
function set_tiles (locations: any[], tile: Image, wall: boolean) {
    for (let location of locations) {
        tiles.setTileAt(location, tile)
        tiles.setWallAt(location, wall)
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
    for (let sprite_tilemap_thing of sprites.allOfKind(SpriteKind.TilemapThing)) {
        sprite_tilemap_thing.z = sprite_tilemap_thing.bottom / 100
    }
    for (let location of tiles.getTilesByType(assets.tile`tile_target`)) {
        sprite_tilemap_thing = sprites.create(assets.image`ground`, SpriteKind.TilemapThing)
        sprite_tilemap_thing.setFlag(SpriteFlag.Ghost, true)
        sprite_tilemap_thing.z = -1
        tiles.placeOnTile(sprite_tilemap_thing, location)
    }
}
function prepare_level_2 () {
    sprite_things.push(make_untouched_thing(tiles.getTilesByType(assets.tile`tile_stump_1`), true, true, assets.image`stump_1`))
    sprite_things.push(make_untouched_thing(tiles.getTilesByType(assets.tile`tile_stump_0`), true, true, assets.image`stump_1`))
    sprite_things.push(make_untouched_thing(tiles.getTilesByType(assets.tile`tile_stump_3`), true, true, assets.image`stump_1`))
}
let sprite_particle: Sprite = null
let controls_enabled = false
let sprite_thing: Sprite = null
let location: any = null
let return_val = false
let sprite_player: Sprite = null
let sprite_tilemap_thing: Sprite = null
let sprite_things: Sprite[] = []
let level_tilemaps: tiles.WorldMap[] = []
let spawn_particles = false
let in_level = false
let current_level = 0
stats.turnStats(true)
color.setPalette(
color.Black
)
current_level = 0
in_level = false
spawn_particles = false
level_tilemaps = [tiles.createSmallMap(tilemap`level_0`), tiles.createSmallMap(tilemap`level_2`), tiles.createSmallMap(tilemap`level_3`)]
scene.setBackgroundColor(15)
timer.background(function () {
    prepare_level(3)
    run_level(3)
})
game.onUpdate(function () {
    if (in_level) {
        sprite_player.z = sprite_player.bottom / 100
        for (let kind of [SpriteKind.Particle]) {
            for (let sprite of sprites.allOfKind(kind)) {
                sprite.z = sprite.bottom / 100
            }
        }
        if (false) {
            for (let kind of [
            SpriteKind.Player,
            SpriteKind.TilemapThing,
            SpriteKind.UntouchedThing,
            SpriteKind.TouchedThing,
            SpriteKind.Particle
            ]) {
                for (let sprite of sprites.allOfKind(kind)) {
                    sprite.sayText("Z: " + sprite.z)
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (spawn_particles) {
        timer.throttle("spawn_particle", 333, function () {
            sprite_particle = sprites.create(assets.image`particle`, SpriteKind.Particle)
            sprite_particle.setFlag(SpriteFlag.Ghost, true)
            sprite_particle.vy = -10
            sprite_particle.vx = randint(-10, 10)
            sprite_particle.ay = 5
            sprite_particle.x = randint(0, tiles.tilemapColumns() * tiles.tileWidth())
            sprite_particle.y = randint(0, tiles.tilemapRows() * tiles.tileWidth())
            sprite_particle.lifespan = 5000
        })
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.Particle)
    }
})
