import React from 'react'
import { MdOutlineWbSunny } from 'react-icons/md'
import { IoMoonOutline } from "react-icons/io5"

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Notas</h1>
            <button 
                onClick={() => 
                    handleToggleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                } 
                className='save-button'>
                    <MdOutlineWbSunny /> / <IoMoonOutline />
            </button>
        </div>
    );
}

export default Header;