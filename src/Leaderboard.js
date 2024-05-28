import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const leaderboardData = [
  { rank: 1, name: 'Selling with re entry', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercentage: 0.65, price: '-' },
  { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercentage: 0.64, price: 500 },
  { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercentage: 0.64, price: '-' },
  { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-' },
  { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercentage: 0.65, price: '-' },
  { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercentage: 0.49, price: '-' },
  { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercentage: 0.6, price: '-' },
  { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercentage: 0.63, price: '-' },
  { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercentage: 0.65, price: '-' },
  { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercentage: 0.62, price: '-' },
];

const Leaderboard = () => {
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSort = (data, option) => {
    switch (option) {
      case 'calmarRatio':
        return [...data].sort((a, b) => b.calmarRatio - a.calmarRatio);
      case 'overallProfit':
        return [...data].sort((a, b) => b.overallProfit - a.overallProfit);
      case 'avgDailyProfit':
        return [...data].sort((a, b) => b.avgDailyProfit - a.avgDailyProfit);
      default:
        return data;
    }
  };

  const filteredData = leaderboardData.filter(strategy =>
    strategy.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = handleSort(filteredData, sortOption);

  return (
    <div style={leaderboardStyle}>
      <h2>Basic Backtest</h2>
      <div style={filtersStyle}>
        <input
          type="text"
          placeholder="Filter by name"
          style={inputStyle}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          style={selectStyle}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="calmarRatio">Calmar Ratio</option>
          <option value="overallProfit">Overall Profit</option>
          <option value="avgDailyProfit">Avg. Daily Profit</option>
        </select>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((strategy, index) => (
            <tr key={index}>
              <td style={cellStyle}>{strategy.rank}</td>
              <td style={cellStyle}>{strategy.name}</td>
              <td style={cellStyle}>
                {strategy.calmarRatio}{' '}
                <FontAwesomeIcon
                  icon={strategy.calmarRatio > 0 ? faArrowUp : faArrowDown}
                  style={{ color: strategy.calmarRatio > 0 ? 'green' : 'red' }}
                />
              </td>
              <td style={cellStyle}>{strategy.overallProfit}</td>
              <td style={cellStyle}>{strategy.avgDailyProfit}</td>
              <td style={cellStyle}>{strategy.winPercentage}</td>
              <td style={cellStyle}>{strategy.price}</td>
              <td style={cellStyle}>
                <button style={viewButtonStyle}>View</button>
                {strategy.price !== '-' && <button style={buyButtonStyle}>Buy</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const leaderboardStyle = {
  padding: '20px'
};

const filtersStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px'
};

const inputStyle = {
  width: '200px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#ffe6f0',
  borderColor: '#ff69b4'
};

const selectStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#ffe6f0',
  borderColor: '#ff69b4'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid #ccc'
};

const cellStyle = {
  padding: '10px'
};

const viewButtonStyle = {
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid #ff69b4',
  backgroundColor: '#ffe6f0',
  color: '#000000',
  cursor: 'pointer',
  marginRight: '5px'
};

const buyButtonStyle = {
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid #ff69b4',
  backgroundColor: '#ffe6f0',
  color: '#000000',
  cursor: 'pointer'
};

export default Leaderboard;
