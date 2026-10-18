/**
 * Application scene and media types for Nivahh's 20th Birthday Experience.
 */

export type SceneId = 1 | 2 | 3 | 4 | 5 | 'detour' | 6 | 7;

export type VideoAssetKey = 'hello' | 'cute' | 'vitamin' | 'mine' | 'birthday';

export interface VideoAssetInfo {
  key: VideoAssetKey;
  filename: string;
  defaultPath: string;
  sceneNumber: 1 | 2 | 3 | 4 | 6;
  title: string;
  character: string;
  description: string;
}

export const VIDEO_MANIFEST: Record<VideoAssetKey, VideoAssetInfo> = {
  hello: {
    key: 'hello',
    filename: 'hello.mp4',
    defaultPath: '/videos/hello.mp4',
    sceneNumber: 1,
    title: 'Scene 1: Hello, Hello, Hello',
    character: 'White Teddy Bear',
    description: 'A cute white teddy bear greeting Nivahh with bows and gentle waves.',
  },
  cute: {
    key: 'cute',
    filename: 'cute.mp4',
    defaultPath: '/videos/cute.mp4',
    sceneNumber: 2,
    title: 'Scene 2: Suspiciously Cute',
    character: 'Pink Teddy Bear',
    description: 'The pink bear with a magnifying glass declaring Nivahh suspiciously cute.',
  },
  vitamin: {
    key: 'vitamin',
    filename: 'vitamin.mp4',
    defaultPath: '/videos/vitamin.mp4',
    sceneNumber: 3,
    title: 'Scene 3: Missing Vitamins',
    character: 'Pink Teddy Bear',
    description: 'The pink bear diagnosing a shortage of Vitamin ME with hearts and winks.',
  },
  mine: {
    key: 'mine',
    filename: 'mine.mp4',
    defaultPath: '/videos/mine.mp4',
    sceneNumber: 4,
    title: "Scene 4: The Panda's Line",
    character: 'Panda Bear with Lavender Bow',
    description: 'A charming panda reciting: line, nine, wine, and you are MINE!',
  },
  birthday: {
    key: 'birthday',
    filename: 'birthday.mp4',
    defaultPath: '/videos/birthday.mp4',
    sceneNumber: 6,
    title: 'Scene 6: The Birthday Reveal',
    character: 'Birthday Teddy Bear',
    description: 'Candle-blowing countdown followed by an adorable Happy Birthday serenade.',
  },
};

export const NO_MESSAGES: string[] = [
  'Aww, are you sure? 🥺',
  'The little bears prepared something just for you! 🧸',
  'Our official cuteness research says: reconsider! 💗',
  'Your surprise is waiting behind one little Yes! 🎁',
  'One last request from the bears… pretty please? 🥹',
];
