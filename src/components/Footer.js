import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="sticky sticky-bottom" id="footer">
      <nav className="container container-nav">
        <ul className="nav-items">
          <li><a href="mailto:info@plasticterin.com">info<span class="at">@</span>plasticterin.com</a></li>
          <li>insta: <a href="#">plasticterin</a></li>
          <li>fb: <a href="#">plasticterin</a></li>
        </ul>
      </nav>
    </footer>
  )
}
