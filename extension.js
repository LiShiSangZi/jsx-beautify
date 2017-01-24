'use strict';

const vscode = require('vscode');
const {
  workspace
} = vscode;
const prettydiff = require('prettydiff');
const fs = require('fs');

const ACCEPTED_LANG = {
  "javascript": true,
  "javascriptreact": true
};

const getRange = (doc) => {
  const r = new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
  return doc.validateRange(r);
};

function readConfig(key) {
  let config = workspace.getConfiguration('gogocrow.beautify');
  if (typeof config === 'undefined') {
    config = {};
  }
  return config[key];
}

function formatActiveDocument() {
  const active = vscode.window.activeTextEditor;
  if (active && active.document) {
    const doc = active.document;
    const langId = doc.languageId;
    if (ACCEPTED_LANG[langId]) {
      // Do something.
      const globalConfigPath = readConfig('jsbeautifyrc') || '';
      let globalOptions = {};
      try {
        let content = fs.readFileSync(globalConfigPath, "utf8");
        globalOptions = JSON.parse(content);
      } catch (e) {
        // Do nothing if the folder is invalid;
      }

      let text = doc.getText(new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE));
      let args = {
        source: text,
        insize: 2,
        inchar: ' ',
        lang: 'jsx',
        mode: 'beautify',
        bracepadding: false,
        wrap: 80
      };

      args = Object.assign(args, globalOptions.jsx);

      let output = prettydiff.api(args);
      let outputText = output[0];
      let range = getRange(active.document);
      active.edit(editor => editor.replace(range, outputText));
    }

  }
  return 0;
}


function activate(context) {

  let sub = context.subscriptions;
  sub.push(vscode.commands.registerCommand('gogocrow.beautify', formatActiveDocument));

}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;
