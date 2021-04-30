import './App.css';
import React, {Suspense} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
    <Suspense fallback={()=>{

    }}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* <Route path="/movies/:movieId" component={MovieDetailsPage}/>
        <Route path="/movies" component={MoviesPage}/> */}
        <Route component={HomePage}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
    </>
    
  );
}

export default App;
