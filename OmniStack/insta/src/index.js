import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
])

export default function App() {
    return <Routes />
}