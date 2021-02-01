import Header from './Header';
import ProgramsList from './ProgramsList';
import { DateProvider } from './DateContext';

function App() {
  return (
    <DateProvider>
      <div className="container mt-5">
        <Header />
        <ProgramsList />
      </div>
    </DateProvider>
  );
}

export default App;
