/// <reference types="react" />
export interface Props {
    name: string;
    children: JSX.Element;
    iconStyle?: string;
}
export declare const Folder: ({ name, children, iconStyle }: Props) => JSX.Element;
export declare const getIconFromIconName: (iconName: string | undefined) => import("@fortawesome/fontawesome-common-types").IconDefinition[];
