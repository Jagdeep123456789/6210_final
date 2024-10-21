import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavMenu from './NavMenu';
import ItemDetail from './ItemDetail';
import AdminPanel from './AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<h1>Welcome to SCP CRUD Supabase Application</h1>} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
