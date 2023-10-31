# Vue To Do List

## Description:

To do list: 
Each todo will be an object, made up of three properties:
- `text`, a string indicating the text of the todo
- `done`, a boolean (true/false) indicating whether the todo was done or not
- id, an incremental positive integer (unique for each task)

### MILESTONE 1

Print an item for each todo within an HTML list.
If the `done` property is equal to `true`, display the todo text ~~slashed~~.

### MILESTONE 2

View next to each item has an "x": by clicking on it, the todo is removed from the list.

### MILESTONE 3

Prepare a text input field and an "add" button: by clicking on the button, the typed text is read and used to create a new todo, which is then added to the list of existing todos.

### *Bonuses:*

1- in addition to clicking on the button, also intercept the ENTER key to add the todo to the list
2- by clicking on the text of the item, invert the value of the done property of the corresponding todo (if `done` was equal to `false`, set `true` and vice versa)
3- Super Bonus (superoptional): use id instead of indices in methods