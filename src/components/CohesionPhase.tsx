import { useAppState } from '../store';

export function CohesionPhase() {
    const {
        cohesionTrack5Reason, setCohesionTrack5Reason,
        cohesionFinalTrackFeeling, setCohesionFinalTrackFeeling,
        cohesionRecurringMotifs, setCohesionRecurringMotifs,
        songs
    } = useAppState();

    const hasEnoughSongs = songs.length >= 5;
    const hasFinalTrack = songs.some(s => s.act === 3);

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">7</span>
                <h2>Cohesion Check</h2>
            </div>
            <p className="phase-description">
                Use this late. If you can answer "yes" to these questions — you've got an <strong>album</strong>, not a playlist.
            </p>

            <div className="cohesion-questions">
                <div className="cohesion-question">
                    <div className="question-header">
                        <span className="question-icon">{hasEnoughSongs ? '🔗' : '⏳'}</span>
                        <h3>Could track 5 only exist <em>because</em> track 2 exists?</h3>
                    </div>
                    {!hasEnoughSongs ? (
                        <p className="cohesion-placeholder">Add at least 5 songs to answer this question.</p>
                    ) : (
                        <textarea
                            className="textarea-field"
                            placeholder="Explain the connection... How does what happens in track 2 make track 5 possible or necessary?"
                            rows={3}
                            value={cohesionTrack5Reason}
                            onChange={(e) => setCohesionTrack5Reason(e.target.value)}
                        />
                    )}
                </div>

                <div className="cohesion-question">
                    <div className="question-header">
                        <span className="question-icon">{hasFinalTrack ? '🎭' : '⏳'}</span>
                        <h3>Does the final track sound like someone who <em>survived</em> the album?</h3>
                    </div>
                    {!hasFinalTrack ? (
                        <p className="cohesion-placeholder">Add a song to Act III to answer this question.</p>
                    ) : (
                        <textarea
                            className="textarea-field"
                            placeholder="How has the persona changed? What do they know now that they didn't at track 1?"
                            rows={3}
                            value={cohesionFinalTrackFeeling}
                            onChange={(e) => setCohesionFinalTrackFeeling(e.target.value)}
                        />
                    )}
                </div>

                <div className="cohesion-question">
                    <div className="question-header">
                        <span className="question-icon">🔄</span>
                        <h3>Do at least 2 motifs (lyrical or sonic) recur across 3+ songs?</h3>
                    </div>
                    <textarea
                        className="textarea-field"
                        placeholder="List recurring motifs... e.g., 'hands' imagery appears in tracks 1, 4, 9; the piano riff from track 2 returns in track 8..."
                        rows={4}
                        value={cohesionRecurringMotifs}
                        onChange={(e) => setCohesionRecurringMotifs(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
