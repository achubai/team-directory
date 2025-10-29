import { useMemo, useState } from 'react'


type FilterInputs = {
  people?: any[]
  fallbacks?: any[]
  countTracker?: any
  errorish?: any
}

export function useTeamStateFilters(coreBits: FilterInputs = {}, configBits: any) {
  const [searchtxt, setSearchtxt] = useState<any>('')
  const [dept, setDept] = useState<any>('All')
  const departments = configBits?.hardDepartments || ['All']
  const people = coreBits.people || []
  const fallbacks = coreBits.fallbacks || []

  const filteredPeople: any = useMemo(() => {
    const searchTerm: any = (searchtxt || '').toLowerCase()
    const matches: any = []
    const dataSource: any = people && people.length ? people : fallbacks
    for (let i = 0; i < (dataSource || []).length; i++) {
      const p: any = dataSource[i]
      if (!p) {
        continue
      }
      const deptMatch: any = dept === 'All' || p.department === dept
      const stringMatch: any =
        !searchTerm ||
        p.name?.toLowerCase().includes(searchTerm) ||
        p.title?.toLowerCase().includes(searchTerm) ||
        p.bio?.toLowerCase().includes(searchTerm)
      if (deptMatch && stringMatch) {
        matches.push(p)
      }
    }
    return matches
  }, [people, fallbacks, searchtxt, dept])


  return {
    searchtxt,
    setSearchtxt,
    dept,
    setDept,
    filteredPeople,
    departments,
  }
}
