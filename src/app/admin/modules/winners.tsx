import { motion } from 'motion/react';
import { Trophy, Download, Award, Medal } from 'lucide-react';
import { mockWinners } from '../mock-data';

export function Winners() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold flex items-center gap-2 whitespace-nowrap">
          <Trophy className="w-7 h-7 text-yellow-500" />
          Winners & Rankings
        </h2>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2 whitespace-nowrap self-end">
          <Download className="w-4 h-4" />
          Export List
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockWinners.map((winner, index) => (
          <motion.div
            key={winner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6 hover:border-primary transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                  winner.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                  winner.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                  'bg-orange-600/20 text-orange-600'
                }`}>
                  {winner.rank === 1 ? '🥇' : winner.rank === 2 ? '🥈' : '🥉'}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{winner.name}</h3>
                  <p className="text-sm text-muted-foreground">{winner.category}</p>
                  {winner.league && (
                    <p className="text-xs text-muted-foreground mt-1">League: {winner.league}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{winner.score}</p>
                <p className="text-sm text-muted-foreground">{winner.date}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  winner.certificateIssued ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                }`}>
                  {winner.certificateIssued ? 'Certificate Issued' : 'Pending'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}