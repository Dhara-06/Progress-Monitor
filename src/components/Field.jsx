import React from 'react'

export default function Field({ label, children, className = '' }) {
  return <label className={`form-label learnlog-field ${className}`}><span>{label}</span>{children}</label>
}
