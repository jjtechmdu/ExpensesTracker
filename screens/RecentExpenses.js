import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  //const expensesCtx = useContext(ExpensesContext);
  const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expesnes = await fetchExpenses();
      setFetchedExpenses(expesnes);
    }
    getExpenses();
  }, []);

  //const recentExpesnes = expensesCtx.expenses.filter((expense) => {
  const recentExpesnes = fetchedExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpesnes}
      expensePeriod="Last 7 Days"
      fallbackText="No expenses registed for the last 7 days!"
    />
  );
}
export default RecentExpenses;
