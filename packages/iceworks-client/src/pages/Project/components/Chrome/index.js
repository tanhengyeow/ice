import React from 'react';

const Chrome = ({ children, styles }) => {
  return (
    <div style={styles.browserWrapper}>
      <div style={styles.browserHeader}>
        <div
          style={{
            ...styles.dot,
            ...{
              backgroundColor: '#EE5C56',
              left: 14,
            },
          }}
        />
        <div
          style={{
            ...styles.dot,
            ...{
              backgroundColor: '#F8BD32',
              left: 34,
            },
          }}
        />
        <div
          style={{
            ...styles.dot,
            ...{
              backgroundColor: '#62CB43',
              left: 54,
            },
          }}
        />
      </div>
      <div style={{ ...styles.browserBody }}>
        {children}
      </div>
    </div>
  );
}

Chrome.defaultProps = {
  styles: {
    browserWrapper: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      border: '1px solid #ddd',
      overflow: 'hidden',
      // height: 624 * (350 / 960) + 30,
      // width: 960 * (350 / 960),
    },
    browserHeader: {
      height: 30,
      backgroundColor: '#fefefe',
      // background: 'linear-gradient(to bottom, #eee 0%,#d5d5d5 100%)',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      boxShadow: '0 0 2px #ddd',
      borderBottom: '1px solid #ddd',
      position: 'relative',
    },
    dot: {
      height: 12,
      width: 12,
      borderRadius: '50%',
      boxShadow: '0 0 1px rgba(0,0,0,.3) inset',
      position: 'absolute',
      top: 30 / 2 - 12 / 2,
    },
    browserBody: {
      // height: 624 * (350 / 960),
      // width: 960 * (350 / 960),
    },
  },
};

export default Chrome;
