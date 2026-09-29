import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Search, Filter, UserCheck, UserX, Eye, Trash2, MapPin, Calendar, Trophy, Target, Activity } from 'lucide-react';
import { mockUsers } from '../mock-data';
import type { AdminUser } from '../types';

export function UserManagement() {
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'pending'>('all');
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      filterStatus === 'all' || 
      (filterStatus === 'pending' && user.status === 'pending') ||
      (filterStatus !== 'pending' && user.activityStatus === filterStatus);
    
    return matchesSearch && matchesFilter;
  });

  const handleAcceptUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: 'accepted' as const } : u));
  };

  const handleRejectUser = (userId: string) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: 'rejected' as const } : u));
  };

  const handleRemoveUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
    if (selectedUser?.id === userId) {
      setSelectedUser(null);
    }
  };

  const stats = [
    { label: 'Total Users', value: users.length, color: 'text-blue-500', bg: 'bg-blue-500/20' },
    { label: 'Active Users', value: users.filter(u => u.activityStatus === 'active').length, color: 'text-green-500', bg: 'bg-green-500/20' },
    { label: 'Pending Approval', value: users.filter(u => u.status === 'pending').length, color: 'text-yellow-500', bg: 'bg-yellow-500/20' },
    { label: 'Inactive Users', value: users.filter(u => u.activityStatus === 'inactive').length, color: 'text-red-500', bg: 'bg-red-500/20' },
  ];

  return (
    <div className="space-y-6 -mx-4 sm:-mx-6 lg:-mx-8 px-2">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-4"
          >
            <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, email, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border-2 border-border rounded-lg focus:border-primary outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(['all', 'active', 'inactive', 'pending'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border-2 border-border hover:border-primary'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card/50 border-b-2 border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Registered</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Quiz Participation</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Wins</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border hover:bg-card/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">{user.mobile}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{user.city}, {user.state}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{new Date(user.registrationDate).toLocaleDateString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                      <Target className="w-3 h-3" />
                      {user.quizParticipation}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold">
                      <Trophy className="w-3 h-3" />
                      {user.wins}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        user.activityStatus === 'active' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        <Activity className="w-3 h-3" />
                        {user.activityStatus}
                      </span>
                      {user.status === 'pending' && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs font-semibold">
                          Pending
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {user.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleAcceptUser(user.id)}
                            className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-500 rounded-lg transition-all"
                            title="Accept User"
                          >
                            <UserCheck className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleRejectUser(user.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg transition-all"
                            title="Reject User"
                          >
                            <UserX className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all"
                        title="View Profile"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemoveUser(user.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg transition-all"
                        title="Remove User"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-20" />
            <p className="text-muted-foreground">No users found matching your criteria</p>
          </div>
        )}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedUser(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border-2 border-primary rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">User Profile</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 hover:bg-card rounded-lg transition-all"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-semibold">{selectedUser.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                  <p className="font-semibold">{selectedUser.mobile}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold">{selectedUser.city}, {selectedUser.state}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registration Date</p>
                  <p className="font-semibold">{new Date(selectedUser.registrationDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Last Active</p>
                  <p className="font-semibold">{new Date(selectedUser.lastActive).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Quiz Participation</p>
                  <p className="font-semibold text-primary">{selectedUser.quizParticipation}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Wins</p>
                  <p className="font-semibold text-yellow-500">{selectedUser.wins}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}