import { useAppState } from '../store';

export function WritingPhase() {
    const { tracks, updateTrackLyrics } = useAppState();

    return (
        <div className="phase-container">
            <h2>✍️ Lyric Writing</h2>
            <p className="phase-description">Write lyrics for each track in your album.</p>

            {tracks.length === 0 ? (
                <p className="empty-state">Add tracks in the Track Phase first.</p>
            ) : (
                <div className="lyrics-editor">
                    {tracks.map((track, index) => (
                        <div key={track.id} className="lyric-block">
                            <h3 className="track-header">
                                <span className="track-number">{index + 1}</span>
                                {track.title}
                            </h3>
                            <textarea
                                className="textarea-field"
                                placeholder={`Write lyrics for "${track.title}"...`}
                                rows={6}
                                value={track.lyrics}
                                onChange={(e) => updateTrackLyrics(track.id, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
