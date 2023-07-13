import styled from 'styled-components';
import img from '../../img/main-picture-1-x.png';

export const Card = styled.li`
  position: relative;
  height: 460px;
  flex-shrink: 0;
  padding-top: 38px;
  padding-bottom: 38px;
  margin-bottom: 40px;

  margin-bottom: 20px;
  background-image: url(${img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px, contain;
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 28px, top;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;
export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  width: 100%;
  height: 8px;
`;
export const Ring = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 214px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 60px;
    height: 60px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const InterRing = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #5736a3;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 214px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 85.92px;
  width: 62px;
  height: 62px;
`;

export const UserTweets = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const UserFollowers = styled.p`
  color: #ebd8ff;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const FollowingBtn = styled.button`
  width: 196px;
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
    color: #373737;
  }
`;

export const FollowBtn = styled(FollowingBtn)`
  background: #5cd3a8;
  &:hover,
  :focus {
    background: #ebd8ff;
  }
`;

export const UserDataWrp = styled.div`
  position: absolute;
  bottom: 36px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #ebd8ff;
`;
