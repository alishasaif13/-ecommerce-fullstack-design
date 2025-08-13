import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LootBoxManagement = () => {
  const { user, token } = useAuth();
  const [lootBoxes, setLootBoxes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingLootBox, setEditingLootBox] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    rarity: 'Common',
    gameType: 'RPG',
    guaranteedRarity: 'Common',
    maxOpens: -1,
    isActive: true,
    contents: []
  });
  const [newContent, setNewContent] = useState({
    item: '',
    dropRate: 1.0,
    guaranteed: false,
    minQuantity: 1,
    maxQuantity: 1
  });

  useEffect(() => {
    fetchLootBoxes();
    fetchProducts();
  }, []);

  const fetchLootBoxes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lootboxes');
      const data = await response.json();
      setLootBoxes(data.data || []);
    } catch (error) {
      console.error('Error fetching loot boxes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = editingLootBox 
        ? `http://localhost:5000/api/lootboxes/${editingLootBox._id}`
        : 'http://localhost:5000/api/lootboxes';
      
      const method = editingLootBox ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchLootBoxes();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving loot box:', error);
    }
  };

  const handleDelete = async (lootBoxId) => {
    if (window.confirm('Are you sure you want to delete this loot box?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/lootboxes/${lootBoxId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          fetchLootBoxes();
        }
      } catch (error) {
        console.error('Error deleting loot box:', error);
      }
    }
  };

  const handleEdit = (lootBox) => {
    setEditingLootBox(lootBox);
    setFormData({
      name: lootBox.name,
      description: lootBox.description,
      price: lootBox.price,
      image: lootBox.image,
      rarity: lootBox.rarity || 'Common',
      gameType: lootBox.gameType || 'RPG',
      guaranteedRarity: lootBox.guaranteedRarity || 'Common',
      maxOpens: lootBox.maxOpens || -1,
      isActive: lootBox.isActive !== undefined ? lootBox.isActive : true,
      contents: lootBox.contents || []
    });
  };

  const resetForm = () => {
    setEditingLootBox(null);
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      rarity: 'Common',
      gameType: 'RPG',
      guaranteedRarity: 'Common',
      maxOpens: -1,
      isActive: true,
      contents: []
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addContent = () => {
    if (newContent.item && newContent.dropRate > 0) {
      setFormData({
        ...formData,
        contents: [...formData.contents, { ...newContent }]
      });
      setNewContent({
        item: '',
        dropRate: 1.0,
        guaranteed: false,
        minQuantity: 1,
        maxQuantity: 1
      });
    }
  };

  const removeContent = (index) => {
    const newContents = formData.contents.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      contents: newContents
    });
  };

  if (!user?.isAdmin) {
    return <div className="text-center py-8">Access denied. Admin privileges required.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Loot Box Management</h1>
      
      {/* Add/Edit Loot Box Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingLootBox ? 'Edit Loot Box' : 'Create New Loot Box'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Loot Box Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <select
              name="rarity"
              value={formData.rarity}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Common">Common</option>
              <option value="Uncommon">Uncommon</option>
              <option value="Rare">Rare</option>
              <option value="Epic">Epic</option>
              <option value="Legendary">Legendary</option>
              <option value="Mythic">Mythic</option>
            </select>
            <select
              name="gameType"
              value={formData.gameType}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="RPG">RPG</option>
              <option value="FPS">FPS</option>
              <option value="MOBA">MOBA</option>
              <option value="Strategy">Strategy</option>
              <option value="Adventure">Adventure</option>
              <option value="Sports">Sports</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="guaranteedRarity"
              value={formData.guaranteedRarity}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Common">Guaranteed Common+</option>
              <option value="Uncommon">Guaranteed Uncommon+</option>
              <option value="Rare">Guaranteed Rare+</option>
              <option value="Epic">Guaranteed Epic+</option>
              <option value="Legendary">Guaranteed Legendary+</option>
              <option value="Mythic">Guaranteed Mythic</option>
            </select>
            <input
              type="number"
              name="maxOpens"
              placeholder="Max Opens (-1 for unlimited)"
              value={formData.maxOpens}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
          
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          
          <textarea
            name="description"
            placeholder="Loot Box Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows="3"
            required
          />
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({
                ...formData,
                isActive: e.target.checked
              })}
              className="mr-2"
            />
            <span>Active</span>
          </label>
          
          {/* Contents Management */}
          <div className="border p-4 rounded">
            <h3 className="text-lg font-medium mb-4">Loot Box Contents</h3>
            
            {/* Add new content */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
              <select
                value={newContent.item}
                onChange={(e) => setNewContent({ ...newContent, item: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="">Select Item</option>
                {products.map(product => (
                  <option key={product._id} value={product._id}>
                    {product.name} ({product.rarity})
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Drop Rate %"
                value={newContent.dropRate}
                onChange={(e) => setNewContent({ ...newContent, dropRate: parseFloat(e.target.value) || 0 })}
                className="border p-2 rounded"
                step="0.1"
                min="0"
                max="100"
              />
              <input
                type="number"
                placeholder="Min Qty"
                value={newContent.minQuantity}
                onChange={(e) => setNewContent({ ...newContent, minQuantity: parseInt(e.target.value) || 1 })}
                className="border p-2 rounded"
                min="1"
              />
              <input
                type="number"
                placeholder="Max Qty"
                value={newContent.maxQuantity}
                onChange={(e) => setNewContent({ ...newContent, maxQuantity: parseInt(e.target.value) || 1 })}
                className="border p-2 rounded"
                min="1"
              />
              <button
                type="button"
                onClick={addContent}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add
              </button>
            </div>
            
            {/* Current contents */}
            <div className="space-y-2">
              {formData.contents.map((content, index) => {
                const product = products.find(p => p._id === content.item);
                return (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="flex-1">
                      {product ? product.name : 'Unknown Item'} - 
                      Drop Rate: {content.dropRate}% - 
                      Qty: {content.minQuantity}-{content.maxQuantity}
                      {content.guaranteed && ' (Guaranteed)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeContent(index)}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingLootBox ? 'Update Loot Box' : 'Create Loot Box'}
            </button>
            {editingLootBox && (
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Loot Boxes List */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold p-6 border-b">Loot Boxes</h2>
        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rarity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Game Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contents</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {lootBoxes.map((lootBox) => (
                  <tr key={lootBox._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={lootBox.image} alt={lootBox.name} className="h-12 w-12 object-cover rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{lootBox.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${lootBox.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        lootBox.rarity === 'Common' ? 'bg-gray-100 text-gray-800' :
                        lootBox.rarity === 'Uncommon' ? 'bg-green-100 text-green-800' :
                        lootBox.rarity === 'Rare' ? 'bg-blue-100 text-blue-800' :
                        lootBox.rarity === 'Epic' ? 'bg-purple-100 text-purple-800' :
                        lootBox.rarity === 'Legendary' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {lootBox.rarity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{lootBox.gameType}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lootBox.contents?.length || 0} items</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        lootBox.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {lootBox.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(lootBox)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(lootBox._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LootBoxManagement;
