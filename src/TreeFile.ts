export const treeFile = [
  {
    name: "src",
    childrens: [
      { name: "Folder.tsx" },
      { name: "theme.ts" },
      { name: "TreeComponent.tsx" },
    ],
  },
  {
    name: "pages",
    childrens: [
      { name: "app.tsx" },
      {
        name: "login",
        childrens: [{ name: "index.module.scss" }, { name: "index.tsx" }],
      },
      { name: "index.tsx" },
    ],
  },
  {
    name: "services",
    childrens: [
      { name: "ApolloConnection.ts" },
      {
        name: "hooks",
        childrens: [
          { name: "useStateWithLocalStorage.ts" },
          { name: "useStateWithSessionStorage.ts" },
        ],
      },
      { name: "SessionStorageService.ts" },
    ],
  },
];
