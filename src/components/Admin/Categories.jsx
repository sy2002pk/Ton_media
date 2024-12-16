import { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const CategoriesAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      name: "Technology",
      slug: "technology",
      description: "All about tech news and reviews",
      totalPosts: 25,
      createdAt: "2024-03-01"
    },
    {
      id: 2,
      name: "Business",
      slug: "business",
      description: "Business and finance news",
      totalPosts: 18,
      createdAt: "2024-03-02"
    },
    {
      id: 3,
      name: "Lifestyle",
      slug: "lifestyle",
      description: "Lifestyle and culture",
      totalPosts: 32,
      createdAt: "2024-03-03"
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-semibold text-gray-800">Categories Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <FaPlus className="mr-2" />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">/{category.slug}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-500 hover:bg-blue-50 rounded">
                  <FaEdit />
                </button>
                <button className="p-2 text-red-500 hover:bg-red-50 rounded">
                  <FaTrash />
                </button>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-3">{category.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{category.totalPosts} posts</span>
              <span>Created: {category.createdAt}</span>
            </div>

            {/* Category Stats */}
            <div className="mt-4 pt-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-500">Last Post</div>
                  <div className="text-sm text-gray-900">2 days ago</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Status</div>
                  <div className="text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No categories found</h3>
          <p className="mt-2 text-gray-500">Get started by creating a new category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoriesAdmin;