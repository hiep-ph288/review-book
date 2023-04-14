import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AuthContextProvider, { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/styles";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <IconButton
        icon="exit"
        color={Colors.primary500}
        size={40}
        onPress={authCtx.logout}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
