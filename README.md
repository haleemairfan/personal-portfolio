# Project Documentation

## 1. Software Used

- **React**: Frontend library for building user interfaces.
- **Docker**: Used for containerization and testing to ensure consistency across environments.
- **Render**: Cloud platform for deployment, ensuring smooth operation and accessibility.

### 1.a Libraries Used

- **react-router-dom**: For managing navigation and routing within the application.
- **Tailwind CSS**: For creating a responsive design and styling components efficiently.
- **Framer Motion**: For animating interactive character movements, enhancing user engagement.

---

## 2. Principles Followed

- **DRY (Don't Repeat Yourself) Principle**:
  - Reused components and layouts wherever possible to avoid duplication.
  - Example: `PageLayout` component was abstracted out and shared between `Introduction` and `LandingPage` pages.

- **Component Abstraction**:
  - Created reusable components for consistent functionality.
  - Example: `BookStoreLayout` and `OutsideBookStoreLayout` encapsulate shared layout logic for their respective pages.

---

## 3. Structure

The project is structured as follows:

### **Main Components and Pages**
- **`index.js`**: The entry point that renders the `App` component.
- **`App.js`**: Contains the `Routes` component from `react-router-dom` to manage page navigation.

#### Pages
1. **LandingPage**: Shares `PageLayout` with `Introduction` and conditionally renders `FullScreenPrompt`.
2. **Introduction**: Uses `PageLayout` and includes a `SpeechBubble` component.
3. **Goals**: Uses `OutsideBookStoreLayout` for its layout.
4. **BookStorePage**: Uses `BookStoreLayout` to display the bookstore content.
5. **TechnicalSkills**: Renders `OpenBookBackground` and `LogoRows` for its unique design.
6. **BookStorePage2**: Uses the same `BookStoreLayout` as `BookStorePage`.
7. **CampusConnect**: Renders `OpenBookBackground`.
8. **DerekReminderBot**: Renders `OpenBookBackground`.
9. **OutsideBookStore2**: Uses `OutsideBookStoreLayout`.
10. **Contact**: Shares `OutsideBookStoreLayout`.

---

### **Overall Structure**
#### Pages
- Pages are defined as React components under `src/pages/`.
- Each page is routed via `react-router-dom` in `App.js`.

#### Reusable Components
- **Layouts**:
  - `PageLayout`: Shared between `LandingPage` and `Introduction`.
  - `BookStoreLayout`: Shared between `BookStorePage` and `BookStorePage2`.
  - `OutsideBookStoreLayout`: Shared between `Goals`, `OutsideBookStore2`, and `Contact`.
- **UI Components**:
  - `SpeechBubble`: Displays dialogues on various pages.
  - `Character`: Animated with `Framer Motion` for interactivity.
  - `TabBar`: Persistent navigation bar across pages.

#### Styling
- Tailwind CSS is used to ensure responsive and consistent styling across components.

---

## 4. Highlights
- **Reusable Layouts**: Abstraction of layouts (`PageLayout`, `BookStoreLayout`, etc.) reduces redundancy and enforces consistency.
- **Dynamic Animations**: Framer Motion enhances the user experience with smooth character movements.
- **Responsive Design**: Tailwind CSS ensures the application is mobile-friendly and visually appealing on all devices.

---


