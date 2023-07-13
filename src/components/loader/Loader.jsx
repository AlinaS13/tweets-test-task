import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#5736A3"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
