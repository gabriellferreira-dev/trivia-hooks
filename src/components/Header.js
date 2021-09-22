import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { StyledHeader } from '../styled-components/Header.style';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
  const {
    playerData: { name },
    scoreboard: { right, wrong },
  } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <div>
        <p><PersonIcon /><span>{name.toUpperCase()}</span></p>
        <div>
          <p>
            <CheckIcon /><span>{right}</span>
          </p>
          <p>
            <CloseIcon /><span>{wrong}</span>
          </p>
        </div>
      </div>
    </StyledHeader>
  );
}
