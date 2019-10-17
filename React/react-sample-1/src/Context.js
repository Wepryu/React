import React, { Component } from "react";

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateKullanimi: [
        { lstId: 0, lstName: "state kullanım örnek list0" },
        { lstId: 1, lstName: "state kullanım örnek list1" },
        { lstId: 2, lstName: "state kullanım örnek list" }
      ]
    };
  }
  render() {
    return (
      <div>
        <p>asdasdasd</p>
        {/* <h4>İçeriklerin bulunduğu yer</h4> */}
        {/*Props ile ilgili çalışmalar */}
        {/* <h5>{this.props.ornek}</h5> */}
        {/*Props ve Encapsulations ile ilgili çalışmalar */}
        <h5>{this.props.info.icerik_1}</h5>

        {/*State kullanımı asagidaki gibidir. */}
        <h6>{this.state.stateKullanimi.map(lstContext=>(
            <p>içerikler : {lstContext.lstName}</p>
        ))}</h6>
      </div>
    );
  }
}
