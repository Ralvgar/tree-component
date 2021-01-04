import { render, screen } from '@testing-library/react';
import { getIconFromIconName } from './Folder';
import TreeComponent from './TreeComponent';
import { treeFile } from './TreeFile';
import { faCaretDown, faCaretRight, faPlus, faMinus, faAngleRight, faAngleDown, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';



describe("Screen tests", () => {
  it('renders the first level elements', () => {
    const { getByText } = render(<TreeComponent file={treeFile} />);
    getByText("First");
    getByText("Second");
    getByText("Third");
  });

  it('shouldn\'t render second level elements', () => {
    const { queryByText } = render(<TreeComponent file={treeFile} />);
    expect(queryByText("First-First")).toBeNull();
  });

  it('should render child elements when an element is clicked', () => {
    const { getByText, queryByText } = render(<TreeComponent file={treeFile} />);

    const textArray = [
      { shouldBeNull: "First-First" }, { shouldBeClicked: "First" }, { shouldBeInDocument: "First-First" },
      { shouldBeNull: "Second-First" }, { shouldBeClicked: "Second" }, { shouldBeInDocument: "Second-First" },
      { shouldBeNull: "Second-Second-Second" }, { shouldBeClicked: "Second-Second" }, { shouldBeInDocument: "Second-Second-Second" },
      { shouldBeNull: "Third-First" }, { shouldBeClicked: "Third" }, { shouldBeInDocument: "Third-First" },
      { shouldBeNull: "Third-Second-First" }, { shouldBeClicked: "Third-Second" }, { shouldBeInDocument: "Third-Second-First" },
    ]

    textArray.forEach(({ shouldBeNull, shouldBeClicked, shouldBeInDocument }) => {
      if (!!shouldBeNull) {
        expect(queryByText(shouldBeNull)).toBeNull();
      } else if (!!shouldBeClicked) {
        getByText(shouldBeClicked).click();
      } else {
        queryByText(shouldBeInDocument);
      }
    })
  });

  it('should change to default icon when passing through no prop', () => {
    render(<TreeComponent file={treeFile} />);
    expect(document.querySelector('.fa-caret-right')).toBeInTheDocument();
  });

  it('should change to plus icon when passing through a prop', () => {
    render(<TreeComponent file={treeFile} iconStyle={"plus"} />);
    expect(document.querySelector('.fa-plus')).toBeInTheDocument();
  });

  it('should change to angle icon when passing through a prop', () => {
    render(<TreeComponent file={treeFile} iconStyle={"angle"} />);
    expect(document.querySelector('.fa-angle-right')).toBeInTheDocument();
  });

  it('should change to folder icon when passing through a prop', () => {
    render(<TreeComponent file={treeFile} iconStyle={"folder"} />);
    expect(document.querySelector('.fa-folder')).toBeInTheDocument();
  });

  it('shouldn\'t have changed the icon before clicked', () => {
    render(<TreeComponent file={treeFile} />);
    expect(document.querySelector('.fa-caret-down')).toBeNull();
  });

  it('should change the icon when clicked', () => {
    render(<TreeComponent file={treeFile} />);
    expect(document.querySelector('.fa-caret-right')).toBeInTheDocument();
    expect(document.querySelector('.fa-caret-down')).toBeNull();
    screen.getByText("First").click();
    expect(document.querySelector('.fa-caret-down')).toBeInTheDocument();
  });
});


describe("Functions tests", () => {
  it('should return the icon value for FontAwesome', () => {
    expect(getIconFromIconName("plus")).toStrictEqual([faMinus, faPlus]);
    expect(getIconFromIconName("angle")).toStrictEqual([faAngleDown, faAngleRight]);
    expect(getIconFromIconName("folder")).toStrictEqual([faFolderOpen, faFolder]);
    expect(getIconFromIconName("")).toStrictEqual([faCaretDown, faCaretRight]);
  });

})