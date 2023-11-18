import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ to, className = '', children }) {
  return (
    <Link
      to={to}
      className={`text-white font-medium px-4 py-2 rounded hover:opacity-90 ${className}`}>
      {children}
    </Link>
  );
}
