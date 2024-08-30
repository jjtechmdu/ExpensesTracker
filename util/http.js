import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-fc21c-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
