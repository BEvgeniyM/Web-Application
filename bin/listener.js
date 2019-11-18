window.addEventListener(
    "mousedown", clickListener, false
);
window.addEventListener(
    "mouseup", upListener, false
);
window.addEventListener(
    "mousemove", moveListener, false
);
window.addEventListener(
    "click", funclick, false
);

function funclick(e) {
    if (e.which == 1) {
        distdent(e.pageX, e.pageY)
    }
    if (onliclik == false) {
        onliclik = true
    } else {
        onliclik = false
    }
}

function clickListener(e) {
    // сохраняем координаты клика мышки и ствим флаг что нажата кнопка
    x0 = e.pageX
    y0 = e.pageY
    if (e.which == 2) {
        clikmousen2 = true
    }
    if (e.which == 1) {
        clikmousen1 = true
    }
    console.log("down")
}

function upListener(e) {
    clikmousen2 = false
    clikmousen1 = false
    console.log("up")

}

function moveListener(e) {
    movelisten =true
    //  координаты холста и курсора на нем
    let box = getCoords("camvas")
    movx = e.pageX - box.left
    movy = e.pageY - box.top


    //    edit dent  меняем дент
    if (modedent == true) {
        //   подсветка дента
        container.children.forEach(function (value2, index2) {
            // let rx =Math.abs(movx-value2.x)
            // let ry =Math.abs(movy-value2.y)
            let rx = Math.abs(movx - value2.getGlobalPosition().x)
            let ry = Math.abs(movy - value2.getGlobalPosition().y)
            // let rx =Math.abs(cursor.getGlobalPosition().x-value2.getGlobalPosition().x)
            // let ry =Math.abs(cursor.getGlobalPosition().y-value2.getGlobalPosition().y)


            let r = (rx * rx) / (value2.w * value2.w) + (ry * ry) / (value2.h * value2.h)
            //  убираем подсветку дента при отводе курсора в сторону
            if (value2.name == "dent" ) {
                value2.alpha = 0.5
            }
            //  включаем подсветку и производим изминения  дента
            if (r <= 1 && value2.name == "dent" ) {
                value2.alpha = 1
                // запоминаем номер дента который ми подсветили
                // если кнопка мишки не нажата
                if (!clikmousen1) {
                    dentselect = index2
                }
                //проверка если клик мышки по клавише 1 то меняем координаты дента
                //делаем проверку на NaN иначе координата дента станет NaN
                if (clikmousen1) {
                    // домнажаем на маштаб что бы сопали положения курсора  и дента(((
                    movx ? container.children[dentselect].x = movx * 1 / container.scale.x : true
                    movy ? container.children[dentselect].y = movy * 1 / container.scale.y : true

                    // координаты текста  подпись дента всегда +1  в контейнере
                    movx ? container.children[dentselect+1].x = movx * 1 / container.scale.x : true
                    movy ? container.children[dentselect+1].y = movy * 1 / container.scale.y : true

                    // координаты текста  подпись дента всегда +1  в контейнере
                    movx ? container.children[dentselect+2].x = movx * 1 / container.scale.x : true
                    movy ? container.children[dentselect+2].y = movy * 1 / container.scale.y : true

                    // координаты текста  подпись дента всегда +1  в контейнере
                    movx ? container.children[dentselect+3].x = movx * 1 / container.scale.x : true
                    movy ? container.children[dentselect+3].y = movy * 1 / container.scale.y : true

                }
            }


        })
    }


    // перемешение курсора
    container_rectangle.children.forEach((value) => {
        if (value.name == "cursor") {
            value.x = movx
            value.y = movy
        }
    })


    //  проверка если клик мышки то меняем координаты всех обектов контейнера
    if (clikmousen2) {
        movebaglis=true
        container.children.forEach(function (value, index, array) {
            // console.log(value2)
            value.x -= (x0 - e.pageX) / 50;
            value.y -= (y0 - e.pageY) / 50;
            //console.log(value.x)
            //document.body.style("cursor:move")

            if (movebag == true) {//  важно тут можно допустить ошибку и тогда обработается только первый объект сонтейнера , двигатсяя будет только подложка
                document.body.style("cursor:move")   //  вместо brack
            }
        })
    }

}

function addOnWheel(window, handler) {
    if (window.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            window.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            window.addEventListener("mousewheel", handler);
        } else {
            // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
            window.addEventListener("MozMousePixelScroll", handler);
        }
    } else { // IE8-
        window.attachEvent("onmousewheel", handler);
    }
}


addOnWheel(window, function (e) {
    scrule =true

    var delta = e.deltaY || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) {
        container.scale.x *= 1.01;
        container.scale.y *= 1.01;
        container.x = container.x * 1.01;
        container.y = container.y * 1.01;

    }
    else {
        container.scale.x *= 0.99;
        container.scale.y *= 0.99;
        container.x = container.x * 0.99;
        container.y = container.y * 0.99;
    }


    // отменим прокрутку
    e.preventDefault();
});

function getCoords() {

    // определяем координаты элемента canvas  и возвращаем обект
    //          {
    //          top: top,
    //          left: left
    //          }
    (1)
    var elem = document.getElementById("canvas");
    elem.style.cursor = 'none';
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    // (2)
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    // (3)
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    // (4)
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: top,
        left: left
    };
}