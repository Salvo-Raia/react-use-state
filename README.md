![Static Badge](https://img.shields.io/badge/Boolean_Tech_Academy-1565C0?style=for-the-badge)

# Exercise 34/50: First Steps with useState

Building an interactive React interface with useState to manage selected languages, dynamically update displayed content, and create reusable components with props.

## Project overview

| Repository | Project | Category | Main Focus | Exercise |
|:--|:--|:--|:--|:--|
| react-use-state | First Steps with useState | Exercise | React useState, props & Component composition | 34/50 |

## Assignment

Today, we start working with **React state**!

Given an array of objects containing web development languages and their descriptions, build an interactive interface that allows users to select a language and display its details.

The application must include:

1. A list of buttons, one for each programming language in the array.
2. A detail card displayed below the buttons, initially showing the **title and description of the first language** in the array.
3. An interaction that updates the detail card whenever a button is clicked, displaying the corresponding language and its description.

Use React's `useState` hook to manage the selected language and update the interface.

#### Bonus challenge

- If no language is selected, the detail card must display:
`No language selected`

- Give the button corresponding to the currently selected language a different color, making the active selection immediately recognizable.

- Extract the detail card into a dedicated React component while preserving all its functionality.

- Extract the buttons into separate React components while preserving all their functionality.

## Technologies

![JSX](https://img.shields.io/badge/JSX-6A1B9A?style=flat-square&logo=react&logoColor=F7DF1E&labelColor=6A1B9A&color=6A1B9A) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

## What I learned

- Managing component state with React's `useState` hook.
- Updating the interface in response to user interactions.
- Rendering dynamic content from arrays of objects.
- Passing data and functions between components through props.
- Managing selected and unselected states.
- Creating reusable React components.
- Separating application logic into smaller components.

## Credits

Exercise assigned by **Boolean Tech Academy** as part of the Web Development course (Class 152, A.Y. 2025-2026).
