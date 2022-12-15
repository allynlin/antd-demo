import logo from './logo.svg';
import './App.css';
import {Button, message, ConfigProvider, theme, Modal} from 'antd'
import React, {useState} from 'react';
import 'antd/dist/reset.css';

function App() {

    const [userTheme, setUserTheme] = useState('light');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Button type="primary" onClick={() => {
                message.success('这是一条成功消息')
                setIsModalOpen(true)
                Modal.success({
                    content: '这是一条成功消息',
                });
            }}>Button</Button>
        </ConfigProvider>
    );
}

export default App;
