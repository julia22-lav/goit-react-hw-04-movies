import './App.css';
import React, {Suspense} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import Header from "./components/Header";

function App() {
  return (
    <>
    
    <Suspense fallback={()=>{

    }}>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/movies/:movieId" component={MovieDetailsPage}/>
       <Route path="/movies" component={MoviesPage}/>
        <Route component={HomePage}/>
      </Switch>
      </BrowserRouter>
    </Suspense>
    </>
    
  );
}

export default App;
