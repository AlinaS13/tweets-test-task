import styled from 'styled-components';
import img from '../../img/bg-img.png';

export const HomeWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-image: url(${img});
`;

export const Text = styled.p`
  padding-top: 180px;
  color: #ebd8ff;
  font-size: 36px;
  font-weight: 600;
  text-shadow: #212121 1px 0 10px;
`;
export const Button = styled.button`
  border-color: transparent;
  border-radius: 10.311px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  padding: 14px 28px;
  color: #373737;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background: #5cd3a8;
    color: #fff;
  }
`;
