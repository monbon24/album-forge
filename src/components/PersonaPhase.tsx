import { useAppState } from '../store';

export function PersonaPhase() {
    const { persona, setPersona } = useAppState();

    return (
        <div className="phase-container">
            <h2>🎭 Persona Forge</h2>
            <p className="phase-description">Create the artist persona or character for your album.</p>

            <div className="form-group">
                <label htmlFor="persona-name">Persona Name</label>
                <input
                    id="persona-name"
                    type="text"
                    className="input-field"
                    placeholder="Enter persona name..."
                    value={persona.name}
                    onChange={(e) => setPersona(e.target.value, persona.description)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="persona-description">Persona Description</label>
                <textarea
                    id="persona-description"
                    className="textarea-field"
                    placeholder="Describe the persona's backstory, style, voice, and aesthetic..."
                    rows={6}
                    value={persona.description}
                    onChange={(e) => setPersona(persona.name, e.target.value)}
                />
            </div>
        </div>
    );
}
