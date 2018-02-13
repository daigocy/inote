import React, { Component } from 'react';

import '../css/note.css'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        }
    }

    changingTitle() {
        this.setState({
            editing: true
        })
    }

    modifyTitle(evt) {
        if(evt.key === 'Enter') {
            this.props.titleCallbacks.modifyNote(this.props.id, evt.target.value)
            this.setState({
                editing: false
            })
        }
    }

    render() {
        let desc, title;
        if(this.props.showNoteDesc){
            desc = (<p>{this.props.desc}</p>)
        }
        if(this.state.editing) {
            title = (<input defaultValue={" "} onKeyPress={this.modifyTitle.bind(this)}></input>)

        }else {
            title = (<span className="note-title" onDoubleClick={this.changingTitle.bind(this)}>{this.props.name}</span>)
        }
        return (
            <div className="note">
                <i className="fa fa-file-text"></i>{" "}
                {title}
                {desc}
            </div>
        )
    }
}

export default Note;
