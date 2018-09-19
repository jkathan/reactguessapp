import React from 'react';

//import './top-nav.css';

export default function TopNav(props) {
	return (
    <nav>
      <ul className="clearfix">
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestartGame()}
          >
            + New Game
          </a>
        </li>
      </ul>
    </nav>
);
}