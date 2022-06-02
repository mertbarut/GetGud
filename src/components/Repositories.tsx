import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Repository from './Repository'
import EmptyListNotification from './EmptyListNotification'

export type RepositoriesProps = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  queryType: string,
  queryStartDate: Date,
  queryEndDate: Date
}

const Repositories = ({
  absences,
  members,
  queryType,
  queryStartDate,
  queryEndDate
}: RepositoriesProps) => {
  const currentPage = useSelector((state: State) => state.page)
  const totalRepositories = useSelector((state: State) => state.totalRepositories)
  const dispatch = useDispatch()
  const {
    setTotalRepositories
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setTotalRepositories(absences
      .filter((absence) => (
        absence.type.toLowerCase().includes(queryType.toLowerCase()) &&
        new Date(absence.startDate) >= queryStartDate &&
        new Date(absence.endDate) <= queryEndDate
      ))
      .length)
  }, [queryType, queryStartDate, queryEndDate])

  return (

    <div
      className='flex justify-center min-h-[530px]'
    >
      {
        totalRepositories === 0
          ?
          <EmptyListNotification />
          :
          <ul>
            {absences
              .sort((absence1, absence2) => (
                new Date(absence1.startDate).getTime() - new Date(absence2.startDate).getTime()
              ))
              .filter((absence) => (
                absence.type.toLowerCase().includes(queryType.toLowerCase()) &&
                new Date(absence.startDate) >= queryStartDate &&
                new Date(absence.endDate) <= queryEndDate
              ))
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((absence) => (
                <li
                  key={absence.id}
                  className='text-gray-700 font-semibold text-xl mb-0.5 border rounded-lg py-2'
                >
                  <Repository
                    absence={absence}
                    member={members.filter((member) => member.userId === absence.userId)[0]}
                  />
                </li>
              ))}
          </ul>
      }
    </div>
  )
}

export default Repositories