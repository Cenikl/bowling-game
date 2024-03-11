# Bowling Command Line App <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="30" height="30"> 🎳

Welcome to the Bowling Command Line App! This is a simple command-line application written in JavaScript that allows you to play a simple game of bowling.<br>

## What's inside :
 This README will guide you through installing, running, using the application, showing all features and tools used on the project.

# Table of Contents 🔍
- [Installation](#installation) 📦
- [How to use](#usage) 📝
- [Features](#features) 🌟
- [Development Tools](#tools) 🛠️
- [Workflows](#continuous-integration-and-deployment-cicd) 🔄


# Installation 📦

To run the app, you need to have Node.js 
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="NodeJs Logo" width="30" height="30"> installed on your device.

1. **Windows:**
   - Visit the [official Node.js website](https://nodejs.org/).
   - Download the Node.js installer for Windows.
   - Run the installer and follow the instructions to install Node.js.

2. **macOS:**
   - You can use [Homebrew](https://brew.sh/) to install Node.js. If you don't have Homebrew installed, visit the [Homebrew website](https://brew.sh/) for instructions.
   - Open Terminal.
   - Run the following command to install Node.js:

     ```bash
     brew install node
     ```

3. **Linux (Debian/Ubuntu):**
   - Open Terminal.
   - Run the following commands to update your package index and install Node.js:

     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

Once you have Node.js installed, proceed with the following steps to run the app:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Cenikl/bowling-game.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bowling-game
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
# Usage 📝

After completing the installation steps, you can use the app by following these instructions:

1. Run the application:

    ```bash
    npm start
    ```

2. Choose the first command if you want to play, the second to quit

3. Follow the prompts to input the number of pins knocked down in each frame.

4. Repeat step 3 until you finish all 5 frames.

5. The application will calculate and display your current score after each frame and the result of the game at the end.

6. A prompt will appear if you want to play a new game

7. Enjoy your game of bowling! 🎉

# Features 🌟

- Simple command-line interface for easy interaction.
- Supports tracking of scores for up to 5 frames.
- Calculates scores according to some specific rules:
  - 5 Frames with 3 tries each
  - After each frame, all pins are restored
  - A strike adds 15 points plus the next three tries
  - A spare adds 15 points plus the next two tries
  - If the player gets a strike/spare on the last frame, the game gives bonus tries

# Tools 🛠️

This project use ESLint for linting and Jest for testing.

### ESLint

- **ESLint:** This project is configured with ESLint to enforce coding standards and best practices. It follows the [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml) for coding standards.

<br>The ESLint configuration file can be found in the root directory of the project. To run ESLint and check for linting errors, execute the following command:

    npm run lint

### Jest

- **Jest:** Jest is used for testing and make code coverage in this project. Test files are located in the `tests` directory. To run the tests, use the following command, coverage should always be above 80%:

    ```bash
    npm test
    ```
# Continuous Integration and Deployment (CI/CD) 🔄

This project use GitHub Actions for continuous integration (CI).<br>These workflows automate various tasks such as testing, linting, and deployment to ensure the project's codebase is consistent, reliable, and deployable.


## CI Workflow :

The CI workflow runs whenever changes are pushed to the repository or pull requests are opened on the main branch. It performs the following tasks:

- Installs project dependencies
- Runs linting to enforce code quality
- Executes unit tests to verify code functionality

You can view the full CI workflow definition in [`.github/workflows/CI.yml`](.github/workflows/CI.yml).

### CD Workflow :
 🚧 - Not implemented yet...


