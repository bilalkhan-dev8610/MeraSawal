import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Wand2, CheckCircle } from 'lucide-react';

export function AIGenerator() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [count, setCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedQuestions([
        {
          question: 'AI Generated: What is the capital of France?',
          options: ['London', 'Paris', 'Berlin', 'Madrid'],
          correct: 1
        },
        {
          question: 'AI Generated: Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correct: 1
        },
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl p-6 border-2 border-primary/30"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">AI Question Generator</h2>
            <p className="text-muted-foreground">Generate quiz questions using advanced AI technology</p>
          </div>
        </div>
      </motion.div>

      {/* Generator Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-primary" />
            Configuration
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
              >
                <option value="">Select Category</option>
                <option value="gk">General Awareness</option>
                <option value="science">Science & Technology</option>
                <option value="history">History & Geography</option>
                <option value="math">Mathematics</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="business">Business & Economy</option>
                <option value="politics">Politics & Current Affairs</option>
                <option value="literature">Literature & Arts</option>
                <option value="environment">Environment & Nature</option>
                <option value="health">Health & Medicine</option>
                <option value="technology">Tech & Innovation</option>
                <option value="culture">Culture & Society</option>
                <option value="legal">Legal & Constitution</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    className={`py-2 rounded-lg font-semibold capitalize transition-all ${
                      difficulty === level
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border-2 border-border hover:border-primary'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Number of Questions: {count}</label>
              <input
                type="range"
                min="5"
                max="50"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!category || isGenerating}
              className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Generating...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Generate Questions
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-6"
        >
          <h3 className="font-bold text-lg mb-6">Generated Questions</h3>
          {generatedQuestions.length === 0 ? (
            <div className="text-center py-12">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-20" />
              <p className="text-muted-foreground">No questions generated yet</p>
              <p className="text-sm text-muted-foreground mt-2">Configure settings and click generate</p>
            </div>
          ) : (
            <div className="space-y-4">
              {generatedQuestions.map((q, i) => (
                <div key={i} className="p-4 bg-card/50 border border-border rounded-lg">
                  <p className="font-semibold mb-2">{q.question}</p>
                  <div className="space-y-1">
                    {q.options.map((opt: string, j: number) => (
                      <div key={j} className={`text-sm p-2 rounded ${j === q.correct ? 'bg-green-500/20 text-green-500' : 'bg-card'}`}>
                        {opt} {j === q.correct && '✓'}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Save to Question Bank
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}