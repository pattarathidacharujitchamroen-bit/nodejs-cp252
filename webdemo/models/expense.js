class Expense {
  /**
  * Represents a Expense.
  * @constructor
  * @param {date} date - The date of the expense.
  * @param {float} income - The author of the book.
  * @param {number} expense - The expense amount.
  * @param {string} detail - The details of the transaction.
  * @param {number} income - The income amount.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate the total income from all expenses.
   * @returns {number} Total income.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate the total expense amount.
   * @returns {number} Total expense.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate the remaining balance.
   * @returns {number} Total income minus total expense.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
