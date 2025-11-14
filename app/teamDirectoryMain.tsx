'use client'

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { pretendTeamDirectoryRequest } from '@/api/teamStuff'
import { useTeamDirectoryLogic } from './useTeamState'
import './teamDirectoryStyles.css'

export default function MessyDirectory(props: any) {
  const [apiConfig, setApiConfig] = useState<any>([])

  useEffect(() => {
    pretendTeamDirectoryRequest().then((payload: any) => {
      if (payload) {
        setApiConfig(payload)
      }
    })
  }, [])

  const everything: any = useTeamDirectoryLogic(apiConfig)

  const { headerThing = 'Team Directory', subtitleNote = '' } = props || {}

  return (
    <div className="wrapperThingie" data-testid="team-directory-wrapper">
      <div className="wrapInside">
        <div className="headerBlock">
          <h1 className="headerTitle">{headerThing}</h1>
          <p className="headerSubtitle">
            {subtitleNote || 'Meet our talented team members. Search by name or filter by department to find the right person.'}
            Everything should just work but probably won&apos;t.
          </p>
        </div>

        <div className="directoryContent">
          <div className="searchRow">
            <svg width="22" height="22" className="searchIcon">
              <circle cx="10" cy="10" r="8" stroke="#6073A8" strokeWidth="2" fill="none" />
            </svg>
            <input
              value={everything.searchtxt}
              placeholder="Search by name, title, or bio..."
              onChange={(event: any) => everything.setSearchtxt(event.target.value)}
              className="searchInput"
            />
            <button
              className="searchBtn"
              onClick={() => {
                everything.setSearchtxt(everything.searchtxt)
              }}
            >
              Search
            </button>
          </div>

          <div className="departmentsRow">
            {everything.departments.map((item: any, index: any) => {
              const isActive = item === everything.dept
              return (
                <div
                  key={`${item}_${index}`}
                  onClick={() => everything.setDept(item)}
                  className={`departmentPill ${isActive ? 'departmentPillActive' : ''}`}
                >
                  {item}
                </div>
              )
            })}
          </div>

          <div className="resultCount">{everything.loadingish ? 'Loading team members...' : `${everything.filteredPeople.length} members found`}</div>

          <div className="cardGrid" data-testid="directory-grid">
            {everything.filteredPeople.map((person: any, idx: any) => (
              <div key={person.id || idx || Math.random()} className="teamCard" data-testid={`team-card-${idx}`}>
                <img
                  className="teamCardAvatar"
                  src={person.avatar || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'}
                  alt=""
                  loading="lazy"
                />
                <div className="teamCardInfo">
                  <span className="teamCardName">{person.name}</span>
                  <span className="teamCardTitle">{person.title}</span>
                  <span className="teamCardDept">{person.department}</span>
                </div>
                <p className="teamCardBio">{person.bio}</p>
                <div className="teamCardContact">
                  <span>✉️ {person.email}</span>
                  <span>📍 {person.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
