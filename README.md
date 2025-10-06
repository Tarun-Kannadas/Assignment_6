# 📝 Form Validation with Button Submit (HTML, CSS, JavaScript)

This project demonstrates **basic form validation** when the submit button is of type `button`.  
Unlike normal form submissions, here the button click is handled manually in JavaScript, which decides whether the form should be submitted or not.

---

## 🚀 Features
- **HTML form** with four required fields:
  - Name  
  - Phone Number  
  - Email  
  - Location  
- **Validation in JavaScript**:
  - If any field is empty → shows a red warning below the form.  
  - If all fields are filled → shows an alert *"Form has been submitted"* and then triggers `form.submit()`.  
- **CSS styling** for centered form layout with borders, shadows, and a professional look.  

---

## ⚡ How It Works
1. The form uses a **button of type="button"**, so it will not auto-submit.  
2. On clicking **Submit**, the `onclick="checkDetails()"` is triggered.  
3. Inside `checkDetails()`:
   - Values of all input fields are collected.  
   - If any are missing:
     - A red warning message is shown.  
   - If all are filled:
     - An alert confirms submission.  
     - JavaScript calls `form.submit()` to manually submit the form.
