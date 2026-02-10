# Esercizio: Primi passi con use state

Nome repo: `react-use-state`

## Consegna

Oggi proviamo a usare lo stato di React!

Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:

- Crea una lista di bottoni, uno per linguaggio.
- Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
- Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativadescrizione

**Bonus**

- Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”
- Dare un colore diverso al bottone per cui il linguaggio è attualmente selezionato.
- Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità
- Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
