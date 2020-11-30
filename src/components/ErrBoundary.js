

import React, { Component } from 'react'

export default class ErrBoundary extends Component {

     state={
        err:false
    }

    static getDerivedStateFromError(error)
    {
        return {err:true}

    }
    render() {
        return (
            <div>
                {this.state.err && <h1>Oops ! something wen wrong </h1>}
            </div>
        )
    }
}


