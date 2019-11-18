// //  проверка если клик мышки то меняем координаты всех обектов контейнера
// if (modedent ==true) {
//     inputData.forEach(function (value, index, array) {
//         inputData.forEach(function (value2, index2, array2) {
//
//
//         })
//     })
// }

//    мереем растояние между дентами
function distdent(movx, movy) {
    let box = getCoords("camvas")
    movx = movx - box.left
    movy = movy - box.top

    if (dbeetwin == true) {
        var dist , distm;
        container.children.forEach(function (value, index) {
            let rx = Math.abs(movx - value.getGlobalPosition().x)
            let ry = Math.abs(movy - value.getGlobalPosition().y)
            let r = (rx * rx) / (value.w * value.w) + (ry * ry) / (value.h * value.h)

            //    сброс подсветки и флагов
            if (seconddent && firstdent) {
                container.children.forEach(function (value, index) {
                   if (value.name == "dent"){
                       value.alpha = 0.5
                   }
                })
                firstdent = false
                seconddent = false
                //container_text.destroy()
            }
            //   провекрка лежит ли курсор внутри дента
            if (r <= 1 && value.name != "background") {

                value.alpha = 1

                //проверка если клик мышки ревый флаг запоминает номер дента
                if (!firstdent) {
                    value.alpha = 0.5
                    firstdent = index
                    //console.log ("firstdent" +index)
                    //    второй флаг запоменает номер дента
                } else if (firstdent) {
                    value.alpha = 0.5
                    seconddent = index
                    dist = ((container.children[firstdent].x - container.children[index].x) ** 2 + (container.children[firstdent].y - container.children[index].y) ** 2) ** 0.5
                    distm = ((container.children[firstdent].x* 1/container.children[firstdent].scalex - container.children[index].x*1/container.children[index].scalex) ** 2 + (container.children[firstdent].y*1/container.children[firstdent].scaley- container.children[index].y*1/container.children[index].scaley) ** 2) ** 0.5
                    console.log(" seconddent" + index + "   " + dist + "   " + distm)
                    // координаты точки между двумя дентами
                    let lx =Math.min(container.children[firstdent].getGlobalPosition().x , container.children[index].getGlobalPosition().x)+Math.abs((container.children[firstdent].getGlobalPosition().x - container.children[index].getGlobalPosition().x)/2)
                    let ly = Math.min(container.children[firstdent].getGlobalPosition().y , container.children[index].getGlobalPosition().y)+Math.abs((container.children[firstdent].getGlobalPosition().y - container.children[index].getGlobalPosition().y)/2)

                    graphics = new PIXI.Graphics();
                    //graphics.beginFill(0xFF3300);
                    //graphics.
                    graphics.lineStyle(2, 0xffd900, 1);
                    graphics.moveTo(container.children[firstdent].getGlobalPosition().x, container.children[firstdent].getGlobalPosition().y);
                    graphics.lineTo(container.children[index].getGlobalPosition().x, container.children[index].getGlobalPosition().y);
                    graphics.endFill();
                    container_text.addChild(graphics);

                    var basicText = new PIXI.Text(Math.round(distm,4));
                    basicText.x = lx;
                    basicText.y = ly;
                    basicText.zIndex = 1;
                    basicText.name = "distdent";
                    basicText.alpha = 1
                    basicText.anchor.set(0.5);

                    container_text.addChild(basicText);


                }
            }


        })
    }

//  добавляем и убераем оверлап
    if (ov15 == true || ov075 == true) {

        container.children.forEach(function (value, index) {
            let rx = Math.abs(movx - value.getGlobalPosition().x)
            let ry = Math.abs(movy - value.getGlobalPosition().y)
            let r = (rx * rx) / (value.w * value.w) + (ry * ry) / (value.h * value.h)

            //   провекрка лежит ли курсор внутри дента
            if (r <= 1 && value.name != "background") {

                value.alpha = 0.5

                //провека если свойство есть то удаляем овесайз если нет то создаем
                if (value.overlap == 0) {
                    value.overlap = 1
                    if (ov15) {
                        container.children[index + 2].visible = true
                        //container.children[index+3].visible = false
                    } else {
                        container.children[index + 3].visible = true
                        //container.children[index+2].visible = false
                    }
                } else {
                    value.overlap = 0
                    container.children[index + 3].visible = false
                    container.children[index + 2].visible = false
                }

            }


        })
    }


}

function overlapclear () {
    container.children.forEach(function (value, index) {
        if (value.name=="over"){
           value.visible = false
        }
    })
}