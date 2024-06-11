import React from 'react'

const Button = ({ variant = 'default', href, children }) => {
  const classes = {
    default: 'bg-do-blue-light text-white hover:bg-do-blue-medium active:bg-do-blue-dark',
    secondary: 'border border-slate-300 text-do-blue-dark hover:bg-slate-50 focus:bg-slate-50 mb-2'
  }

  const classNames = [classes[variant]]

  if (href) {
    return (
      <a
        className={`mb-2 me-2 rounded-lg px-6 py-2.5 text-sm font-semibold focus:outline-dotted focus:outline-2 ${classNames.join(' ')}`}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        type="button"
        className={`mb-2 me-2 rounded-lg px-6 py-2.5 text-sm font-semibold focus:outline-dotted focus:outline-2 ${classNames.join(' ')}`}
      >
        {children}
      </button>
    )
  }
}

export default Button
