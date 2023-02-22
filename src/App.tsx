import React from 'react'
import { Button, Col, ConfigProvider, Row, theme } from 'antd'

function App() {

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#2e37ab'
        }
      }}
    >
      <Row gutter={[15, 15]}>
        <Col span={24}>
          <Button>Test</Button>
        </Col>
      </Row>
    </ConfigProvider>
  )
}

export default App
