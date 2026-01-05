import { useAppState } from '../store';

export function ArcPhase() {
    const {
        actOneNotes, setActOneNotes,
        actTwoNotes, setActTwoNotes,
        actThreeNotes, setActThreeNotes
    } = useAppState();

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">4</span>
                <h2>Track Arc</h2>
            </div>
            <p className="phase-description">
                Instead of random tracks, think <strong>acts</strong>.
                <br />
                <em>Resolution ≠ happiness. It = clarity.</em>
            </p>

            <div className="arc-container">
                <div className="arc-section act-one">
                    <div className="arc-header">
                        <span className="arc-badge">ACT I</span>
                        <h3>Arrival</h3>
                        <span className="arc-tracks">Tracks 1–3</span>
                    </div>
                    <ul className="arc-goals">
                        <li>Introduce persona</li>
                        <li>Establish emotional baseline</li>
                        <li>Hint at the core problem (don't explain it)</li>
                    </ul>
                    <textarea
                        className="textarea-field"
                        placeholder="Notes for Act I... What world are we entering? What does the persona project?"
                        rows={4}
                        value={actOneNotes}
                        onChange={(e) => setActOneNotes(e.target.value)}
                    />
                </div>

                <div className="arc-section act-two">
                    <div className="arc-header">
                        <span className="arc-badge">ACT II</span>
                        <h3>Fracture</h3>
                        <span className="arc-tracks">Tracks 4–7</span>
                    </div>
                    <ul className="arc-goals">
                        <li>Escalation</li>
                        <li>Contradictions</li>
                        <li>Self-deception</li>
                        <li><em>This is where you love writing — lean in</em></li>
                    </ul>
                    <textarea
                        className="textarea-field"
                        placeholder="Notes for Act II... What cracks? What does the persona refuse to see?"
                        rows={4}
                        value={actTwoNotes}
                        onChange={(e) => setActTwoNotes(e.target.value)}
                    />
                </div>

                <div className="arc-section act-three">
                    <div className="arc-header">
                        <span className="arc-badge">ACT III</span>
                        <h3>Reckoning</h3>
                        <span className="arc-tracks">Tracks 8–10+</span>
                    </div>
                    <ul className="arc-goals">
                        <li>Cost is paid</li>
                        <li>Truth surfaces</li>
                        <li>Resolution OR conscious refusal to resolve</li>
                    </ul>
                    <textarea
                        className="textarea-field"
                        placeholder="Notes for Act III... What does the persona finally admit? What remains unresolved?"
                        rows={4}
                        value={actThreeNotes}
                        onChange={(e) => setActThreeNotes(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
