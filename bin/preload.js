
var vis = false,
      statusData,
    nowData;
// //
// // var Application = PIXI.Application,
// //     container = new PIXI.Container(),
// //     container = new PIXI.Container,
// //     loader = PIXI.loader,
// //     resources = PIXI.loader.resources,
// //     TextureCache = PIXI.utils.TextureCache,
// //     Sprite = PIXI.Sprite,
// //     Rectangle = PIXI.Rectangle,
// //     graphics = new PIXI.Graphics();
// //
// // let app = new PIXI.Application({
// //         width: 2,         // default: 800
// //         height: 2,        // default: 600
// //         antialias: true,    // default: false
// //         transparent: false, // default: false
// //         resolution: 1       // default: 1
// //     }
// // );
//
// // document.body.appendChild(app.view);
// app.renderer instanceof PIXI.WebGLRenderer            /////////////// &&&&&&&&&&&&&&&??????????????????????????????
// app.renderer.backgroundColor = 16777215;
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.left = "0";
// app.renderer.view.style.top = "0";
// app.renderer.view.style.display = "block";
// app.renderer.view.style.zIndex = "100";
// app.renderer.autoResize = true;
// app.renderer.resize(window.innerWidth, window.innerHeight);
//
// app.stage.addChild(container);
//
//
// // PIXI.loader
// //     .add([
// //         "img/Boeing-Logo.jpg",
// //         "img/c24a594c32522a.gif"
// //
// //     ])
// //     .add('spritesheet', 'images/mc.json')
// //     .on("progress", loadProgressHandler)
// //     .load(setup);
//
// function loadProgressHandler(loader, resource) {
// //Display the file `url` currently being loaded
//     console.log("loading: " + resource.url);
//
//     //Display the percentage of files currently loaded
//     console.log("progress: " + loader.progress + "%");
//
//     //If you gave your files names as the first argument
//     //of the `add` method, you can access them like this
//     //console.log("loading: " + resource.name);
//
// }
function start() {

    app.renderer instanceof PIXI.WebGLRenderer            /////////////// &&&&&&&&&&&&&&&??????????????????????????????
    app.renderer.backgroundColor = 16777215;
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.left = "0";
    app.renderer.view.style.top = "0";
    app.renderer.view.style.display = "block";
    app.renderer.view.style.zIndex = "100";
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    console.log( "setup")

    rectangle(0,0,window.innerWidth/2,window.innerHeight)
    container.addChild(graphics);

    dude = new Sprite(resources["img/Boeing-Logo.jpg"].texture);
    container.addChild(dude);

    // gifload = new Sprite(resources["img/c24a594c32522a.gif"].texture);
    // container.addChild(gifload);

    prebackgroundimg()
    gameLoop();
    nowData = performance.now();
}
function preload() {

    statusData = performance.now() - nowData;

    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);
    dude.x = window.innerWidth/2;
    dude.y = window.innerHeight/2;
    graphics.width =  window.innerWidth
    graphics.height =  window.innerWidth

  //console.log(statusData)
     if (statusData >=1000 ) {
         zindexapp()
         if (vis == false) {
             container.alpha <= 0 ? container.alpha = 0 : container.alpha -= 0.01;
             app.renderer.view.style.opacity = container.alpha;

         }
         if (vis == true) {

             container.alpha >= 1 ? container.alpha = 1 : container.alpha += 0.01;
             app.renderer.view.style.opacity = container.alpha;
         }
     }


    // requestAnimationFrame(gameLoop);


}
function  prebackgroundimg() {
    //passive zone, textures can not be destroyed
    dude.anchor.set(0.5);
    dude.scale.set(1);
    dude.x = window.innerWidth/2;
    dude.y = window.innerHeight/2;
}
function zindexapp() {
   if (container.alpha<=0){
       app.renderer.view.style.zIndex = "-100";
       }else {
       app.renderer.view.style.zIndex = "100";
   }
}
