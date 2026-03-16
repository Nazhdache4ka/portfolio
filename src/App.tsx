import { Routes, Route } from 'react-router-dom';
import { Projects, Home, About, Technologies } from './pages';
import { Layout } from './components';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="projects"
          element={<Projects />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="technologies"
          element={<Technologies />}
        />
        <Route
          path="*"
          element={<Home />}
        />
      </Route>
    </Routes>
  );
}

export default App;
