import { useState } from 'react';
import { 
  FaSearch, 
  FaEdit, 
  FaTrash, 
  FaEye, 
  FaPlusCircle,
  FaComments,
  FaImage,
  FaFilter 
} from 'react-icons/fa';

const ContentAdmin = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      category: "Technology",
      status: "Published",
      publishDate: "2024-03-15",
      views: 1234,
      comments: 5
    },
    {
      id: 2,
      title: "Best Practices in Web Design",
      author: "Jane Smith",
      category: "Design",
      status: "Draft",
      publishDate: "2024-03-14",
      views: 890,
      comments: 3
    },
  ];

  const comments = [
    {
      id: 1,
      content: "Great article!",
      author: "Mike Johnson",
      post: "Getting Started with React",
      date: "2024-03-15",
      status: "Approved"
    },
    {
      id: 2,
      content: "Very helpful tutorial",
      author: "Sarah Wilson",
      post: "Best Practices in Web Design",
      date: "2024-03-14",
      status: "Pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header with Tabs */}
      <div className="border-b mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Content Management</h1>
          <button className="flex items-center mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <FaPlusCircle className="mr-2" />
            New Post
          </button>
        </div>
        <div className="flex space-x-6">
          <button
            className={`pb-4 ${activeTab === 'posts' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </button>
          <button
            className={`pb-4 ${activeTab === 'comments' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('comments')}
          >
            Comments
          </button>
          <button
            className={`pb-4 ${activeTab === 'media' 
              ? 'border-b-2 border-blue-500 text-blue-500' 
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('media')}
          >
            Media
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search content..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FaFilter className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Content Tables */}
      {activeTab === 'posts' && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    <div className="text-sm text-gray-500">
                      <FaEye className="inline mr-1" /> {post.views} • 
                      <FaComments className="inline mx-1" /> {post.comments}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <FaEdit className="inline" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaTrash className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'comments' && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Post</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{comment.content}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{comment.author}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{comment.post}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      comment.status === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {comment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">Approve</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'media' && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative group">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <FaImage className="w-full h-full p-8 text-gray-400" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="space-x-2">
                  <button className="text-white hover:text-blue-400">
                    <FaEdit />
                  </button>
                  <button className="text-white hover:text-red-400">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentAdmin;