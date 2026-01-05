import { useAppState } from './store';
import './App.css';

import { Sidebar } from './components/Sidebar';
import { CorePhase } from './components/CorePhase';
import { PersonaPhase } from './components/PersonaPhase';
import { SonicPhase } from './components/SonicPhase';
import { ArcPhase } from './components/ArcPhase';
import { SongsPhase } from './components/SongsPhase';
import { ConstraintsPhase } from './components/ConstraintsPhase';
import { CohesionPhase } from './components/CohesionPhase';
import { TagsPhase } from './components/TagsPhase';
import { MantraPhase } from './components/MantraPhase';

function App() {
    const { currentPhase, setPhase } = useAppState();

    const renderPhase = () => {
        switch (currentPhase) {
            case 'core': return <CorePhase />;
            case 'persona': return <PersonaPhase />;
            case 'sonic': return <SonicPhase />;
            case 'arc': return <ArcPhase />;
            case 'songs': return <SongsPhase />;
            case 'constraints': return <ConstraintsPhase />;
            case 'cohesion': return <CohesionPhase />;
            case 'tags': return <TagsPhase />;
            case 'mantra': return <MantraPhase />;
            default: return <CorePhase />;
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
