
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TextToSpeechProps {
  isSpeechActive: boolean;
  toggleSpeech: () => void;
  isSeniorMode: boolean;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ 
  isSpeechActive, 
  toggleSpeech, 
  isSeniorMode 
}) => {
  const [speechSynth, setSpeechSynth] = useState<SpeechSynthesis | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynth(window.speechSynthesis);
      
      // Initialize voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };
      
      // Load voices immediately if available
      loadVoices();
      
      // Chrome loads voices asynchronously
      window.speechSynthesis.onvoiceschanged = loadVoices;
      
      // Cleanup
      return () => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, []);

  // Effect to handle activation/deactivation of speech
  useEffect(() => {
    if (!speechSynth) return;
    
    if (isSpeechActive) {
      // Set up the event listener for text selection when active
      document.addEventListener('mouseup', handleTextSelection);
    } else {
      // Cancel any ongoing speech and remove the listener when inactive
      speechSynth.cancel();
      document.removeEventListener('mouseup', handleTextSelection);
    }
    
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, [isSpeechActive, speechSynth]);

  const handleTextSelection = () => {
    if (!speechSynth || !isSpeechActive) return;
    
    // Get selected text
    const selectedText = window.getSelection()?.toString();
    
    if (selectedText && selectedText.trim().length > 0) {
      // Cancel any ongoing speech
      speechSynth.cancel();
      
      // Create utterance
      const utterance = new SpeechSynthesisUtterance(selectedText);
      
      // Try to find a Filipino voice, otherwise default to the first available
      const preferredVoice = voices.find(voice => 
        voice.lang.includes('fil') || voice.lang.includes('tl')
      ) || voices.find(voice => 
        voice.lang.includes('en-US') || voice.lang.includes('en-GB')
      );
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      
      // Adjust speech rate for senior mode
      utterance.rate = isSeniorMode ? 0.9 : 1;
      
      // Speak the text
      speechSynth.speak(utterance);
    }
  };

  return (
    <div className="relative inline-flex">
      <Button 
        onClick={toggleSpeech}
        variant="outline"
        size="sm"
        className={`flex items-center space-x-1 font-medium ${
          isSpeechActive 
            ? 'bg-gov-green text-white border-gov-green hover:bg-gov-green-800'
            : 'text-gov-green border-gov-green hover:bg-gov-green-50'
        }`}
        title={isSpeechActive ? "Disable text-to-speech" : "Enable text-to-speech"}
      >
        {isSpeechActive ? (
          <>
            <Volume2 size={isSeniorMode ? 24 : 18} />
            <span className="hidden md:inline">Text-to-Speech On</span>
          </>
        ) : (
          <>
            <VolumeX size={isSeniorMode ? 24 : 18} />
            <span className="hidden md:inline">Text-to-Speech Off</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default TextToSpeech;
