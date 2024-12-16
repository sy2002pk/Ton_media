// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import MainLayout from "./components/layout/layoutUser";

// Public pages
import HomePage from "./pages/Home/HomePage";

// Admin Layout
import Admin from "./pages/Admin/admin";
import UserAdmin from "./components/Admin/UserAdmin";
import Categories from "./components/Admin/Categories";
import Content from "./components/Admin/Content";
import Reports from "./components/Admin/Reports";
import Dashboard from "./components/Admin/Dashboard";
import Activities from "./components/Admin/Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - với MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Admin Routes - với AdminLayout */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserAdmin />} />
            <Route path="categories" element={<Categories />} />
            <Route path="content" element={<Content />} />
            <Route path="reports" element={<Reports />} />
            <Route path="activities" element={<Activities />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;