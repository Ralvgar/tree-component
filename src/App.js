import './App.css';
import TreeComponent from './components/TreeComponent/TreeComponent';
import { treeFile } from './TreeFile';

/* 
props:  
  file: The object file that you want as tree component. === obligatory
  iconStyle={} accepts other styles for folder icon, options: "plus", "angle", "folder". === optional
*/

function App() {
  return (
    <div className="App background-info" >
      <TreeComponent file={treeFile} />
    </div>
  );
}

export default App;
