import React, { useState } from 'react';
import MaintenancePage from './MaintenancePage';

const App = () => {
  // State to toggle maintenance mode
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <div>
      {/* Your regular app content goes here */}
      <h1>Website under maintenance</h1>
    </div>
  );
};

export default App;
