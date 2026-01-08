Sales Dashboard-
A responsive Sales Dashboard built using Next.js (App Router), React, TypeScript, Tailwind CSS, and Recharts.
The dashboard visualizes monthly sales data with Bar, Line, and Pie charts, along with a Sales Threshold filter that works using Apply and Reset buttons.
--------------------------------------------------------------------------------------------------------------------------
** Features-

  * Interactive Bar, Line, and Pie charts

  * Consistent color palette across all charts

  * Chart type switcher (Bar / Line / Pie)

  * Sales Threshold filter

      Filter applies only after clicking “Apply Filter”

      Reset button clears filter and restores original data

  * Fully responsive layout
---------------------------------------------------------------------------------------------------------------------------

** Tech Stack-

  Next.js 13+ (App Router)

  React

  TypeScript

  Tailwind CSS

  Recharts
-------------------------------------------------------------------------------------------------------------------------

** Application Logic-
  Sales Data
  Sales data is mocked using useEffect in dashboard/page.tsx
  Each record follows the structure:
  {
    month: string;
    amount: number;
  }
-------------------------------------------------------------------------------------------------------------------------
** Sales Threshold Filter-

  The input value is stored in a local state inside the FilterInput component
  The applied threshold is updated only when the Apply Filter button is clicked
  Charts update only after applying the filter
  The Reset button clears the input and restores the original dataset
  
  Filtering logic:
  
  const filteredSales = sales.filter(
    (item) => item.amount > threshold
  );
--------------------------------------------------------------------------------------------------------------------------

** Chart Switcher-
  Allows switching between Bar, Line, and Pie charts
  The active chart type is visually highlighted
-------------------------------------------------------------------------------------------------------------------------

** Chart Behavior-

  Bar Chart:
  Each bar represents a month with a unique color
  Axis labels remain visible on hover
  
  Line Chart:
  Uses a straight line
  Each data point is represented with a different colored dot
  Active dots increase in size on hover
  
  Pie Chart:
  Each slice uses a distinct color
  Tooltip displays sales details
--------------------------------------------------------------------------------------------------------------------------

** Running the Project Locally-

  1)Clone the repository:
  git clone <repository-url>
  
  2)Install dependencies:
  npm install
  
  3)Start the development server:
  npm run dev
  
  4)Open the application in the browser:
  http://localhost:3000
  
  5)Navigate to:
  /dashboard

** Deployment

The project can be deployed on Vercel
Push the code to GitHub
Import the repository into Vercel
Deployment happens automatically on each push
