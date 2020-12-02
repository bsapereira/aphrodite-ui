import React from 'react';
import {Container} from './styles';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: 'default' | 'primary' | 'success' | 'danger' | 'info' | 'warning';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  mode = 'default',
  size = 'medium',
  label,
  loading = false,
  ...props
}) => {
  return (
    <Container
      type="button"
      mode={mode}
      size={size}
      {...props}
    >
      {loading ? "Carregando..." : label}
    </Container>
  );
};
