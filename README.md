# 📝 Form Validation Example (HTML, CSS, jQuery)

This project demonstrates a basic form validation logic using **HTML, CSS, and jQuery**.
It prevents a form from submitting when required fields are missing, and provides clear feedback to the user.

---

## 🚀 Features

* Simple and clean **HTML form** with four fields:

  * Name
  * Phone Number
  * Email
  * Location

* **Validation with jQuery**:

  * Checks if all fields are filled before submission.
  * Displays a **red warning message** if any field is left empty.
  * Shows a **green success message** if all details are entered.

* **CSS styling** for a neat, centered form with hover effects and a professional look.

---

## ⚡ How It Works

1. The form uses `onsubmit="return checkDetails()"` to call a jQuery-based validation function.
2. Inside `checkDetails()` (implemented in jQuery):

   * It collects values from all input fields using `$("#id").val().trim()`.
   * If any field is empty:

     * A red warning is displayed → *"Please enter all the details before submitting!"*
     * `return false` prevents the form from being submitted.
   * If all fields are filled:

     * A green success message → *"Form submitted successfully!"*
     * The form is reset with `$("#formbody")[0].reset()`.
     * After 3 seconds, the success message fades out.
     * `return true` allows the form to submit.

---

✨ This example highlights how **jQuery simplifies form validation** compared to plain JavaScript.
