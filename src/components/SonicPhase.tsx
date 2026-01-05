import { useState } from 'react';
import { useAppState } from '../store';

export function SonicPhase() {
    const {
        genreBlend, setGenreBlend,
        anchorInstruments, setAnchorInstruments,
        moodKeywords, setMoodKeywords
    } = useAppState();

    const [newInstrument, setNewInstrument] = useState('');
    const [newMood, setNewMood] = useState('');

    const addInstrument = () => {
        if (newInstrument.trim() && anchorInstruments.length < 5) {
            setAnchorInstruments([...anchorInstruments, newInstrument.trim()]);
            setNewInstrument('');
        }
    };

    const removeInstrument = (idx: number) => {
        setAnchorInstruments(anchorInstruments.filter((_, i) => i !== idx));
    };

    const addMood = () => {
        if (newMood.trim() && moodKeywords.length < 7) {
            setMoodKeywords([...moodKeywords, newMood.trim()]);
            setNewMood('');
        }
    };

    const removeMood = (idx: number) => {
        setMoodKeywords(moodKeywords.filter((_, i) => i !== idx));
    };

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">3</span>
                <h2>Sonic Identity</h2>
            </div>
            <p className="phase-description">
                Lock this early. Vague sound = weak cohesion.
                <br />
                <strong>If every song could plausibly live in the <em>same room</em>, you're doing it right.</strong>
            </p>

            <div className="form-group">
                <label htmlFor="genre-blend">Primary Genre Blend (2–3 max)</label>
                <p className="field-hint">
                    Example: indie electronic + lo-fi hip-hop + folk textures
                </p>
                <input
                    id="genre-blend"
                    type="text"
                    className="input-field"
                    placeholder="e.g., cinematic dark-pop + chamber folk + ambient textures"
                    value={genreBlend}
                    onChange={(e) => setGenreBlend(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Anchor Instruments (3–5)</label>
                <p className="field-hint">
                    These recur across the album (even subtly). Ex: soft synth pad, distorted bass, live drums
                </p>
                <div className="tag-input-row">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Add instrument..."
                        value={newInstrument}
                        onChange={(e) => setNewInstrument(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addInstrument()}
                        disabled={anchorInstruments.length >= 5}
                    />
                    <button
                        className="btn-add"
                        onClick={addInstrument}
                        disabled={anchorInstruments.length >= 5}
                    >
                        +
                    </button>
                </div>
                <div className="tag-list">
                    {anchorInstruments.map((inst, idx) => (
                        <span key={idx} className="tag">
                            {inst}
                            <button className="tag-remove" onClick={() => removeInstrument(idx)}>×</button>
                        </span>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>Production Mood Keywords (5–7)</label>
                <p className="field-hint">
                    Ex: intimate, restrained, nocturnal, fractured, warm, unresolved
                </p>
                <div className="tag-input-row">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Add mood..."
                        value={newMood}
                        onChange={(e) => setNewMood(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addMood()}
                        disabled={moodKeywords.length >= 7}
                    />
                    <button
                        className="btn-add"
                        onClick={addMood}
                        disabled={moodKeywords.length >= 7}
                    >
                        +
                    </button>
                </div>
                <div className="tag-list">
                    {moodKeywords.map((mood, idx) => (
                        <span key={idx} className="tag mood-tag">
                            {mood}
                            <button className="tag-remove" onClick={() => removeMood(idx)}>×</button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
