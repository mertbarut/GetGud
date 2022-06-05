import React from 'react'
import StatTable from './StatTable'

type LanguageNode = {
  name: string,
  color: string
}

type Language = {
  nodes: Array<LanguageNode>
}

export type RepositoryNode = {
  description: string | null,
  id: string,
  name: string,
  url: string,
  languages: Language
}

export type RepositoryProps = {
  repository: RepositoryNode,
}

const Repository = ({ repository }: RepositoryProps) => {
  return (
    <div
      className="flex justify-center h-44"
    >
      <StatTable
        repository={repository}
      />
    </div>
  )
}

export default Repository