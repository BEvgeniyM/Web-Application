function readFile() {
    var selectedFile = document.getElementById('inputFile').files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var FileContent = e.target.result;
        parseContent(FileContent);
    };

    reader.readAsText(selectedFile);

};
function parseContent(content) {
    inputData = (content.replace(/\s{2,}/g, " ").split( /\s/g));
    drowDentinit()
};
function drowDentinit() {
    var box = {}

    // if (modData[0]){
    //     for (let i = 0; i < modData.length - 10; i += 5) {
    //         // console.log(inputData[i])
    //         box.x = inputData[i]
    //         box.y = inputData[i + 1]
    //         box.w = inputData[i + 2]
    //         box.h = inputData[i + 3]
    //         box.d = inputData[i + 4]
    //         drowDent(box);
    //     }
    // } else {
        for (let i = 0; i < inputData.length - 10; i += 6) {
            // console.log(inputData[i])
            box.n = inputData[i]
            box.x = inputData[i+1]
            box.y = inputData[i + 2]
            box.w = inputData[i + 3]
            box.h = inputData[i + 4]
            box.d = inputData[i + 5]
            drowDent(box);
        }
    // }

   /// drowDent  (box); !!!!!!!!!!!!!!!!!!!!!!!!!
}
function drowDent(box) {
    let gpbx ;
    let gpby;

    container.children.forEach(function (value, index, array) {
        if ( value.name =="background") {
            box.name = +(value.nameimg.split( /\.png/g))[0];
            box.scalex = value.width/data[box.name-1].x
            box.scaley =value.height/data[box.name-1].y
        }
    })

    if (numcorner ==1) {
         gpbx = container.toGlobal(dude.position).x -(container.children[0].width*container.scale.x)/2
         gpby = container.toGlobal(dude.position).y -(container.children[0].height*container.scale.y)/2
    }
    if (numcorner ==2) {
        gpbx = container.toGlobal(dude.position).x +(container.children[0].width*container.scale.x)/2
        gpby = container.toGlobal(dude.position).y -(container.children[0].height*container.scale.y)/2
    }
    if (numcorner ==3) {
        gpbx = container.toGlobal(dude.position).x +(container.children[0].width*container.scale.x)/2
        gpby = container.toGlobal(dude.position).y +(container.children[0].height*container.scale.y)/2
    }
    if (numcorner ==4) {
        gpbx = container.toGlobal(dude.position).x -(container.children[0].width*container.scale.x)/2
        gpby = container.toGlobal(dude.position).y +(container.children[0].height*container.scale.y)/2
    }

    let px = box.x * box.scalex
    let py = box.y * box.scaley
    let pw = box.w * box.scalex
    let ph = box.h * box.scaley

    let ellipse = new PIXI.Graphics();

    // set a fill and line style
    ellipse.beginFill (0x35CC5A, 0)
    ellipse.lineStyle(1, 0x000000, 1);
    ellipse.drawEllipse(0,0,pw,ph);

    if (numcorner==1) {
        ellipse.x = gpbx + px;
        ellipse.y = gpby + py;
    }
    if (numcorner ==2) {
        ellipse.x = gpbx - px;
        ellipse.y = gpby + py;
    }
    if (numcorner ==3) {
        ellipse.x = gpbx - px;
        ellipse.y = gpby - py;
    }
    if (numcorner ==4) {
        ellipse.x = gpbx + px;
        ellipse.y = gpby - py;
    }
    ellipse.n=box.n;
    ellipse.d=box.d;
    ellipse.w=pw;
    ellipse.h=ph;
    ellipse.scalex=box.scalex;
    ellipse.scaley=box.scaley;
    ellipse.gpbx =gpbx
    ellipse.gpby =gpby
    ellipse.name="dent";
    ellipse.num =box.n
    ellipse.overlap=0

    ellipse.sortableChildren = true;
    ellipse.zIndex = 1

    ellipse.endFill();
    ellipse.on ("pointerdown", onClick())

    container.addChild(ellipse);


    // тектс только
    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: sizetext,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#000000', '#000000'], // gradient
        stroke: '#000000',
        strokeThickness: 0,
        dropShadow: false,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    });
    var basicText = new PIXI.Text(box.n, style);
    basicText.x = ellipse.x;
    basicText.y = ellipse.y;
    basicText.zIndex = 1;
    basicText.name = "text";
    basicText.alpha = 0.5
    basicText.anchor.set(0.5);
    container.addChild(basicText);


    // оверлап только 075 and 1.5
    let overlap = new PIXI.Graphics();


    pwl = ellipse.w + 1.5 * ellipse.scalex
    phl = ellipse.h + 1.5 * ellipse.scaley
    overlap.overlap = 1.5
    overlap.lineStyle(0, 0xFFFFFF, 1);
    overlap.beginFill(0x3500FA, 1);
    overlap.drawEllipse(0, 0, pwl, phl);
    overlap.endFill();
    overlap.name = "over";
    overlap.num =box.n
    overlap.alpha = 0.1
    overlap.x = ellipse.x
    overlap.y = ellipse.y
    overlap.sortableChildren = true;
    overlap.zIndex = 1
    overlap.visible = false

    container.addChild(overlap);


    let overlap75 = new PIXI.Graphics();
    pwl = ellipse.w + 0.75 * ellipse.scalex
    phl = ellipse.h + 0.75 * ellipse.scaley
    overlap75.overlap = 0.75
    overlap75.lineStyle(0, 0xFFFFFF, 1);
    overlap75.beginFill(0x35CC5A, 1);
    overlap75.drawEllipse(0, 0, pwl, phl);
    overlap75.endFill();
    overlap75.name = "over";
    overlap75.num =box.n
    overlap75.alpha = 0.1
    overlap75.x = ellipse.x
    overlap75.y = ellipse.y
    overlap75.sortableChildren = true;
    overlap75.zIndex = 1
    overlap75.visible = false

    container.addChild(overlap75);


}
