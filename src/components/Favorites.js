import React from 'react';
import { useRepositories } from "../context/Repositories";

const Favorites = () => {
  const { repositories } = useRepositories()

  return (
    <>
      <h3>Favorite Repos</h3>
      <p>Your bookmarked repositories will be listed here.</p>
      <ul className="favorite-list">
        { repositories.map(repository => {
          return repository.bookmark &&
            <li key={ repository.id }>
              <a href={ repository.html_url } target="_blank" rel="noopener noreferrer">
                { repository.name }
              </a>
            </li>
        }) }
      </ul>
    </>
  )
}

export default Favorites;