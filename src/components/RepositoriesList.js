import React from 'react';
import RepositoryItem from "./RepositoryItem";
import {useRepositories} from "../context/Repositories";

const RepositoriesList = () => {
  const { repositories } = useRepositories()

  return (
    <section className="row">
      <ul className="list-group col">
        {repositories.map(repository =>
          <RepositoryItem key={ repository.id } repository={ repository } />
        )}
      </ul>
    </section>
  )
}

export default RepositoriesList;