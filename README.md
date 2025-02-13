# Project Management Dashboard (Vue 3)

This project is a modern project management dashboard built with Vue 3, leveraging the Composition API, Pinia for state Management, Tailwind CSS for styling, and various other technologies to create a responsive and interactive user interface.

## Setup Instructions

1. Clone the repository:
   \`\`\`
   git clone <https://github.com/ChaniceIrungu/requirements-system.git>
   cd <requirements-system>
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add any necessary environment variables.

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

5. Build for production:
   \`\`\`
   npm run build
   \`\`\`

## Features Implemented

1. **Landing Page**: A landing page with animations and key information about the project management tool.

2. **Dashboard**: 
   - Sidebar navigation
   - Header with search functionality and user menu
   - Project overview with grid layout
   - Task list with drag-and-drop functionality

3. **Requirements Management**:
   - Add new requirements
   - Edit existing requirements
   - Delete requirements
   - Filter and sort requirements

4. **Animations**: Smooth transitions and animations are implemented using the \`@vueuse/motion\` library.

## Assumptions and Design Decisions

1. **Vue 3 and Composition API**: We chose Vue 3 with the Composition API for better organization of component logic and improved performance.

2. **Tailwind CSS**: Used for rapid UI development and consistent styling across the application.

3. **Vite**: Chosen as the build tool for its fast development server and optimized production builds.

4. **Vue Router**: Implemented for seamless navigation between the landing page and dashboard.

5 **Modular Component Structure**: Components are designed to be modular and reusable, improving maintainability and scalability.

## Known Limitations or Issues

1. **Authentication**: The current implementation does not include user authentication. This would need to be added for a production environment.

2. **Performance with Large Datasets**: The application may experience performance issues with a very large number of projects or requirements. Pagination or virtual scrolling would need to be implemented for better performance.

3. **Limited Testing**: While components have been manually tested, comprehensive unit and integration tests have not been implemented.

4. **Accessibility**: While basic accessibility features have been considered, a full accessibility audit has not been performed.

## Future Enhancements

1. Implement user authentication and authorization
2. Add a backend API for data persistence and multi-user support
3. Implement real-time updates using WebSockets
4. Add more advanced project management features (e.g., Gantt charts, time tracking)
5. Improve accessibility and perform a thorough accessibility audit
6. Implement comprehensive testing (unit tests, integration tests, end-to-end tests)
7. Optimize performance for large datasets
8. Add support for file attachments and document management