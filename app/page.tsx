/**
 * Bare entry file that just hands off to the chaotic directory feature.
 * Keeping it client side on purpose so everything stays janky.
 */
'use client'

import MessyDirectory from './teamDirectoryMain'

export default function Home() {
  return <MessyDirectory headerThing="Team Directory" subtitleNote="Meet our talented team members." />
}
