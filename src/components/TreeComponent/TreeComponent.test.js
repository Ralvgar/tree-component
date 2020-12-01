import { render, screen } from '@testing-library/react';
import TreeComponent from './TreeComponent';
import { treeFile } from './TreeFile';

it('renders the first level elements', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Second")).toBeInTheDocument();
  expect(screen.getByText("Third")).toBeInTheDocument();
});

it('shouldn\'t render second level elements', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
  expect(screen.queryByText("First-First")).not.toBeInTheDocument();
});

it('should render child elements when an element is clicked', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
  expect(screen.queryByText("First-First")).not.toBeInTheDocument();
  screen.getByText("First").click();
  expect(screen.queryByText("First-First")).toBeInTheDocument();
});

/*test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
test('Tree Component', () => {
  render(<TreeComponent file={treeFile} darkMode />);
  expect()
});
test('Tree Component', () => {
  render(<TreeComponent file={treeFile} />);
  expect()
});
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});
v
test('Tree Component', () => {
  render(<TreeComponent size={"2rem"} file={treeFile} darkMode />);
});*/
