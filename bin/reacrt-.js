
var marginapptop = 100

class Menu extends React.Component {

    render() {
        let menu = [
            "Overlape 1.5",
            "Overlape 0.75"
        ]
        return <div>{
            menu.map((value, index) => {
                <button className="btn  btn-danger  my-4" type="submit" key={index}>{value}</button>
            })
        }
        </div>
    }
}





class EditTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nextpage: false,
            menu: false
        }
        this.disassemble = this.disassemble.bind(this);
        this.menu = this.disassemble.bind(this);
    }

    disassemble() {

        dimg("img/1.png",appinnerWidth/2,appinnerHeight/2,1)
        // var result
        //
        // var data = {
        //     ref: "REFERENCES",
        //     des: "DESCRIPTION",
        //     res: "DESCRIPTION",
        // }
        // str = document.getElementById("input").value
        // // var dataRequest = document.getElementById("request").value
        // // var dataResponse = document.getElementById("response").value
        //vis = true
        //this.setState(prevState => ({nextpage: true}))


        //  setInterval((function () {
        //
        // }),1000)
        //
        // if (app.renderer.view.style.zIndex=="100") {
        //      this.setState(prevState => ({nextpage: true}))
        //     vis = false
        // }

        // var regexp = /REFERENCES|DESCRIPTION|RESPONSE/ig
        //
        // while (result = regexp.exec(str)) {
        //     console.log('Найдено: ' + result[0] + ' на позиции:' + result.index);
        //     console.log('Свойство lastIndex: ' + regexp.lastIndex);
        //     resultdata.push([[result[0], regexp.lastIndex]])
        //     // var t = str.substr(result[0],result.index+1-result.index  )
        // }
        //
        // resultdata.map(function (item, index) {
        //     if (resultdata.length == index) {
        //         t = str.substr(resultdata[index][0][1], srt.length)
        //     }
        //     else {
        //         t = str.substr(resultdata[index][0][1], resultdata[index + 1][0][1])
        //     }
        //
        console.log("true")
        //
        //
        // })


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
        dimg("6.png",appinnerWidth/2,appinnerHeight/2,0.2)
    }
    menu() {
        this.setState(prevState => ({menu: true}))
        console.log( this.setState.menu)
    }



    render() {
        if (!this.state.menu) {
            return <div className="container">

                <div className="row text-center">
                    <button className="btn btn-danger align-self-center" type="submit"
                            onClick={this.disassemble}>ReLoad
                    </button>
                    <button className="btn  btn-danger  my-4" type="submit" onClick={this.disassemble}>Reset</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble1}>NO.1</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble2}>NO.2</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble3}>NO.3</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble4}>NO.4</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble5}>NO.5</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble6}>NO.6</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble7}>Other</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.menu}>menu</button>

                    <label className="btn btn-info  my-4" onChange="readFile()">
                        <input id="inputFile" type="file" name="file"></input>
                        <span>Add input file</span>
                    </label>

                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble}>Print</button>


                </div>
            </div>
            //     <form className="text-center border border-light p-5 row">
            //     <input type="input" id="defaultLoginFormPassword" className="form-control mb-4"
            // placeholder="Job ID"></input>
            //     <button className="btn btn-info btn-block my-4" type="submit" onClick={this.disassemble}>Sign in</button>
            // </form>
        } else {
            return <div className="container">

                <div className="row text-center">
                    <button className="btn btn-danger align-self-center" type="submit"
                            onClick={this.disassemble}>ReLoad
                    </button>
                    <button className="btn  btn-danger  my-4" type="submit" onClick={this.disassemble}>Reset</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble1}>NO.1</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble2}>NO.2</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble3}>NO.3</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble4}>NO.4</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble5}>NO.5</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble6}>NO.6</button>
                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble7}>Other</button>
                    <Menu/>
                    <label className="btn btn-info  my-4" onChange="readFile()">
                        <input id="inputFile" type="file" name="file"></input>
                        <span>Add input file</span>
                    </label>

                    <button className="btn btn-info  my-4" type="submit" onClick={this.disassemble}>Print</button>


                </div>
            </div>

        }
    }

}


ReactDOM.render(<EditTool/>,
    document.getElementById("app")
)