import React, { Component } from 'react'

export default class Context extends Component {
    render() {
        return (
            <div>
                {/* <h4>İçeriklerin bulunduğu yer</h4> */}
                {/*Props ile ilgili çalışmalar */}
                {/* <h5>{this.props.ornek}</h5> */}
                {/*Props ve Encapsulations ile ilgili çalışmalar */}
                <h5>{this.props.info.icerik_1}</h5>

            </div>
        )
    }
}
