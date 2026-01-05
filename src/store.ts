import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Phase =
    | 'core'
    | 'persona'
    | 'sonic'
    | 'arc'
    | 'songs'
    | 'constraints'
    | 'cohesion'
    | 'tags'
    | 'mantra';

export type CoreTension =
    | 'identity-vs-expectation'
    | 'power-vs-responsibility'
    | 'intimacy-vs-distance'
    | 'control-vs-surrender'
    | 'memory-vs-truth'
    | 'creation-vs-destruction';

export interface Song {
    id: number;
    title: string;
    act: 1 | 2 | 3;
    role: string;
    emotionalSnapshot: string;
    pov: 'first-present' | 'first-past' | 'second' | 'third' | '';
    imageryAnchors: string[];
    chorusCore: string;
    lyrics: string;
    styleTags: string;
}

export interface AlbumState {
    currentPhase: Phase;
    setPhase: (phase: Phase) => void;

    // 1. Album Core
    albumName: string;
    setAlbumName: (name: string) => void;
    albumThesis: string;
    setAlbumThesis: (thesis: string) => void;
    coreTension: CoreTension | '';
    setCoreTension: (tension: CoreTension | '') => void;

    // 2. Album Persona
    personaType: string;
    setPersonaType: (type: string) => void;
    personaWants: string;
    setPersonaWants: (wants: string) => void;
    personaFears: string;
    setPersonaFears: (fears: string) => void;
    personaLie: string;
    setPersonaLie: (lie: string) => void;

    // 3. Sonic Identity
    genreBlend: string;
    setGenreBlend: (blend: string) => void;
    anchorInstruments: string[];
    setAnchorInstruments: (instruments: string[]) => void;
    moodKeywords: string[];
    setMoodKeywords: (keywords: string[]) => void;

    // 4. Track Arc
    actOneNotes: string;
    setActOneNotes: (notes: string) => void;
    actTwoNotes: string;
    setActTwoNotes: (notes: string) => void;
    actThreeNotes: string;
    setActThreeNotes: (notes: string) => void;

    // 5. Songs
    songs: Song[];
    addSong: (song: Omit<Song, 'id'>) => void;
    updateSong: (id: number, updates: Partial<Song>) => void;
    removeSong: (id: number) => void;

    // 6. Constraints (stored as reminders)
    customDos: string[];
    setCustomDos: (dos: string[]) => void;
    customAvoids: string[];
    setCustomAvoids: (avoids: string[]) => void;

    // 7. Cohesion answers
    cohesionTrack5Reason: string;
    setCohesionTrack5Reason: (reason: string) => void;
    cohesionFinalTrackFeeling: string;
    setCohesionFinalTrackFeeling: (feeling: string) => void;
    cohesionRecurringMotifs: string;
    setCohesionRecurringMotifs: (motifs: string) => void;

    // 8. Global style tags
    globalStyleTags: string;
    setGlobalStyleTags: (tags: string) => void;

    // 9. Album mantra
    albumMantra: string;
    setAlbumMantra: (mantra: string) => void;
}

export const useAppState = create<AlbumState>()(
    persist(
        (set) => ({
            currentPhase: 'core',
            setPhase: (phase) => set({ currentPhase: phase }),

            // 1. Album Core
            albumName: '',
            setAlbumName: (albumName) => set({ albumName }),
            albumThesis: '',
            setAlbumThesis: (albumThesis) => set({ albumThesis }),
            coreTension: '',
            setCoreTension: (coreTension) => set({ coreTension }),

            // 2. Persona
            personaType: '',
            setPersonaType: (personaType) => set({ personaType }),
            personaWants: '',
            setPersonaWants: (personaWants) => set({ personaWants }),
            personaFears: '',
            setPersonaFears: (personaFears) => set({ personaFears }),
            personaLie: '',
            setPersonaLie: (personaLie) => set({ personaLie }),

            // 3. Sonic Identity
            genreBlend: '',
            setGenreBlend: (genreBlend) => set({ genreBlend }),
            anchorInstruments: [],
            setAnchorInstruments: (anchorInstruments) => set({ anchorInstruments }),
            moodKeywords: [],
            setMoodKeywords: (moodKeywords) => set({ moodKeywords }),

            // 4. Track Arc
            actOneNotes: '',
            setActOneNotes: (actOneNotes) => set({ actOneNotes }),
            actTwoNotes: '',
            setActTwoNotes: (actTwoNotes) => set({ actTwoNotes }),
            actThreeNotes: '',
            setActThreeNotes: (actThreeNotes) => set({ actThreeNotes }),

            // 5. Songs
            songs: [],
            addSong: (song) => set((state) => ({
                songs: [...state.songs, { ...song, id: Date.now() }]
            })),
            updateSong: (id, updates) => set((state) => ({
                songs: state.songs.map(s => s.id === id ? { ...s, ...updates } : s)
            })),
            removeSong: (id) => set((state) => ({
                songs: state.songs.filter(s => s.id !== id)
            })),

            // 6. Constraints
            customDos: [],
            setCustomDos: (customDos) => set({ customDos }),
            customAvoids: [],
            setCustomAvoids: (customAvoids) => set({ customAvoids }),

            // 7. Cohesion
            cohesionTrack5Reason: '',
            setCohesionTrack5Reason: (cohesionTrack5Reason) => set({ cohesionTrack5Reason }),
            cohesionFinalTrackFeeling: '',
            setCohesionFinalTrackFeeling: (cohesionFinalTrackFeeling) => set({ cohesionFinalTrackFeeling }),
            cohesionRecurringMotifs: '',
            setCohesionRecurringMotifs: (cohesionRecurringMotifs) => set({ cohesionRecurringMotifs }),

            // 8. Tags
            globalStyleTags: '',
            setGlobalStyleTags: (globalStyleTags) => set({ globalStyleTags }),

            // 9. Mantra
            albumMantra: '',
            setAlbumMantra: (albumMantra) => set({ albumMantra }),
        }),
        {
            name: 'album-forge-storage',
        }
    )
);
