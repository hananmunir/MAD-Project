import { View, Text } from "react-native";
import React from "react";
import UserImage from "../Components/UserImage";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import EditDetails from "../Components/EditDetails";
import { auth } from "../utils/firebase";
export default function EditScreen() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{ backgroundColor: "#000", flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <UserImage user={user} />
      <EditDetails user={user} />
    </View>
  );
}
