import './App.css';
import TreeComponent from './components/TreeComponent/TreeComponent';
import { treeFile } from './components/TreeComponent/TreeFile';

/* 
props:  
  file: The object file that you want as tree component. === obligatory
  size={} font size in px or rem. === optional
  color={} font color, === optional
  bgColor={} background color, === optional
  iconStyle={} accepts other styles for folder icon, options: "plus", "angle", "folder". === optional
  darkMode as param to use default darkmode colors, === optional
  
 */

function App() {
  return (
    <div className="App" >
      <TreeComponent size={"2rem"} file={treeFile} />
    </div>
  );
}

export default App;
