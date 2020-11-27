import './App.css';
import TreeComponent from './components/TreeComponent/TreeComponent';

const treeFile = {
  name: "First" ,
  folder: {
       name: "First-First" ,
       name: "First-Second" ,
       name: "First-Third"
  },
  name: "Second",
  folder: {
       name: "Second-First",
       name: "Second-Second",
       folder: {
           name: "Second-Second-First" ,
           name: "Second-Second-Second"
       },
       name: "Second-Third"
  },
  name: "Third",
  folder: {
       name: "Third-First" ,
      name: "Third-Second" ,
        folder: {
           name: "Third-Second-First" ,
           name: "Third-Second-Second",
        },
       name: "Third-Third",
  }
};


function App() {
  return (
    <div className="App">
      <TreeComponent file={treeFile}></TreeComponent>
    </div>
  );
}

export default App;
