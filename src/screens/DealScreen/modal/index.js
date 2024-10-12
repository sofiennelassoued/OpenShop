import React from "react";
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./index.style";

const DealModal = ({ visible, onRequestClose }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onRequestClose}
  >
    <View style={styles.centeredView}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Pizza quattro fromaggi</Text>
          <View style={{ marginVertical: 4 }} />
          <Text style={styles.modalDate}>Obtained at 22/03/2024</Text>
          <View style={{ marginVertical: 8 }} />
          <View>
            <Image
              style={{
                height: 200,
                width: 200,
              }}
              source={{
                uri: "https://contentmarketinginstitute.com/wp-content/uploads/2011/06/orange-qr-code.png",
              }}
            />
          </View>
          <View style={{ marginVertical: 8 }} />
          <TouchableOpacity onPress={onRequestClose}>
            <View style={styles.modalClose}>
              <Text style={styles.buttonCloseText}>Validation complete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  </Modal>
);

export default DealModal;
