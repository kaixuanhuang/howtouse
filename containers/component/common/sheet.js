/**
 * Created by huangsihuan on 2017/1/7.
 */
function Sheet(props){

    let style={verticalAlign: 'middle'}
    return (<div  className="toolbar-sheet">
        <div className="sheet-left">
            {left}
        </div>
        <div className="sheet-right">
            {right}
        </div>

    </div>)
}
