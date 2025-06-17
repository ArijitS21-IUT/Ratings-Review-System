## 📄 `README.md`

```markdown
# ⭐ Ratings and Review System

A full-stack web application that allows users to provide ratings and reviews for a fixed list of products. Built as part of Internship Assignment 2025.

---

## 📌 Features

- 🔒 A user can give **only one rating per product**
- ⭐ Users can submit a **rating, review, or both**
- 🧾 All reviews are displayed per product
- ✅ Validations for rating range (1–5), duplicate submissions, and review length
- 🔍 Reviews are stored in a MySQL database
- 🧑 Static user ID used for demo (can be extended with authentication)

---

## 🧱 Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React, JavaScript, CSS |
| Backend   | Node.js, Express.js  |
| Database  | MySQL (via Workbench) |
| API Format| REST                 |

---

## 📁 Folder Structure

```

ratings-review-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── App.css
│   ├── .env
├── sql/
│   └── schema.sql
└── README.md

````

---

## ⚙️ How to Run the Project Locally

### ✅ Prerequisites

- Node.js and npm
- MySQL (Workbench or CLI)
- VS Code or any code editor

---

### 🔧 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ratings-review-system.git
cd ratings-review-system
````

---

### 🔧 Step 2: MySQL Database Setup

1. Open **MySQL Workbench**
2. Create the database by running the `sql/schema.sql`:

```sql
CREATE DATABASE IF NOT EXISTS ratingsdb;
USE ratingsdb;

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 🔧 Step 3: Backend Setup

```bash
cd backend
npm install
```

#### ➕ Create `.env` in `/backend`

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ratingsdb
```

#### ➤ Start Backend Server

```bash
node server.js
```

---

### 🔧 Step 4: Frontend Setup

```bash
cd frontend
npm install
```

#### ➕ Create `.env` in `/frontend` (OPTIONAL)

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

#### ➤ Start Frontend Server

```bash
npm start
```

---

## 🔌 Integration Logic

* Frontend calls REST API from:
  `http://localhost:5000/api/reviews`

* Backend connects to MySQL using credentials in `.env`

* Reviews are inserted into MySQL and fetched per product

---

## ✅ Application Rules

| Rule Description                                               |
| -------------------------------------------------------------- |
| 🔐 A user can only **submit one review** per product           |
| 🧾 Reviews can include only text, only rating, or both         |
| ⭐ Ratings are only valid if **between 1 and 5**                |
| ❌ Rating and review text are **validated** before insertion    |
| 🧍 User ID is **hardcoded as 1** for demo purpose (extendable) |

---

## 🚀 Future Enhancements

* Authentication (login/signup with JWT)
* Image upload in reviews
* Tag extraction from review content
* Product list fetched from database
* Pagination on reviews

---

## 📬 Author & Contact

**Author**: \[Your Name]
**Email**: [you@example.com](mailto:you@example.com)
**Assignment**: Internship Assignment 2025 (Fitpage)

---

## 📝 License

This project is for educational/demo use. Free to modify and deploy.

```

---

Would you like me to:
- Generate this as a downloadable `.md` file?
- Include GitHub badges (e.g. tech used, MIT license)?
- Add command-line test instructions?

Let me know!
```
