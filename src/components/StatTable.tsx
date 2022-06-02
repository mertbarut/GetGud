import React from 'react'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators, State } from './../state'
import { bindActionCreators } from '@reduxjs/toolkit'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const StatTable = ({ absence, member }: AbsenceProps ) => {
  const dispatch = useDispatch()
  const displayedAbsence = useSelector((state: State) => state.displayedAbsence)

  const { setDisplayedAbsence } = bindActionCreators(actionCreators, dispatch)

  return (
    <div
      data-testid="stattable"
      className="grid grid-cols-4 shrink-0 place-items-center"
    >
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-right"
      >
        {member.name}
      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.type}
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.startDate}
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.endDate}
      </div>
    </div>
  )
}

export default StatTable
