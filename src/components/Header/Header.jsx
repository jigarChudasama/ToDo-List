import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(faUser, faLock)

function Header() {
  return (
    <header className="header">
      <div>
          <h2>ToDo List</h2>
      </div>
      <div className='profile-icon' >
        <FontAwesomeIcon icon="user" />
      </div>
    </header>
  );
}

export default Header;