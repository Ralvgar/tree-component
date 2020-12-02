import { render, screen } from '@testing-library/react';
import TreeComponent from './TreeComponent';
import { treeFile } from './TreeFile';

it('renders the first level elements', () => {
  render(<TreeComponent file={treeFile} />);
  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Second")).toBeInTheDocument();
  expect(screen.getByText("Third")).toBeInTheDocument();
});

it('shouldn\'t render second level elements', () => {
  render(<TreeComponent file={treeFile} />);
  expect(screen.queryByText("First-First")).not.toBeInTheDocument();
});

it('should render child elements when an element is clicked', () => {
  render(<TreeComponent file={treeFile} />);
  expect(screen.queryByText("First-First")).not.toBeInTheDocument();
  expect(screen.queryByText("First-Second")).not.toBeInTheDocument();
  expect(screen.queryByText("First-Third")).not.toBeInTheDocument();
  screen.getByText("First").click();
  expect(screen.queryByText("First-First")).toBeInTheDocument();
  expect(screen.queryByText("First-Second")).toBeInTheDocument();
  expect(screen.queryByText("First-Third")).toBeInTheDocument();

  expect(screen.queryByText("Second-First")).not.toBeInTheDocument();
  expect(screen.queryByText("Second-Second")).not.toBeInTheDocument();
  expect(screen.queryByText("Second-Third")).not.toBeInTheDocument();
  screen.getByText("Second").click();
  expect(screen.queryByText("Second-First")).toBeInTheDocument();
  expect(screen.queryByText("Second-Second")).toBeInTheDocument();
  expect(screen.queryByText("Second-Third")).toBeInTheDocument();
  expect(screen.queryByText("Second-Second-First")).not.toBeInTheDocument();
  expect(screen.queryByText("Second-Second-Second")).not.toBeInTheDocument();
  screen.getByText("Second-Second").click();
  expect(screen.queryByText("Second-Second-First")).toBeInTheDocument();
  expect(screen.queryByText("Second-Second-Second")).toBeInTheDocument();


  expect(screen.queryByText("Third-First")).not.toBeInTheDocument();
  expect(screen.queryByText("Third-Second")).not.toBeInTheDocument();
  expect(screen.queryByText("Third-Third")).not.toBeInTheDocument();
  screen.getByText("Third").click();
  expect(screen.queryByText("Third-First")).toBeInTheDocument();
  expect(screen.queryByText("Third-Second")).toBeInTheDocument();
  expect(screen.queryByText("Third-Third")).toBeInTheDocument();
  expect(screen.queryByText("Third-Second-First")).not.toBeInTheDocument();
  expect(screen.queryByText("Third-Second-Second")).not.toBeInTheDocument();
  screen.getByText("Third-Second").click();
  expect(screen.queryByText("Third-Second-First")).toBeInTheDocument();
  expect(screen.queryByText("Third-Second-Second")).toBeInTheDocument();
});

it('should change the icon when passing through a prop', () => {
  render(<TreeComponent file={treeFile} />);
  expect(document.querySelector('.fa-caret-right')).toBeInTheDocument();

  render(<TreeComponent file={treeFile} iconStyle={"plus"}/>);
  expect(document.querySelector('.fa-plus')).toBeInTheDocument();

  render(<TreeComponent file={treeFile} iconStyle={"angle"}/>);
  expect(document.querySelector('.fa-angle-right')).toBeInTheDocument();

  render(<TreeComponent file={treeFile} iconStyle={"folder"}/>);
  expect(document.querySelector('.fa-folder')).toBeInTheDocument();
});

it('shouldn\'t have changed the icon before clicked', () => {
  expect(document.querySelector('.fa-caret-down')).not.toBeInTheDocument();
});

it('should change the icon when clicked', () => {
  render(<TreeComponent file={treeFile} />);
  expect(document.querySelector('.fa-caret-right')).toBeInTheDocument();
  expect(document.querySelector('.fa-caret-down')).not.toBeInTheDocument();
  screen.getByText("First").click();
  expect(document.querySelector('.fa-caret-down')).toBeInTheDocument();
});