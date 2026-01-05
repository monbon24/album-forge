import { useState } from 'react';
import { useAppState } from '../store';

const defaultDos = [
    'Favor concrete verbs over abstract feelings',
    'Let silence / restraint do work',
    'Trust repetition',
];

const defaultAvoids = [
    'Explaining the metaphor',
    'Over-stacking poetic devices in one line',
    'Resolving emotional tension too early',
];

export function ConstraintsPhase() {
    const { customDos, setCustomDos, customAvoids, setCustomAvoids } = useAppState();
    const [newDo, setNewDo] = useState('');
    const [newAvoid, setNewAvoid] = useState('');

    const addDo = () => {
        if (newDo.trim()) {
            setCustomDos([...customDos, newDo.trim()]);
            setNewDo('');
        }
    };

    const addAvoid = () => {
        if (newAvoid.trim()) {
            setCustomAvoids([...customAvoids, newAvoid.trim()]);
            setNewAvoid('');
        }
    };

    return (
        <div className="phase-container">
            <div className="phase-header">
                <span className="phase-number">6</span>
                <h2>Language & Lyric Constraints</h2>
            </div>
            <p className="phase-description">
                Hard-won rules from revisions. You consistently improve lyrics by <strong>cutting 10–20%</strong>, not adding.
            </p>

            <div className="constraints-grid">
                <div className="constraint-column do-column">
                    <h3 className="constraint-title">✓ DO</h3>
                    <ul className="constraint-list">
                        {defaultDos.map((item, idx) => (
                            <li key={`default-do-${idx}`} className="constraint-item default">
                                {item}
                            </li>
                        ))}
                        {customDos.map((item, idx) => (
                            <li key={`custom-do-${idx}`} className="constraint-item custom">
                                {item}
                                <button
                                    className="constraint-remove"
                                    onClick={() => setCustomDos(customDos.filter((_, i) => i !== idx))}
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="add-constraint">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Add custom rule..."
                            value={newDo}
                            onChange={(e) => setNewDo(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addDo()}
                        />
                        <button className="btn-add" onClick={addDo}>+</button>
                    </div>
                </div>

                <div className="constraint-column avoid-column">
                    <h3 className="constraint-title">✗ AVOID</h3>
                    <ul className="constraint-list">
                        {defaultAvoids.map((item, idx) => (
                            <li key={`default-avoid-${idx}`} className="constraint-item default">
                                {item}
                            </li>
                        ))}
                        {customAvoids.map((item, idx) => (
                            <li key={`custom-avoid-${idx}`} className="constraint-item custom">
                                {item}
                                <button
                                    className="constraint-remove"
                                    onClick={() => setCustomAvoids(customAvoids.filter((_, i) => i !== idx))}
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="add-constraint">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Add custom avoid..."
                            value={newAvoid}
                            onChange={(e) => setNewAvoid(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addAvoid()}
                        />
                        <button className="btn-add" onClick={addAvoid}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
