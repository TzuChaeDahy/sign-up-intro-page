
# Frontend Mentor - Intro Page with Sign Up Form

This project is a solution to the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges) for creating an introductory page with a sign-up form. The project is built using Vite, TypeScript, and React.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project implements a responsive introductory page with a sign-up form. The form includes input validation and utilizes `useReducer` for state management. Additionally, it uses session storage to persist user data.

## Features

- **Responsive Design:** Ensures the application is usable on various screen sizes.
- **Form Validation:** Validates user inputs to provide a better user experience.
- **State Management:** Uses `useReducer` for managing form state.
- **Session Storage:** Saves user data in session storage for persistence.

## Technologies Used

- **Vite:** Fast and modern build tool.
- **TypeScript:** Adds static typing to JavaScript.
- **React:** Library for building user interfaces.
- **CSS:** For styling the application.

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/TzuChaeDahy/sign-up-intro-page.git
   ```
2. Navigate to the project directory
   ```sh
   cd sign-up-intro-page
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## Usage

- **Sign Up Form:** Users can fill out the sign-up form, and their input will be validated in real-time.
- **Session Storage:** Once the form is submitted, user data is stored in the browser's session storage.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
