import React from 'react';
import { SketchPicker } from 'react-color';
import useCustomScaffold from '@hooks/useCustomScaffold';
import styles from './index.module.scss';

const ColorPicker = ({
  backgroundColor,
  type,
}) => {
  const {
    // state
    displayColorPicker,

    // event handlers
    onColorPickerClick,
    onColorPickerClose,
    handleColorChange,
  } = useCustomScaffold();

  return (
    <div>
      <div
        onClick={onColorPickerClick}
        style={{
          border: '3px solid #fff',
          borderRadius: 2,
          height: 20,
          width: 50,
          backgroundColor,
          boxShadow: '0 0 1px rgba(0,0,0,0.5)',
        }}
      />

      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={onColorPickerClose} />
          <SketchPicker
            disableAlpha
            color={backgroundColor}
            onChange={newColor => {
              handleColorChange(newColor, type);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
