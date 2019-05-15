import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import UsersList from "../UsersList/UsersList";

function FilterableUserTable() {

  return (
    <div>
      <SearchBar/>
      <UsersList/>
    </div>
  );
}

export default FilterableUserTable;
