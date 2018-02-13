import React, { Component } from 'react';
import update from 'immutability-helper';

import Book from './book';

import '../css/booklist.css';

let notebooks = [
    {
        id: 1,
        name: "notebook1",
        folders: [],
        notes: [
            {
                id: 2,
                name: "note02-01-01",
                createTime: "2017-12-1 12:00",
                lastChange: "2017-12-1 22:00",
                desc: "wuwuwu,note2"
            }
        ]
    },
    {
        id: 2,
        name: "notebook2",
        folders: [
            {
                id: 1,
                name: "folder02-01",
                folders: [{
                    id: 2,
                    name: "folder02-01-01",
                    folders: [],
                    notes: [
                        {
                            id: 2,
                            name: "note02-01-01",
                            createTime: "2017-12-1 12:00",
                            lastChange: "2017-12-1 22:00",
                            desc: "wuwuwu,note2"
                        }
                    ]
                }],
                notes: []
            }
        ],
        notes: [
            {
                id: 1,
                name: "note02-01",
                createTime: "2017-12-1 12:00",
                lastChange: "2017-12-1 22:00",
                desc: "haaha,note1"
            }
        ],
    }
]

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: notebooks,
            showNoteDesc: false
        }
    }

    searchNote(folder, targetId, newTitle) {
        folder.notes.map(inote => {if(inote.id === targetId){inote.name = newTitle}})
        folder.folders.map(ifolder => {this.searchNote(ifolder, targetId, newTitle)})
    }

    modifyNoteTitle(targetId, newTitle) {
        let newBooks = update(this.state.books, {})
        newBooks.map(ibook => {this.searchNote(ibook, targetId, newTitle)})
        this.setState({books: newBooks})
    }

    render() {
        return (
            <div className="booklist">
                <span className="booklist-title">所有笔记本</span>
                <ul>
                    {this.state.books.map((book, bookIndex) =>{
                        return (<li key={bookIndex}>
                            <Book name={book.name} folders={book.folders} notes={book.notes}
                                showNoteDesc={this.state.showNoteDesc}
                                titleCallbacks={{
                                        modifyNote: this.modifyNoteTitle.bind(this)
                                }}
                                ></Book>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}
export default BookList;
