# Coverage-page

## Description

This project is an interactive platform table that allows filtering, searching, and in-memory sorting of data, following the home test requirements.  
Built with **Vue 3** using the **Composition API**, with a focus on clean code and reactivity.

---

## Features

### Tabs
- One tab per category + **All Platforms**.  
- Each tab shows a count of items.  
- Clicking a tab filters the table by that category.

### Table
- Columns:
  1. **Platform** (name + logo)  
  2. **Type**  
  3. **Status**  
- Table data reflects:
  - Active tab
  - Search input
  - Status filters
  - Stable in-memory sorting

### Search
- Text input filter by platform name.  
- Works within the currently active tab.

### Status Filters
- Toggle chips: **Working** / **Coming Soon** / **All**.  
- Filtering is reactive and consistent.

### Sorting
- Clickable table headers for sorting columns.  
- **Client-side only**, stable and in-memory.

### States
- **Loading**: while fetching data.  
- **Error**: if data fails to load.  
- **Empty**: when no results match the filters.  
- **No Data**: when the API returns zero items.

---

## Clone the repository and install dependencies:

```
git clone https://github.com/d-valino/Coverage-page.git

cd Coverage-page/coverage-page

npm install
```

---

## Running Locally

```
npm run dev
```

Open the browser at:
```
http://localhost:5173
```

Use tabs, search input, and status toggles to filter and sort the table.

---

## Tests

```
npm run test
```


