import React from 'react'
import { useTheme } from "../context/ThemeContext";
const CoupleNames = () => {
  const { styles } = useTheme(); // styles artık context’ten geliyor
  return (
    
    <div className={`${styles.wrapper} p-6 rounded-xl shadow-md text-center space-y-4`}>
      <h1>ali osman ve ayşe</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default CoupleNames