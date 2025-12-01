import React from "react";
import HistoricalDates from "./components/HistoricalDates";
import { periodsData } from "./model/periodsData";

const App: React.FC = () => {
  return (
    <div className="container">
      <HistoricalDates periods={periodsData} />
    </div>
  );
};

export default App;
