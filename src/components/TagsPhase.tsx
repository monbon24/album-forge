import { useAppState } from '../store';

export function TagsPhase() {
    const {
        globalStyleTags, setGlobalStyleTags,
        genreBlend, moodKeywords, songs
    } = useAppState();

    const suggestedTags = [
        ...moodKeywords,
        ...(genreBlend ? genreBlend.split('+').map(s => s.trim()) : []),
    ].filter(Boolean);

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">8</span>
                <h2>Style & Mood Tags</h2>
            </div>
            <p className="phase-description">
                At the end of every album or song draft, include production-aware tags.
                <br />
                This supports AI music generation, consistency checks, and future revisions.
            </p>

            <div className="tags-section">
                <div className="form-group">
                    <label>Global Album Tags</label>
                    <p className="field-hint">comma-separated, concise, production-aware</p>
                    <textarea
                        className="textarea-field"
                        placeholder="e.g., intimate electronic, restrained drums, melancholic, nocturnal, cinematic build, unresolved ending"
                        rows={3}
                        value={globalStyleTags}
                        onChange={(e) => setGlobalStyleTags(e.target.value)}
                    />
                </div>

                {suggestedTags.length > 0 && (
                    <div className="suggested-tags">
                        <h4>Suggested from your Sonic Identity:</h4>
                        <div className="tag-list">
                            {suggestedTags.map((tag, idx) => (
                                <span key={idx} className="tag suggestion-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}

                {songs.length > 0 && (
                    <div className="song-tags-summary">
                        <h4>Per-Song Tags</h4>
                        <div className="song-tags-list">
                            {songs.map((song) => (
                                <div key={song.id} className="song-tag-row">
                                    <span className="song-tag-title">{song.title}</span>
                                    <span className="song-tag-value">
                                        {song.styleTags || <em className="missing">No tags set</em>}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
