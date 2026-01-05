import { useAppState } from '../store';

const mantraExamples = [
    '"Less clever, more true."',
    '"Don\'t explain — reveal."',
    '"Let it ache."',
    '"One tension, fully explored."',
    '"Trust the silence."',
];

export function MantraPhase() {
    const { albumMantra, setAlbumMantra } = useAppState();

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">9</span>
                <h2>Album Mantra</h2>
            </div>
            <p className="phase-description">
                One sentence you keep visible while writing. Reminds you what <em>not</em> to do.
            </p>

            <div className="mantra-section">
                <div className="form-group">
                    <label htmlFor="mantra">Your Mantra</label>
                    <input
                        id="mantra"
                        type="text"
                        className="input-field mantra-input"
                        placeholder="Enter your guiding mantra..."
                        value={albumMantra}
                        onChange={(e) => setAlbumMantra(e.target.value)}
                    />
                </div>

                {albumMantra && (
                    <div className="mantra-display">
                        <blockquote>{albumMantra}</blockquote>
                    </div>
                )}

                <div className="mantra-examples">
                    <h4>Examples</h4>
                    <div className="example-list">
                        {mantraExamples.map((ex, idx) => (
                            <button
                                key={idx}
                                className="example-btn"
                                onClick={() => setAlbumMantra(ex.replace(/"/g, ''))}
                            >
                                {ex}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
