import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AuthContextProvider, { AuthContext } from "../store/auth-context";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/styles";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firestore } from "../util/firebaseConfig";

const Profile = () => {
  const authCtx = useContext(AuthContext);

  const [data, setData] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      {data.map((item, index) => (
        <Text key={index}>{item.fullname}</Text>
      ))}
      {data.map((item, index) => (
        <Text key={index}>{item.email}</Text>
      ))}
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
