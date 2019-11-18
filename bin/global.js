class EditTool extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    // disassemble() {
    //
    //     dimg("img/1.png",appinnerWidth/2,appinnerHeight/2,1)
    //     // var result
    //     //
    //     // var data = {
    //     //     ref: "REFERENCES",
    //     //     des: "DESCRIPTION",
    //     //     res: "DESCRIPTION",
    //     // }
    //     // str = document.getElementById("input").value
    //     // // var dataRequest = document.getElementById("request").value
    //     // // var dataResponse = document.getElementById("response").value
    //     //vis = true
    //     //this.setState(prevState => ({nextpage: true}))
    //
    //
    //     //  setInterval((function () {
    //     //
    //     // }),1000)
    //     //
    //     // if (app.renderer.view.style.zIndex=="100") {
    //     //      this.setState(prevState => ({nextpage: true}))
    //     //     vis = false
    //     // }
    //
    //     // var regexp = /REFERENCES|DESCRIPTION|RESPONSE/ig
    //     //
    //     // while (result = regexp.exec(str)) {
    //     //     console.log('Найдено: ' + result[0] + ' на позиции:' + result.index);
    //     //     console.log('Свойство lastIndex: ' + regexp.lastIndex);
    //     //     resultdata.push([[result[0], regexp.lastIndex]])
    //     //     // var t = str.substr(result[0],result.index+1-result.index  )
    //     // }
    //     //
    //     // resultdata.map(function (item, index) {
    //     //     if (resultdata.length == index) {
    //     //         t = str.substr(resultdata[index][0][1], srt.length)
    //     //     }
    //     //     else {
    //     //         t = str.substr(resultdata[index][0][1], resultdata[index + 1][0][1])
    //     //     }
    //     //
    //     console.log("true")
    //     //
    //     //
    //     // })
    //
    //
    // }
    disassemble0() {
        //onClick({x :0,y:0})
        // drowDentCleare()
        // inputData =[]
        // dimg("0.png",appinnerWidth/2,appinnerHeight/2,0.7)
    }
    disassemble1() {
        dimg("1.png",appinnerWidth/2,appinnerHeight/2,0.4)
    }
    disassemble2() {
        dimg("2.png",appinnerWidth/2,appinnerHeight/2,0.5)
    }
    disassemble3() {
        dimg("3.png",appinnerWidth/2,appinnerHeight/2,0.5)
    }
    disassemble4() {
        dimg("4.png",appinnerWidth/2,appinnerHeight/2,0.5)
    }
    disassemble5() {
        dimg("5.png",appinnerWidth/2,appinnerHeight/2,0.5)
    }
    disassemble6() {
        dimg("6.png",appinnerWidth/2,appinnerHeight/2,0.2)
    }
    disassemble7() {
        dimg("7.png",appinnerWidth/2,appinnerHeight/2,0.15)
    }
    disassemble8() {
        dimg("8.png",appinnerWidth/2,appinnerHeight/2,0.15)
    }
    fmovebag() {
        if (movebag==false){
            movebag =true
            modedent = false
            dbeetwin =false
            ov15 =false
            ov075 =false
        }else{
           movebag =false
        }
    }
    fmodedent() {
        if (modedent==false){
            modedent =true

        }else{
            modedent =false
        }
    }
    fbeetwin() {
        if (dbeetwin==false){
            dbeetwin =true
            container_text = new PIXI.Container
            container_text._zIndex=-100
            container_text.sortableChildren = true;
            app.stage.addChild(container_text);
            ov15=false
            ov075=false
            modedent=false
            movebag =false
        }else{
            dbeetwin =false
            container_text.destroy()
        }
    }
    printpdf () {
        if ( printflag==false){
            printflag =true
        }
    }
    overlape15 () {
        if (ov15==false){
            ov15=true
            ov075=false
            modedent=false
            movebag =false
            dbeetwin =false
        }else{
            ov15=false
        }
    }
    overlape075 () {
        if (ov075==false){
            ov075=true
            ov15=false
            modedent=false
            movebag =false
            dbeetwin =false
        }else{
            ov075=false
        }
    }
    frepair() {
        if (dentrepair==false){
            dentrepair=true
            modedent =false
        }else{
            dentrepair=false
        }
        rep ()
    }
    atfrepair() {
        if (atdentrepair==false){
            atdentrepair=true
            modedent =false
        }else{
            atdentrepair=false
            overlapclear ()
        }
        autorep ()
    }
    helper() {

    }
    ovclear (){
        overlapclear ()
    }




    render() {
        let menu = [
            "inpute files",
            "Overlape 1.5",
            "Overlape 0.75",
            "move dent",
            "delete dent",
            "print",

        ]

        if (!this.state.dropdownOpen) {
            return <div className="container">

                <div className="row text-center">
                    <a className="btn btn-danger align-self-center"  href="">RELOAD</a>
                    {/*<button className="btn  btn-danger  my-4" type="submit" onClick={this.disassemble0}>Reset</button>*/}
                    <button className="btn btn-info   my-4" type="submit" onClick={this.disassemble1}>NO.1</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble2}>NO.2</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble3}>NO.3</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble4}>NO.4</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble5}>NO.5</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble6}>NO.6</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble7}>IB AFT FLAP</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble8}>OB AFT FLAP</button>
                    <label  className="btn btn-info  my-4" onChange={readFile}>
                        <input id="inputFile" type="file" name="file"></input>
                        <span>ADD INPUT F.</span>
                    </label>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.printpdf}>PRINT</button>
                    <button className="btn btn-danger  my-4" type="submit" onClick={this.helper}>HELP</button>
                </div>
                <div className="row text-center">
                    <button name="MOVEBAG" className="btn btn-info  my-4" type="submit" onClick={this.fmovebag}>MOVE BAG</button>
                    <button name="EDITDENT" className="btn btn-info  my-4" type="submit" onClick={this.fmodedent}>EDIT DENT</button>
                    <button name="DITBEETBIN" className="btn btn-info  my-4" type="submit" onClick={this.fbeetwin}>BEETBIN D.</button>
                    <button name="OVERLAPE15" className="btn btn-info  my-4" type="submit" onClick={this.overlape15}>OVERLAPE 1.5</button>
                    <button  name="OVERLAPE075" className="btn btn-info  my-4" type="submit" onClick={this.overlape075}>OVERLAPE 0.75</button>
                    <button  name="OVERLAPE075" className="btn btn-info  my-4" type="submit" onClick={this.ovclear}>CLEAR</button>
                    {/*<button className="btn btn-info  my-4" type="submit" onClick={this.fupplow}>UPPER/LOWER</button>*/}
                    <button name="REPAIR" className="btn btn-info  my-4" type="submit" onClick={this.frepair}>DEPTH D.</button>
                    <button name="AUTOREPAIR" className="btn btn-info  my-4" type="submit" onClick={this.atfrepair}>AUTO REPAIR</button>
                </div>
            </div>
            //     <form className="text-center border border-light p-5 row">
            //     <input type="input" id="defaultLoginFormPassword" className="form-control mb-4"
            // placeholder="Job ID"></input>
            //     <button className="btn btn-info btn-block my-4" type="submit" onClick={this.disassemble}>Sign in</button>
            // </form>
        } else {
            return <div className="container dr">

                <div className="row text-center">
                    <button className="btn btn-danger align-self-center" type="submit"
                    >ReLoad
                    </button>
                    <button className="btn  btn-danger  my-4" type="submit" >Reset</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble1}>NO.1</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble2}>NO.2</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble3}>NO.3</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble4}>NO.4</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble5}>NO.5</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble6}>NO.6</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble7}>Other</button>






                    <div  className="container">

                            {menu.map(function (item, index) {
                                return (

                                    <button className="btn btn-info  col"  key={index}>{item}</button>

                                )
                            }, this)
                            }

                        </div>






                </div>
            </div>

        }
    }

}


ReactDOM.render(<EditTool/>,
    document.getElementById("app_")
)