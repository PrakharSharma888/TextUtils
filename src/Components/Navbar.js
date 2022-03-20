import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
  var btnColor = 'dark';
  var btnText = 'Dark'

  if(props.mode === 'light'){
    btnColor = 'dark'
    btnText = 'Dark'
  }
  else{
    btnColor = 'light'
    btnText = 'Light'
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>  
      </ul>
    </div>
    <button onClick={props.changeMode} className={`btn btn-${btnColor}`}>{btnText} Mode</button>
  </div>
</nav>
    </>
  );
}

Navbar.propTypes = {
    title : PropTypes.string
}
Navbar.defaultProps = {
    title : 'Set Tilte Here'
}

export default Navbar;