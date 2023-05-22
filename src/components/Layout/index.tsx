import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 8px;
  justify-content: center;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 8px;
  justify-content: center;
  text-decoration: none;
  color: #4e4e4e;
  &:hover {
    transition: linear 0.15s;
    transform: scale(1.1);
  }
`;

function Layout() {
  return (
    <div>
      <Nav>
        <StyledLink to="/movies">Movies</StyledLink>
        <StyledLink to="/tv-shows">TV Shows</StyledLink>
      </Nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
