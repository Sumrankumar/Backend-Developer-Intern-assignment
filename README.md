
## 📌 **Backend Developer Intern — Assignment**

### 🎯 **Objective**
Build a basic backend that allows users to **register** and **log in** securely.

---

### 🚀 **Tech Stack**
- **Node.js** + **Express.js**
- **MySQL**
- **bcryptjs**
- **jsonwebtoken**
- **Docker** (optional, but included)

---

### 📁 **Project Structure**
```
BackendProject/
 ├── server.js
 ├── controllers/
 ├── routes/
 ├── models/
 ├── .env
 ├── Dockerfile
 ├── docker-compose.yml
 ├── README.md  ✅ (this file)
 ├── node_modules/
 └── package.json
```

---

### ⚙️ **Environment Variables (`.env`)**
Example:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_passwor
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

✅ **Note:** Replace `your_mysql_password` and `your_jwt_secret_key` with your actual values.

---

### 🐳 **Docker Setup**

**1️⃣ `Dockerfile`**  
Example:
```Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]
```

**2️⃣ `docker-compose.yml`**  
Example:
```yaml
version: "3.8"

services:
  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: mysecretpassword
      MYSQL_DATABASE: backend_auth
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      DB_HOST: db
      DB_USER: root
      DB_PASSWORD: mysecretpassword
      DB_NAME: backend_auth
      JWT_SECRET: mysecretjwtkey
    depends_on:
      - db

volumes:
  db_data:
```

✅ **Tip:** Replace `mysecretpassword` and `mysecretjwtkey` with your own secure values.

---

### 🔑 **How to Test (Postman)**

- **Register:**  
  POST → `http://localhost:5000/api/auth/register`  
  JSON Body:
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

- **Login:**  
  POST → `http://localhost:5000/api/auth/login`  
  JSON Body:
  ```json
  {
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

- ✅ You will get a JWT token on successful login.

---

### ✅ **Sample Credentials**
| Full Name | Email | Password |
|-----------|-------|----------|
| John Doe | john@example.com | yourpassword |

---

### 🖥️ **How to Run Without Docker**

```bash
# Install dependencies
npm install

# Run the server
npm run dev
```

---

### ✅ **Submission**
- ✅ **GitHub Repo:** https://github.com/Sumrankumar/Backend-Developer-Intern-assignment
- ✅ **This README.md**
- ✅ **PDF Explanation:** Use this same content or summarize it.

---

### 🎉 **Done!**

