import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import Field from './Field'
import { todayISO } from '../utils/storage'

const blank = { date: todayISO(), title: '', learned: '', workedOn: '', accomplished: '', understood: '', difficult: '', discovered: '', thoughts: '', learningTime: 30, productivity: 3, topics: [], checklist: [] }

export default function EntryForm({ initial, onClose, onSave }) {
  const [form, setForm] = useState({ ...blank, ...initial, learned: initial?.learned || initial?.body || '', discovered: initial?.discovered || initial?.takeaway || '', learningTime: initial?.learningTime ?? initial?.minutes ?? 30, topics: initial?.topics || (initial?.subject ? [initial.subject] : []), checklist: initial?.checklist || [] })
  const [topics, setTopics] = useState((form.topics || []).join(', '))
  const [checkText, setCheckText] = useState('')
  const update = (key, value) => setForm(current => ({ ...current, [key]: value }))
  const addCheck = () => { if (checkText.trim()) { update('checklist', [...form.checklist, { id: Date.now(), text: checkText.trim(), done: false }]); setCheckText('') } }
  const submit = event => { event.preventDefault(); onSave({ ...form, topics: topics.split(',').map(topic => topic.trim()).filter(Boolean), learningTime: Number(form.learningTime) || 0, productivity: Number(form.productivity) || 1 }) }
  return <div className="modal-backdrop-custom"><form className="entry-modal" onSubmit={submit}><div className="modal-header"><div><span className="eyebrow">A moment to reflect</span><h2>{initial ? 'Edit entry' : 'New diary entry'}</h2></div><button type="button" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button></div><div className="modal-body">
    <div className="form-grid"><Field label="Date"><input required type="date" value={form.date} onChange={e => update('date', e.target.value)} /></Field><Field label="Learning time (minutes)"><input required min="0" type="number" value={form.learningTime} onChange={e => update('learningTime', e.target.value)} /></Field></div>
    <Field label="Title"><input required autoFocus value={form.title} onChange={e => update('title', e.target.value)} placeholder="What did you learn today?" /></Field>
    <Field label="Topics (comma separated)"><input value={topics} onChange={e => setTopics(e.target.value)} placeholder="Coding, reading, language..." /></Field>
    <div className="form-grid"><Field label="What did you learn?"><textarea rows="3" value={form.learned} onChange={e => update('learned', e.target.value)} /></Field><Field label="What did you work on?"><textarea rows="3" value={form.workedOn} onChange={e => update('workedOn', e.target.value)} /></Field></div>
    <div className="form-grid"><Field label="What did you accomplish?"><textarea rows="3" value={form.accomplished} onChange={e => update('accomplished', e.target.value)} /></Field><Field label="What do you understand?"><textarea rows="3" value={form.understood} onChange={e => update('understood', e.target.value)} /></Field></div>
    <div className="form-grid"><Field label="What was difficult?"><textarea rows="3" value={form.difficult} onChange={e => update('difficult', e.target.value)} /></Field><Field label="What did you discover?"><textarea rows="3" value={form.discovered} onChange={e => update('discovered', e.target.value)} /></Field></div>
    <Field label="Thoughts"><textarea rows="3" value={form.thoughts} onChange={e => update('thoughts', e.target.value)} placeholder="Reflect on the session..." /></Field>
    <Field label="Productivity (1–5)"><input type="range" min="1" max="5" value={form.productivity} onChange={e => update('productivity', e.target.value)} /><span>{form.productivity} / 5</span></Field>
    <Field label="Checklist"><div className="checklist-editor">{form.checklist.map((item, index) => <div key={item.id || index}><input type="checkbox" checked={item.done} onChange={e => update('checklist', form.checklist.map((check, i) => i === index ? { ...check, done: e.target.checked } : check))} /><span>{item.text}</span><button type="button" onClick={() => update('checklist', form.checklist.filter((_, i) => i !== index))}>×</button></div>)}<div className="check-add"><input value={checkText} onChange={e => setCheckText(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCheck())} placeholder="Add a task..." /><button type="button" onClick={addCheck}>Add</button></div></div></Field>
  </div><div className="modal-footer"><button type="button" className="cancel-button" onClick={onClose}>Cancel</button><button className="new-button"><FontAwesomeIcon icon={faCheck} /> Save entry</button></div></form></div>
}
