import type React from 'react';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: React.ReactNode;
}
