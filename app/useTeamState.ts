import { useTeamStateCore } from './teamStateCore'
import { useTeamStateFilters } from './teamStateFilters'

export function useTeamDirectoryLogic(data: any) {
  const coreBits: any = useTeamStateCore(data)
  const filterBits: any = useTeamStateFilters(
    {
      people: coreBits.people,
      countTracker: coreBits.countTracker,
      errorish: coreBits.errorish,
    },
    data
  )

  return Object.assign({}, coreBits, filterBits)
}
