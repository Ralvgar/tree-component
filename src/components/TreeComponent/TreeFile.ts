export const treeFile = [
    {
        name: "First",
        childrens: [
            { name: "First-First" },
            { name: "First-Second" },
            { name: "First-Third" }
        ]
    },
    {
        name: "Second",
        childrens: [
            { name: "Second-First" },
            {
                name: "Second-Second",
                childrens: [
                    { name: "Second-Second-First" },
                    { name: "Second-Second-Second" },
                    {
                        name: "First",
                        childrens: [
                            { name: "First-First" },
                            { name: "First-Second" },
                            { name: "First-Third" }
                        ]
                    },
                ]
            },
            { name: "Second-Third" },
        ]
    },
    {
        name: "Third",
        childrens: [
            { name: "Third-First" },
            {
                name: "Third-Second",
                childrens: [
                    { name: "Third-Second-First" },
                    { name: "Third-Second-Second" }
                ]
            },
            { name: "Third-Third" },
        ]
    }
]