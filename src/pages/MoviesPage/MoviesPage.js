import {Component} from "react";
import Gallery from "../../components/Gallery";
import {fetchMovies} from "../../services/fetch";
import SearchBar from "../../components/SearchBar";

class MoviesPage extends Component {
    state = {query:"", movies: []};

    onNewQuery = ({query})=> {
        this.setState({movies: []})
        fetchMovies(query).then((movies)=> {
            this.setState({movies})
        })
    }
    render(){
        return(
            <>
            <SearchBar onSubmit={this.onNewQuery}/>
            {this.state.movies ? <Gallery movies={this.state.movies}/> : false}
            </>
        )
    }
}

export default MoviesPage;