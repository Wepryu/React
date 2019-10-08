import React, { Component } from 'react'

export default class Context extends Component {
    render() {
        return (
            <div>
                <h4>İçeriklerin bulunduğu yer</h4>
                <h5>{this.props.ornek}</h5>

            </div>
        )
    }
}
