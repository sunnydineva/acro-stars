# Acro Stars - Next.js Migration

This project is a migration of the Acro Stars static website to a modern web application using Next.js, React, and TypeScript.

## Project Structure

```
nextjs-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Homepage
│   └── public-documents/   # Public Documents page
│       └── page.tsx
├── components/             # Reusable React components
│   ├── Header.tsx          # Site header with navigation
│   └── Footer.tsx          # Site footer
├── data/                   # Data files
│   └── publicDocuments.ts  # Public documents data
├── public/                 # Static assets
│   └── images/             # Images used in the site
│       ├── heroes/         # Hero section background images
│       └── partners/       # Partner logos
├── styles/                 # CSS styles
│   ├── variables.css       # CSS variables (colors, etc.)
│   ├── globals.css         # Global styles
│   ├── Header.module.css   # Header component styles
│   ├── Footer.module.css   # Footer component styles
│   ├── Home.module.css     # Homepage styles
│   └── PublicDocuments.module.css  # Public Documents page styles
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## Key Features

1. **Modern Tech Stack**:
   - Next.js with App Router
   - React with functional components
   - TypeScript for type safety
   - CSS Modules for component-scoped styling

2. **Responsive Design**:
   - Mobile-friendly layout
   - Improved spacing and typography
   - Consistent styling across all pages

3. **New Public Documents Section**:
   - Organized document listing by category
   - Easy-to-update document data structure
   - Professional design with download links

## How to Use

### Running the Application

1. Install dependencies:
   ```bash
   cd nextjs-app
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start the production server:
   ```bash
   npm start
   ```

### Adding New Public Documents

To add new documents to the Public Documents page, edit the `data/publicDocuments.ts` file:

1. Add a new document object to the `publicDocuments` array:
   ```typescript
   {
     id: "doc-009",  // Unique ID
     title: "Заглавие на документа",
     description: "Описание на документа (незадължително)",
     date: "2024-05-01",  // Format: YYYY-MM-DD
     type: "board-decision",  // Options: 'board-decision', 'protocol', 'other'
     url: "/documents/your-document-file.pdf"  // Path to the document file
   }
   ```

2. Place the actual document files in the `public/documents/` directory.

### Editing Content

- **Text Content**: Edit the text directly in the React components in the `app/` directory.
- **Navigation**: Update the navigation links in the `components/Header.tsx` file.
- **Styling**: Modify the CSS variables in `styles/variables.css` to change the color scheme.

## Navigation Structure

- **Начало** (Home) - `/`
- **Тренировки** (Trainings) - `/trainings`
- **Галерия** (Gallery) - `/gallery`
- **За нас** (About Us) - Dropdown menu:
  - **За нас** (About Us) - `/about`
  - **Треньори** (Coaches) - `/coaches`
  - **Контакти** (Contacts) - `/contact`
  - **Спонсорство** (Sponsorship) - `/sponsorship`
  - **Публични документи** (Public Documents) - `/public-documents`

## Future Improvements

- Complete the migration of all pages from the original site
- Add animations for smoother transitions
- Implement internationalization for multilingual support
- Add a content management system for easier updates
