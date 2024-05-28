import React from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Leaderboard from './Leaderboard.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Leaderboard />
      <Footer />
    </div>
  );
}

export default App;
