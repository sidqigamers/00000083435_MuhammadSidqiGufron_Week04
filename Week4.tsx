import React from "react";
import { ScrollView, StyleSheet, ImageSourcePropType } from "react-native";
import { Card, Avatar } from "react-native-paper";
import userData from "./data.json";

type User = {
  name: string;
  email: string;
  photo_url: string;
};

const getImageSource = (photo: string): ImageSourcePropType => {
  switch (photo) {
    case './assets/alucard.jpg':
      return require('./assets/alucard.jpg');
    case './assets/corleone.jpg':
      return require('./assets/corleone.jpg');
    case './assets/Sepi.jpg':
      return require('./assets/Sepi.jpg');
    default:
      return require('./assets/icon.jpg');
  }
};

export default function Week4() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {(userData as User[]).map((user) => (
        <Card style={styles.card} key={user.name}>
          <Card.Title
            title={user.name}
            subtitle={user.email}
            left={(props) => (
              <Avatar.Image
                {...props}
                source={getImageSource(user.photo_url)}
              />
            )}
          />
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  card: {
    width: 340,
    marginBottom: 10,
  },
});
