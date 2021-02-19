import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui blue inverted stackable menu borderless">
      <Container>
        <Link className="item" to="/">
          <h1>CloudTaskr</h1>
        </Link>

        <div className="right menu">
          <Link className="item" to="/login">
            Log in
          </Link>
          <Link className="item" to="/tasks">
            Demo
          </Link>
          <Link className="item" to="/team">
            Team
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
