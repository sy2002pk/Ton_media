import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
  FaUsers,
  FaThList,
  FaNewspaper,
  FaChartBar,
  FaHistory,
  FaBars,
  FaSignOutAlt 
} from 'react-icons/fa';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Dashboard', icon: <FaChartBar />, path: '/admin' },
    { title: 'User Management', icon: <FaUsers />, path: '/admin/users' },
    { title: 'Categories', icon: <FaThList />, path: '/admin/categories' },
    { title: 'Content', icon: <FaNewspaper />, path: '/admin/content' },
    { title: 'Reports', icon: <FaChartBar />, path: '/admin/reports' },
    { title: 'Activities', icon: <FaHistory />, path: '/admin/activities' }
  ];

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`font-bold ${!isSidebarOpen && 'hidden'}`}>Admin Panel</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
            <FaBars />
          </button>
        </div>

        <nav className="mt-8 flex-1">
          {menuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center px-4 py-3 text-gray-300 transition-colors
                ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'}
              `}
              end
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="ml-4">{item.title}</span>}
            </NavLink>
          ))}
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition-colors mt-auto mb-4"
        >
          <span className="text-xl"><FaSignOutAlt /></span>
          {isSidebarOpen && <span className="ml-4">Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          </div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;