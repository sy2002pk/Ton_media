import React from 'react';
import { FaUsers, FaNewspaper, FaComments, FaEye } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardAdmin = () => {
  const visitorData = [
    { name: 'T2', visits: 2400 },
    { name: 'T3', visits: 1398 },
    { name: 'T4', visits: 9800 },
    { name: 'T5', visits: 3908 },
    { name: 'T6', visits: 4800 },
    { name: 'T7', visits: 3800 },
    { name: 'CN', visits: 4300 },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Đăng bài viết mới', time: '2 phút trước' },
    { id: 2, user: 'Jane Smith', action: 'Cập nhật profile', time: '5 phút trước' },
    { id: 3, user: 'Mike Johnson', action: 'Thêm bình luận', time: '10 phút trước' },
    { id: 4, user: 'Sarah Wilson', action: 'Xóa bài viết', time: '15 phút trước' },
  ];

  const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className={`p-2 md:p-3 ${color} rounded-lg`}>
          <Icon className="text-white text-lg md:text-2xl" />
        </div>
        <div className="ml-3 md:ml-4">
          <h3 className="text-gray-500 text-xs md:text-sm">{title}</h3>
          <p className="text-lg md:text-2xl font-semibold">{value}</p>
          <p className={`text-xs md:text-sm ${change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-2 md:p-4 lg:p-6 space-y-4 md:space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        <StatCard
          icon={FaUsers}
          title="Tổng Người Dùng"
          value="1,234"
          change="+12% tháng trước"
          color="bg-blue-500"
        />
        <StatCard
          icon={FaNewspaper}
          title="Tổng Bài Viết"
          value="456"
          change="+5% tháng trước"
          color="bg-green-500"
        />
        <StatCard
          icon={FaComments}
          title="Bình Luận"
          value="789"
          change="-3% tháng trước"
          color="bg-purple-500"
        />
        <StatCard
          icon={FaEye}
          title="Lượt Xem"
          value="15.3k"
          change="+8% tháng trước"
          color="bg-yellow-500"
        />
      </div>

      {/* Charts & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Chart */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-base md:text-lg font-semibold mb-4">Lượt Truy Cập Theo Tuần</h3>
          <div className="h-60 md:h-72 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  width={40}
                />
                <Tooltip />
                <Bar dataKey="visits" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <h3 className="text-base md:text-lg font-semibold mb-4">Hoạt Động Gần Đây</h3>
          <div className="space-y-3 md:space-y-4 overflow-y-auto max-h-[400px]">
            {recentActivities.map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-center justify-between border-b pb-3 md:pb-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm md:text-base truncate">
                    {activity.user}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 truncate">
                    {activity.action}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-gray-400 ml-2 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;