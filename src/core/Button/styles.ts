import styled from 'styled-components';
import {ButtonProps} from './';

type Size = Pick<ButtonProps, 'size'>['size'];
type Mode = Pick<ButtonProps, 'mode'>['mode'];

const handleSize = (size: Size):string => {
  switch(size) {
    case "small":
      return `
        font-size: 12px;
        padding: 10px 16px;
      `;
    case "medium":
        return `
          font-size: 14px;
          padding: 11px 20px;
        `;
    case "large":
      return `
        font-size: 16px;
        padding: 12px 24px;
      `
    default:
      return `
          font-size: 14px;
          padding: 11px 20px;
        `;
  }
}

const handleBackground = (mode: Mode):string => {
  switch(mode) {
    case "primary":
      return `
        background-color: #6C5CE7;
        color: black;
      `
    case "success":
      return `
        background-color: #00B894;
        color: black;
      `
    case "danger":
      return `
        background-color: #D63031;
        color: black;
      `
    case "info":
      return`
        background-color: #0984E3;
        color: black;
      `
    case "warning":
      return`
        background-color: #FDCB6E;
        color: black;
      `
    default:
      return`
        background-color: #FDCB6E;
        color: black;
      `
  }
}

export const Container = styled.button<Omit<ButtonProps, 'label'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${({size}) => handleSize(size)}
  ${({mode}) => handleBackground(mode)}
`;