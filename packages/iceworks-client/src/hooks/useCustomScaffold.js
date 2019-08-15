import { useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import stores from '@stores';

function useCustomScaffold() {
  const [ customScaffoldStore ] = stores.useStores(['customScaffold']);
  const [ displayColorPicker, setDisplayColorPicker ] = useState(false);
  const [ image, uploadImage ] = useState([]);

  // event handlers
  async function onSetLayoutConfig(value) {
    await customScaffoldStore.setLayoutConfig(value);
  }

  async function onColorPickerClick() {
    setDisplayColorPicker(!displayColorPicker);
  }

  async function onColorPickerClose() {
    setDisplayColorPicker(false);
  }

  async function handleColorChange(color, type) {
    await onColorChange('primary', color.hex, type);
  }

  async function onUpload(info) {
    console.log('onUpload callback : ', info);
  }

  async function onImageChange(info) {
    const value = cloneDeep(customScaffoldStore.dataSource.layoutConfig);
    if (info.length) { // Image uploaded
      const response = info.pop();
      uploadImage([
        {
          ...response,
        },
      ]);
      const imgURL = response.imgURL;
      value.logo.url = imgURL;
    } else { // Image deleted
      value.logo.url = "";
      uploadImage([]);
    }
    await onSetLayoutConfig(value);
  }

  async function onSuccess(res, file) {
    return res;
  }

  async function onError(file) {
    console.log('onError callback : ', file);
  }

  async function onColorChange(key, hex, type) {
    const value = cloneDeep(customScaffoldStore.dataSource.layoutConfig);
    if (type === "theme") {
      if (key === 'primary') {
        value.themeConfig.primaryColor = hex;
      } else {
        value.themeConfig.secondaryColor = hex;
      }
    }
    if (type === "header") {
      value.header.styles.background = hex;
    }
    if (type === "aside") {
      value.aside.styles.background = hex;
    }
    await onSetLayoutConfig(value);
  }

  return {
    // state
    customScaffold: customScaffoldStore.dataSource,
    displayColorPicker,
    themeColor: customScaffoldStore.dataSource.layoutConfig.themeConfig.primaryColor,
    headerColor: customScaffoldStore.dataSource.layoutConfig.header.styles.background,
    asideColor: customScaffoldStore.dataSource.layoutConfig.aside.styles.background,
    image,

    // event handler
    onSetLayoutConfig,
    onColorPickerClick,
    onColorPickerClose,
    handleColorChange,

    onUpload,
    onImageChange,
    onSuccess,
    onError,
  };
}

export default useCustomScaffold;
