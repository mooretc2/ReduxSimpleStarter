import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
// If you really want to steal this, go for it I guess?
// I'll be deleting it in a week or so anyway
const API_KEY = 'AIzaSyANQJsaU8X63UVi1MZ2v7688WIrjcJDcKY';



// Create a new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated html and put it on the page
// (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));