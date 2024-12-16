import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaDownload, FaFilter } from 'react-icons/fa';

const ReportsAdmin = () => {
  const visitData = [
    { name: 'Jan', visits: 4000, posts: 2400 },
    { name: 'Feb', visits: 3000, posts: 1398 },
    { name: 'Mar', visits: 2000, posts: 9800 },
    { name: 'Apr', visits: 2780, posts: 3908 },
    { name: 'May', visits: 1890, posts: 4800 },
    { name: 'Jun', visits: 2390, posts: 3800 },
  ];

  const topPosts = [
    { title: "Getting Started with React", views: 1234, likes: 89 },
    { title: "Web Design Tips", views: 987, likes: 76 },
    { title: "SEO Basics", views: 876, likes: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics & Reports</h1>
        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <FaDownload className="mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Total Views', 'Unique Visitors', 'Bounce Rate', 'Avg. Time'].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm mb-2">{stat}</h3>
            <p className="text-2xl font-semibold">
              {index === 2 ? '45.5%' : index === 3 ? '2m 35s' : `${Math.floor(Math.random() * 10000)}`}
            </p>
            <p className="text-sm text-green-500">+12% from last month</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Visitor Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Content Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="posts" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Posts Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Top Performing Posts</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-3">Title</th>
              <th className="text-left py-3">Views</th>
              <th className="text-left py-3">Likes</th>
            </tr>
          </thead>
          <tbody>
            {topPosts.map((post, index) => (
              <tr key={index} className="border-t">
                <td className="py-3">{post.title}</td>
                <td className="py-3">{post.views}</td>
                <td className="py-3">{post.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReportsAdmin;