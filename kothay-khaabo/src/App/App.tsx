import React from 'react';
import './App.css';
import SiteNav from '../Features/Nav/SiteNav';
import RestaurantDashboard from '../Features/Restaurants/RestaurantDashboard';

function App() {
  return (
    <div>
       <SiteNav />
       <RestaurantDashboard/>
    </div>
  );
}

export default App;
