import React from 'react'
import StatTable from './StatTable'
import IRepositoryData from '../types/absence.type'
import IMemberData from '../types/member.type'

export type RepositoryProps = {
  absence: IRepositoryData,
  member: IMemberData
}

const Repository = ({ absence, member }: RepositoryProps) => {

  return (
    <div
      className="flex justify-center h-8"
    >
      <StatTable
        absence={absence}
        member={member}
      />
    </div>
  )
}

export default Repository