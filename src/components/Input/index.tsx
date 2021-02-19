import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { TextInput, Label, ErrorLabel } from './styles';

interface InputProps extends TextInputProps {
  label: string;
  marginTopLabel: number;
  error: string;
}

const Input: React.FC<InputProps> = ({
  error,
  label,
  marginTopLabel,
  ...restProps
}) => {
  const [onError, setOnError] = useState(false);

  useEffect(() => {
    if (error != '') {
      setOnError(true);
    } else {
      setOnError(false);
    }
  }, [error]);

  return (
    <>
      <Label marginTopLabel={marginTopLabel}>{label}</Label>
      <TextInput error={onError} {...restProps} />
      {onError && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

export default Input;
