function NavbarUI() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{height:'100px'}}>
      <div className="container">
        <a className="navbar-brand fw-bolder" href="#">Sanket Cake</a>
        <div className="d-flex" >          
          <span className="navbar-text">
          Call : <a href="tel:+91 99999 99999">+91 99999 99999</a>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavbarUI