import React from 'react';

const SearchBar = () => {
  return (
    <div style={searchBarStyle}>
      <input type="text" placeholder="Search Strategies" style={inputStyle} />
      <button style={buttonStyle}>Search</button>
    </div>
  );
}

const searchBarStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0'
};

const inputStyle = {
  width: '300px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  marginLeft: '10px',
  borderRadius: '5px',
  border: 'none',
  background: '#007bff',
  color: '#fff',
  cursor: 'pointer'
};

export default SearchBar;
