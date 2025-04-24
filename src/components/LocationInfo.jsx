// components/LocationInfo.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const LocationInfo = () => {
  const { styles } = useTheme(); // styles artık context’ten geliyor

  return (
    <div className={`${styles.wrapper} p-6 rounded-xl shadow-md text-center space-y-4`}>
      <h2 className="text-2xl">Davet Yeri</h2>
      <p className="text-lg">Bahar Garden, Sarıyer / İstanbul</p>
      <p className="text-sm text-gray-500">
        Reşitpaşa Mah. Botanik Cad. No:45 Sarıyer / İstanbul
      </p>
      <a
        href="https://www.google.com/maps?q=Bahar+Garden+Sarıyer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm"
      >
        Haritada Gör
      </a>
      <p className="text-xs mt-2">
        Metro ile gelecekler için: M2 Hattı - ITU Ayazağa Durağı (10 dk yürüme)
      </p>
    </div>
  );
};

export default LocationInfo;
