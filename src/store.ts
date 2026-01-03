import { create } from 'zustand';

export type Phase = 'story' | 'tracks' | 'persona' | 'writing' | 'refinement';

interface AppState {
    currentPhase: Phase;
    setPhase: (phase: Phase) => void;

    // Album data
    albumTitle: string;
    setAlbumTitle: (title: string) => void;

    storyNarrative: string;
    setStoryNarrative: (narrative: string) => void;

    tracks: { id: number; title: string; lyrics: string }[];
    addTrack: (title: string) => void;
    updateTrackLyrics: (id: number, lyrics: string) => void;

    persona: { name: string; description: string };
    setPersona: (name: string, description: string) => void;
}

export const useAppState = create<AppState>((set) => ({
    currentPhase: 'story',
    setPhase: (phase) => set({ currentPhase: phase }),

    albumTitle: '',
    setAlbumTitle: (title) => set({ albumTitle: title }),

    storyNarrative: '',
    setStoryNarrative: (narrative) => set({ storyNarrative: narrative }),

    tracks: [],
    addTrack: (title) => set((state) => ({
        tracks: [...state.tracks, { id: Date.now(), title, lyrics: '' }]
    })),
    updateTrackLyrics: (id, lyrics) => set((state) => ({
        tracks: state.tracks.map(t => t.id === id ? { ...t, lyrics } : t)
    })),

    persona: { name: '', description: '' },
    setPersona: (name, description) => set({ persona: { name, description } }),
}));
