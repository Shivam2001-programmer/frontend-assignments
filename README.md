## 🚀 How to Run the Project

1. **Clone the Repo**

   ```bash
git clone https://github.com/Shivam2001-programmer/frontend-assignments.git

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```








## 📝 Submission Write-up

### 🔧 Tools & Technologies Used

* **React (v19)** – Used for building the UI with reusable components
* **React Router DOM (v7)** – Handles navigation between pages like the catalog (`/`) and item details (`/item/:id`)
* **Material UI (MUI v9)** – UI components like cards, grids, buttons, and typography for a clean and responsive design
* **Create React App** – Used for quick project setup and development environment

---

### ⏱️ Estimated Time

It took around **1.5 hours ** to complete the assignment, including setup, building both screens, and implementing routing.

---

### 💡 Approach & Implementation

The idea was to build a simple **two-page product catalog** using a JSON-based data structure.

Instead of creating separate models for each category (like cars, bikes, phones, etc.), I designed a **flexible data structure**:

* Each item contains basic fields like `id`, `itemname`, `category`, and `image`
* Additional details are handled using a generic `itemprops` array (`{ label, value }` pairs)


---

### 🏠 Home Page (Catalog)

On the home screen:

* Items are grouped by category using `useMemo` for better performance
* Displayed using a responsive grid layout from Material UI
* Each item is shown as a card
* Clicking a card navigates to its detail page

---

### 📄 Item Detail Page

On the detail page:

* The item `id` is taken from the URL
* The corresponding item is fetched from the JSON data
* Displays:

  * Item image
  * Category
  * All properties in a clean list format
* A back button allows easy navigation to the catalog

---




