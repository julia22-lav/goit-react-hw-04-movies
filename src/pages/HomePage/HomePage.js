import { render } from "@testing-library/react";
import {Component} from "react";
import {fetchTrending} from "../../services/fetch";
import Gallery from "../../components/Gallery"

class Home extends Component {
    state = {gallery:[]}
    
    componentDidMount = ()=>{
        this.setState({gallery:[]});
        fetchTrending().then((movies)=> {
            this.setState({gallery: movies})
        })
    }

    render(){
        return(<>
        <h1>Trending today</h1>
        <Gallery movies={this.state.gallery}/>
        </>)
    }
}

export default Home;