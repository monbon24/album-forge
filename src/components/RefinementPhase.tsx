import { useAppState } from '../store';

export function RefinementPhase() {
    const { albumTitle, storyNarrative, tracks, persona } = useAppState();

    return (
        <div className="phase-container">
            <h2>✨ Refinement</h2>
            <p className="phase-description">Review and polish your album before production.</p>

            <div className="summary-section">
                <h3>Album Summary</h3>

                <div className="summary-card">
                    <h4>Title</h4>
                    <p>{albumTitle || <em>No title set</em>}</p>
                </div>

                <div className="summary-card">
                    <h4>Story</h4>
                    <p>{storyNarrative || <em>No narrative defined</em>}</p>
                </div>

                <div className="summary-card">
                    <h4>Persona</h4>
                    <p><strong>{persona.name || 'Unnamed'}</strong></p>
                    <p>{persona.description || <em>No description</em>}</p>
                </div>

                <div className="summary-card">
                    <h4>Tracks ({tracks.length})</h4>
                    {tracks.length === 0 ? (
                        <p><em>No tracks added</em></p>
                    ) : (
                        <ol className="track-summary-list">
                            {tracks.map((track) => (
                                <li key={track.id}>
                                    {track.title}
                                    {track.lyrics ? ' ✅' : ' ⏳'}
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
}
