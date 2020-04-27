import React, { useState } from "react";
import { useRepositories } from "../context/Repositories";
import Loading from "./Loading";

const Search = () => {
  const GITHUB_USERS_API = "https://api.github.com/users/";

  const { setRepositories } = useRepositories()
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState(null)

  async function searchRepositories() {
    if (username != null && username.trim() !== "") {
      setLoading(true);

      await fetch(GITHUB_USERS_API + username + "/repos")
        .then((response) => {
          setLoading(false);

          if (response.status !== 200) {
            alert("Oops! We could not find this user repositories.")
            setRepositories([])
          }
          else {
            response.json().then(repositories => {
              setRepositories(repositories)
            })
          }
        })
    }
  }

  return (
    <section className="search-repositories row">
      <div className="col-12 col-sm-8">
        <input type="text" className="form-control rounded" name="username" onChange={(e) => { setUsername(e.target.value) }} defaultValue={username} placeholder="Github username" />
      </div>
      <div className="col-12 col-sm-4">
        <button className="btn btn-primary" onClick={searchRepositories}>Search</button>
        { loading && <Loading /> }
      </div>
    </section>
  )
}

export default Search;
