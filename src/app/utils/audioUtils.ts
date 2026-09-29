// Audio utility for baby girl voice sound effects

/**
 * CURRENT IMPLEMENTATION: Uses Web Speech Synthesis API (browser-based text-to-speech)
 * - Works out of the box without any audio files
 * - Automatically converts text to baby girl voice
 * - Cross-browser compatible (most modern browsers)
 * 
 * TO USE ACTUAL AUDIO FILES (For better quality and consistency):
 * 1. Record or download MP3 files with baby girl voice:
 *    - good-work.mp3: Baby girl saying "Good work!"
 *    - good-job.mp3: Baby girl saying "Good job!"
 *    - try-again.mp3: Baby girl saying "Try again!"
 * 
 * 2. Place audio files in /public/audio/ folder
 * 
 * 3. Uncomment the "Alternative" section at the bottom of this file
 *    and comment out the current implementation
 * 
 * RECOMMENDED SOURCES for baby girl voice audio:
 * - Record a child's voice (with parental permission)
 * - Use AI text-to-speech services: ElevenLabs, Play.ht, Google Cloud TTS
 * - Hire voice actors from Fiverr or Upwork
 */

const CORRECT_SOUNDS = [
  'good-work',
  'good-job'
];

const WRONG_SOUND = 'try-again';

// Using Web Speech API to generate baby girl voice
// Note: For production, replace these with actual audio files
export const playCorrectSound = () => {
  const randomSound = CORRECT_SOUNDS[Math.floor(Math.random() * CORRECT_SOUNDS.length)];
  
  const phrases = {
    'good-work': 'Good work!',
    'good-job': 'Good job!'
  };
  
  speak(phrases[randomSound as keyof typeof phrases], true);
};

export const playWrongSound = () => {
  speak('Wrong answer!', false);
};

const speak = (text: string, isCorrect: boolean) => {
  // Check if browser supports speech synthesis
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Configure voice to sound like a young girl
  utterance.pitch = 1.8; // Higher pitch for child-like voice
  utterance.rate = 0.9; // Slightly slower for clarity
  utterance.volume = 1.0;
  
  // Only use English voices
  const voices = window.speechSynthesis.getVoices();
  
  // Select English female voice only
  const selectedVoice = voices.find(voice => {
    const lang = voice.lang.toLowerCase();
    const name = voice.name.toLowerCase();
    
    // Only English voices (en-US, en-GB, etc.)
    return (
      (lang.includes('en-') || lang === 'en') &&
      (name.includes('female') || name.includes('samantha') || name.includes('zira'))
    );
  });
  
  // Fallback: try to find any English voice
  if (!selectedVoice) {
    const anyEnglishVoice = voices.find(voice => {
      const lang = voice.lang.toLowerCase();
      return lang.includes('en');
    });
    
    if (anyEnglishVoice) {
      utterance.voice = anyEnglishVoice;
    }
  } else {
    utterance.voice = selectedVoice;
  }
  
  // Always set language to English
  utterance.lang = 'en-US';

  window.speechSynthesis.speak(utterance);
};

// Preload voices (some browsers require this)
export const initializeVoices = () => {
  if ('speechSynthesis' in window) {
    // Load voices
    window.speechSynthesis.getVoices();
    
    // Some browsers require this event
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }
};

// Alternative: Play actual audio files (for better quality and consistency)
// Uncomment this version if you have audio files hosted
/*
const audioCache: { [key: string]: HTMLAudioElement } = {};

const AUDIO_URLS = {
  'good-work': '/audio/good-work.mp3',
  'good-job': '/audio/good-job.mp3',
  'try-again': '/audio/try-again.mp3'
};

export const playCorrectSound = () => {
  const randomSound = CORRECT_SOUNDS[Math.floor(Math.random() * CORRECT_SOUNDS.length)];
  playAudio(randomSound);
};

export const playWrongSound = () => {
  playAudio(WRONG_SOUND);
};

const playAudio = (soundKey: string) => {
  // Create or reuse audio element
  if (!audioCache[soundKey]) {
    audioCache[soundKey] = new Audio(AUDIO_URLS[soundKey]);
    audioCache[soundKey].volume = 0.8;
  }
  
  const audio = audioCache[soundKey];
  audio.currentTime = 0; // Reset to start
  audio.play().catch(err => console.warn('Audio play failed:', err));
};

export const initializeVoices = () => {
  // Preload all audio files
  Object.keys(AUDIO_URLS).forEach(key => {
    if (!audioCache[key]) {
      audioCache[key] = new Audio(AUDIO_URLS[key]);
      audioCache[key].load();
    }
  });
};
*/