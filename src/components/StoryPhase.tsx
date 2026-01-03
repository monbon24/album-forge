import { useAppState } from '../store';

export function StoryPhase() {
    const { albumTitle, setAlbumTitle, storyNarrative, setStoryNarrative } = useAppState();

    return (
        <div className="phase-container">
            <h2>📖 Story Phase</h2>
            <p className="phase-description">Define the narrative and concept of your album.</p>

            <div className="form-group">
                <label htmlFor="album-title">Album Title</label>
                <input
                    id="album-title"
                    type="text"
                    className="input-field"
                    placeholder="Enter your album title..."
                    value={albumTitle}
                    onChange={(e) => setAlbumTitle(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="story-narrative">Story Narrative</label>
                <textarea
                    id="story-narrative"
                    className="textarea-field"
                    placeholder="Describe the overarching story, themes, and emotional journey of your album..."
                    rows={8}
                    value={storyNarrative}
                    onChange={(e) => setStoryNarrative(e.target.value)}
                />
            </div>
        </div>
    );
}
