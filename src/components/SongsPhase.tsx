import { useState } from 'react';
import { useAppState, Song } from '../store';

const povOptions = [
    { value: 'first-present', label: 'First person present (immediate, raw)' },
    { value: 'first-past', label: 'First person past (reflective, wounded)' },
    { value: 'second', label: 'Second person (accusatory/intimate)' },
    { value: 'third', label: 'Third person (mythic/distant)' },
] as const;

export function SongsPhase() {
    const { songs, addSong, updateSong, removeSong } = useAppState();
    const [expandedSong, setExpandedSong] = useState<number | null>(null);
    const [newSongTitle, setNewSongTitle] = useState('');
    const [newSongAct, setNewSongAct] = useState<1 | 2 | 3>(1);

    const handleAddSong = () => {
        if (newSongTitle.trim()) {
            addSong({
                title: newSongTitle.trim(),
                act: newSongAct,
                role: '',
                emotionalSnapshot: '',
                pov: '',
                imageryAnchors: [],
                chorusCore: '',
                lyrics: '',
                styleTags: '',
            });
            setNewSongTitle('');
        }
    };

    const toggleExpand = (id: number) => {
        setExpandedSong(expandedSong === id ? null : id);
    };

    const songsByAct = (act: 1 | 2 | 3) => songs.filter(s => s.act === act);

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">5</span>
                <h2>Individual Songs</h2>
            </div>
            <p className="phase-description">
                Use this template for every song. If you can't answer "what job does this song do?" — it probably doesn't belong.
            </p>

            <div className="add-song-row">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Song title..."
                    value={newSongTitle}
                    onChange={(e) => setNewSongTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddSong()}
                />
                <select
                    className="select-field"
                    value={newSongAct}
                    onChange={(e) => setNewSongAct(Number(e.target.value) as 1 | 2 | 3)}
                >
                    <option value={1}>Act I</option>
                    <option value={2}>Act II</option>
                    <option value={3}>Act III</option>
                </select>
                <button className="btn-primary" onClick={handleAddSong}>Add Song</button>
            </div>

            {[1, 2, 3].map((act) => (
                <div key={act} className={`song-act-section act-${act}`}>
                    <h3 className="act-title">
                        Act {act === 1 ? 'I — Arrival' : act === 2 ? 'II — Fracture' : 'III — Reckoning'}
                    </h3>
                    {songsByAct(act as 1 | 2 | 3).length === 0 ? (
                        <p className="empty-state">No songs in this act yet.</p>
                    ) : (
                        songsByAct(act as 1 | 2 | 3).map((song) => (
                            <SongCard
                                key={song.id}
                                song={song}
                                expanded={expandedSong === song.id}
                                onToggle={() => toggleExpand(song.id)}
                                onUpdate={(updates) => updateSong(song.id, updates)}
                                onRemove={() => removeSong(song.id)}
                            />
                        ))
                    )}
                </div>
            ))}
        </div>
    );
}

function SongCard({
    song,
    expanded,
    onToggle,
    onUpdate,
    onRemove
}: {
    song: Song;
    expanded: boolean;
    onToggle: () => void;
    onUpdate: (updates: Partial<Song>) => void;
    onRemove: () => void;
}) {
    return (
        <div className={`song-card ${expanded ? 'expanded' : ''}`}>
            <div className="song-card-header" onClick={onToggle}>
                <span className="song-title">{song.title}</span>
                <span className="song-expand-icon">{expanded ? '▼' : '▶'}</span>
            </div>

            {expanded && (
                <div className="song-card-body">
                    <div className="form-group">
                        <label>Song Role in Album</label>
                        <p className="field-hint">What job does this song do? (Introduce desire? Complicate it? Break something? Linger in aftermath?)</p>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="e.g., This song complicates the persona's self-image..."
                            value={song.role}
                            onChange={(e) => onUpdate({ role: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Emotional Snapshot</label>
                        <p className="field-hint">"This song exists at the moment when __________."</p>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="e.g., ...the persona realizes the apology will never come"
                            value={song.emotionalSnapshot}
                            onChange={(e) => onUpdate({ emotionalSnapshot: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Lyrical POV</label>
                        <p className="field-hint">Pick ONE and stick to it. POV drift is a common problem.</p>
                        <div className="pov-options">
                            {povOptions.map((opt) => (
                                <label key={opt.value} className="radio-label">
                                    <input
                                        type="radio"
                                        name={`pov-${song.id}`}
                                        checked={song.pov === opt.value}
                                        onChange={() => onUpdate({ pov: opt.value })}
                                    />
                                    {opt.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Chorus Core</label>
                        <p className="field-hint">
                            Your strongest choruses are emotionally <em>simpler</em> than verses.
                            <br />
                            <strong>Test: Could someone scream this in a car at night?</strong>
                        </p>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="The emotional heart of the chorus..."
                            value={song.chorusCore}
                            onChange={(e) => onUpdate({ chorusCore: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Style Tags for this song</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="comma-separated, production-aware tags..."
                            value={song.styleTags}
                            onChange={(e) => onUpdate({ styleTags: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Lyrics</label>
                        <textarea
                            className="textarea-field lyrics-field"
                            placeholder="Write your lyrics here..."
                            rows={10}
                            value={song.lyrics}
                            onChange={(e) => onUpdate({ lyrics: e.target.value })}
                        />
                    </div>

                    <button className="btn-danger" onClick={onRemove}>Remove Song</button>
                </div>
            )}
        </div>
    );
}
