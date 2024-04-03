import FilterListIcon from '@mui/icons-material/FilterList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import React from 'react'

function UserIconBar() {
  return (
    <div className='UserIconBar'>
     <div className="UserBarLogo" >
        Chats
     </div>
     <div className="UserBarIconDiv">
        <div className="UserBarAddIconDiv">
            <FontAwesomeIcon icon={faPenToSquare} className='UserBarAddIcon' />
        </div>
        <div className="UserBarFilterIconDiv">
          <FilterListIcon className='UserBarFilterIcon'/>
        </div>
     </div>
    </div>
  )
}

export default UserIconBar
