import React from "react";
import light from "../themes/light.module.css";
import dark from "../themes/dark.module.css";

const themeMap = {
  light,
  dark,
};

const Invitation = ({ theme = "light" }) => {
  const styles = themeMap[theme] || light;

  return (
    <div className={`${styles.wrapper} p-6 rounded-lg shadow-md`}>
      <h1 className="text-3xl font-bold mb-2">Ahmet & Elif</h1>
      <p className="text-lg">20 Temmuz 2025, İstanbul</p>
    </div>
  );
};

export default Invitation;
