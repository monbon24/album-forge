import { useAppState, CoreTension } from '../store';

const tensions: { value: CoreTension; label: string }[] = [
    { value: 'identity-vs-expectation', label: 'Identity vs. Expectation' },
    { value: 'power-vs-responsibility', label: 'Power vs. Responsibility' },
    { value: 'intimacy-vs-distance', label: 'Intimacy vs. Distance' },
    { value: 'control-vs-surrender', label: 'Control vs. Surrender' },
    { value: 'memory-vs-truth', label: 'Memory vs. Truth' },
    { value: 'creation-vs-destruction', label: 'Creation vs. Destruction' },
];

export function CorePhase() {
    const {
        albumName, setAlbumName,
        albumThesis, setAlbumThesis,
        coreTension, setCoreTension
    } = useAppState();

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">1</span>
                <h2>Album Core</h2>
            </div>
            <p className="phase-description">
                Before any music exists. Define what this album <em>is</em> before you write a single lyric.
            </p>

            <div className="form-group">
                <label htmlFor="album-name">Album Name (Working Title)</label>
                <p className="field-hint">Don't overthink this. It's allowed to be provisional.</p>
                <input
                    id="album-name"
                    type="text"
                    className="input-field"
                    placeholder="Enter your album title..."
                    value={albumName}
                    onChange={(e) => setAlbumName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="album-thesis">Album Thesis (1–2 sentences)</label>
                <p className="field-hint">
                    What <em>emotional journey</em> does the album take? What changes from track 1 → final track?
                    <br />
                    <strong>If you can't say this in two sentences, the album will wander.</strong>
                </p>
                <textarea
                    id="album-thesis"
                    className="textarea-field"
                    placeholder="e.g., A journey from self-denial to painful clarity, where the narrator stops performing strength and admits collapse..."
                    rows={4}
                    value={albumThesis}
                    onChange={(e) => setAlbumThesis(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Core Tension (Choose One Primary)</label>
                <p className="field-hint">
                    Albums work when <em>one</em> tension dominates, even if others appear.
                </p>
                <div className="tension-grid">
                    {tensions.map((t) => (
                        <button
                            key={t.value}
                            className={`tension-btn ${coreTension === t.value ? 'selected' : ''}`}
                            onClick={() => setCoreTension(t.value)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
