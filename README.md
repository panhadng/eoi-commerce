# E-Commerce Client-Side Web Application

This is a modern e-commerce client-side web application built with [Next.js](https://nextjs.org). It serves as a prototype for testing AI models, various algorithms, and APIs in an e-commerce context.

## Features

- Built with Next.js 14
- React 18 for efficient UI rendering
- TypeScript for type safety
- Tailwind CSS for responsive styling
- Integration with AWS S3 for image storage
- API routes for server-side logic

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or later)
- npm or Yarn package manager

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `app/`: Contains the main application code
- `components/`: Reusable React components
- `pages/`: Next.js pages and API routes
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## Available Scripts

- `npm run dev` or `yarn dev`: Starts the development server
- `npm run build` or `yarn build`: Builds the application for production
- `npm start` or `yarn start`: Runs the built application in production mode
- `npm run lint` or `yarn lint`: Runs the linter to check for code quality issues

## Environment Variables

To run this project, you might need to set up the following environment variables:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `AWS_STORAGE_BUCKET_NAME`: Your S3 bucket name
- `AWS_S3_REGION_NAME`: Your S3 bucket region

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
