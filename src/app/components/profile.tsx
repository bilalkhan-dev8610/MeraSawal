import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, MapPin, Mail, Phone, ArrowLeft, Save, Edit, Camera, X, Shield, CheckCircle2, AlertCircle } from 'lucide-react';

// Indian States and Cities Data
const INDIAN_LOCATIONS = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Rajahmundry', 'Kakinada', 'Kadapa', 'Anantapur', 'Vizianagaram', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam', 'Adoni', 'Tenali', 'Chittoor', 'Hindupur', 'Proddatur', 'Bhimavaram', 'Madanapalle', 'Guntakal', 'Dharmavaram', 'Gudivada', 'Srikakulam', 'Narasaraopet', 'Rajampet', 'Tadpatri', 'Chilakaluripet', 'Ponnur', 'Sattenapalle'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Namsai', 'Tezu', 'Tawang', 'Bomdila', 'Seppa', 'Ziro', 'Along', 'Khonsa', 'Changlang', 'Daporijo', 'Anini', 'Roing', 'Yingkiong'],
  'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Karimganj', 'Dhubri', 'Goalpara', 'Barpeta', 'Sivasagar', 'Nalbari', 'Diphu', 'North Lakhimpur', 'Golaghat', 'Haflong', 'Hojai', 'Mangaldoi', 'Dhemaji', 'Kokrajhar', 'Hailakandi', 'Morigaon', 'Sibsagar', 'Titabar', 'Mariani', 'Sonari'],
  'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger', 'Chhapra', 'Danapur', 'Saharsa', 'Sasaram', 'Hajipur', 'Dehri', 'Siwan', 'Motihari', 'Nawada', 'Bagaha', 'Buxar', 'Kishanganj', 'Sitamarhi', 'Jamalpur', 'Jehanabad', 'Aurangabad', 'Bettiah', 'Samastipur', 'Araria', 'Madhubani', 'Gopalganj'],
  'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Mahasamund', 'Dhamtari', 'Chirmiri', 'Bhatapara', 'Dalli-Rajhara', 'Naila Janjgir', 'Tilda Newra', 'Mungeli', 'Manendragarh', 'Sakti'],
  'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanquelim', 'Cuncolim', 'Quepem', 'Canacona', 'Pernem'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Gandhidham', 'Anand', 'Navsari', 'Morbi', 'Nadiad', 'Surendranagar', 'Bharuch', 'Mehsana', 'Bhuj', 'Porbandar', 'Palanpur', 'Valsad', 'Vapi', 'Gondal', 'Veraval', 'Godhra', 'Patan', 'Kalol', 'Dahod', 'Botad', 'Amreli', 'Deesa', 'Jetpur'],
  'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula', 'Bhiwani', 'Sirsa', 'Bahadurgarh', 'Jind', 'Thanesar', 'Kaithal', 'Rewari', 'Palwal', 'Hansi', 'Narnaul', 'Fatehabad', 'Gohana', 'Tohana', 'Narwana', 'Mandi Dabwali', 'Charkhi Dadri', 'Shahbad', 'Pehowa', 'Samalkha', 'Pinjore', 'Ladwa', 'Sohna', 'Safidon', 'Taraori', 'Mahendragarh', 'Ratia', 'Rania', 'Sarsod', 'Nuh', 'Tauru', 'Firozpur Jhirka', 'Badakli', 'Punhana', 'Pinangwan', 'Nagina', 'Hathin', 'Dhulawat'],
  'Himachal Pradesh': ['Shimla', 'Mandi', 'Solan', 'Nahan', 'Dharamshala', 'Kullu', 'Hamirpur', 'Una', 'Bilaspur', 'Chamba', 'Palampur', 'Sundernagar', 'Kangra', 'Baddi', 'Nalagarh', 'Paonta Sahib', 'Parwanoo', 'Manali', 'Dalhousie'],
  'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Chirkunda', 'Phusro', 'Adityapur', 'Saunda', 'Sahibganj', 'Madhupur', 'Chaibasa', 'Chatra', 'Gumla', 'Dumka', 'Godda', 'Koderma', 'Mihijam', 'Bundu', 'Hussainabad'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Dharwad', 'Gulbarga', 'Bellary', 'Bijapur', 'Shimoga', 'Tumkur', 'Raichur', 'Bidar', 'Hospet', 'Hassan', 'Gadag-Betageri', 'Udupi', 'Davangere', 'Chickmagalur', 'Karwar', 'Ranebennuru', 'Bhadravati', 'Chitradurga', 'Kolar', 'Mandya', 'Chikkaballapur', 'Bagalkot', 'Robertsonpet'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Kottayam', 'Alappuzha', 'Kannur', 'Malappuram', 'Kasaragod', 'Pathanamthitta', 'Idukki', 'Wayanad', 'Ernakulam', 'Thalassery', 'Ponnani', 'Vatakara', 'Kanhangad', 'Payyanur', 'Koyilandy', 'Parappanangadi', 'Manjeri', 'Tirur', 'Perinthalmanna', 'Chalakudy', 'Paravur', 'Cherthala', 'Changanassery', 'Punalur'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Dewas', 'Satna', 'Rewa', 'Murwara', 'Singrauli', 'Burhanpur', 'Khandwa', 'Morena', 'Bhind', 'Chhindwara', 'Guna', 'Shivpuri', 'Vidisha', 'Chhatarpur', 'Damoh', 'Mandsaur', 'Khargone', 'Neemuch', 'Pithampur', 'Hoshangabad', 'Itarsi', 'Sehore', 'Betul', 'Seoni', 'Datia', 'Nagda'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati', 'Navi Mumbai', 'Sangli', 'Malegaon', 'Jalgaon', 'Akola', 'Latur', 'Dhule', 'Ahmednagar', 'Chandrapur', 'Parbhani', 'Ichalkaranji', 'Jalna', 'Ambarnath', 'Bhiwandi', 'Panvel', 'Mira-Bhayandar', 'Kalyan-Dombivli', 'Vasai-Virar', 'Nanded', 'Satara', 'Wardha', 'Yavatmal', 'Gondia', 'Beed', 'Washim', 'Hinganghat', 'Palghar', 'Achalpur', 'Osmanabad', 'Nandurbar', 'Ratnagiri', 'Sindhudurg'],
  'Manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Chandel', 'Jiribam', 'Kakching', 'Moreh'],
  'Meghalaya': ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Nongpoh', 'Williamnagar', 'Baghmara', 'Resubelpara', 'Mairang', 'Cherrapunji'],
  'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib', 'Lawngtlai', 'Saiha', 'Mamit'],
  'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Kiphire', 'Longleng', 'Peren'],
  'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda', 'Jeypore', 'Bargarh', 'Rayagada', 'Bhawanipatna', 'Angul', 'Balangir', 'Barbil', 'Kendujhar', 'Paradip', 'Jajpur', 'Phulbani', 'Dhenkanal', 'Sunabeda', 'Koraput'],
  'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Chandigarh', 'Hoshiarpur', 'Pathankot', 'Moga', 'Abohar', 'Malerkotla', 'Khanna', 'Phagwara', 'Muktsar', 'Barnala', 'Rajpura', 'Firozpur', 'Kapurthala', 'Zirakpur', 'Kot Kapura', 'Faridkot', 'Sunam', 'Jagraon', 'Mansa', 'Nawanshahr', 'Gurdaspur', 'Morinda', 'Fazilka', 'Sangrur', 'Tarn Taran'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar', 'Pali', 'Sri Ganganagar', 'Tonk', 'Beawar', 'Kishangarh', 'Hanumangarh', 'Bundi', 'Churu', 'Jhunjhunu', 'Sawai Madhopur', 'Chittorgarh', 'Nagaur', 'Barmer', 'Banswara', 'Dungarpur', 'Jhalawar', 'Dausa', 'Dholpur', 'Karauli', 'Pratapgarh', 'Rajsamand', 'Sirohi'],
  'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Rangpo', 'Singtam', 'Jorethang', 'Naya Bazar', 'Pakyong'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore', 'Tiruppur', 'Erode', 'Thoothukudi', 'Thanjavur', 'Dindigul', 'Nagercoil', 'Kancheepuram', 'Karur', 'Rajapalayam', 'Kumbakonam', 'Sivakasi', 'Virudhunagar', 'Cuddalore', 'Pollachi', 'Ambur', 'Neyveli', 'Pudukkottai', 'Ooty', 'Hosur', 'Palani', 'Vellore', 'Dharmapuri', 'Krishnagiri', 'Arakkonam', 'Tiruvannamalai', 'Ariyalur', 'Namakkal', 'Perambalur', 'Villupuram', 'Nagapattinam'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet', 'Siddipet', 'Miryalaguda', 'Jagtial', 'Mancherial', 'Nirmal', 'Kamareddy', 'Sircilla', 'Palwancha', 'Wanaparthy', 'Kothagudem', 'Bodhan', 'Sangareddy', 'Metpally', 'Zahirabad', 'MedChal', 'Jangaon', 'Bhongir', 'Vikarabad'],
  'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar', 'Belonia', 'Khowai', 'Ambassa', 'Ranir Bazar', 'Sonamura', 'Sabroom', 'Amarpur'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Allahabad', 'Noida', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Rampur', 'Shahjahanpur', 'Farrukhabad', 'Ayodhya', 'Mau', 'Hapur', 'Etawah', 'Mirzapur', 'Bulandshahr', 'Sambhal', 'Amroha', 'Hardoi', 'Fatehpur', 'Raebareli', 'Orai', 'Sitapur', 'Bahraich', 'Modinagar', 'Unnao', 'Jaunpur', 'Lakhimpur', 'Hathras', 'Banda', 'Pilibhit', 'Barabanki', 'Khurja', 'Gonda', 'Mainpuri', 'Lalitpur', 'Etah', 'Deoria', 'Budaun', 'Basti', 'Chandausi', 'Akbarpur', 'Ballia', 'Tundla', 'Baheri', 'Vrindavan', 'Shikohabad', 'Najibabad', 'Nagina', 'Mughalsarai'],
  'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Nainital', 'Kashipur', 'Rishikesh', 'Pithoragarh', 'Ramnagar', 'Kotdwar', 'Manglaur', 'Almora', 'Tehri', 'Champawat', 'Pauri', 'Bageshwar', 'Rudraprayag', 'Srinagar', 'Jaspur', 'Sitarganj', 'Tanakpur', 'Bazpur'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Darjeeling', 'Bardhaman', 'Malda', 'Baharampur', 'Habra', 'Kharagpur', 'Shantipur', 'Dankuni', 'Dhulian', 'Ranaghat', 'Haldia', 'Raiganj', 'Krishnanagar', 'Nabadwip', 'Medinipur', 'Jalpaiguri', 'Balurghat', 'Basirhat', 'Bankura', 'Chakdaha', 'Alipurduar', 'Purulia', 'Jangipur', 'Bolpur', 'Bangaon', 'CoochBehar'],
  'Andaman and Nicobar Islands': ['Port Blair', 'Diglipur', 'Rangat', 'Car Nicobar', 'Nancowry'],
  'Chandigarh': ['Chandigarh'],
  'Dadra and Nagar Haveli': ['Silvassa', 'Amli', 'Naroli', 'Rakholi', 'Samarvarni', 'Khanvel'],
  'Daman and Diu': ['Daman', 'Diu', 'Moti Daman', 'Nani Daman'],
  'Delhi': ['New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'North East Delhi', 'North West Delhi', 'South East Delhi', 'South West Delhi', 'Shahdara'],
  'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Pulwama', 'Sopore', 'Kathua', 'Rajouri', 'Punch', 'Kupwara', 'Bandipore', 'Ganderbal', 'Samba', 'Reasi', 'Kishtwar', 'Doda', 'Ramban'],
  'Ladakh': ['Leh', 'Kargil', 'Nubra', 'Zanskar', 'Diskit'],
  'Lakshadweep': ['Kavaratti', 'Agatti', 'Amini', 'Andrott', 'Kalpeni', 'Kadmat', 'Minicoy'],
  'Puducherry': ['Puducherry', 'Karaikal', 'Mahe', 'Yanam']
};

interface ProfileProps {
  playerName: string;
  playerCity: string;
  playerState: string;
  playerEmail?: string;
  playerMobile?: string;
  playerPhoto?: string;
  onBack: () => void;
  onSave: (data: {
    name: string;
    city: string;
    state: string;
    email?: string;
    mobile?: string;
    photo?: string;
  }) => void;
}

export function Profile({
  playerName,
  playerCity,
  playerState,
  playerEmail = '',
  playerMobile = '',
  playerPhoto = '',
  onBack,
  onSave
}: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: playerName,
    city: playerCity,
    state: playerState,
    email: playerEmail,
    mobile: playerMobile,
    photo: playerPhoto
  });

  // Email Verification States
  const [emailVerified, setEmailVerified] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Load email verification status from localStorage
  useEffect(() => {
    const verifiedEmails = JSON.parse(localStorage.getItem('verifiedEmails') || '{}');
    if (formData.email && verifiedEmails[formData.email]) {
      setEmailVerified(true);
    }
  }, [formData.email]);

  // Timer countdown for resend OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Generate 6-digit OTP
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    console.log('🔐 Generated OTP:', otp); // Mock - in production this would be sent via email
    return otp;
  };

  // Send OTP
  const handleSendOTP = () => {
    if (!formData.email || !formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    const otp = generateOTP();
    setShowOTPModal(true);
    setResendTimer(60);
    setError('');
    setOtpValue(['', '', '', '', '', '']);
    
    // Mock email sending - in production, call your email service API
    alert(`📧 OTP sent to ${formData.email}\n\nFor testing: ${otp}`);
  };

  // Resend OTP
  const handleResendOTP = () => {
    const otp = generateOTP();
    setResendTimer(60);
    setOtpValue(['', '', '', '', '', '']);
    setError('');
    alert(`📧 New OTP sent to ${formData.email}\n\nFor testing: ${otp}`);
  };

  // Verify OTP
  const handleVerifyOTP = () => {
    const enteredOTP = otpValue.join('');
    
    if (enteredOTP.length !== 6) {
      setError('Please enter complete 6-digit OTP');
      return;
    }

    if (enteredOTP === generatedOTP) {
      // Success - mark email as verified
      const verifiedEmails = JSON.parse(localStorage.getItem('verifiedEmails') || '{}');
      verifiedEmails[formData.email] = true;
      localStorage.setItem('verifiedEmails', JSON.stringify(verifiedEmails));
      
      setEmailVerified(true);
      setShowOTPModal(false);
      setError('');
      setSuccessMessage('Email verified successfully!');
      setShowSuccessModal(true);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  // Handle OTP input change
  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    if (value && !/^\d$/.test(value)) return; // Only allow numbers

    const newOTP = [...otpValue];
    newOTP[index] = value;
    setOtpValue(newOTP);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle OTP input backspace
  const handleOTPKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Photo size should be less than 2MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setFormData({ ...formData, photo: '' });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      key="profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto px-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="px-3 sm:px-4 py-2 bg-card border-2 border-border hover:border-primary rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </motion.button>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Profile Settings</h2>

        <div className="w-[60px] sm:w-[80px]"></div>
      </div>

      {/* Profile Card */}
      <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-xl">
        {/* Avatar Section */}
        <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 p-6 sm:p-8 text-center relative overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          {/* Avatar */}
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 group">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-full h-full rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center text-3xl sm:text-4xl font-bold text-primary-foreground shadow-2xl overflow-hidden relative"
            >
              {formData.photo ? (
                <>
                  <img
                    src={formData.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  {isEditing && (
                    <button
                      onClick={removePhoto}
                      className="absolute top-0 right-0 bg-destructive/90 hover:bg-destructive text-destructive-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove Photo"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </>
              ) : (
                getInitials(formData.name)
              )}
            </motion.div>

            {/* Upload Button */}
            {isEditing && (
              <label
                htmlFor="photo-upload"
                className="absolute bottom-0 right-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 cursor-pointer shadow-lg transition-all opacity-0 group-hover:opacity-100"
                title="Upload Photo"
              >
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-foreground mb-1">
            {formData.name}
          </h3>
          <p className="relative z-10 text-sm text-muted-foreground">
            Quiz Master Member
          </p>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
          {/* Personal Information */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h4>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="px-3 sm:px-4 py-2 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2 text-sm"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </>
                )}
              </motion.button>
            </div>
            
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none text-foreground disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center justify-between">
                  <span>Email Address</span>
                  {emailVerified && (
                    <span className="flex items-center gap-1 text-xs text-green-500 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                  {!emailVerified && formData.email && (
                    <span className="flex items-center gap-1 text-xs text-yellow-500 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Not Verified
                    </span>
                  )}
                </label>
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setEmailVerified(false); // Reset verification when email changes
                      }}
                      disabled={!isEditing}
                      placeholder="your.email@example.com"
                      className="w-full pl-11 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none text-foreground disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base transition-all"
                    />
                  </div>
                  
                  {/* Verify Email Button - Only show when editing and email not verified */}
                  {formData.email && !emailVerified && (
                    <motion.button
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={handleSendOTP}
                      disabled={!isEditing}
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Shield className="w-4 h-4" />
                      Verify Email Address
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    disabled={!isEditing}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-11 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none text-foreground disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Location
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* State */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  State *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => {
                    setFormData({ ...formData, state: e.target.value, city: '' });
                  }}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none text-foreground disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select State</option>
                  {Object.keys(INDIAN_LOCATIONS).sort().map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  disabled={!isEditing || !formData.state}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none text-foreground disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base transition-all appearance-none cursor-pointer"
                >
                  <option value="">
                    {!formData.state ? 'Select State First' : 'Select City'}
                  </option>
                  {formData.state &&
                    INDIAN_LOCATIONS[formData.state as keyof typeof INDIAN_LOCATIONS]?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          {/* Info Message */}
          {isEditing && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-sm text-foreground"
            >
              <p className="flex items-start gap-2">
                <span className="text-primary">ℹ️</span>
                <span>Your information is saved locally and will be used for leaderboard rankings.</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* OTP Modal */}
      <AnimatePresence>
        {showOTPModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowOTPModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-2 border-primary/50 rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl shadow-primary/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Verify Email</h3>
                    <p className="text-xs text-muted-foreground">Enter the 6-digit code</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowOTPModal(false)}
                  className="w-8 h-8 rounded-full bg-background hover:bg-destructive/20 flex items-center justify-center transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Email Display */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-3 mb-6">
                <p className="text-sm text-muted-foreground text-center">
                  OTP sent to
                </p>
                <p className="text-sm font-bold text-foreground text-center truncate">
                  {formData.email}
                </p>
              </div>

              {/* OTP Input Fields */}
              <div className="flex justify-center gap-2 mb-6">
                {otpValue.map((value, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    value={value}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    maxLength={1}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-bold bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-destructive/10 border border-destructive/30 rounded-xl p-3 mb-4 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{error}</p>
                </motion.div>
              )}

              {/* Verify Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVerifyOTP}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Verify OTP
              </motion.button>

              {/* Resend OTP */}
              <div className="mt-4 text-center">
                {resendTimer > 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Resend OTP in <span className="font-bold text-primary">{resendTimer}s</span>
                  </p>
                ) : (
                  <button
                    onClick={handleResendOTP}
                    className="text-sm text-primary hover:text-primary/80 font-semibold transition-all"
                  >
                    Didn't receive code? Resend OTP
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-card via-card/95 to-primary/5 border-2 border-primary/40 rounded-3xl w-full max-w-md shadow-2xl shadow-primary/20 overflow-hidden backdrop-blur-xl"
            >
              {/* Animated Success Icon */}
              <div className="px-6 py-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.2 
                  }}
                  className="relative w-20 h-20 mx-auto mb-6"
                >
                  {/* Pulsing Rings */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 blur-xl"
                  />
                  
                  {/* Main Icon Container */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/50">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: 'spring', 
                        delay: 0.3,
                        stiffness: 200 
                      }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Success Message */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-foreground mb-2"
                >
                  Success! 🎉
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground text-sm"
                >
                  {successMessage}
                </motion.p>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}