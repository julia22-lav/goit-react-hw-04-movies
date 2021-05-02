import {Component} from "react";
import {fetchMovieCredits} from "../../services/fetch";
import defImg from "../../pages/MovieDetailsPage/no_movie_found.png";

class MovieCast extends Component {
    state = {movieCast: []}

    componentDidMount= () => {
        const { movieId } = this.props.match.params;
    this.setState({ movieCast: [] });
    fetchMovieCredits(movieId).then((movieCast) => {
      this.setState({ movieCast });
    });
    }

    render (){
        return(
            this.state.movieCast ? (<>
                <h4>Movie cast</h4>
                <ul>
                  {this.state.movieCast.map(({ profile_path, name, character, id }) => {
                    return (
                      <li key={id}>
                        <img
                          src={
                            profile_path
                              ? `https://image.tmdb.org/t/p/w500${profile_path}`
                              : defImg
                          }
                          alt={name}
                          width={"200px"}
                        />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                      </li>
                    );
                  })}
                </ul>
              </>
        ) : (false)
        )
    }
}

export default MovieCast;