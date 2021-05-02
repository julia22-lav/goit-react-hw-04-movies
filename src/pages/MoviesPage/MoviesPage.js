import {Component} from "react";
import Gallery from "../../components/Gallery";
import {fetchMovies} from "../../services/fetch";
import SearchBar from "../../components/SearchBar";
import queryString from 'query-string';

const getQueryFromProps = (props) =>
    queryString.parse(props.location.search).query;

class MoviesPage extends Component {
    state = {movies: []};

    componentDidMount() {
        const query = getQueryFromProps(this.props);
        this.onNewQuery(query);
    }

    componentDidUpdate(prevProps) {
        const prevQuery = getQueryFromProps(prevProps);
        const nextQuery = getQueryFromProps(this.props);

        if(prevQuery !== nextQuery) {
            this.onNewQuery(nextQuery);
        }   
    }

    onNewQuery = (query)=> {
        this.setState({movies: []});
        if (query) {
            fetchMovies(query).then((movies)=> {
                this.setState({movies});
            });
        }
        
    };
    
    onQueryChange = ({query}) => {
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        });
    };

    render(){
        return(
            <>
            <SearchBar onSubmit={this.onQueryChange}/>
            {this.state.movies && <Gallery movies={this.state.movies} />}
            </>
        )
    }
}

export default MoviesPage;