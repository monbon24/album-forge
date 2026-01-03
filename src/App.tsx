import { useAppState } from './store';
import './App.css';

// Import components
import { Sidebar } from './components/Sidebar';
import { StoryPhase } from './components/StoryPhase';
import { TrackPhase } from './components/TrackPhase';
import { PersonaPhase } from './components/PersonaPhase';
import { WritingPhase } from './components/WritingPhase';
import { RefinementPhase } from './components/RefinementPhase';

function App() {
    const { currentPhase, setPhase } = useAppState();

    const renderPhase = () => {
        switch (currentPhase) {
            case 'story': return <StoryPhase />;
            case 'tracks': return <TrackPhase />;
            case 'persona': return <PersonaPhase />;
            case 'writing': return <WritingPhase />;
            case 'refinement': return <RefinementPhase />;
            default: return <StoryPhase />;
        }
    };

    return (
        <div className="app-container">
            <Sidebar currentPhase={currentPhase} onPhaseChange={setPhase} />
            <main className="main-content">
                {renderPhase()}
            </main>
        </div>
    );
}

export default App;
