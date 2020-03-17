import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: blue;
`;

export default function App() {
  return (
    <Container>
      <Title>hello</Title>
    </Container>
  );
}
