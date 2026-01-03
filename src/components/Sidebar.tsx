import { Phase } from '../store';

interface SidebarProps {
    currentPhase: Phase;
    onPhaseChange: (phase: Phase) => void;
}

const phases: { id: Phase; label: string; icon: string }[] = [
    { id: 'story', label: 'Story', icon: '📖' },
    { id: 'tracks', label: 'Tracks', icon: '🎵' },
    { id: 'persona', label: 'Persona Forge', icon: '🎭' },
    { id: 'writing', label: 'Lyric Writing', icon: '✍️' },
    { id: 'refinement', label: 'Refinement', icon: '✨' },
];

export function Sidebar({ currentPhase, onPhaseChange }: SidebarProps) {
    return (
        <nav className="sidebar">
            <h1 className="sidebar-title">Album Forge</h1>
            <ul className="phase-list">
                {phases.map((phase) => (
                    <li key={phase.id}>
                        <button
                            className={`phase-btn ${currentPhase === phase.id ? 'active' : ''}`}
                            onClick={() => onPhaseChange(phase.id)}
                        >
                            <span className="phase-icon">{phase.icon}</span>
                            <span className="phase-label">{phase.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
