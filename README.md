# System Reference Implementation

## Running the SDK

1. Open Terminal to the folder this README.md file is in
2. Run `node index.js` in one tab
3. Run `gulp` in another tab
4. Open [http://localhost:3005](http://localhost:3005)

## Instructions

Generally speaking anything you'd want to edit is in `/src`. Everything else is just supporting.

### Overview

The SDK uses handlebars and a couple of methods of running javascript. Please read this document carefully, as the SDK is powerful, but quite specific in how it works.

### Saving and Loading Data

Changes to any form element with the `name` attribute (e.g. `<input name='alignment' />`) is automatically handled once the system is installed in a game. Changes to named form elements are serialized (e.g. `{ alignment: "Lawful" }`) and saved to the backend. And the template is automatically hydrated with the saved values when reopened.

### Scripting

Running custom scripts can happen in two ways: Hooks and Events. See below for how to use either.

### Arrays (Lists)

Arrays are lists of repeating items (e.g. equipment, spells, skills, etc). An array will be automatically built if an element has the `arrayname` property. The value of this property should be unique to the template. A second property `accepts` enables the document to accept dropped documents (e.g. equipment), and must have the name of another document type as defined in `system.json`.

The values of `arrayname` and `accepts` do not have to be the same, but often are just for convenience.

Any fields inside the array are repeated for each item.

TKTK the documentId hidden input

Example:

```
      <div arrayname='abilities' accepts='abilities' class='array'>
        <div class='arrayItem'>
          <button name='remove'>-</button>
          <input type='hidden' name='documentId' />
          <input name='name' value='{{name}}' />
        </div>
      </div>
```

## Restrictions

The template SDK is simplistic in its first iteration, but the goal is for it to allow for complex and responsive development of system implementations.

To that end the document platform has been created in a way that will allow this over time, but which has a few restrictions in place to ensure the security of the overall platform.

## system.json

## Data

The document has access to a lot of the game's data, TKTK here's how:

`documents`, `assets` etc.

## Partials

Partials work slightly different than in a freeform Handlebars setup. For now they should be placed in the `partials` folder, and end in `.hbs`. The default gulp setup will use the file name as the partial name.

### System Wide Styles

The partial `src/partials/system-styles.hbs` is used to define the styles which will also be used by the platform system templates `scenes` and `notes`. Any styles put in there will be used to style the editors for those two templates as well.

## Scripting

Any javascript files found in `./src/js/*` will be concatenated into a single file, tersified and output into `./dist/js/scripts.js`.

Due to the concatenization--done because we store and transport the scripts in a single string variable:

- You can't reuse global variable names (everything exists in the same namespace)
- You can't require or import (at least on our end, if you pre-process you can do whatever you want).
- You can include `<script>` tags in the handlebar files, but due to on-the-fly re-instantiation, don't use `const` for variables, use `var` or `let` instead, at least to avoid console errors.

Otherwise you can include any assisting code you need, but the platform will recognize only three variable names, all of which are optional: `hooks`, `helpers`.

You can structure your files anyway you want, the default is to have one file for each of the three variable names.

**Events**

Events are how documents can interact with the platform, e.g. by sending messages to the chat or rolling dice.

Events are f

**Hooks**

Hooks are functions that are called when an event is fired, e.g. by responding to document data changes.

The hooks variable should be an object with keys named after the platform event hooks they should be run with and the value should be a function which, depending on the hook, can receive 0...n parameters.

Hooks can be used to e.g. update the strength modifier when strength itself is updated, or react to changes in other, dependent documents.

For example:

hooks: {
"strength": function(strength) {
// do something
}

**Handlers**
