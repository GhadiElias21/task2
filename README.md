# Product API Tester

This project tests product data from a mock API for potential data issues.

## ✅ What it Does

- Checks response status (200)
- Verifies product fields:
  - Title is not empty
  - Price is not negative
  - Rating must not exceed 5
- Logs all defective products to the console
- Stores the defects in a Postman environment variable

## 🔗 API Used
[https://fakestoreapi.com/products](https://fakestoreapi.com/products)

## 📦 How to Use in Postman
1. Make a `GET` request to the URL.
2. Go to the "Tests" tab and paste `test-script.js`.
3. Hit **Send**.
4. View console output for defect list.
