import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 20px 30px;
  background-color: #ebd8ff;
  width: 100vw;
  box-shadow: 1px 1px 5px 2px #373737;
  z-index: 100;
`;
export const StyleNavlink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  color: #373737;

  &.active {
    border-bottom: 3px solid #471ca9;
    color: #471ca9;
  }
`;
