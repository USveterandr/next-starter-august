# TODO: Admin Login & Expense Management Fixes

## 1. Address Administrator Login Issue
- [ ] Modify `src/app/login/page.tsx` to recognize `isaactrinidadllc@gmail.com` and `thebadboygarcia@gmail.com` as valid administrator credentials for the mock authentication.

## 2. Add Expense Management to Dashboard
- [ ] Add an "Expenses" tab to the navigation in `src/app/dashboard/page.tsx`.
- [ ] Create a component for the "Expenses" tab content, initially managing expenses in component state (`useState`).
    - [ ] Design the expense list display.
    - [ ] Create the "Add Expense" form with fields for amount, description, date, and category.
    - [ ] Implement the logic to add new expenses to the state.
    - [ ] Implement the logic to delete or edit expenses (basic UI).
- [ ] Define the expense data structure (e.g., { id, amount, description, date, category }).
- [ ] Update the "Add Expense" form to include a dropdown for selecting expense categories, pre-populated with: "mortgage", "Car Loan", "Car Insurance", "Bank Loan", "Credit Card payment", and existing standard categories (e.g., "Food", "Transport", "Utilities").

## 3. Test Changes
- [ ] Verify administrator login for specified emails.
- [ ] Test adding expenses with new and existing categories.
- [ ] Verify the expense list updates dynamically.
