import { useState } from 'react';
import { useAppState } from '../store';

export function TrackPhase() {
    const { tracks, addTrack } = useAppState();
    const [newTrackTitle, setNewTrackTitle] = useState('');

    const handleAddTrack = () => {
        if (newTrackTitle.trim()) {
            addTrack(newTrackTitle.trim());
            setNewTrackTitle('');
        }
    };

    return (
        <div className="phase-container">
            <h2>🎵 Track Phase</h2>
            <p className="phase-description">Plan and organize your album's tracks.</p>

            <div className="form-group inline-group">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Enter track title..."
                    value={newTrackTitle}
                    onChange={(e) => setNewTrackTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTrack()}
                />
                <button className="btn-primary" onClick={handleAddTrack}>Add Track</button>
            </div>

            <div className="track-list">
                {tracks.length === 0 ? (
                    <p className="empty-state">No tracks yet. Add your first track above.</p>
                ) : (
                    tracks.map((track, index) => (
                        <div key={track.id} className="track-item">
                            <span className="track-number">{index + 1}</span>
                            <span className="track-title">{track.title}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
