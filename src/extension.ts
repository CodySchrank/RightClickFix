'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let newFile = vscode.commands.registerCommand('rcf.newFile', () => {
        // The code you place here will be executed every time your command is executed
        
        vscode.commands.executeCommand('explorer.newFile');
    });

    context.subscriptions.push(newFile);
    

    let newFolder = vscode.commands.registerCommand('rcf.newFolder', () => {
        // The code you place here will be executed every time your command is executed
        
        vscode.commands.executeCommand('explorer.newFolder');
    });

    context.subscriptions.push(newFolder);
}

// this method is called when your extension is deactivated
export function deactivate() {
}