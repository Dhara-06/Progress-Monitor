import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import EntryForm from './components/EntryForm'
import Dashboard from './pages/Dashboard'
import Diary from './pages/Diary'
import EntryDetails from './pages/EntryDetails'
import Calendar from './pages/Calendar'
import Progress from './pages/Progress'
import Notes from './pages/Notes'
import Journey from './pages/Journey'
import { STORAGE_KEYS, readStored, writeStored } from './utils/storage'

const id = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`
export default function App() {
  const [entries, setEntries] = useState(() => readStored(STORAGE_KEYS.entries))
  const [notes, setNotes] = useState(() => readStored(STORAGE_KEYS.notes))
  const [goals] = useState(() => readStored(STORAGE_KEYS.goals))
  const [journey, setJourney] = useState(() => readStored(STORAGE_KEYS.journey))
  const [dark, setDark] = useState(() => readStored('learnlog_theme')[0] === 'dark')
  const [modal, setModal] = useState(null)
  useEffect(() => writeStored(STORAGE_KEYS.entries, entries), [entries])
  useEffect(() => writeStored(STORAGE_KEYS.notes, notes), [notes])
  useEffect(() => writeStored(STORAGE_KEYS.journey, journey), [journey])
  useEffect(() => { document.body.classList.toggle('dark-mode', dark); writeStored('learnlog_theme', [dark ? 'dark' : 'light']) }, [dark])
  const saveEntry = entry => { setEntries(current => modal?.id ? current.map(item => item.id === modal.id ? { ...entry, id: modal.id } : item) : [{ ...entry, id: id(), createdAt: new Date().toISOString() }, ...current]); setModal(null) }
  const createNote = () => { const note = { id: id(), title: '', content: '', category: 'Ideas', createdAt: new Date().toISOString() }; setNotes(current => [note, ...current]); return note }
  return <BrowserRouter><Layout dark={dark} onToggleTheme={() => setDark(value => !value)} onNewEntry={() => setModal({})}><Routes>
    <Route path="/" element={<Dashboard entries={entries} notes={notes} goals={goals} onNew={() => setModal({})} />} />
    <Route path="/diary" element={<Diary entries={entries} onNew={() => setModal({})} onEdit={setModal} onDelete={id => setEntries(items => items.filter(item => item.id !== id))} />} />
    <Route path="/entry/:id" element={<EntryDetails entries={entries} onEdit={setModal} onDelete={id => setEntries(items => items.filter(item => item.id !== id))} />} />
    <Route path="/calendar" element={<Calendar entries={entries} />} /><Route path="/progress" element={<Progress entries={entries} />} />
    <Route path="/notes" element={<Notes notes={notes} onCreate={createNote} onUpdate={note => setNotes(items => items.map(item => item.id === note.id ? note : item))} onDelete={noteId => setNotes(items => items.filter(item => item.id !== noteId))} />} />
    <Route path="/journey" element={<Journey journey={journey} onCreate={item => setJourney(items => [...items, { ...item, id: id() }])} onUpdate={item => setJourney(items => items.map(value => value.id === item.id ? item : value))} onDelete={itemId => setJourney(items => items.filter(item => item.id !== itemId))} />} />
  </Routes></Layout>{modal && <EntryForm initial={modal.id ? modal : null} onClose={() => setModal(null)} onSave={saveEntry} />}</BrowserRouter>
}
