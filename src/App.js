import React from 'react';
import Search from "./components/Search";
import RepositoriesList from "./components/RepositoriesList";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import RepositoriesProvider from "./context/Repositories";

function App() {
  return (
    <RepositoriesProvider>
      <div className="container">
        <div className="row">
          <h1 className="col">Pubic Github Repositories</h1>
        </div>
        <section className="row main-content">
          <section className="col-md-8">
            <Search />
            <RepositoriesList />
          </section>
          <section className="col-md-4">
            <Favorites />
          </section>
        </section>
        <Footer />
      </div>
    </RepositoriesProvider>
  );
}

export default App;
