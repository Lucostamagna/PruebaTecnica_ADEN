import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Constant/Color";
import Button from "../Components/Botton";
import styled from "styled-components/native";

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  return (
    <MyView>
      <StyledImage source={require("../../assets/logoCoctel.png")} />
      <Button
        title={"Iniciar sesión"}
        onPress={() => navigation.navigate("Login")}
      />
    </MyView>
  );
};

const MyView = styled.View`
  background-color: ${Colors.background};
  flex: 1;
`;
const StyledImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 40%;
  margin-left: 25%;
`;

export default OnBoardingScreen;
