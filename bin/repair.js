function rep() {

    container.children.forEach(function (value, index) {

        if (value.name == "dent" && dentrepair == true) {
            let ellipse = new PIXI.Graphics();

            if (container.children[index].d >= 0.01 && container.children[index].d < 0.024) {
                ellipse.lineStyle(0, 0xFFFFFF, 1);
                ellipse.beginFill(0xAA4F08, 1);
            } else if (container.children[index].d >= 0.024) {
                ellipse.lineStyle(0, 0xFFFFFF, 1);
                ellipse.beginFill(0xDE3249, 1);
            }

            pwl = container.children[index].w
            phl = container.children[index].h
            xl = container.children[index].x;
            yl = container.children[index].y;

            ellipse.drawEllipse(xl, yl, pwl, phl);
            ellipse.endFill();
            ellipse.name = "repair";
            ellipse.alpha = 0.25
            ellipse.sortableChildren = true;
            ellipse.zIndex = 1

            container.addChild(ellipse);

        } else {
            if (value.name == "repair") {
                value.x = -1000
                value.y = -1000
                //container.removeChild( value)
            }
        }

    })

}

function autorep () {
    let A = new Array(), n =false

    container.children.forEach(function (value, index) {
        let arra = new Array()
        container.children.forEach(function (value1, index1) {
            let distm = ((container.children[index].x * 1 / container.children[index].scalex - container.children[index1].x * 1 / container.children[index1].scalex) ** 2 + (container.children[index].y * 1 / container.children[index].scaley - container.children[index1].y * 1 / container.children[index1].scaley) ** 2) ** 0.5

            if (distm <= 3.0 && value1.name=="dent" && value.name=="dent"  ) {
                //  если нет  ниодного  из свойст то создаем новый масив
                if (achack (value1.num)==false && achack (value.num)==false){
                    arra.push(value1.num)
                }
                 //если есть одно из свойст то
                if (achack (value1.num)==false && achack (value.num)==true){
                    A[+n].push (value1.num)
                    n=false
                }

                // console.log(value1.num +  "   "  + value.num)
            }
            //console.log(" seconddent" + index + "   "  + distm)
        })
        if (arra[0]){
            A.push(arra)
        }
    })
    console.log(" arra" + A)

    function achack (chack){
        let f =false
        A.forEach(function (value, index) {
            value.forEach(function (value2, ) {
                if (value2 == chack){
                    f= true
                    n=index
                }
            })
        })
        return f
    }


    container.children.forEach(function (value, index) {
        A.forEach(function (value3) {
            if (value3[1]) {
                value3.forEach(function (value2) {

                    if (value.num == value2 && value.name == "over" && value.overlap == 0.75) {
                        console.log("               " + value2)
                        container.children[index].visible = true
                    }

                })
            }
        })
    })
}

