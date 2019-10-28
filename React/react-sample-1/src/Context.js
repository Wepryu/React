import React, { Component } from "react";

export default class Context extends Component {
    state = {
      stateKullanimi: [
        { lstId: 1, lstName: "state kullanım örnek list1" },
        { lstId: 2, lstName: "state kullanım örnek list2" },
        { lstId: 3, lstName: "state kullanım örnek list3" }
      ]
    };
 
  render() {
    return (
      <div style={{backgroundColor: "DodgerBlue"}}> 
        <p>asdasdasd</p>
        {/* <h4>İçeriklerin bulunduğu yer</h4> */}
        {/*Props ile ilgili çalışmalar */}
        {/* <h5>{this.props.ornek}</h5> */}
        {/*Props ve Encapsulations ile ilgili çalışmalar */}
        <h5>{this.props.info.icerik_1}</h5>

        {/*State kullanimi asagidaki gibidir. */}
        {this.state.stateKullanimi.map(lstContext=>(
            /*Events kullanimi asagidir */
            <button key={lstContext.lstId} onClick={()=> this.props.changeContextField(lstContext)}>içerikler : {lstContext.lstName}</button>
        ))}
        <h5>{this.props.changeState.eventsCalisma}</h5>
      </div>
    );
  }
}
