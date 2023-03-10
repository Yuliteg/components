

const Table = ({ data, config, keyFn }) => {

  const renderedHeader = config.map((column) => {
    return (
      <th key={column.label}>{column.label}</th>
    )
  })

  const renderedRow = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td className="p-4" key={column.label}>{column.render(rowData)}</td>
    })
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeader}
        </tr>
      </thead>
      <tbody>
        {renderedRow}
      </tbody>
    </table>
  )
}

export default Table
