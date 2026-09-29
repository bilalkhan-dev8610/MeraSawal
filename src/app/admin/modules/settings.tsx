import { motion } from 'motion/react';
import { Settings as SettingsIcon, User, Image, Key, Globe } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <SettingsIcon className="w-7 h-7 text-gray-500" />
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Admin Profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Admin Profile
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                defaultValue="Admin User"
                className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                defaultValue="admin@quizmaster.ai"
                className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
              />
            </div>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold">
              Update Profile
            </button>
          </div>
        </motion.div>

        {/* Logo Management */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-primary" />
            Logo Management
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Quiz App Logo</label>
              <div className="p-4 border-2 border-dashed border-border rounded-xl text-center">
                <p className="text-sm text-muted-foreground">Click to upload</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Admin Dashboard Logo</label>
              <div className="p-4 border-2 border-dashed border-border rounded-xl text-center">
                <p className="text-sm text-muted-foreground">Click to upload</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            Security Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Change Password</label>
              <input
                type="password"
                placeholder="New password"
                className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
              />
            </div>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold">
              Update Password
            </button>
          </div>
        </motion.div>

        {/* Language Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Language Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Default Language</label>
              <select className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none">
                <option>English</option>
                <option>Hindi</option>
                <option>Both</option>
              </select>
            </div>
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold">
              Save Settings
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
