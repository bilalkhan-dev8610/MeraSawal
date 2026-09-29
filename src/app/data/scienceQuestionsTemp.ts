import type { Question } from './questionsData';

// Complete General Science questions for all subcategories
export const scienceQuestions: Question[] = [
  
  // ============= GENERAL SCIENCE - PHYSICS BASIC (Easy) =============
  {
    id: 'sci-phy-e-1',
    question: 'SI unit of force is?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Newton (N) is the SI unit of force.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-2',
    question: 'Speed of light in vacuum is?',
    options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10⁷ m/s', '3 × 10⁵ m/s'],
    correctAnswer: 0,
    explanation: 'Speed of light is approximately 3 × 10⁸ m/s.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-3',
    question: 'Instrument to measure temperature is?',
    options: ['Barometer', 'Thermometer', 'Hygrometer', 'Speedometer'],
    correctAnswer: 1,
    explanation: 'Thermometer measures temperature.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-4',
    question: 'Unit of electric current is?',
    options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    correctAnswer: 1,
    explanation: 'Ampere (A) is the unit of electric current.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-5',
    question: 'Energy can neither be created nor destroyed is?',
    options: ['Newton\'s law', 'Law of conservation of energy', 'Ohm\'s law', 'Pascal\'s law'],
    correctAnswer: 1,
    explanation: 'Law of conservation of energy states energy cannot be created or destroyed.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-6',
    question: 'Reflection of sound is called?',
    options: ['Reverberation', 'Echo', 'Resonance', 'Refraction'],
    correctAnswer: 1,
    explanation: 'Echo is the reflection of sound.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-7',
    question: 'SI unit of pressure is?',
    options: ['Newton', 'Pascal', 'Joule', 'Watt'],
    correctAnswer: 1,
    explanation: 'Pascal (Pa) is the SI unit of pressure.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-8',
    question: 'Mass × Velocity is called?',
    options: ['Force', 'Momentum', 'Energy', 'Power'],
    correctAnswer: 1,
    explanation: 'Momentum = Mass × Velocity.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-9',
    question: 'Friction always acts?',
    options: ['In direction of motion', 'Opposite to motion', 'Perpendicular', 'No direction'],
    correctAnswer: 1,
    explanation: 'Friction opposes motion.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },
  {
    id: 'sci-phy-e-10',
    question: 'Range of human hearing is?',
    options: ['10 Hz to 10 kHz', '20 Hz to 20 kHz', '30 Hz to 30 kHz', '40 Hz to 40 kHz'],
    correctAnswer: 1,
    explanation: 'Human ear can hear frequencies from 20 Hz to 20,000 Hz.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - PHYSICS BASIC (Medium) =============
  {
    id: 'sci-phy-m-1',
    question: 'Newton\'s second law states?',
    options: ['F = ma', 'F = m/a', 'F = a/m', 'F = m + a'],
    correctAnswer: 0,
    explanation: 'Newton\'s second law: Force = Mass × Acceleration.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-2',
    question: 'Work done is measured in?',
    options: ['Newton', 'Joule', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Joule is the unit of work/energy.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-3',
    question: 'Kirchhoff\'s law is related to?',
    options: ['Thermodynamics', 'Optics', 'Electric circuits', 'Mechanics'],
    correctAnswer: 2,
    explanation: 'Kirchhoff\'s laws apply to electric circuits.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-4',
    question: 'Escape velocity from Earth is?',
    options: ['7.9 km/s', '11.2 km/s', '15.5 km/s', '20 km/s'],
    correctAnswer: 1,
    explanation: 'Escape velocity from Earth is 11.2 km/s.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-5',
    question: 'Archimedes principle is related to?',
    options: ['Gravity', 'Buoyancy', 'Pressure', 'Friction'],
    correctAnswer: 1,
    explanation: 'Archimedes principle explains buoyant force.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-6',
    question: 'Doppler effect is associated with?',
    options: ['Light', 'Sound', 'Both', 'None'],
    correctAnswer: 2,
    explanation: 'Doppler effect occurs with both light and sound waves.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-7',
    question: 'Lens with positive focal length is?',
    options: ['Concave', 'Convex', 'Plane', 'Cylindrical'],
    correctAnswer: 1,
    explanation: 'Convex lens has positive focal length.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-8',
    question: 'Fleming\'s left hand rule gives direction of?',
    options: ['Current', 'Force', 'Magnetic field', 'EMF'],
    correctAnswer: 1,
    explanation: 'Fleming\'s left hand rule gives direction of force on current-carrying conductor.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-9',
    question: 'Specific heat of water is?',
    options: ['1 cal/g°C', '4.2 J/g°C', 'Both A and B', 'None'],
    correctAnswer: 2,
    explanation: 'Water has specific heat of 1 cal/g°C or 4.2 J/g°C.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },
  {
    id: 'sci-phy-m-10',
    question: 'Relative density has?',
    options: ['No unit', 'kg/m³', 'g/cm³', 'N/m²'],
    correctAnswer: 0,
    explanation: 'Relative density is a ratio, hence unitless.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'medium'
  },

  // ============= GENERAL SCIENCE - PHYSICS BASIC (Hard) =============
  {
    id: 'sci-phy-h-1',
    question: 'Planck\'s constant value is?',
    options: ['6.63 × 10⁻³⁴ J·s', '6.63 × 10⁻²⁴ J·s', '9.8 m/s²', '3 × 10⁸ m/s'],
    correctAnswer: 0,
    explanation: 'Planck\'s constant h = 6.63 × 10⁻³⁴ J·s.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-2',
    question: 'Heisenberg uncertainty principle relates to?',
    options: ['Classical mechanics', 'Quantum mechanics', 'Thermodynamics', 'Relativity'],
    correctAnswer: 1,
    explanation: 'Uncertainty principle is fundamental to quantum mechanics.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-3',
    question: 'Stefan-Boltzmann law relates to?',
    options: ['Thermal radiation', 'Electric field', 'Magnetism', 'Sound'],
    correctAnswer: 0,
    explanation: 'Stefan-Boltzmann law describes thermal radiation from black body.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-4',
    question: 'De Broglie wavelength formula is?',
    options: ['λ = h/p', 'λ = p/h', 'λ = hv', 'λ = E/h'],
    correctAnswer: 0,
    explanation: 'De Broglie wavelength λ = h/p (h=Planck constant, p=momentum).',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-5',
    question: 'Photoelectric effect was explained by?',
    options: ['Newton', 'Maxwell', 'Einstein', 'Bohr'],
    correctAnswer: 2,
    explanation: 'Einstein explained photoelectric effect using quantum theory.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-6',
    question: 'Biot-Savart law gives?',
    options: ['Electric field', 'Magnetic field', 'Gravitational field', 'Pressure'],
    correctAnswer: 1,
    explanation: 'Biot-Savart law calculates magnetic field due to current.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-7',
    question: 'Lorentz force acts on?',
    options: ['Stationary charge', 'Moving charge in magnetic field', 'Neutral particle', 'Photon'],
    correctAnswer: 1,
    explanation: 'Lorentz force acts on moving charged particle in electromagnetic field.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-8',
    question: 'Carnot engine efficiency depends on?',
    options: ['Working substance', 'Temperature of reservoirs', 'Pressure', 'Volume'],
    correctAnswer: 1,
    explanation: 'Carnot efficiency = 1 - T₂/T₁ (depends only on temperatures).',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-9',
    question: 'Compton effect demonstrates?',
    options: ['Wave nature of light', 'Particle nature of light', 'Diffraction', 'Interference'],
    correctAnswer: 1,
    explanation: 'Compton scattering shows particle nature of electromagnetic radiation.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },
  {
    id: 'sci-phy-h-10',
    question: 'Fermi energy is associated with?',
    options: ['Nuclear physics', 'Solid state physics', 'Fluid mechanics', 'Thermodynamics'],
    correctAnswer: 1,
    explanation: 'Fermi energy is highest energy level occupied by electrons at absolute zero.',
    categoryId: 'general-science',
    subCategoryId: 'physics-basic',
    level: 'hard'
  },

  // ============= GENERAL SCIENCE - CHEMISTRY BASIC (Easy) =============
  {
    id: 'sci-chem-e-1',
    question: 'Chemical formula of water is?',
    options: ['H₂O', 'H₂O₂', 'HO₂', 'H₃O'],
    correctAnswer: 0,
    explanation: 'Water is H₂O (two hydrogen, one oxygen).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-2',
    question: 'Common salt is?',
    options: ['NaCl', 'KCl', 'CaCl₂', 'MgCl₂'],
    correctAnswer: 0,
    explanation: 'Common salt is Sodium Chloride (NaCl).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-3',
    question: 'pH of pure water is?',
    options: ['0', '7', '14', '10'],
    correctAnswer: 1,
    explanation: 'Pure water has pH 7 (neutral).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-4',
    question: 'Lightest element is?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Hydrogen is the lightest element.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-5',
    question: 'Rusting of iron is?',
    options: ['Physical change', 'Chemical change', 'Both', 'None'],
    correctAnswer: 1,
    explanation: 'Rusting is a chemical change (oxidation).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-6',
    question: 'Which gas is used in soda?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'Carbon dioxide (CO₂) is used in aerated drinks.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-7',
    question: 'Vinegar contains?',
    options: ['Citric acid', 'Acetic acid', 'Hydrochloric acid', 'Sulfuric acid'],
    correctAnswer: 1,
    explanation: 'Vinegar contains acetic acid (CH₃COOH).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-8',
    question: 'Atomic number of carbon is?',
    options: ['4', '6', '8', '12'],
    correctAnswer: 1,
    explanation: 'Carbon has atomic number 6.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-9',
    question: 'Which metal is liquid at room temperature?',
    options: ['Iron', 'Mercury', 'Gold', 'Silver'],
    correctAnswer: 1,
    explanation: 'Mercury is liquid at room temperature.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },
  {
    id: 'sci-chem-e-10',
    question: 'Baking soda is?',
    options: ['NaCl', 'NaHCO₃', 'Na₂CO₃', 'NaOH'],
    correctAnswer: 1,
    explanation: 'Baking soda is Sodium bicarbonate (NaHCO₃).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - CHEMISTRY BASIC (Medium) =============
  {
    id: 'sci-chem-m-1',
    question: 'Avogadro number is?',
    options: ['6.02 × 10²³', '6.02 × 10²²', '3.14 × 10²³', '9.8 × 10²³'],
    correctAnswer: 0,
    explanation: 'Avogadro number = 6.02 × 10²³ mol⁻¹.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-2',
    question: 'Noble gases are in which group?',
    options: ['Group 1', 'Group 17', 'Group 18', 'Group 2'],
    correctAnswer: 2,
    explanation: 'Noble gases are in Group 18 of periodic table.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-3',
    question: 'Catalyst affects?',
    options: ['Rate of reaction', 'Equilibrium', 'Both', 'None'],
    correctAnswer: 0,
    explanation: 'Catalyst changes reaction rate but not equilibrium position.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-4',
    question: 'Isotopes have same?',
    options: ['Atomic number', 'Mass number', 'Neutrons', 'Physical properties'],
    correctAnswer: 0,
    explanation: 'Isotopes have same atomic number (protons) but different mass numbers.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-5',
    question: 'Oxidation is?',
    options: ['Gain of electrons', 'Loss of electrons', 'Gain of protons', 'Loss of protons'],
    correctAnswer: 1,
    explanation: 'Oxidation is loss of electrons.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-6',
    question: 'Functional group in alcohol is?',
    options: ['-COOH', '-OH', '-CHO', '-NH₂'],
    correctAnswer: 1,
    explanation: 'Alcohol contains hydroxyl group (-OH).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-7',
    question: 'Le Chatelier principle is related to?',
    options: ['Chemical equilibrium', 'Thermodynamics', 'Kinetics', 'Electrochemistry'],
    correctAnswer: 0,
    explanation: 'Le Chatelier principle predicts effect of changes on equilibrium.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-8',
    question: 'Electronegativity is highest for?',
    options: ['Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen'],
    correctAnswer: 0,
    explanation: 'Fluorine has highest electronegativity (3.98).',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-9',
    question: 'Buffer solution maintains?',
    options: ['Temperature', 'pH', 'Pressure', 'Volume'],
    correctAnswer: 1,
    explanation: 'Buffer solution resists pH changes.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },
  {
    id: 'sci-chem-m-10',
    question: 'Hydrolysis is reaction with?',
    options: ['Hydrogen', 'Water', 'Oxygen', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Hydrolysis is chemical breakdown using water.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'medium'
  },

  // ============= GENERAL SCIENCE - CHEMISTRY BASIC (Hard) =============
  {
    id: 'sci-chem-h-1',
    question: 'Hess\'s law is related to?',
    options: ['Enthalpy', 'Entropy', 'Free energy', 'Equilibrium'],
    correctAnswer: 0,
    explanation: 'Hess\'s law states enthalpy change is independent of path.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-2',
    question: 'Aufbau principle deals with?',
    options: ['Atomic structure', 'Molecular bonding', 'Thermodynamics', 'Kinetics'],
    correctAnswer: 0,
    explanation: 'Aufbau principle describes electron filling order in atoms.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-3',
    question: 'Nernst equation relates to?',
    options: ['Thermodynamics', 'Electrochemistry', 'Kinetics', 'Equilibrium'],
    correctAnswer: 1,
    explanation: 'Nernst equation relates electrode potential to concentration.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-4',
    question: 'Van\'t Hoff factor is used in?',
    options: ['Colligative properties', 'Chemical kinetics', 'Thermodynamics', 'Electrochemistry'],
    correctAnswer: 0,
    explanation: 'Van\'t Hoff factor accounts for dissociation in colligative properties.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-5',
    question: 'Molecular orbital theory was proposed by?',
    options: ['Lewis', 'Pauling', 'Hund and Mulliken', 'Bohr'],
    correctAnswer: 2,
    explanation: 'Molecular orbital theory developed by Hund and Mulliken.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-6',
    question: 'Crystal field theory explains?',
    options: ['Ionic bonding', 'Covalent bonding', 'Coordination compounds', 'Metallic bonding'],
    correctAnswer: 2,
    explanation: 'Crystal field theory explains bonding in coordination complexes.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-7',
    question: 'SN2 reaction is?',
    options: ['Unimolecular substitution', 'Bimolecular substitution', 'Elimination', 'Addition'],
    correctAnswer: 1,
    explanation: 'SN2 is bimolecular nucleophilic substitution.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-8',
    question: 'Gibbs free energy equation is?',
    options: ['G = H - TS', 'G = H + TS', 'G = TS - H', 'G = T + HS'],
    correctAnswer: 0,
    explanation: 'Gibbs free energy: ΔG = ΔH - TΔS.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-9',
    question: 'Chelate effect increases?',
    options: ['Stability', 'Reactivity', 'Solubility', 'pH'],
    correctAnswer: 0,
    explanation: 'Chelate effect increases stability of complex compounds.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },
  {
    id: 'sci-chem-h-10',
    question: 'Markovnikov rule applies to?',
    options: ['Addition reactions', 'Substitution', 'Elimination', 'Oxidation'],
    correctAnswer: 0,
    explanation: 'Markovnikov rule predicts regioselectivity in addition reactions.',
    categoryId: 'general-science',
    subCategoryId: 'chemistry-basic',
    level: 'hard'
  },

  // ============= GENERAL SCIENCE - BIOLOGY BASIC (Easy) =============
  {
    id: 'sci-bio-e-1',
    question: 'Smallest unit of life is?',
    options: ['Atom', 'Molecule', 'Cell', 'Tissue'],
    correctAnswer: 2,
    explanation: 'Cell is the basic unit of life.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-2',
    question: 'Human body has how many bones?',
    options: ['196', '206', '216', '226'],
    correctAnswer: 1,
    explanation: 'Human body has 206 bones.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-3',
    question: 'Which vitamin is produced by sunlight?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin E'],
    correctAnswer: 2,
    explanation: 'Vitamin D is produced by skin when exposed to sunlight.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-4',
    question: 'Largest organ in human body is?',
    options: ['Liver', 'Heart', 'Skin', 'Brain'],
    correctAnswer: 2,
    explanation: 'Skin is the largest organ.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-5',
    question: 'Plants prepare food by?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Absorption'],
    correctAnswer: 1,
    explanation: 'Plants make food through photosynthesis.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-6',
    question: 'Green color in plants is due to?',
    options: ['Carotene', 'Xanthophyll', 'Chlorophyll', 'Anthocyanin'],
    correctAnswer: 2,
    explanation: 'Chlorophyll gives green color to plants.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-7',
    question: 'Which blood group is universal donor?',
    options: ['A', 'B', 'AB', 'O'],
    correctAnswer: 3,
    explanation: 'O negative is universal donor.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-8',
    question: 'Human heart has how many chambers?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Heart has 4 chambers (2 atria, 2 ventricles).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-9',
    question: 'Which carries oxygen in blood?',
    options: ['WBC', 'RBC', 'Platelets', 'Plasma'],
    correctAnswer: 1,
    explanation: 'Red Blood Cells (RBC) carry oxygen.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },
  {
    id: 'sci-bio-e-10',
    question: 'Normal human body temperature is?',
    options: ['36°C', '37°C', '38°C', '39°C'],
    correctAnswer: 1,
    explanation: 'Normal body temperature is 37°C (98.6°F).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'easy'
  },

  // ============= GENERAL SCIENCE - BIOLOGY BASIC (Medium) =============
  {
    id: 'sci-bio-m-1',
    question: 'DNA stands for?',
    options: ['Deoxyribonucleic Acid', 'Diribonucleic Acid', 'Dual Nuclear Acid', 'None'],
    correctAnswer: 0,
    explanation: 'DNA is Deoxyribonucleic Acid.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-2',
    question: 'Mitochondria is called?',
    options: ['Powerhouse of cell', 'Suicide bag', 'Brain of cell', 'Control center'],
    correctAnswer: 0,
    explanation: 'Mitochondria is powerhouse (produces ATP).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-3',
    question: 'Chromosomes are made of?',
    options: ['DNA', 'RNA', 'Protein', 'DNA and Protein'],
    correctAnswer: 3,
    explanation: 'Chromosomes are DNA-protein complexes.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-4',
    question: 'Darwin\'s theory is based on?',
    options: ['Mutation', 'Natural selection', 'Genetic drift', 'Gene flow'],
    correctAnswer: 1,
    explanation: 'Darwin proposed theory of natural selection.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-5',
    question: 'Insulin is secreted by?',
    options: ['Liver', 'Pancreas', 'Kidney', 'Spleen'],
    correctAnswer: 1,
    explanation: 'Insulin is secreted by pancreas (beta cells).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-6',
    question: 'Antibodies are produced by?',
    options: ['RBC', 'WBC', 'Platelets', 'Plasma'],
    correctAnswer: 1,
    explanation: 'White blood cells (B lymphocytes) produce antibodies.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-7',
    question: 'Nitrogen fixation is done by?',
    options: ['Animals', 'Bacteria', 'Fungi', 'Viruses'],
    correctAnswer: 1,
    explanation: 'Nitrogen-fixing bacteria convert N₂ to ammonia.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-8',
    question: 'Cerebrum is part of?',
    options: ['Heart', 'Liver', 'Brain', 'Kidney'],
    correctAnswer: 2,
    explanation: 'Cerebrum is largest part of brain.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-9',
    question: 'Stomata are present on?',
    options: ['Roots', 'Stem', 'Leaves', 'Flowers'],
    correctAnswer: 2,
    explanation: 'Stomata are pores on leaf surface for gas exchange.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },
  {
    id: 'sci-bio-m-10',
    question: 'Hemoglobin contains?',
    options: ['Copper', 'Iron', 'Zinc', 'Calcium'],
    correctAnswer: 1,
    explanation: 'Hemoglobin contains iron (binds oxygen).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'medium'
  },

  // ============= GENERAL SCIENCE - BIOLOGY BASIC (Hard) =============
  {
    id: 'sci-bio-h-1',
    question: 'Mendel\'s law of independent assortment is?',
    options: ['First law', 'Second law', 'Third law', 'Not a law'],
    correctAnswer: 1,
    explanation: 'Independent assortment is Mendel\'s second law.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-2',
    question: 'Hardy-Weinberg equilibrium assumes?',
    options: ['Random mating', 'No evolution', 'Large population', 'All of these'],
    correctAnswer: 3,
    explanation: 'Hardy-Weinberg requires all these conditions for equilibrium.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-3',
    question: 'Operon concept was proposed by?',
    options: ['Watson & Crick', 'Jacob & Monod', 'Mendel', 'Darwin'],
    correctAnswer: 1,
    explanation: 'Jacob and Monod proposed operon model (lac operon).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-4',
    question: 'Krebs cycle occurs in?',
    options: ['Cytoplasm', 'Mitochondria', 'Nucleus', 'Ribosome'],
    correctAnswer: 1,
    explanation: 'Krebs cycle (citric acid cycle) occurs in mitochondrial matrix.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-5',
    question: 'Semiconservative replication of DNA was shown by?',
    options: ['Watson & Crick', 'Meselson & Stahl', 'Hershey & Chase', 'Griffith'],
    correctAnswer: 1,
    explanation: 'Meselson-Stahl experiment proved semiconservative DNA replication.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-6',
    question: 'Restriction enzymes are used in?',
    options: ['PCR', 'Gene cloning', 'Protein synthesis', 'Cell division'],
    correctAnswer: 1,
    explanation: 'Restriction enzymes cut DNA at specific sites for gene cloning.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-7',
    question: 'Central dogma of molecular biology is?',
    options: ['DNA → RNA → Protein', 'RNA → DNA → Protein', 'Protein → RNA → DNA', 'DNA → Protein → RNA'],
    correctAnswer: 0,
    explanation: 'Central dogma: DNA → RNA → Protein (information flow).',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-8',
    question: 'Transpiration pull theory was given by?',
    options: ['Dixon & Joly', 'Priestley', 'Hill', 'Calvin'],
    correctAnswer: 0,
    explanation: 'Dixon and Joly proposed cohesion-tension (transpiration pull) theory.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-9',
    question: 'Gause\'s competitive exclusion principle states?',
    options: ['Species coexist', 'One species dominates', 'Both extinct', 'Symbiosis'],
    correctAnswer: 1,
    explanation: 'Two species competing for same niche cannot coexist; one excludes other.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },
  {
    id: 'sci-bio-h-10',
    question: 'Vernalization is?',
    options: ['Cold treatment', 'Heat treatment', 'Light treatment', 'Water treatment'],
    correctAnswer: 0,
    explanation: 'Vernalization is cold treatment to induce flowering.',
    categoryId: 'general-science',
    subCategoryId: 'biology-basic',
    level: 'hard'
  },

  // ============= GENERAL SCIENCE - CLASS 10 SCIENCE (Easy to Hard) =============
  {
    id: 'sci-10-e-1',
    question: 'Acid turns blue litmus to?',
    options: ['Blue', 'Red', 'Green', 'Yellow'],
    correctAnswer: 1,
    explanation: 'Acid turns blue litmus red.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-2',
    question: 'Acceleration formula is?',
    options: ['v/t', '(v-u)/t', '(u+v)/t', '(v²-u²)/2s'],
    correctAnswer: 1,
    explanation: 'Acceleration = (v-u)/t.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-3',
    question: 'SI unit of force is?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1,
    explanation: 'Newton (N) is the SI unit of force.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-4',
    question: 'Mitosis produces how many cells?',
    options: ['1', '2', '4', '8'],
    correctAnswer: 1,
    explanation: 'Mitosis produces 2 identical daughter cells.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-5',
    question: 'Power of lens is measured in?',
    options: ['Metre', 'Dioptre', 'Watt', 'Newton'],
    correctAnswer: 1,
    explanation: 'Dioptre is the unit of power of lens.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-6',
    question: 'Ohm\'s law is?',
    options: ['V = I/R', 'V = IR', 'V = R/I', 'I = VR'],
    correctAnswer: 1,
    explanation: 'Ohm\'s law: V = IR.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-7',
    question: 'Biomagnification means?',
    options: ['Growth of organisms', 'Increase in toxic concentration', 'Population growth', 'None'],
    correctAnswer: 1,
    explanation: 'Biomagnification is accumulation of toxins in food chain.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-8',
    question: 'Mendel worked on?',
    options: ['Rice', 'Wheat', 'Pea', 'Maize'],
    correctAnswer: 2,
    explanation: 'Mendel conducted experiments on pea plants.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-9',
    question: 'Corrosion is which type of reaction?',
    options: ['Reduction', 'Oxidation', 'Displacement', 'Combustion'],
    correctAnswer: 1,
    explanation: 'Corrosion is oxidation of metals.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },
  {
    id: 'sci-10-e-10',
    question: 'Trophic level starts with?',
    options: ['Herbivores', 'Producers', 'Carnivores', 'Decomposers'],
    correctAnswer: 1,
    explanation: 'Producers (plants) are first trophic level.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'easy'
  },

  // Medium & Hard for Class 10 Science
  {
    id: 'sci-10-m-1',
    question: 'Fleming\'s right hand rule gives?',
    options: ['Direction of force', 'Direction of current', 'Direction of induced current', 'Magnetic field'],
    correctAnswer: 2,
    explanation: 'Fleming\'s right hand rule gives direction of induced current.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'medium'
  },
  {
    id: 'sci-10-m-2',
    question: 'Hypermetropia is corrected by?',
    options: ['Concave lens', 'Convex lens', 'Cylindrical lens', 'Bifocal lens'],
    correctAnswer: 1,
    explanation: 'Hypermetropia (farsightedness) corrected by convex lens.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'medium'
  },
  {
    id: 'sci-10-m-3',
    question: 'Saponification produces?',
    options: ['Acid', 'Base', 'Soap', 'Salt'],
    correctAnswer: 2,
    explanation: 'Saponification of fats produces soap.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'medium'
  },
  {
    id: 'sci-10-m-4',
    question: 'Ozone layer is in?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctAnswer: 1,
    explanation: 'Ozone layer is in stratosphere.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'medium'
  },
  {
    id: 'sci-10-m-5',
    question: 'Double circulation means?',
    options: ['Blood passes through heart once', 'Blood passes through heart twice', 'Two hearts', 'None'],
    correctAnswer: 1,
    explanation: 'In double circulation, blood passes through heart twice per cycle.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'medium'
  },
  {
    id: 'sci-10-h-1',
    question: 'Lenz\'s law is related to?',
    options: ['Magnetic induction', 'Electromagnetic induction', 'Electric field', 'Resistance'],
    correctAnswer: 1,
    explanation: 'Lenz\'s law gives direction of induced EMF/current.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'hard'
  },
  {
    id: 'sci-10-h-2',
    question: 'Redox reaction involves?',
    options: ['Only oxidation', 'Only reduction', 'Both oxidation and reduction', 'Neither'],
    correctAnswer: 2,
    explanation: 'Redox = Reduction + Oxidation occurring simultaneously.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'hard'
  },
  {
    id: 'sci-10-h-3',
    question: 'Geotropism is response to?',
    options: ['Light', 'Gravity', 'Water', 'Touch'],
    correctAnswer: 1,
    explanation: 'Geotropism is growth response to gravity.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'hard'
  },
  {
    id: 'sci-10-h-4',
    question: 'Catenation is shown maximum by?',
    options: ['Oxygen', 'Nitrogen', 'Carbon', 'Sulfur'],
    correctAnswer: 2,
    explanation: 'Carbon shows maximum catenation (self-linking).',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'hard'
  },
  {
    id: 'sci-10-h-5',
    question: 'Acetylcholine is?',
    options: ['Hormone', 'Neurotransmitter', 'Enzyme', 'Vitamin'],
    correctAnswer: 1,
    explanation: 'Acetylcholine is a neurotransmitter at synapses.',
    categoryId: 'general-science',
    subCategoryId: 'science-10th',
    level: 'hard'
  }

];
