import './App.css';
import TreeComponent from './components/TreeComponent/TreeComponent';
import { treeFile } from './components/TreeComponent/TreeFile';

function App() {
  return (
    <div className="App">
      <TreeComponent file={treeFile}></TreeComponent>
    </div>
  );
}

export default App;
