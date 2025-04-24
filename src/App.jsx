import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import CoupleNames from "./components/CoupleNames";
import DateInfo from "./components/DateInfo";
import LocationInfo from "./components/LocationInfo";
import { useTheme } from "./context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Temayı Değiştir
    </button>
  );
};
function App() {

  const weddingDate = "2025-08-15T18:00:00";
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 ">
      <div className="border-2 rounded-2xl p-4">
      
      <CoupleNames />
      
      
      <div  className="p-6 rounded-lg mt-4 mb-4 shadow-md">
      <DateInfo  targetDate={weddingDate} />
      </div>
      <div>
        <LocationInfo ></LocationInfo>
        <ThemeSwitcher />

      </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
