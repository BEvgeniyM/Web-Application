
var appinnerHeight =window.innerHeight-150,
    appinnerWidth =window.innerWidth-50;


var vis = false,
    statusData,
    nowData;


// var PIXI = require('pixi.js'),
//     extraFilters = require('pixi-extra-filters');

var Application = PIXI.Application,
    container = new PIXI.Container,
    container_rectangle = new PIXI.Container,
    container_text= new PIXI.Container,
    container_over= new PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    graphics = new PIXI.Graphics();
    // var outlineFilterBlue = new PIXI.filters.OutlineFilter(2, 0x99ff99);                                                    // для подсветки углов при наведение мыши
    // var outlineFilterRed = new PIXI.filters.GlowFilter(15, 2, 1, 0xff9999, 0.5)          ;                                   // для подсветки углов при наведение мыши

let app = new PIXI.Application({
        width: 2,         // default: 800
        height: 2,        // default: 600
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 1       // default: 1
    }
);

document.body.appendChild(app.view);
app.renderer instanceof PIXI.WebGLRenderer            /////////////// &&&&&&&&&&&&&&&??????????????????????????????
app.renderer.backgroundColor = 16777215;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.left= "25px";
// app.renderer.view.style.top = "0";
//app.renderer.view.style.margin = "2px";
app.renderer.view.style.display = "block";
app.renderer.view.id= "canvas";
app.renderer.view.style.zIndex = "100";
app.renderer.autoResize = true;
app.renderer.resize(appinnerWidth, appinnerHeight);

app.stage.sortableChildren = true;                                                                                      // включаем сортировку по  zindex

app.stage.addChild(container);
container.sortableChildren = true;                                                                                      // включаем сортировку по  zindex

app.stage.addChild(container_rectangle);
container_rectangle.sortableChildren = true;                                                                            // включаем сортировку по  zindex

app.stage.addChild(container_text);
container_text.sortableChildren = true;

app.stage.addChild(container_text);
container_over.sortableChildren = true;


PIXI.loader
    .add([
        "img/Boeing-Logo.jpg",
        "img/0.png",
        "img/1.png",
        "img/2.png",
        "img/3.png",
        "img/4.png",
        "img/5.png",
        "img/6.png",
        "img/tr.png",
        "img/7.png",
        "img/8.png",


    ])
    // .add('spritesheet', 'images/mc.json')
    .on("progress", loadProgressHandler)
    .load(setup);

function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
    console.log("loading: " + resource.url);
    if (resource.url == "img/Boeing-Logo.jpg") {
        console.log("true");
    }
    //Display the percentage of files currently loaded
    console.log("progress: " + loader.progress + "%");

    //If you gave your files names as the first argument
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);

}
function setup() {
    console.log( "setup")

    backgroundimg("tr.png",0,0,0.07,0,0)
    backgroundimg("tr.png",appinnerWidth,0,0.07,0,1.57)
    backgroundimg("tr.png",0,appinnerHeight,0.07,0,4.7112)
    backgroundimg("tr.png",appinnerWidth,appinnerHeight,0.07,0,3.1415)


    dimg("0.png",appinnerWidth/2,appinnerHeight/2,0.7)


    //rectangle(0,0,appinnerWidth,appinnerHeight)

    cursorimg("tr.png",50,50,0.05,0,0)

    gameLoop();
    nowData = performance.now();
}
function gameLoop() {
    time = new Date();

    statusData = performance.now() - nowData;

    app.renderer.autoResize = true;
    app.renderer.resize(appinnerWidth, appinnerHeight);

    init()
    if ( printflag==true){
        if (!timelost ){
            timelost=time;
            container_rectangle.visible = false;
        }
        if (  timelost!=time) {
            Convert()
            container_rectangle.visible = true;
            timelost=""
        }
    }

    //init()

    requestAnimationFrame(gameLoop);
}
function  backgroundimg(img,x,y,m,g,a) {

    dude = new Sprite(resources["img/" + img].texture);
    container_rectangle.addChild(dude);

    dude.anchor.set(g);
    dude.rotation = a;
    dude.scale.set(m);
    dude.x = x;
    dude.y = y;
    dude.name = "corner"
    // Opt-in to interactivity
    dude.interactive = true;
    // Shows hand cursor
    dude.buttonMode = true;
    // Pointers normalize touch and mouse
    dude.on('pointerover', onClick_down(dude));
    dude.on('pointerout', onClick_up(dude));
    dude.on('pointerdown', onClick(dude));
}

function  cursorimg(img,x,y,m,g,a) {

    cursor = new Sprite(resources["img/"+img].texture);
    container_rectangle.addChild(cursor);

    cursor.anchor.set(g);
    cursor.scale.set(m/2,m/2);
    cursor.rotation =a;
    cursor.x = x;
    cursor.y = y;
    cursor.name = "cursor"
    cursor.zIndex =100
    cursor.sortableChildren = true;
}
function  dimg(img="0.png",x,y,m) {
    namebag = img
    dude = new Sprite(resources["img/"+img].texture);
    dude.sortableChildren = true;
    dude.name = "background"
    dude.anchor.set(0.5);
    dude.scale.set(m);
    dude.x = x;
    dude.y = y;
    dude.nameimg = img;
    dude.zIndex=-100;
    dude.interactive = true;

    drowDentCleare()

    // если данные есть то рисуем их на холсте
    container.addChild(dude);
    if (inputData[0]){
        drowDentinit()
    }
}
function  gif() {
    //passive zone, textures can not be destroyed
    gifload.anchor.set(0.5);
    gifload.scale.set(1);
    gifload.x = appinnerWidth/2;
    gifload.y = appinnerHeight/2;
}
function rectangle(x0,y0,x1,y1) {

    graphics.lineStyle(0,  0x000000, 1);
    graphics.moveTo(x0,y0);
    graphics.lineTo(x0, y1);
    graphics.lineTo(x1, y1);
    graphics.lineTo(x1, y0);
    graphics.lineTo(x0, y0);

    container_rectangle.addChild(graphics);

}
function drowDentCleare() {
    var i=0
    container.children.forEach(function (value, index, array) {
        if (value.name == "dent") {
            //for (let i = 0; i < inputData.length - 10; i += 5) {

                if (numcorner==1) {
                    modData[index-1+i] = (value.x-value.gpbx)/value.scalex
                    modData[index-1 + 1+i] = (value.y-value.gpby)/value.scaley
                    modData[index-1 + 2+i] = value.w/value.scalex
                    modData[index-1 + 3+i] = value.h/value.scaley
                    modData[index-1 + 4+i] = value.d
                }
                if (numcorner ==2) {
                    modData[i] = (value.x-value.gpbx)/value.scalex
                    modData[i + 1] = (value.y+value.gpby)/value.scaley
                    modData[i + 2] = value.w/value.scalex
                    modData[i + 3] = value.h/value.scaley
                    modData[i + 4] = value.d
                }
                if (numcorner ==3) {
                    modData[i] = (value.x+value.gpbx)/value.scalex
                    modData[i + 1] = (value.y+value.gpby)/value.scaley
                    modData[i + 2] = value.w/value.scalex
                    modData[i + 3] = value.h/value.scaley
                    modData[i + 4] = value.d
                }
                if (numcorner ==4) {
                    modData[i] = (value.x-value.gpbx)/value.scalex
                    modData[i + 1] = (value.y+value.gpby)/value.scaley
                    modData[i + 2] = value.w/value.scalex
                    modData[i + 3] = value.h/value.scaley
                    modData[i + 4] = value.d
                }

                //(value.x-value.gpbx)/value.scalex

            i += 5


                // console.log(inputData[i])
                // modData[i] = value.x
                // modData[i + 1] = value.y
                // modData[i + 2] = value.w
                // modData[i + 3] = value.h
                // modData[i + 4] = value.d
           // }
        }
    })

    container.destroy()

    container = new PIXI.Container
    container._zIndex=-100
    container.sortableChildren = true;

    app.stage.addChild(container);
}

//  событие для подсветки углов при наведение мыши
function onClick_down(obj){
    let r=obj
    return (function onClick (img) {
        r.tint = 10997449.289900918 // Math.random() * 0xFFFFFF;    16777215
    })
}
function onClick_up(obj){
    let r=obj
    return (function onClick (img) {
        r.tint = 16777215 // Math.random() * 0xFFFFFF;    16777215
    })
}
function onClick(obj){
    let r=obj
    return (function onClick (img) {
        drowDentCleare()
        r.x ==0 & r.y==0?numcorner=1: false
        r.x !=0 & r.y==0?numcorner=2: false
        r.x !=0 & r.y!=0?numcorner=3: false
        r.x ==0 & r.y!=0?numcorner=4: false
        console.log( "namebag" + namebag)
        dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.2)
        namebag=="1.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.4):false
        namebag=="2.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.5):false
        namebag=="3.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.5):false
        namebag=="4.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.5):false
        namebag=="5.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.5):false
        namebag=="6.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.2):false
        namebag=="7.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.15):false
        namebag=="8.png"?dimg(namebag,appinnerWidth/2,appinnerHeight/2,0.15):false
    })
}
function zindexapp() {
    if (container.alpha<=0){
        app.renderer.view.style.zIndex = "-100";
    }else {
        app.renderer.view.style.zIndex = "100";
    }
}
