/// <reference types="react" />
import propTypes from 'prop-types';
export interface treeObject {
    name: string;
    childrens?: treeObject[];
}
interface Props {
    file: treeObject[];
    iconStyle?: string;
}
declare const TreeComponent: {
    ({ file, iconStyle }: Props): JSX.Element;
    propTypes: {
        file: propTypes.Validator<any[]>;
    };
};
export default TreeComponent;
