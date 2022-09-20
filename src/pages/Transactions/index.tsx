import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'

export const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />
      <main className="max-w-screen-xl mx-auto px-4 xl:px-0 my-16 flex flex-col gap-4">
        <SearchForm />
        <table className="table-auto border-separate border-spacing-x-0 border-spacing-y-2 w-full">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td className="px-8 py-5 bg-gray-700 rounded-tl-md rounded-bl-md">
                    {transaction.description}
                  </td>
                  <td
                    className={`px-8 py-5 bg-gray-700 ${
                      transaction.type === 'income'
                        ? 'text-green-300'
                        : 'text-red-300'
                    }`}
                  >
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </td>
                  <td className="px-8 py-5 bg-gray-700">
                    {transaction.category}
                  </td>
                  <td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </>
  )
}
