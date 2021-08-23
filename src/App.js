import React from 'react';
import { FindIP } from './FindIP/FindIP';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="nav">
            <div className="logo"></div>
            <h1 className="title">Find My IP</h1>
        </div>
        <FindIP />
      </div>
    </div>
  );
}