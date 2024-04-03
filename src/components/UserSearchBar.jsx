import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function UserSearchBar() {
  return (
    <div className='UserSearchBarDiv'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='SearchIcon' />
      <input type="text" className='UserSearchBar' placeholder='Search or Start a new Chat' spellCheck="false" />
    </div>
  )
}

export default UserSearchBar
