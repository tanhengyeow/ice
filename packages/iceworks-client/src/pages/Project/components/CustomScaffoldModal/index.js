import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@alifd/next';
import Modal from '@components/Modal';
import { FormattedMessage } from 'react-intl';
import useCustomScaffold from '@hooks/useCustomScaffold';
import cloneDeep from 'lodash.clonedeep';
import Chrome from "../Chrome";
import CustomScaffoldForm from "./CustomScaffoldForm";
import PreviewLayout from "../../../../../../ice-layout-builder/src/components/PreviewLayout/PreviewLayout";
// import BasicForm from "../../../../../../ice-template-builder/src/components/Form/BasicForm/BasicForm";
import styles from "./index.module.scss";

const { Item: TabPane } = Tab;

const CustomScaffoldModal = ({
  on, onCancel, onSave,
}) => {
  const {
    // state
    customScaffold,

    // event handler
    onSetLayoutConfig,
  } = useCustomScaffold();
  const layoutConfig = cloneDeep(customScaffold.layoutConfig);
  const width = 350;
  const scale = 0.65;

  return (
    <Modal
      title={<FormattedMessage id="iceworks.customScaffold.title" />}
      visible={on}
      onCancel={onCancel}
      onOk={onSave}
    >
      <div className={styles.customScaffold}>
        <Tab size="medium">
          <TabPane key="1" title="New Custom Scaffold">
            <div className={styles.newCustomScaffold}>
              <CustomScaffoldForm
                value={layoutConfig}
                onChange={onSetLayoutConfig}
              />
              <Chrome>
                {/* <div style={{ width, height: width * scale, overflow: 'hidden' }}> */}
                <PreviewLayout
                  value={layoutConfig} // 布局配置
                  scale={width / 900} // 缩放比例
                  width={2000} // 预览宽度
                  height={2000} // 预览高度
                />
                {/* </div> */}
              </Chrome>
            </div>
          </TabPane>
          <TabPane key="2" title="Existing Custom Scaffolds">
            <div>
              Testing
            </div>
          </TabPane>
        </Tab>
      </div>
    </Modal>
  );
};

CustomScaffoldModal.propTypes = {
  on: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CustomScaffoldModal;
