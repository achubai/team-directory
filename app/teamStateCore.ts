import { useEffect, useState } from 'react'

export function useTeamStateCore(configSnapshot: any) {
  const [people, setPeople] = useState<any>([])
  const [loadingish, setLoadingish] = useState<any>(false)
  const [errorish, setErrorish] = useState<any>(null)
  const [countTracker, setCountTracker] = useState<any>(0)


  useEffect(() => {
    setLoadingish(true)
    try {
        setPeople(configSnapshot?.incomingPeople)
        setCountTracker(configSnapshot?.incomingPeople?.length)
        setLoadingish(false)
    } catch (err: any) {
      setErrorish(err)
      setLoadingish(false)
    }
  }, [configSnapshot])

  return {
    people,
    setPeople,
    loadingish,
    setLoadingish,
    errorish,
    setErrorish,
    countTracker,
    setCountTracker,
    configSnapshot,
  }
}
