/**
 * Built-in Web Audio & Speech Synthesizer for Nivahh's Birthday Experience.
 * Provides authentic cute audio and voice acting directly in the browser with zero external files.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Speak dialogue using cute high-pitch voice
  public speak(text: string, onEnd?: () => void) {
    if (this.isMuted || typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.65; // Cute playful high pitch
      utterance.rate = 1.05;
      utterance.volume = 0.95;

      // Select female or sweet sounding voice if available
      const voices = window.speechSynthesis.getVoices();
      const cuteVoice = voices.find(v => 
        v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Karen') || v.name.includes('Zira') || v.name.includes('Google US English'))
      ) || voices.find(v => v.lang.startsWith('en'));

      if (cuteVoice) {
        utterance.voice = cuteVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis fallback
    }
  }

  // Play a cheerful chime note
  public playChime(freq = 523.25, duration = 0.35, type: OscillatorType = 'sine') {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // ignore audio context restrictions
    }
  }

  // Play candle blow wind puff
  public playCandlePuff() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.4);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch {
      // ignore
    }
  }

  // Play Happy Birthday tune snippet
  public playHappyBirthdayMelody() {
    if (this.isMuted) return;
    const notes = [
      { f: 261.63, d: 0.25 }, // C4
      { f: 261.63, d: 0.25 }, // C4
      { f: 293.66, d: 0.5 },  // D4
      { f: 261.63, d: 0.5 },  // C4
      { f: 349.23, d: 0.5 },  // F4
      { f: 329.63, d: 1.0 },  // E4
    ];

    let delay = 0;
    notes.forEach(n => {
      setTimeout(() => {
        this.playChime(n.f, n.d, 'triangle');
      }, delay * 1000);
      delay += n.d;
    });
  }
}

export const soundEngine = new SoundEngine();
