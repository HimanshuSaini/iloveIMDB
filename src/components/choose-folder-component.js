import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/index';

const VALID_MOVIE_EXT = ['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'drc', 'mng', 'avi', 'mov', 'qt', 'wmv', 'yuv', 'rm', 'rmvb', 'asf', 'mp4', 'm4p', 'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm2v', 'svi', '3gp', '3g2', 'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b'];
const JUNK_WORDS = ['dvdrip', 'hdrip', 'DVDRiP'];

class ChooseFolder extends Component {
	constructor(props) {
		super(props);

		this.onInputChange = this.onInputChange.bind(this);
		this.dropDone = this.dropDone.bind(this);
	}

	onInputChange(event) {
		let files;
		if(event.dataTransfer) {
			files = event.dataTransfer.files;
		}
		else if(event.target) {
	        files = event.target.files;
	    }

		let validMovieNames = this.findMovieNames(files);

		let output = document.getElementById("listing");
		for (let i=0; i<validMovieNames.length; i++) {
			this.props.fetchMovie(validMovieNames[i]);
		};
	}

	findMovieNames(filesList) {
		let fileNames = _.map(filesList, (file) => file.name);

		var movieNames = [];
		_.map(fileNames, (fileName) => {
			let fileWordsWithExt = fileName.split('.');
			let ext = fileWordsWithExt[fileWordsWithExt.length-1];

			if(_.includes(VALID_MOVIE_EXT, ext)) {
				fileWordsWithExt.pop();
				let fileWords = fileWordsWithExt.join(' ').split(' ');
				let validWords = [];

				for (let i=0; i<fileWords.length; i++) {
					fileWords[i] = fileWords[i].replace(/[\[()\]]+/g, '');
					if(!isNaN(fileWords[i]) || _.includes(JUNK_WORDS, fileWords[i])) {
						break;
					}
					validWords.push(fileWords[i])
				};

				movieNames.push(validWords.join(' '));
			}
		});

		return movieNames;
	}

	dragOver(event) {
		event.preventDefault();
        event.stopPropagation();
		event.target.classList.add('drag-over');
	}

	dragLeave(event) {
		event.preventDefault();
        event.stopPropagation();
		event.target.classList.remove('drag-over');
	}

	dropDone(event) {
		event.preventDefault();
        event.stopPropagation();
		event.target.classList.remove('drag-over');
		this.onInputChange(event);
	}

	render() {
		return (
			<div className='droppable-area' onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.dropDone}>
				<div className='drag-drop-text'>
					<div>Drag and Drop your movies here</div>
					<div>or</div>
					<div>Add your whole movies collection folder</div>
				</div>
				<div className='add-folder-area'>
					<input type='file' className='file-btn' webkitdirectory='' onChange={this.onInputChange}/>
				</div>
	    		<ul id='listing'></ul>
    		</div>
			
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChooseFolder);