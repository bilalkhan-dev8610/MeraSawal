import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, MapPin, Lock, CheckCircle } from 'lucide-react';

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

interface CompleteProfileProps {
  mobile: string;
  onComplete: (userData: {
    name: string;
    email: string;
    mobile: string;
    city: string;
    state: string;
    password: string;
  }) => void;
}

export function CompleteProfile({ mobile, onComplete }: CompleteProfileProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // State validation
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onComplete({
      name: formData.name,
      email: formData.email,
      mobile: mobile,
      city: formData.city,
      state: formData.state,
      password: formData.password
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 flex items-center justify-center p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2 px-2">
              Complete Your Profile
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground px-2">
              Mobile <span className="text-primary font-semibold">+91 {mobile}</span> verified ✓
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.name ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all text-sm sm:text-base`}
                  autoFocus
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-destructive px-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.email ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all text-sm sm:text-base`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-destructive px-1">{errors.email}</p>}
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* State */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                  State *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => {
                    setFormData({ ...formData, state: e.target.value, city: '' });
                  }}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.state ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all appearance-none cursor-pointer text-sm sm:text-base`}
                >
                  <option value="">Select State</option>
                  {Object.keys(INDIAN_LOCATIONS).sort().map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-xs text-destructive px-1">{errors.state}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                  City *
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  disabled={!formData.state}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.city ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base`}
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
                {errors.city && <p className="mt-1 text-xs text-destructive px-1">{errors.city}</p>}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a password (min 6 chars)"
                  className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.password ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all text-sm sm:text-base`}
                />
              </div>
              {errors.password && <p className="mt-1 text-xs text-destructive px-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 px-1">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Re-enter your password"
                  className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-background border-2 ${
                    errors.confirmPassword ? 'border-destructive' : 'border-border'
                  } rounded-xl focus:border-primary focus:outline-none text-foreground transition-all text-sm sm:text-base`}
                />
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-destructive px-1">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-base sm:text-lg rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all mt-4 sm:mt-6"
            >
              Complete Registration
            </motion.button>
          </form>

          {/* Info */}
          <div className="mt-4 sm:mt-6 bg-primary/10 border border-primary/30 rounded-xl p-2.5 sm:p-3 text-xs text-muted-foreground">
            <p className="flex items-start gap-1.5 sm:gap-2">
              <span className="text-primary text-sm">ℹ️</span>
              <span>
                Your information is stored securely. Email can be verified later from your profile settings.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}