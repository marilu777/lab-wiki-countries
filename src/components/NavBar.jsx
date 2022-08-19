import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">Countries</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar