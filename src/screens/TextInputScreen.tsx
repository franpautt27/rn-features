import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { globalStyles } from "../theme/appTheme";
import useForm from "../hooks/useForm";
import CustomSwitch from "../components/CustomSwitch";

const TextInputScreen = () => {
  const { form, onChange } = useForm({
    name: "",
    email: "",
    phone: "",
    isSuscribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={globalStyles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            autoCorrect={false}
            autoCapitalize="words"
            style={inputStyles.input}
            placeholder="Ingrese su nombre"
            onChangeText={(value) => onChange(value, "name")}
            keyboardAppearance="dark"
          />
          <TextInput
            autoCorrect={false}
            style={inputStyles.input}
            placeholder="Ingrese su email"
            keyboardType="email-address"
            onChangeText={(value) => onChange(value, "email")}
          />
          
          <CustomSwitch title="Suscribirse:" isOn={form.isSuscribed} onChange={(value) => onChange(value, "isSuscribed")} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            autoCorrect={false}
            style={inputStyles.input}
            placeholder="Ingrese su telefono"
            keyboardType="phone-pad"
            onChangeText={(value) => onChange(value, "phone")}
          />
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0,0.5)",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
