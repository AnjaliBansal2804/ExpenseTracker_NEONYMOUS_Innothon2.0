import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDelete }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;
