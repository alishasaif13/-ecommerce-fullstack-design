import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserInventory = () => {
  const { user, token } = useAuth();
  const [inventory, setInventory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rarity');

  useEffect(() => {
    if (user) {
      fetchInventory();
    }
  }, [user]);

  const fetchInventory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/inventory', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setInventory(data.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEquip = async (productId, isEquipped) => {
    try {
      const response = await fetch('http://localhost:5000/api/inventory/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          productId,
          updates: { isEquipped: !isEquipped }
        })
      });

      if (response.ok) {
        fetchInventory();
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-100 text-gray-800';
      case 'Uncommon': return 'bg-green-100 text-green-800';
      case 'Rare': return 'bg-blue-100 text-blue-800';
      case 'Epic': return 'bg-purple-100 text-purple-800';
      case 'Legendary': return 'bg-orange-100 text-orange-800';
      case 'Mythic': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Weapon': return 'bg-red-100 text-red-800';
      case 'Armor': return 'bg-blue-100 text-blue-800';
      case 'Accessory': return 'bg-green-100 text-green-800';
      case 'Consumable': return 'bg-yellow-100 text-yellow-800';
      case 'Material': return 'bg-gray-100 text-gray-800';
      case 'Currency': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sortItems = (items) => {
    if (!items) return [];
    
    return [...items].sort((a, b) => {
      const rarityOrder = { 'Mythic': 6, 'Legendary': 5, 'Epic': 4, 'Rare': 3, 'Uncommon': 2, 'Common': 1 };
      
      if (sortBy === 'rarity') {
        return rarityOrder[b.product.rarity] - rarityOrder[a.product.rarity];
      } else if (sortBy === 'level') {
        return b.level - a.level;
      } else if (sortBy === 'name') {
        return a.product.name.localeCompare(b.product.name);
      }
      return 0;
    });
  };

  const filterItems = (items) => {
    if (!items) return [];
    
    if (filter === 'all') return items;
    if (filter === 'equipped') return items.filter(item => item.isEquipped);
    if (filter === 'weapons') return items.filter(item => item.product.lootType === 'Weapon');
    if (filter === 'armor') return items.filter(item => item.product.lootType === 'Armor');
    if (filter === 'accessories') return items.filter(item => item.product.lootType === 'Accessory');
    
    return items;
  };

  if (!user) {
    return <div className="text-center py-8">Please log in to view your inventory.</div>;
  }

  if (loading) {
    return <div className="text-center py-8">Loading inventory...</div>;
  }

  const sortedAndFilteredItems = filterItems(sortItems(inventory?.items || []));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Inventory</h1>
      
      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
          <p className="text-3xl font-bold text-blue-600">{inventory?.totalItems || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Unique Items</h3>
          <p className="text-3xl font-bold text-green-600">{inventory?.items?.length || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Equipped</h3>
          <p className="text-3xl font-bold text-purple-600">
            {inventory?.items?.filter(item => item.isEquipped).length || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Last Updated</h3>
          <p className="text-sm text-gray-600">
            {inventory?.lastUpdated ? new Date(inventory.lastUpdated).toLocaleDateString() : 'Never'}
          </p>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="all">All Items</option>
              <option value="equipped">Equipped</option>
              <option value="weapons">Weapons</option>
              <option value="armor">Armor</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="rarity">Rarity</option>
              <option value="level">Level</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inventory Items */}
      <div className="bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold p-6 border-b">Items</h2>
        
        {sortedAndFilteredItems.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No items found in your inventory.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {sortedAndFilteredItems.map((item) => (
              <div
                key={`${item.product._id}-${item.acquiredAt}`}
                className={`border rounded-lg p-4 ${
                  item.isEquipped ? 'ring-2 ring-blue-500 bg-blue-50' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getRarityColor(item.product.rarity)}`}>
                      {item.product.rarity}
                    </span>
                    <span className={`block mt-1 px-2 py-1 rounded text-xs font-medium ${getTypeColor(item.product.lootType)}`}>
                      {item.product.lootType}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{item.product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.product.description}</p>
                
                {/* Stats */}
                {item.product.stats && (
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    {item.product.stats.attack > 0 && (
                      <div className="flex justify-between">
                        <span className="text-red-600">Attack:</span>
                        <span className="font-medium">{item.product.stats.attack}</span>
                      </div>
                    )}
                    {item.product.stats.defense > 0 && (
                      <div className="flex justify-between">
                        <span className="text-blue-600">Defense:</span>
                        <span className="font-medium">{item.product.stats.defense}</span>
                      </div>
                    )}
                    {item.product.stats.speed > 0 && (
                      <div className="flex justify-between">
                        <span className="text-green-600">Speed:</span>
                        <span className="font-medium">{item.product.stats.speed}</span>
                      </div>
                    )}
                    {item.product.stats.magic > 0 && (
                      <div className="flex justify-between">
                        <span className="text-purple-600">Magic:</span>
                        <span className="font-medium">{item.product.stats.magic}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>Level: {item.level}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>Durability: {item.durability}%</span>
                  <span>Source: {item.source}</span>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEquip(item.product._id, item.isEquipped)}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium ${
                      item.isEquipped
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {item.isEquipped ? 'Unequip' : 'Equip'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInventory;
