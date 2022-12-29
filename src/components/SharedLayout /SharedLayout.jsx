// import { useRef, useEffect } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  // const refComponent = useRef();

  // useEffect(() => {
  //   const height = refComponent.current.getBoundingClientRect().height;
  //   document.body.style.paddingTop = `${height}px`;
  //   console.log('height');
  // });

  return (
    <Container>
      <Header ref={null}>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">
            <div>Movies</div>
          </Link>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
