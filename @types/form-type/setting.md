{
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "afterDelay",
  "editor.fontFamily": "'Fira Code' , 'Lalezar Regular'",
  "editor.fontLigatures": true,
  "editor.fontWeight": "bold",
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          //following will be in italic
          "comment",
          // "all",
          "export",
          "function",
          "component",
          "react",
          "entity.name.type.class", //class names
          "constant", //String, Number, Boolean…, this, super
          "storage.modifier", //static keyword
          "storage.type.class.js", //class keyword
          // "keyword", //import, export, return…
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          //following will be excluded from italics (VSCode has some defaults for italics)

          "invalid",
          // "keyword.operator",
          "constant.numeric.css",
          "keyword.other.unit.px.css",
          "constant.numeric.decimal.js",
          "constant.numeric.json"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  },
  "editor.tabSize": 2,
  "bracketPairColorizer.depreciation-notice": false,
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "terminal.integrated.fontFamily": "'Fira Code', 'Lalezar Regular'",
  "terminal.integrated.fontSize": 13.5,
  "tabnine.experimentalAutoImports": true,
  "editor.inlineSuggest.enabled": true,
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#ffff00",
    "terminalCursor.foreground": "#ffff00"
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "prettier.printWidth": 100,
  "comment-divider.languagesMap": {
    "javascript": ["//"]
  },
  "better-comments.tags": [
    {
      "tag": "!",
      "color": "#FF2D00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "?",
      "color": "#0000FF",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "//",
      "color": "#474747",
      "strikethrough": true,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "todo",
      "color": "#FF8C00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "--",
      "color": "#FFFFFF",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": true,
      "italic": true
    },
    {
      "tag": "*",
      "color": "#98C379",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    }
  ],
  "editor.matchBrackets": "never",
  "editor.fontStyle": "italic",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.accessibilitySupport": "off",
  "CodeGPT.model": "gpt-4",
  "vscode-pets.throwBallWithMouse": true,
  "vscode-pets.petSize": "small",
  "powermode.enabled": true,

  "material-icon-theme.languages.associations": {},
  "todo-tree.general.showActivityBarBadge": true,
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "icon": "check",
      "fontWeight": "bold",
      "background": "#FF8C00",
      "foreground": "#000000",
      "type": "whole-line",
      "opacity": 0.7
    },
    "BUG": {
      "icon": "bug"
    },
    "HACK": {
      "icon": "tools"
    },
    "FIXME": {
      "icon": "flame",
      "type": "whole-line"
    },
    "XXX": {
      "icon": "x"
    },
    "[ ]": {
      "icon": "issue-draft"
    },
    "[x]": {
      "icon": "issue-closed"
    }
  },
  "importCost.fontStyle": "italic",
  "importCost.smallPackageDarkColor": "#00ff00 ",
  "importCost.smallPackageLightColor": "#00ff00 ",
  "importCost.mediumPackageDarkColor": "#ffff00 ",
  "importCost.mediumPackageLightColor": "#ffff00 ",
  "todo-tree.general.tagGroups": {},
  "gitlens.proxy": {},
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.cursorBlinking": "expand"
}
