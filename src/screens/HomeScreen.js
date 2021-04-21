import React, { useContext, useEffect } from "react";
import { Text, Button, Icon, Container, Content} from "native-base";
import { StyleSheet } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as TriviaContext } from "../context/TriviaContext";
import IconM from "../components/IconM";

const HomeScreen = ({ navigation }) => {
  const {
    signout,
    state: { username },
  } = useContext(AuthContext);
  const {
    getNormalQuestions,
    getRushQuestions,
    getNormalLeaderboard,
    getRushLeaderboard,
    getGameByUser,
  } = useContext(TriviaContext);

  useEffect(() => {
    navigation.navigate("Home", { getGameByUser, username });
  }, []);

  return (
    <Container style={{ 
      flex: 1}}>
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Text 
        style={{fontSize: 25, fontWeight: "bold", textAlign:"center", marginHorizontal: 20, marginBottom: 20 }}
        > ONE PLAYER GAME MODES </Text>
        <Button
          full
          rounded
          style={{ marginHorizontal: 20, marginBottom: 20 }}
          onPress={() => {
            getNormalQuestions();
            navigation.navigate("Question", { normalMode: true });
          }}
          warning
        >
        <Icon name='hourglass' />
          <Text>MODO NORMAL</Text>
        </Button>
        <Button
         full
          rounded
          style={{ marginHorizontal: 20, marginBottom: 20 }}
          onPress={() => {
            getRushQuestions();
            navigation.navigate("Question", { normalMode: false });
          }}
          danger
        >
          <Icon name='infinite' />
          <Text>RUSH MODE</Text>
        </Button>
        <Text 
        style={{fontSize: 25, fontWeight: "bold", textAlign:"center", marginHorizontal: 20, marginBottom: 20 }}
        > MULTIJUGADOR </Text>
        <Button
        full
          rounded
          style={{ marginHorizontal: 20, marginBottom: 20 }}
          info
          onPress={() => {
            navigation.navigate("MultiPlayer");
          }}
        >
        <IconM />
          <Text>MULTIJUGADOR</Text>
        </Button>
        <Text 
        style={{fontSize: 25, fontWeight: "bold", textAlign:"center", marginHorizontal: 20, marginBottom: 20 }}
        > BOARDS </Text>
        <Button
        full
          rounded
          style={{ marginHorizontal: 20, marginBottom: 20 }}
          success
          onPress={() => {
            getNormalLeaderboard();
            navigation.navigate("LeaderNormal");
          }}
        >
        <Icon name='trophy' />
          <Text>LEADERBOARD</Text>
        </Button>
        <Button
        full
          rounded
          style={{ marginHorizontal: 20, marginBottom: 20 }}
          success
          onPress={() => {
            getRushLeaderboard();
            navigation.navigate("LeaderRush");
          }}
        >
        <Icon name='trophy' />
          <Text>RUSH LEADERBOARD</Text>
        </Button>
        <Button
          rounded
          onPress={() => signout()}
          style={{ marginHorizontal: 20 }}
          light
        >
          <Text style={{ color: "white" }}>Cerrar Sesion</Text>
        </Button>
      </Content>
    </Container>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  const getGameByUser = navigation.getParam("getGameByUser");
  const username = navigation.getParam("username");
  const data = [

  ];
  return {
    headerTitle: "PREGUNTADOS",
    headerRight: () => (
      <Button
        transparent
        onPress={() => {
          getGameByUser({ username });
          navigation.navigate("MultiplayerResults");
        }}
      >
        <IconM />
      </Button>
    ),
  };
};

export default HomeScreen;

const styles = StyleSheet.create({});