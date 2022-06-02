import { ChangeEventHandler } from 'react'
import StatTableHeader from './StatTableHeader'

export type RepositoriesListHeaderProps = {
  queryStartDate: Date,
  queryEndDate: Date,
  queryType: string,
  onChangeQueryType: ChangeEventHandler<HTMLInputElement>
  onChangeQueryStartDate: (date: Date) => void
  onChangeQueryEndDate: (date: Date) => void
}

const RepositoriesListHeader = ( {
  queryType,
  queryStartDate,
  queryEndDate,
  onChangeQueryType,
  onChangeQueryStartDate,
  onChangeQueryEndDate
} : RepositoriesListHeaderProps ) => {

  return (
    <div
      className="flex justify-center mx-auto text-gray-700 font-semibold text-xl h-16"
    >
      <StatTableHeader
        queryType={queryType}
        queryStartDate={queryStartDate}
        queryEndDate={queryEndDate}
        onChangeQueryType={onChangeQueryType}
        onChangeQueryStartDate={onChangeQueryStartDate}
        onChangeQueryEndDate={onChangeQueryEndDate}
      />
    </div>
  )
}

export default RepositoriesListHeader