import { FaDownload, FaFilter } from 'react-icons/fa';
const ActivitiesAdmin = () => {
    const activities = [
      {
        id: 1,
        user: "John Doe",
        action: "Published new post",
        target: "Getting Started with React",
        time: "2 minutes ago",
        type: "content"
      },
      {
        id: 2,
        user: "Admin",
        action: "Updated system settings",
        target: "Email notifications",
        time: "1 hour ago",
        type: "system"
      },
      {
        id: 3,
        user: "Jane Smith",
        action: "Deleted comment",
        target: "Comment #123",
        time: "2 hours ago",
        type: "moderation"
      }
    ];
  
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Activity Log</h1>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter Activities
          </button>
        </div>
  
        {/* Activity Filters */}
        <div className="flex gap-2 mb-6">
          {['All', 'Content', 'System', 'Moderation'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"
            >
              {filter}
            </button>
          ))}
        </div>
  
        {/* Activity Timeline */}
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">
                    {activity.user}
                  </h3>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.action} - <span className="font-medium">{activity.target}</span>
                </p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${
                  activity.type === 'content' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'system' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {activity.type}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Load More */}
        <div className="mt-6 text-center">
          <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            Load More Activities
          </button>
        </div>
      </div>
    );
  };
  
  export default ActivitiesAdmin ;