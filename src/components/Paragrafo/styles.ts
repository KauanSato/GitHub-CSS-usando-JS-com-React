import styled from 'styled-components'
import { Theme } from '../../themes/light'

import { Props } from '.'

export const P = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as Theme).corPrincipal
      : (props.theme as Theme).corSegundaria};

  line-height: 22px;
`
