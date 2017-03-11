# jsx-beautify README

[![vscode version][vs-image]][vs-url]

JSX-beautify is used to beautify JSX code.

## Features

Beautify your JSX files.
You can speicific a global rc file to save your beautify settings.
You can use hot key Ctrl+M (Command+M) to beautify your JSX file.

## Requirements

VSC 1.6 and above.

## Extension Settings

Add a global settings:
* `gogocrow.beautify.jsbeautifyrc`: Set a global jsbeautifyrc file for some options.
For example:
```
"gogocrow.beautify.jsbeautifyrc": "/Users/gogocrow/.jsbeautifyrc"
```
Here is a sample for the file content:
```
{
  "end_with_newline": true,
  "indent_size": 2,
  "jsx": {
    "alignWithFirstAttribute": false,
    "bracepadding": false,
    "braces": "knr",
    "spaceclose": true,
    "methodchain": "chain",
    "objsort": "all",
    "formatObject": "indent",
    "ternaryline": true,
    "wrap": 100
  }
}
```

[vs-url]: https://marketplace.visualstudio.com/items?itemName=gogocrow.jsx-beautify
[vs-image]: http://vsmarketplacebadge.apphb.com/version/gogocrow.jsx-beautify.svg