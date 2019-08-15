import React from 'react';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { Radio, Switch, Checkbox, Input } from '@icedesign/base';
import { Upload } from '@alifd/next';
import useCustomScaffold from '@hooks/useCustomScaffold';
import Tooltip from 'rc-tooltip';
import FoundationSymbol from 'foundation-symbol';
import ColorPicker from './ColorPicker';
import styles from "./index.module.scss";

const { Group: RadioGroup } = Radio;

const CustomScaffoldForm = ({
  value,
  onChange,
}) => {
  const {
    // state
    themeColor,
    headerColor,
    asideColor,
    image,

    // event handlers
    onUpload,
    onImageChange,
    onSuccess,
    onError,
  } = useCustomScaffold();

  return (
    <IceFormBinderWrapper value={value} onChange={onChange}>
      <div className="form-group">
        <div className={styles.formItem}>
          <span style={{ paddingRight: 10, fontSize: 12 }}>主色</span>
          <ColorPicker
            backgroundColor={themeColor}
            type="theme"
          />
        </div>
        <div className={styles.formItem}>
          <span className={styles.title}>内容</span>
          <IceFormBinder required name="layout">
            <RadioGroup>
              <Radio id="fullWidth" value="fluid-layout">
                全屏
              </Radio>
              <Radio id="elasticWidth" value="boxed-layout">
                固宽
              </Radio>
            </RadioGroup>
          </IceFormBinder>
        </div>
        <div className={styles.formItem}>
          <span className={styles.title}>侧导航默认收起</span>
          <IceFormBinder required name="aside.collapsed">
            <Switch checked={value.aside.collapsed}/>
          </IceFormBinder>
        </div>
        <div className={styles.formItem}>
          <span style={{ paddingRight: 10, fontSize: 12 }}>头部导航风格</span>
          <ColorPicker
            backgroundColor={headerColor}
            type="header"
          />
        </div>
        <div className={styles.formItem}>
          <span style={{ paddingRight: 10, fontSize: 12 }}>侧边栏导风格</span>
          <ColorPicker
            backgroundColor={asideColor}
            type="aside"
          />
        </div>
        <div style={{
          marginTop: 50,
        }}>
          <span className={styles.title}>高级配置</span>
          <div className={styles.formItem}>
            <span className={styles.title}>Logo</span>
            <IceFormBinder required name="logo.method">
              <RadioGroup>
                <Radio id="uploadPhoto" value="upload">
                  图片上传
                </Radio>
                <Radio id="uploadLink" value="link">
                  图片链接
                </Radio>
                <Radio id="text" value="text">
                  Text
                </Radio>
              </RadioGroup>
            </IceFormBinder>
          </div>
          { value.logo.method === "upload" ? <div className={styles.formItem}>
            <Upload.Card
              listType="card"
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
              onPreview={onUpload}
              onChange={onImageChange}
              onSuccess={onSuccess}
              value={image}
              onError={onError}
            />
          </div> : null }
          { value.logo.method === "link" ? <div className={styles.formItem}>
            <span className={styles.title}>Logo Link</span>
            <IceFormBinder name="logo.url">
              <Input size="small" placeholder="image link"/>
            </IceFormBinder>
          </div> : null }
          { value.logo.method !== "text" ? <div className={styles.formItem}>
            <span className={styles.title}>Logo Width</span>
            <IceFormBinder name="logo.width">
              <Input size="small" placeholder="logo width"/>
            </IceFormBinder>
          </div> : null }
          { value.logo.method !== "text" ? <div className={styles.formItem}>
            <span className={styles.title}>Logo Height</span>
            <IceFormBinder name="logo.height">
              <Input size="small" placeholder="logo height"/>
            </IceFormBinder>
          </div> : null }
          <div className={styles.formItem}>
            <span className={styles.title}>Default page</span>
            <IceFormBinder name="iceConfig.defaultPage">
              <Switch checked={value.iceConfig.defaultPage}/>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <span className={styles.title}>Internationlization</span>
            <IceFormBinder name="iceConfig.internalization">
              <Switch checked={value.iceConfig.internalization}/>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <span className={styles.title}>TypeScript</span>
            <IceFormBinder name="iceConfig.typeScript">
              <Switch checked={value.iceConfig.typeScript}/>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <span className={styles.title}>React Hooks</span>
            <IceFormBinder name="iceConfig.hooks">
              <Switch checked={value.iceConfig.hooks}/>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <span className={styles.title}>Register App</span>
            <IceFormBinder name="iceConfig.register">
              <Switch checked={value.iceConfig.register}/>
            </IceFormBinder>
          </div>
        </div>
      </div>
    </IceFormBinderWrapper>
  );
};

export default CustomScaffoldForm;
