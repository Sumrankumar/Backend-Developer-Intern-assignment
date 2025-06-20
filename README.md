---

### 💼 **Backend Developer Intern — Project Explanation**

**Objective:**  
Build a basic backend that allows users to **register** and **log in** securely.

**Features:**
- User Registration with Full Name, Email, Password
- Password hashing using **bcryptjs**
- Login validation
- JWT Authentication (Bonus)

**Tech Stack Used:**
- **Node.js** + **Express.js**
- **MySQL**
- **bcryptjs**
- **jsonwebtoken**

**How it Works:**
1. **Registration:**  
   - User provides full name, email, password.
   - Password is hashed and stored in MySQL.

2. **Login:**  
   - Validates email & password.
   - Generates a JWT token valid for 1 hour.

**How to Run:**
- Clone the repo & install dependencies:
  ```bash
  npm install
