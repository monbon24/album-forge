import { Phase } from '../store';

interface SidebarProps {
    currentPhase: Phase;
    onPhaseChange: (phase: Phase) => void;
}

const phases: { id: Phase; label: string; icon: string; step: number }[] = [
    { id: 'core', label: 'Album Core', icon: '🎯', step: 1 },
    { id: 'persona', label: 'Persona', icon: '🎭', step: 2 },
    { id: 'sonic', label: 'Sonic Identity', icon: '🎛️', step: 3 },
    { id: 'arc', label: 'Track Arc', icon: '📈', step: 4 },
    { id: 'songs', label: 'Songs', icon: '🎵', step: 5 },
    { id: 'constraints', label: 'Constraints', icon: '✂️', step: 6 },
    { id: 'cohesion', label: 'Cohesion Check', icon: '🔗', step: 7 },
    { id: 'tags', label: 'Style Tags', icon: '🏷️', step: 8 },
    { id: 'mantra', label: 'Mantra', icon: '💫', step: 9 },
];

export function Sidebar({ currentPhase, onPhaseChange }: SidebarProps) {
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <h1 className="sidebar-title">Album Forge</h1>
                <p className="sidebar-subtitle">Design albums that know what they are</p>
            </div>
            <ul className="phase-list">
                {phases.map((phase) => (
                    <li key={phase.id}>
                        <button
                            className={`phase-btn ${currentPhase === phase.id ? 'active' : ''}`}
                            onClick={() => onPhaseChange(phase.id)}
                        >
                            <span className="phase-step">{phase.step}</span>
                            <span className="phase-icon">{phase.icon}</span>
                            <span className="phase-label">{phase.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
