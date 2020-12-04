# Tree Component 

This project was made by Roberto Álvarez García as a Mallorca Bootcamp project.

## Documentation

This is a simple tree component for react, you should call it as <TreeComponent /> inside your JSX and accepts two props.

### `file` *Obligatory*

You should pass your tree file inside our file prop:
```javascript 
file={treeFile}
``` 
This file must be an array with objects inside every object has to be next values, 

Key | Description
------------ | -------------
"name" | Here the name of the file or folder.
"childrens" | another array with the objects that goes inside the named folder.

**Example**
```javascript
[
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
                    { name: "Second-Second-Second" }
                ]
            },
            { name: "Second-Third" },
        ]
    }
]
```

### `iconStyle` *Optional*

In iconStyle you can change with icon you want before each folder of your tree component, it has four different options:

**default:** if you dont use this prop you'll get a solid arrow;
**angle:** this prop change our icon to an angle arrow: ">";
**folder:** as the name suggests, a folder.
**plus:** it uses plus and minus simbols.


Thank you for visit my component, i hope you enjoy it.