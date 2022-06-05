import React from 'react'
import StatTable from './StatTable'

type LanguageNode = {
  name: string,
  color: string
}

type Languages = {
  nodes: Array<LanguageNode>
}

export type RepositoryNode = {
  description: string | null,
  id: string,
  name: string,
  url: string,
  languages: Languages
}

export type RepositoryProps = {
  repository: RepositoryNode,
}

/**
 * Renders the individual repositories in
 * the repository list with the repository given as parameter.
 *
 * @param {RepositoryNode} repository Individual repository node in the repositories array returned by GitHub.
 */
const Repository = ({ repository }: RepositoryProps) => {
  return (
    <div
      className="flex justify-center h-36"
    >
      <StatTable
        repository={repository}
      />
    </div>
  )
}

export default Repository