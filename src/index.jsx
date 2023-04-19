import React from 'react';
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Home } from './components/Home';
import { Reviews } from './components/Reviews';
import { Articles } from './components/Articles';
import { Movies } from './components/Movies';
import { Movie } from './components/Movie';

const App = () => {
  return (
    <div className="container">    
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/movies',
        element: <Movies />,
        children: [
          {
            path: ':id',
            element: <Movie />
          }
        ]
      }
    ]
  },
]);

createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router={router} /> )
