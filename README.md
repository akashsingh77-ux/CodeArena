# Online Compiler

A full-stack online compiler that allows users to write, execute, and test code directly in the browser. The application supports multiple programming languages and provides a modern code-editor experience with real-time code execution.

## Live Demo

Frontend: https://online-compiler-nu-vert.vercel.app/

Backend: https://online-compiler-backend-ae1t.onrender.com/

## Features

* Execute code directly from the browser
* Multi-language support

  * C++
  * Java
  * JavaScript
  * Python
* Custom input support
* Real-time output display
* Dark mode interface
* Monaco Code Editor integration
* Responsive UI
* Fast API-based code execution

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Monaco Editor
* CSS

### Backend

* Node.js
* Express.js
* Judge0 API

### Deployment

* Vercel (Frontend)
* Render (Backend)
* GitHub

## Project Architecture

Frontend (React)
↓
Axios API Requests
↓
Backend (Node.js + Express)
↓
Judge0 API
↓
Compilation & Execution
↓
Output Returned to Frontend

## Installation

### Clone Repository

```bash
git clone https://github.com/Prince-Singh-1/Online_Compiler.git
cd Online_Compiler
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoint

### Execute Code

```http
POST /api/run
```

Request Body:

```json
{
  "source_code": "print('Hello World')",
  "stdin": "",
  "language": "python"
}
```

## Future Enhancements

* User authentication
* Code sharing links
* Execution history
* Custom themes
* Competitive programming mode
* AI-powered code assistance

## Author

Prince Singh

GitHub:
https://github.com/Prince-Singh-1
