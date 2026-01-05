import { useAppState } from '../store';

export function PersonaPhase() {
    const {
        personaType, setPersonaType,
        personaWants, setPersonaWants,
        personaFears, setPersonaFears,
        personaLie, setPersonaLie
    } = useAppState();

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">2</span>
                <h2>Album Persona</h2>
            </div>
            <p className="phase-description">
                Most of your strongest work uses <strong>persona</strong>, not autobiography.
                <br />
                Albums feel cohesive when the <em>same voice</em> evolves instead of multiple unrelated narrators.
            </p>

            <div className="form-group">
                <label htmlFor="persona-type">Who is singing this album?</label>
                <p className="field-hint">
                    Literal character? Version of you? Archetype (oracle, survivor, lover, rival, exile, ruler)?
                </p>
                <textarea
                    id="persona-type"
                    className="textarea-field"
                    placeholder="e.g., A version of me who never left my hometown — bitter but self-aware. An exile who chose isolation..."
                    rows={3}
                    value={personaType}
                    onChange={(e) => setPersonaType(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="persona-wants">What does this persona want at the start?</label>
                <input
                    id="persona-wants"
                    type="text"
                    className="input-field"
                    placeholder="e.g., To be seen without having to explain..."
                    value={personaWants}
                    onChange={(e) => setPersonaWants(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="persona-fears">What do they fear?</label>
                <input
                    id="persona-fears"
                    type="text"
                    className="input-field"
                    placeholder="e.g., That the version of themselves they've performed is all they really are..."
                    value={personaFears}
                    onChange={(e) => setPersonaFears(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="persona-lie">What lie do they believe?</label>
                <p className="field-hint">
                    The lie they carry is what the album ultimately confronts.
                </p>
                <input
                    id="persona-lie"
                    type="text"
                    className="input-field"
                    placeholder="e.g., That strength means never needing anyone..."
                    value={personaLie}
                    onChange={(e) => setPersonaLie(e.target.value)}
                />
            </div>
        </div>
    );
}
