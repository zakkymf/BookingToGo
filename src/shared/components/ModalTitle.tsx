import React from 'react';
import {View, Text, Modal, StyleSheet, FlatList, Pressable} from 'react-native';
import {Colors} from '../theme/Colors';

interface ModalTitleProps {
  visible: boolean;
  onSelect: (value: string) => void;
  onClose: () => void;
}

const titles = [
  {
    name: 'Mr.',
  },
  {
    name: 'Ny.',
  },
];

export const ModalTitle: React.FC<ModalTitleProps> = ({
  visible,
  onSelect,
  onClose,
}) => {
  const renderTitle = ({item}: {item: {name: string}}) => {
    return (
      <Pressable style={styles.listTitle} onPress={() => onSelect(item?.name)}>
        <Text>{item?.name}</Text>
      </Pressable>
    );
  };

  const renderSeparator = () => <View style={styles.line} />;

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={titles}
            renderItem={renderTitle}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
  },
  listTitle: {
    marginVertical: 14,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: Colors.gray,
  },
});
