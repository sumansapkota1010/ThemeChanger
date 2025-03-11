import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

const ToggleTheme = () => {

    const { isDarkMode, toggleTheme } = useContext(ThemeContext)


    return (
        <div className={`min-h-screen  ${isDarkMode ? 'dark' : 'light'} transition-colors duration-300`}>
            <h1 className="text-3xl font-bold text-center p-4">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </h1>
            <button
                onClick={toggleTheme}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>


    )
}

export default ToggleTheme