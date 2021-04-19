import React from 'react' 

function Search ({search, setSearch}){

    return (
        <div className="searchBox">
          <input
            type="text"
            placeholder={"Search For Your Favorite City!"}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("Updated Search?", search)
            }}
          />
        </div>
      );
};

export default Search 