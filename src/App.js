import React, { Component } from 'react';
import { Select } from 'antd';

import './App.css';

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="select one country"
            defaultValue={['china']}
            optionLabelProp="label"
          >
            <Option value="china" label="China">
              <span role="img" aria-label="China">
                🇨🇳
            </span>
              China (中国)
          </Option>
            <Option value="usa" label="USA">
              <span role="img" aria-label="USA">
                🇺🇸
            </span>
              USA (美国)
          </Option>
            <Option value="japan" label="Japan">
              <span role="img" aria-label="Japan">
                🇯🇵
            </span>
              Japan (日本)
          </Option>
            <Option value="korea" label="Korea">
              <span role="img" aria-label="Korea">
                🇰🇷
            </span>
              Korea (韩国)
          </Option>
          </Select>
        </div>
      </div >
    );
  }
}

export default App;