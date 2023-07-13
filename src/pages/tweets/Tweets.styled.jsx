import styled from 'styled-components';

export const TweetsWrp = styled.div`
  margin-top: 70px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;
export const BtnWrp = styled.div`
  display: flex;
`;

export const GoBackButton = styled.button`
  margin-bottom: 20px;
  margin-left: 20px;
  width: 196px;
  border-color: transparent;
  border-radius: 10.311px;
  background: #5736a3;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  padding: 14px 28px;
  color: #ebd8ff;
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

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  border-color: transparent;
  border-radius: 10.311px;
  background: #5736a3;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  padding: 14px 28px;
  color: #ebd8ff;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background: #5cd3a8;
    color: #fff;
  }
`;
