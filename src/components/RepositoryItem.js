import React from "react";
import FavoriteIcon from "./FavoriteIcon";
import { useRepositories } from "../context/Repositories";

const RepositoryItem = ({ repository }) => {
  const { repositories, setRepositories } = useRepositories()

  function formattedDate(date) {
    const dateObj = new Date(date);
    return dateObj.getMonth() + "/" + dateObj.getFullYear()
  }

  function bookmarkRepository(id) {
    const updatedRepositories = repositories.map(repository => {
      return repository.id === id ? { ...repository, bookmark: !repository.bookmark } : repository
    });

    setRepositories(updatedRepositories)
  }

  return (
    <li className="repository-item list-group-item">
      <h3>
        <a href={ repository.html_url } target="_blank" rel="noopener noreferrer">{ repository.name }</a>
        { repository.bookmark && <FavoriteIcon /> }
        <button className="btn btn-light" onClick={() => bookmarkRepository(repository.id)}>
          { repository.bookmark ? "Remove Bookmark" : "Bookmark it" }
        </button>
      </h3>
      <div className="description">{ repository.description }</div>
      <div className="updated">Last updated: { formattedDate(repository.updated_at) }</div>
    </li>
  )
}

export default RepositoryItem
