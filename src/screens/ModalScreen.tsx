import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { globalStyles } from "../theme/appTheme";

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        {/* background negro */}
        <View
          style={{
            ...globalStyles.fullScreenCentered,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          {/* Contenido del modal */}
          <View
            style={{
              backgroundColor: "white",
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.25,
              elevation:10
            }}
          >
            <HeaderTitle title="Modal" />
            <Text style={styles.modalText}>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={setIsVisible.bind(this, false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
    modalText: {
        fontSize:16,
        fontWeight: "300",
        marginBottom: 20
    }
})
