import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, style, ...props }) => {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'min(var(--space-2), 12px) var(--space-3)',
    borderRadius: 'var(--radius)',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'var(--transition)',
    border: '1px solid transparent',
    outline: 'none',
  };

  const variants: Record<'primary' | 'secondary', React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--accent)',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: 'transparent',
      borderColor: 'var(--border-color)',
      color: 'var(--text-primary)',
    }
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant], ...style }}
      onMouseOver={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#6B0000'; // Darker red on hover
        } else {
          e.currentTarget.style.backgroundColor = 'var(--bg)';
        }
      }}
      onMouseOut={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--accent)';
        } else {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
