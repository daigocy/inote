import React, { Component } from 'react';
import Note from './note'

import '../css/folderbox.css'

class FolderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChilds: false
        }
    }
    toggleChilds() {
        this.setState({
            showChilds: !this.state.showChilds
        })
    }

    render() {
        let folders, notes;
        if(this.state.showChilds) {
            folders = (
                <ul className="folder-folder-list">
                    {this.props.folders.map((folder, folderIndex) =>{
                        return (<li key={folderIndex}>
                            <FolderBox name={folder.name} folders={folder.folders} notes={folder.notes}
                                showNoteDesc={this.props.showNoteDesc}
                                titleCallbacks={this.props.titleCallbacks}
                                ></FolderBox>
                        </li>)
                    })}
                </ul>
            )
            notes = (
                <ul className="folder-note-list">
                    {this.props.notes.map((note, noteIndex) =>{
                        return (<li key={noteIndex}>
                            <Note id={note.id} name={note.name} desc={note.desc} showNoteDesc={this.props.showNoteDesc}
                                titleCallbacks={this.props.titleCallbacks}
                                ></Note>
                        </li>)
                    })}
                </ul>
            )
        }
        return (
            <div className="folderbox">
                <div className="folderbox-title" onClick={this.toggleChilds.bind(this)}>
                    <i className={`fa fa-folder${this.state.showChilds?'-o':''}`}></i>{" "}
                    <span className="title">{this.props.name}</span>
                </div>
                {folders}
                {notes}
            </div>
        )
    }
}

export default FolderBox;
