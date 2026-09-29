import type { Question } from './questionsData';

// Complete Computer Awareness questions for all subcategories
export const computerQuestions: Question[] = [
  
  // ============= COMPUTER - BASIC COMPUTER (Easy) =============
  {
    id: 'comp-basic-e-1',
    question: 'CPU stands for?',
    options: ['Central Processing Unit', 'Central Program Unit', 'Computer Processing Unit', 'Control Processing Unit'],
    correctAnswer: 0,
    explanation: 'CPU is Central Processing Unit - brain of computer.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-2',
    question: 'RAM is?',
    options: ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Rapid Access Memory'],
    correctAnswer: 1,
    explanation: 'RAM is Random Access Memory - temporary storage.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-3',
    question: 'ROM stands for?',
    options: ['Read Only Memory', 'Random Only Memory', 'Run Only Memory', 'Rapid Only Memory'],
    correctAnswer: 0,
    explanation: 'ROM is Read Only Memory - permanent storage.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-4',
    question: 'Which is input device?',
    options: ['Monitor', 'Printer', 'Keyboard', 'Speaker'],
    correctAnswer: 2,
    explanation: 'Keyboard is an input device.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-5',
    question: 'Which is output device?',
    options: ['Mouse', 'Scanner', 'Microphone', 'Monitor'],
    correctAnswer: 3,
    explanation: 'Monitor displays output.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-6',
    question: '1 byte equals?',
    options: ['4 bits', '8 bits', '16 bits', '32 bits'],
    correctAnswer: 1,
    explanation: '1 byte = 8 bits.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-7',
    question: 'Hard disk is?',
    options: ['Input device', 'Output device', 'Storage device', 'Processing device'],
    correctAnswer: 2,
    explanation: 'Hard disk is secondary storage device.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-8',
    question: 'Operating system is?',
    options: ['Hardware', 'System software', 'Application software', 'Utility software'],
    correctAnswer: 1,
    explanation: 'OS is system software managing computer resources.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-9',
    question: 'MS Word is?',
    options: ['System software', 'Application software', 'Firmware', 'Driver'],
    correctAnswer: 1,
    explanation: 'MS Word is application software for word processing.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },
  {
    id: 'comp-basic-e-10',
    question: 'Ctrl+C is used for?',
    options: ['Cut', 'Copy', 'Paste', 'Close'],
    correctAnswer: 1,
    explanation: 'Ctrl+C copies selected content.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'easy'
  },

  // ============= COMPUTER - BASIC COMPUTER (Medium) =============
  {
    id: 'comp-basic-m-1',
    question: 'BIOS stands for?',
    options: ['Basic Input Output System', 'Binary Input Output System', 'Basic Internal Output System', 'Binary Internal Operating System'],
    correctAnswer: 0,
    explanation: 'BIOS is Basic Input Output System.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-2',
    question: 'Cache memory is?',
    options: ['Slower than RAM', 'Faster than RAM', 'Same as RAM', 'Permanent storage'],
    correctAnswer: 1,
    explanation: 'Cache is faster but smaller than RAM.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-3',
    question: 'ALU stands for?',
    options: ['Arithmetic Logic Unit', 'Application Logic Unit', 'Automatic Logic Unit', 'Advanced Logic Unit'],
    correctAnswer: 0,
    explanation: 'ALU performs arithmetic and logical operations.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-4',
    question: 'Bus in computer is?',
    options: ['Storage device', 'Communication pathway', 'Processing unit', 'Input device'],
    correctAnswer: 1,
    explanation: 'Bus is pathway for data transfer between components.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-5',
    question: 'USB stands for?',
    options: ['Universal Serial Bus', 'Universal System Bus', 'United Serial Bus', 'United System Bus'],
    correctAnswer: 0,
    explanation: 'USB is Universal Serial Bus - standard interface.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-6',
    question: 'Virtual memory uses?',
    options: ['RAM', 'Hard disk', 'Cache', 'ROM'],
    correctAnswer: 1,
    explanation: 'Virtual memory extends RAM using hard disk space.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-7',
    question: 'Compiler converts?',
    options: ['Machine to source code', 'Source to machine code', 'Binary to decimal', 'Decimal to binary'],
    correctAnswer: 1,
    explanation: 'Compiler translates source code to machine code.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-8',
    question: 'GUI stands for?',
    options: ['Graphical User Interface', 'General User Interface', 'Global User Interface', 'Graphics Utility Interface'],
    correctAnswer: 0,
    explanation: 'GUI is Graphical User Interface.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-9',
    question: 'POST stands for?',
    options: ['Power On Self Test', 'Program On Self Test', 'Processing On System Test', 'Power Operation System Test'],
    correctAnswer: 0,
    explanation: 'POST checks hardware during boot.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },
  {
    id: 'comp-basic-m-10',
    question: 'Plug and Play allows?',
    options: ['Manual configuration', 'Automatic device detection', 'Faster processing', 'Data backup'],
    correctAnswer: 1,
    explanation: 'Plug and Play automatically detects and configures devices.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'medium'
  },

  // ============= COMPUTER - BASIC COMPUTER (Hard) =============
  {
    id: 'comp-basic-h-1',
    question: 'Von Neumann architecture has?',
    options: ['Separate memory for data and instructions', 'Common memory for data and instructions', 'No memory', 'Only cache'],
    correctAnswer: 1,
    explanation: 'Von Neumann uses single memory for both data and instructions.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-2',
    question: 'Pipelining improves?',
    options: ['Storage', 'Throughput', 'Memory', 'Display'],
    correctAnswer: 1,
    explanation: 'Pipelining increases instruction throughput.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-3',
    question: 'DMA stands for?',
    options: ['Direct Memory Access', 'Dual Memory Access', 'Data Memory Access', 'Digital Memory Access'],
    correctAnswer: 0,
    explanation: 'DMA allows devices to access memory without CPU.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-4',
    question: 'RISC stands for?',
    options: ['Reduced Instruction Set Computer', 'Random Instruction Set Computer', 'Rapid Instruction Set Computer', 'Real Instruction Set Computer'],
    correctAnswer: 0,
    explanation: 'RISC uses simplified instruction set for faster execution.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-5',
    question: 'Interrupt handling is done by?',
    options: ['ALU', 'Control Unit', 'Memory', 'Register'],
    correctAnswer: 1,
    explanation: 'Control unit handles interrupts.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-6',
    question: 'RAID technology is used for?',
    options: ['Data redundancy and performance', 'Display', 'Input', 'Output'],
    correctAnswer: 0,
    explanation: 'RAID (Redundant Array of Independent Disks) provides redundancy/performance.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-7',
    question: 'Booting from CD/DVD is called?',
    options: ['Warm boot', 'Cold boot', 'Optical boot', 'Hard boot'],
    correctAnswer: 2,
    explanation: 'Booting from optical media is optical/CD boot.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-8',
    question: 'Kernel is?',
    options: ['Application software', 'Core of OS', 'Hardware', 'Peripheral'],
    correctAnswer: 1,
    explanation: 'Kernel is core component managing system resources.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-9',
    question: 'Thrashing occurs when?',
    options: ['Too much paging', 'Too much RAM', 'Fast CPU', 'Large cache'],
    correctAnswer: 0,
    explanation: 'Thrashing is excessive paging reducing performance.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },
  {
    id: 'comp-basic-h-10',
    question: 'Semaphore is used for?',
    options: ['Process synchronization', 'Memory management', 'File management', 'Device management'],
    correctAnswer: 0,
    explanation: 'Semaphore synchronizes concurrent processes.',
    categoryId: 'computer',
    subCategoryId: 'basic-computer',
    level: 'hard'
  },

  // ============= COMPUTER - MS OFFICE (Easy/Medium/Hard) =============
  {
    id: 'comp-ms-e-1',
    question: 'MS Word is used for?',
    options: ['Spreadsheet', 'Word processing', 'Presentation', 'Database'],
    correctAnswer: 1,
    explanation: 'MS Word is for document creation and editing.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-2',
    question: 'MS Excel deals with?',
    options: ['Text documents', 'Spreadsheets', 'Presentations', 'Graphics'],
    correctAnswer: 1,
    explanation: 'Excel is for spreadsheets and calculations.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-3',
    question: 'MS PowerPoint creates?',
    options: ['Documents', 'Spreadsheets', 'Presentations', 'Databases'],
    correctAnswer: 2,
    explanation: 'PowerPoint creates slide presentations.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-4',
    question: 'Ctrl+S in MS Office means?',
    options: ['Search', 'Save', 'Select', 'Sort'],
    correctAnswer: 1,
    explanation: 'Ctrl+S saves the document.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-5',
    question: 'Ctrl+P is used for?',
    options: ['Paste', 'Print', 'Preview', 'Properties'],
    correctAnswer: 1,
    explanation: 'Ctrl+P opens print dialog.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-6',
    question: 'Which extension for Word file?',
    options: ['.xls', '.ppt', '.doc/.docx', '.pdf'],
    correctAnswer: 2,
    explanation: 'Word files have .doc or .docx extension.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-7',
    question: 'Excel file extension is?',
    options: ['.xls/.xlsx', '.doc', '.ppt', '.txt'],
    correctAnswer: 0,
    explanation: 'Excel files are .xls or .xlsx.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-8',
    question: 'F7 key in Word is for?',
    options: ['Save', 'Print', 'Spell check', 'Find'],
    correctAnswer: 2,
    explanation: 'F7 runs spelling and grammar check.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-9',
    question: 'Mail Merge is used in?',
    options: ['Excel', 'Word', 'PowerPoint', 'Access'],
    correctAnswer: 1,
    explanation: 'Mail Merge in Word creates personalized documents.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },
  {
    id: 'comp-ms-e-10',
    question: 'SUM function is used in?',
    options: ['Word', 'Excel', 'PowerPoint', 'Paint'],
    correctAnswer: 1,
    explanation: 'SUM function adds numbers in Excel.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'easy'
  },

  {
    id: 'comp-ms-m-1',
    question: 'VLOOKUP in Excel is used for?',
    options: ['Vertical lookup', 'Visual lookup', 'Value lookup', 'Variable lookup'],
    correctAnswer: 0,
    explanation: 'VLOOKUP searches vertically in table.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-2',
    question: 'Pivot Table is feature of?',
    options: ['Word', 'Excel', 'PowerPoint', 'Access'],
    correctAnswer: 1,
    explanation: 'Pivot Table in Excel summarizes data.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-3',
    question: 'Macro in MS Office is?',
    options: ['Font style', 'Automated script', 'Template', 'Plugin'],
    correctAnswer: 1,
    explanation: 'Macro automates repetitive tasks.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-4',
    question: 'Master Slide is in?',
    options: ['Word', 'Excel', 'PowerPoint', 'Outlook'],
    correctAnswer: 2,
    explanation: 'Master Slide controls PowerPoint presentation design.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-5',
    question: 'Track Changes is feature of?',
    options: ['Excel', 'Word', 'PowerPoint', 'Access'],
    correctAnswer: 1,
    explanation: 'Track Changes in Word records edits.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-6',
    question: 'IF function in Excel tests?',
    options: ['Sum', 'Condition', 'Average', 'Count'],
    correctAnswer: 1,
    explanation: 'IF function tests logical conditions.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-7',
    question: 'Freezing panes in Excel?',
    options: ['Locks cells', 'Keeps rows/columns visible', 'Protects sheet', 'None'],
    correctAnswer: 1,
    explanation: 'Freeze Panes keeps rows/columns visible while scrolling.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-8',
    question: 'Watermark can be added in?',
    options: ['Only Word', 'Only Excel', 'Only PowerPoint', 'All three'],
    correctAnswer: 3,
    explanation: 'Watermark feature available in Word, Excel, PowerPoint.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-9',
    question: 'Conditional formatting is in?',
    options: ['Word', 'Excel', 'PowerPoint', 'Outlook'],
    correctAnswer: 1,
    explanation: 'Conditional formatting highlights cells based on criteria.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },
  {
    id: 'comp-ms-m-10',
    question: 'SmartArt is used for?',
    options: ['Calculations', 'Visual diagrams', 'Spell check', 'Printing'],
    correctAnswer: 1,
    explanation: 'SmartArt creates visual diagrams and flowcharts.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'medium'
  },

  {
    id: 'comp-ms-h-1',
    question: 'VBA stands for?',
    options: ['Visual Basic for Applications', 'Virtual Basic Applications', 'Value Based Applications', 'None'],
    correctAnswer: 0,
    explanation: 'VBA is programming language for Office automation.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-2',
    question: 'INDEX-MATCH in Excel is alternative to?',
    options: ['SUM', 'VLOOKUP', 'COUNT', 'AVERAGE'],
    correctAnswer: 1,
    explanation: 'INDEX-MATCH is more flexible than VLOOKUP.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-3',
    question: 'Data validation in Excel?',
    options: ['Formats cells', 'Restricts input', 'Calculates', 'Prints'],
    correctAnswer: 1,
    explanation: 'Data validation controls what users can enter.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-4',
    question: 'What-If analysis includes?',
    options: ['Goal Seek', 'Scenario Manager', 'Data Table', 'All of these'],
    correctAnswer: 3,
    explanation: 'What-If analysis includes Goal Seek, Scenarios, Data Tables.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-5',
    question: 'XLSM file contains?',
    options: ['Only data', 'Data and macros', 'Only macros', 'Templates'],
    correctAnswer: 1,
    explanation: 'XLSM is macro-enabled Excel file.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-6',
    question: 'Power Query is used for?',
    options: ['Data import and transformation', 'Presentations', 'Spell check', 'Printing'],
    correctAnswer: 0,
    explanation: 'Power Query imports and transforms data.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-7',
    question: 'Circular reference in Excel means?',
    options: ['Round shape', 'Formula refers to itself', 'Data validation', 'Formatting'],
    correctAnswer: 1,
    explanation: 'Circular reference when formula refers to its own cell.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-8',
    question: 'Custom slide show in PowerPoint?',
    options: ['Shows all slides', 'Shows selected slides', 'Animation', 'Transition'],
    correctAnswer: 1,
    explanation: 'Custom show presents subset of slides.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-9',
    question: 'Array formula in Excel?',
    options: ['Single calculation', 'Multiple calculations', 'No calculation', 'Text formula'],
    correctAnswer: 1,
    explanation: 'Array formula performs multiple calculations on array.',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },
  {
    id: 'comp-ms-h-10',
    question: 'ODT file format is?',
    options: ['Microsoft format', 'Open Document format', 'PDF format', 'Image format'],
    correctAnswer: 1,
    explanation: 'ODT is Open Document Text format (LibreOffice).',
    categoryId: 'computer',
    subCategoryId: 'ms-office',
    level: 'hard'
  },

  // Continue with remaining subcategories: Internet & Networking, Cyber Security, AI & Technology
  // Adding 30 questions each...

  // ============= COMPUTER - INTERNET & NETWORKING (Easy to Hard) =============
  {
    id: 'comp-net-e-1',
    question: 'WWW stands for?',
    options: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
    correctAnswer: 0,
    explanation: 'WWW is World Wide Web.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-2',
    question: 'HTTP stands for?',
    options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Transport Protocol', 'Hyper Transfer Transport Protocol'],
    correctAnswer: 0,
    explanation: 'HTTP is HyperText Transfer Protocol.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-3',
    question: 'Email stands for?',
    options: ['Electric Mail', 'Electronic Mail', 'Email Message', 'None'],
    correctAnswer: 1,
    explanation: 'Email is Electronic Mail.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-4',
    question: 'IP address is?',
    options: ['Physical address', 'Logical address', 'Port address', 'MAC address'],
    correctAnswer: 1,
    explanation: 'IP is logical address for network identification.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-e-5',
    question: 'URL stands for?',
    options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Resource Link', 'Universal Resource Link'],
    correctAnswer: 0,
    explanation: 'URL is Uniform Resource Locator - web address.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'easy'
  },
  {
    id: 'comp-net-m-1',
    question: 'DNS translates?',
    options: ['IP to MAC', 'Domain name to IP', 'MAC to IP', 'Port to IP'],
    correctAnswer: 1,
    explanation: 'DNS (Domain Name System) converts domain to IP address.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'medium'
  },
  {
    id: 'comp-net-m-2',
    question: 'TCP/IP has how many layers?',
    options: ['3', '4', '5', '7'],
    correctAnswer: 1,
    explanation: 'TCP/IP model has 4 layers.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'medium'
  },
  {
    id: 'comp-net-m-3',
    question: 'Default port for HTTP is?',
    options: ['20', '21', '80', '443'],
    correctAnswer: 2,
    explanation: 'HTTP uses port 80 by default.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'medium'
  },
  {
    id: 'comp-net-m-4',
    question: 'HTTPS uses port?',
    options: ['80', '443', '8080', '22'],
    correctAnswer: 1,
    explanation: 'HTTPS (secure HTTP) uses port 443.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'medium'
  },
  {
    id: 'comp-net-h-1',
    question: 'OSI model has how many layers?',
    options: ['4', '5', '7', '9'],
    correctAnswer: 2,
    explanation: 'OSI model has 7 layers.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'hard'
  },
  {
    id: 'comp-net-h-2',
    question: 'Subnet mask 255.255.255.0 provides?',
    options: ['Class A', 'Class B', 'Class C', 'Class D'],
    correctAnswer: 2,
    explanation: '255.255.255.0 is default for Class C network.',
    categoryId: 'computer',
    subCategoryId: 'internet-networking',
    level: 'hard'
  },

  // ============= COMPUTER - CYBER SECURITY (Easy to Hard) =============
  {
    id: 'comp-sec-e-1',
    question: 'Firewall is used for?',
    options: ['Speed', 'Security', 'Storage', 'Display'],
    correctAnswer: 1,
    explanation: 'Firewall protects network from unauthorized access.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-2',
    question: 'Antivirus software protects from?',
    options: ['Hardware failure', 'Malware', 'Power failure', 'None'],
    correctAnswer: 1,
    explanation: 'Antivirus detects and removes malicious software.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-3',
    question: 'Phishing is?',
    options: ['Fishing in sea', 'Email fraud', 'Hardware attack', 'Software'],
    correctAnswer: 1,
    explanation: 'Phishing is fraudulent attempt to obtain sensitive information.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-4',
    question: 'Strong password should have?',
    options: ['Only letters', 'Only numbers', 'Mix of letters, numbers, symbols', 'Name'],
    correctAnswer: 2,
    explanation: 'Strong password combines letters, numbers, special characters.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-e-5',
    question: 'VPN stands for?',
    options: ['Virtual Private Network', 'Visual Private Network', 'Virtual Public Network', 'None'],
    correctAnswer: 0,
    explanation: 'VPN creates secure connection over internet.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'easy'
  },
  {
    id: 'comp-sec-m-1',
    question: 'Encryption is process of?',
    options: ['Decoding', 'Encoding data', 'Deleting data', 'Copying data'],
    correctAnswer: 1,
    explanation: 'Encryption converts data to secure coded form.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'medium'
  },
  {
    id: 'comp-sec-m-2',
    question: 'DDoS attack means?',
    options: ['Data Denial of Service', 'Distributed Denial of Service', 'Direct Denial of Service', 'None'],
    correctAnswer: 1,
    explanation: 'DDoS floods system with traffic to make it unavailable.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'medium'
  },
  {
    id: 'comp-sec-m-3',
    question: 'Trojan horse is?',
    options: ['Antivirus', 'Malware disguised as legitimate software', 'Hardware', 'Network'],
    correctAnswer: 1,
    explanation: 'Trojan appears legitimate but performs malicious actions.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'medium'
  },
  {
    id: 'comp-sec-m-4',
    question: 'Two-factor authentication adds?',
    options: ['Speed', 'Extra security layer', 'Storage', 'Display'],
    correctAnswer: 1,
    explanation: '2FA requires two verification methods for access.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'medium'
  },
  {
    id: 'comp-sec-h-1',
    question: 'SSL/TLS provides?',
    options: ['Compression', 'Secure communication', 'Speed', 'Storage'],
    correctAnswer: 1,
    explanation: 'SSL/TLS encrypts data transmission for security.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'hard'
  },
  {
    id: 'comp-sec-h-2',
    question: 'Zero-day vulnerability is?',
    options: ['Old bug', 'Unknown security flaw', 'Hardware fault', 'None'],
    correctAnswer: 1,
    explanation: 'Zero-day is unknown vulnerability with no patch available.',
    categoryId: 'computer',
    subCategoryId: 'cyber-security',
    level: 'hard'
  },

  // ============= COMPUTER - AI & TECHNOLOGY (Easy to Hard) =============
  {
    id: 'comp-ai-e-1',
    question: 'AI stands for?',
    options: ['Artificial Intelligence', 'Automatic Intelligence', 'Advanced Intelligence', 'None'],
    correctAnswer: 0,
    explanation: 'AI is Artificial Intelligence - machine intelligence.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-2',
    question: 'Machine Learning is subset of?',
    options: ['Hardware', 'AI', 'Database', 'Network'],
    correctAnswer: 1,
    explanation: 'Machine Learning is branch of Artificial Intelligence.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-3',
    question: 'Chatbot uses?',
    options: ['AI', 'Hardware', 'Monitor', 'Printer'],
    correctAnswer: 0,
    explanation: 'Chatbot uses AI for conversational interactions.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-4',
    question: 'IoT stands for?',
    options: ['Internet of Things', 'Internet of Technology', 'Internal of Things', 'None'],
    correctAnswer: 0,
    explanation: 'IoT connects physical devices to internet.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-e-5',
    question: 'Cloud computing provides?',
    options: ['Physical storage only', 'Online computing resources', 'Local storage', 'None'],
    correctAnswer: 1,
    explanation: 'Cloud computing delivers computing services over internet.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'easy'
  },
  {
    id: 'comp-ai-m-1',
    question: 'Deep Learning uses?',
    options: ['Single layer', 'Neural networks', 'No algorithm', 'None'],
    correctAnswer: 1,
    explanation: 'Deep Learning uses multi-layered neural networks.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'medium'
  },
  {
    id: 'comp-ai-m-2',
    question: 'Big Data is characterized by?',
    options: ['Volume', 'Velocity', 'Variety', 'All of these'],
    correctAnswer: 3,
    explanation: 'Big Data defined by 3 Vs: Volume, Velocity, Variety.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'medium'
  },
  {
    id: 'comp-ai-m-3',
    question: 'Blockchain is used in?',
    options: ['Cryptocurrency', 'Supply chain', 'Healthcare', 'All of these'],
    correctAnswer: 3,
    explanation: 'Blockchain has applications across multiple industries.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'medium'
  },
  {
    id: 'comp-ai-m-4',
    question: 'AR stands for?',
    options: ['Artificial Reality', 'Augmented Reality', 'Advanced Reality', 'None'],
    correctAnswer: 1,
    explanation: 'AR overlays digital content on real world.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'medium'
  },
  {
    id: 'comp-ai-h-1',
    question: 'Turing Test evaluates?',
    options: ['Hardware', 'Machine intelligence', 'Network speed', 'Storage'],
    correctAnswer: 1,
    explanation: 'Turing Test assesses machine\'s ability to exhibit human-like intelligence.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'hard'
  },
  {
    id: 'comp-ai-h-2',
    question: 'Quantum computing uses?',
    options: ['Classical bits', 'Qubits', 'Bytes', 'None'],
    correctAnswer: 1,
    explanation: 'Quantum computers use qubits (quantum bits) for computation.',
    categoryId: 'computer',
    subCategoryId: 'ai-technology',
    level: 'hard'
  }

];