// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "image1":
            case "player_face_down":return img`
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
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "player_walk_left":
            case "anim1":return [img`
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
`, img`
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
`];
            case "player_look_left":
            case "anim2":return [img`
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
`];
            case "player_walk_right":
            case "anim3":return [img`
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
`, img`
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
`];
            case "player_look_right":
            case "anim4":return [img`
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
`];
            case "player_walk_up":
            case "anim5":return [img`
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
`, img`
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
`, img`
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
`, img`
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
`];
            case "player_look_up":
            case "anim6":return [img`
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
`];
            case "player_walk_down":
            case "anim7":return [img`
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
`, img`
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
`, img`
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
`, img`
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
`];
            case "player_look_down":
            case "anim8":return [img`
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
`];
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
