import { useState } from 'react';
import { motion } from 'motion/react';
import { FileQuestion, Plus, Edit, Trash2, Upload, Search, Filter } from 'lucide-react';
import { mockQuestions } from '../mock-data';
import type { QuizQuestion } from '../types';

export function QuizContent() {
  const [questions, setQuestions] = useState<QuizQuestion[]>(mockQuestions);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    category: '',
    subCategory: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    difficulty: 'easy' as const,
  });

  const handleAddQuestion = () => {
    const question: QuizQuestion = {
      id: `q${questions.length + 1}`,
      ...newQuestion,
      status: 'active',
      aiGenerated: false,
      usageCount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setQuestions([...questions, question]);
    setShowAddModal(false);
    setNewQuestion({
      question: '',
      category: '',
      subCategory: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      difficulty: 'easy',
    });
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
          />
        </div>
        <div className="flex gap-2 flex-nowrap">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add Question
          </button>
          <button className="px-4 py-3 bg-card border-2 border-border rounded-xl font-semibold flex items-center gap-2 hover:border-primary transition-all whitespace-nowrap">
            <Upload className="w-5 h-5" />
            Bulk Upload
          </button>
        </div>
      </div>

      {/* Questions Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Questions', value: questions.length, color: 'text-blue-500' },
          { label: 'Active', value: questions.filter(q => q.status === 'active').length, color: 'text-green-500' },
          { label: 'Draft', value: questions.filter(q => q.status === 'draft').length, color: 'text-yellow-500' },
          { label: 'AI Generated', value: questions.filter(q => q.aiGenerated).length, color: 'text-purple-500' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl p-4"
          >
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Questions List */}
      <div className="bg-card/40 backdrop-blur-xl border-2 border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-card/50 border-b-2 border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Question</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Difficulty</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Usage</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map((question, index) => (
                <motion.tr
                  key={question.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border hover:bg-card/30"
                >
                  <td className="px-6 py-4 max-w-md">
                    <p className="font-medium truncate">{question.question}</p>
                    {question.aiGenerated && (
                      <span className="inline-block mt-1 px-2 py-1 bg-purple-500/20 text-purple-500 rounded text-xs font-semibold">
                        AI Generated
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-sm">{question.category}</p>
                      <p className="text-xs text-muted-foreground">{question.subCategory}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      question.difficulty === 'easy' ? 'bg-green-500/20 text-green-500' :
                      question.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {question.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      question.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {question.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-semibold">{question.usageCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(question.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg"
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
      </div>

      {/* Add Question Modal */}
      {showAddModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card border-2 border-primary rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold mb-6">Add New Question</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Question</label>
                <textarea
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
                  rows={3}
                  placeholder="Enter question..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={newQuestion.category}
                    onChange={(e) => {
                      setNewQuestion({ ...newQuestion, category: e.target.value, subCategory: '' });
                    }}
                    className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
                  >
                    <option value="">Select Category</option>
                    <option value="General Awareness">General Awareness</option>
                    <option value="Science & Technology">Science & Technology</option>
                    <option value="History & Geography">History & Geography</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Business & Economy">Business & Economy</option>
                    <option value="Politics & Current Affairs">Politics & Current Affairs</option>
                    <option value="Literature & Arts">Literature & Arts</option>
                    <option value="Environment & Nature">Environment & Nature</option>
                    <option value="Health & Medicine">Health & Medicine</option>
                    <option value="Tech & Innovation">Tech & Innovation</option>
                    <option value="Culture & Society">Culture & Society</option>
                    <option value="Legal & Constitution">Legal & Constitution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Sub Category</label>
                  <select
                    value={newQuestion.subCategory}
                    onChange={(e) => setNewQuestion({ ...newQuestion, subCategory: e.target.value })}
                    className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none"
                    disabled={!newQuestion.category}
                  >
                    <option value="">Select Sub Category</option>
                    {newQuestion.category === 'General Awareness' && (
                      <>
                        <option value="Static GK">Static GK</option>
                        <option value="Current Affairs">Current Affairs</option>
                        <option value="Awards & Honours">Awards & Honours</option>
                        <option value="Books & Authors">Books & Authors</option>
                        <option value="Important Days">Important Days</option>
                      </>
                    )}
                    {newQuestion.category === 'Science & Technology' && (
                      <>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Space & Research">Space & Research</option>
                      </>
                    )}
                    {newQuestion.category === 'History & Geography' && (
                      <>
                        <option value="Indian History">Indian History</option>
                        <option value="World History">World History</option>
                        <option value="Indian Geography">Indian Geography</option>
                        <option value="World Geography">World Geography</option>
                      </>
                    )}
                    {newQuestion.category === 'Mathematics' && (
                      <>
                        <option value="Arithmetic">Arithmetic</option>
                        <option value="Algebra">Algebra</option>
                        <option value="Geometry">Geometry</option>
                        <option value="Number System">Number System</option>
                      </>
                    )}
                    {newQuestion.category === 'Sports' && (
                      <>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Olympics">Olympics</option>
                        <option value="Other Sports">Other Sports</option>
                      </>
                    )}
                    {newQuestion.category === 'Entertainment' && (
                      <>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="TV Shows">TV Shows</option>
                        <option value="Celebrities">Celebrities</option>
                      </>
                    )}
                    {newQuestion.category === 'Business & Economy' && (
                      <>
                        <option value="Economy">Economy</option>
                        <option value="Banking">Banking</option>
                        <option value="Stock Market">Stock Market</option>
                        <option value="Companies">Companies</option>
                      </>
                    )}
                    {newQuestion.category === 'Politics & Current Affairs' && (
                      <>
                        <option value="Indian Politics">Indian Politics</option>
                        <option value="World Politics">World Politics</option>
                        <option value="International Relations">International Relations</option>
                      </>
                    )}
                    {newQuestion.category === 'Literature & Arts' && (
                      <>
                        <option value="Literature">Literature</option>
                        <option value="Arts & Culture">Arts & Culture</option>
                        <option value="Famous Personalities">Famous Personalities</option>
                      </>
                    )}
                    {newQuestion.category === 'Environment & Nature' && (
                      <>
                        <option value="Environment">Environment</option>
                        <option value="Climate Change">Climate Change</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Natural Resources">Natural Resources</option>
                      </>
                    )}
                    {newQuestion.category === 'Health & Medicine' && (
                      <>
                        <option value="Health">Health</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Diseases">Diseases</option>
                        <option value="Nutrition">Nutrition</option>
                      </>
                    )}
                    {newQuestion.category === 'Tech & Innovation' && (
                      <>
                        <option value="Technology">Technology</option>
                        <option value="Innovation">Innovation</option>
                        <option value="Startups">Startups</option>
                        <option value="Digital India">Digital India</option>
                      </>
                    )}
                    {newQuestion.category === 'Culture & Society' && (
                      <>
                        <option value="Indian Culture">Indian Culture</option>
                        <option value="Social Issues">Social Issues</option>
                        <option value="Traditions">Traditions</option>
                      </>
                    )}
                    {newQuestion.category === 'Legal & Constitution' && (
                      <>
                        <option value="Constitution">Constitution</option>
                        <option value="Law">Law</option>
                        <option value="Rights & Duties">Rights & Duties</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Options</label>
                {newQuestion.options.map((opt, i) => (
                  <input
                    key={i}
                    value={opt}
                    onChange={(e) => {
                      const newOpts = [...newQuestion.options];
                      newOpts[i] = e.target.value;
                      setNewQuestion({ ...newQuestion, options: newOpts });
                    }}
                    className="w-full p-3 bg-card border-2 border-border rounded-xl focus:border-primary outline-none mb-2"
                    placeholder={`Option ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleAddQuestion}
                  className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold"
                >
                  Add Question
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 bg-card border-2 border-border rounded-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}