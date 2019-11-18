// SpLen  [0] = 59.5;
// SpLen  [1] = 21.2;
// SpLen  [2] = 41.25;
// SpLen  [3] = 22.0;
// SpLen  [4] = 41.25;
// SpLen  [5] = 22.83;
// SpLen  [6] = 41.25;
// SpLen  [7] = 23.69;
// SpLen  [8] = 36.8;
// // SpLen  [9] = 23.7;
// SpLen  [10] = 93.6;
// SpLen  [11] = 20.8;

var data = [
    {x:59.5,y:21.2},
    {x:41.25,y:22.0},
    {x:41.25,y:22.83},
    {x:41.25,y:23.69},
    {x:36.8,y:23.7},
    {x:93.6,y:20.8},
    {x:75,y:14.5},
    {x:75,y:14.5}
]
var x0=1,y0=1,clikmousen2= false
var movx=1;
var movy=1;
var clikmousen1;
var dentselect=1
onliclik
var inputData =[];
var modData =[];
var movebag = false;
var modedent =false;
var dbeetwin =false;
var dentrepair =false;
var atdentrepair =false ;
var ov15=false,
    ov075=false;
var movelisten =false,
    movebaglis=false
var scrule =false
var onliclik=false;
var numcorner = 1;
var namebag="0.png";
var dentdepthmax=0.024;
var dentdepthrep=0.01;
var firstdent =false
var seconddent=false
var printflag =false
let time = new Date(),
    timelost ="";
var sizetext =12


function init() {
    var MOVEBAG = document.getElementsByName("MOVEBAG")
    var EDITDENT = document.getElementsByName("EDITDENT")
    var DITBEETBIN = document.getElementsByName("DITBEETBIN")
    var OVERLAPE15 = document.getElementsByName("OVERLAPE15")
    var OVERLAPE075 = document.getElementsByName("OVERLAPE075")
    var REPAIR= document.getElementsByName("REPAIR")
    var AUTOREPAIR = document.getElementsByName("AUTOREPAIR")


    if (movebag){
        MOVEBAG[0].classList.add("btn-danger")
        MOVEBAG[0].classList.remove("btn-info")
         // modedent = false
         // dbeetwin =false
         // ov15 =false
         // ov075 =false
    } else {
        MOVEBAG[0].classList.add("btn-info")
        MOVEBAG[0].classList.remove("btn-danger")
    }

    if (dbeetwin ){
        DITBEETBIN[0].classList.add("btn-danger")
        DITBEETBIN[0].classList.remove("btn-info")
        // modedent = false
        // dbeetwin =false
        // ov15 =false
        // ov075 =false
    }else {
        DITBEETBIN[0].classList.remove("btn-danger")
        DITBEETBIN[0].classList.add("btn-info")
    }

    if (dentrepair  ){
        REPAIR[0].classList.add("btn-danger")
        REPAIR[0].classList.remove("btn-info")
        // movebag = false
        // modedent =false
        // dbeetwin=false
    }else{
        REPAIR[0].classList.remove("btn-danger")
        REPAIR[0].classList.add("btn-info")
    }

    if (modedent){
        EDITDENT[0].classList.add("btn-danger")
        EDITDENT[0].classList.remove("btn-info")
        dbeetwin =false
        container_text.destroy()
        scrule =false
        movebaglis=false
        movebag =false
        ov15 =false
        ov075 =false

        dentrepair=false
        rep ()

    }else{
        EDITDENT[0].classList.remove("btn-danger")
        EDITDENT[0].classList.add("btn-info")
    }

    if (ov15   ){
        OVERLAPE15[0].classList.add("btn-danger")
        OVERLAPE15[0].classList.remove("btn-info")
        // ov075 =false
        // modedent = false
        // dbeetwin =false
        // movebag = false
        // modedent =false
        // dbeetwin=false
    }else{
        OVERLAPE15[0].classList.remove("btn-danger")
        OVERLAPE15[0].classList.add("btn-info")
    }

    if (ov075  ){
        OVERLAPE075[0].classList.add("btn-danger")
        OVERLAPE075[0].classList.remove("btn-info")
        // ov15 =false
        // modedent = false
        // dbeetwin =false
        // movebag = false
        // modedent =false
        // dbeetwin=false
    }else{
        OVERLAPE075[0].classList.remove("btn-danger")
        OVERLAPE075[0].classList.add("btn-info")
    }

    if (dentrepair  ){
        REPAIR[0].classList.add("btn-danger")
        REPAIR[0].classList.remove("btn-info")
        // movebag = false
        // modedent =false
        // dbeetwin=false
    }else{
        REPAIR[0].classList.remove("btn-danger")
        REPAIR[0].classList.add("btn-info")
    }

    if (atdentrepair ){
        AUTOREPAIR[0].classList.add("btn-danger")
        AUTOREPAIR[0].classList.remove("btn-info")
        // movebag = false
        // modedent =false
        // dbeetwin=false
    }else {
        AUTOREPAIR[0].classList.remove("btn-danger")
        AUTOREPAIR[0].classList.add("btn-info")
    }

    if (  scrule || movebaglis){
        dbeetwin =false
        container_text.destroy()
        scrule =false
        movebaglis=false
    }


}