import React from 'react'
import StatTable from './StatTable'
import IRepositoryData from '../types/absence.type'
import IMemberData from '../types/member.type'
import { Dictionary } from '@reduxjs/toolkit'

type Language = {
  name: string,
  color: string
}

type Repository = {
  description: string,
  id: string,
  name: string,
  url: string,
  languages: any
}

export type RepositoryProps = {
  repository: Repository,
}

const Repository = ({ repository }: RepositoryProps) => {
  return (
    <div
      className="flex justify-center h-32"
    >
      <StatTable
        repository={repository}
      />
    </div>
  )
}

export default Repository