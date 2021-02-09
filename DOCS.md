<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [artify.js](#srchandlersartifyjs)
  - [change-separator.js](#srchandlerschange-separatorjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [change-separator.js](#srclistenerschange-separatorjs)
  - [inputting.js](#srclistenersinputtingjs)
- [logic](#logic)
  - [reverse.js](#srclogicreversejs)
- [views](#views)
  - [artify.js](#srcviewsartifyjs)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/artify.js](./src/handlers/artify.js?study)

<a name="artifyHandler"></a>

## artifyHandler

creates a mirror-image rendering of the user input and displays the growing artwork

| Param | Type               | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user releases a key in the input area |

---

### [./src/handlers/change-separator.js](./src/handlers/change-separator.js?study)

<a name="changeSeparatorHandler"></a>

## changeSeparatorHandler

changes the program's separator value

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>Event</code> | triggered whenever a user types in the separator input area |

[TOP](#DOCS)

---

---

# init

---

### [./src/init/index.js](./src/init/index.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/change-separator.js](./src/listeners/change-separator.js?study)

<a name="change separator
calls handler that changes the mirror-arts separator"></a>

## change separator

calls handler that changes the mirror-arts separator

---

### [./src/listeners/inputting.js](./src/listeners/inputting.js?study)

<a name="user input
calls the reverseHandler when a user types in the input field"></a>

## user input

calls the reverseHandler when a user types in the input field

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

---

### [./src/logic/reverse.js](./src/logic/reverse.js?study)

<a name="reverse"></a>

## reverse ⇒ <code>string</code>

reverses a string

**Returns**: <code>string</code> - the string reversed

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| input | <code>string</code> | a string to reverse |

[TOP](#DOCS)

---

---

# Views

View functions are pure functions used to render JS data into DOM elements. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use view functions to render program state and update the UI.

VIEW functions will _never_ ...

- read from the DOM
  - they will create _new_ DOM elements
- write to the DOM
  - they return a DOM element that the handler will append
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

---

### [./src/views/artify.js](./src/views/artify.js?study)

<a name="artify"></a>

## artify ⇒ <code>HTMLPreElement</code>

creates a PRE element with artful text
each line in the provided array will be mirrored around the separator

**Returns**: <code>HTMLPreElement</code> - a PRE element with the rendered string content

| Param     | Type                              | Description                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------- |
| lines     | <code>Array.&lt;string&gt;</code> | an array of strings, each one will be mirrored around the separator on a new line |
| separator | <code>string</code>               | the string to separate mirrored lines                                             |

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

<a name="data"></a>

## data

data that is saved and used between user interactionss

**Properties**

| Name      | Type                              | Description                          |
| --------- | --------------------------------- | ------------------------------------ |
| separator | <code>string</code>               | the full user artwork                |
| lines     | <code>Array.&lt;string&gt;</code> | all the lines that have been entered |

<!-- END DOCS -->
