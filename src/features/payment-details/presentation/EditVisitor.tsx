import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {usePaymentDetail} from './usePaymentDetail';
import {icons} from '@assets';
import {Colors} from '@theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Visitor} from '../domain/entities/payment-details';
import {ModalTitle} from '@components';
import {useNavigation} from '@react-navigation/native';

const EditVisitor = () => {
  const navigation = useNavigation();
  const {visitor, setVisitor} = usePaymentDetail();

  const [userForm, setUserForm] = useState<Visitor[]>(visitor);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const onAddForm = () => {
    const newUserForm = {name: '', title: 'Mr.'};
    setUserForm([...userForm, newUserForm]);
  };

  const handleChangeName = (index: number, value: string) => {
    const updatedUserForm = [...userForm];
    updatedUserForm[index] = {...updatedUserForm[index], name: value};
    setUserForm(updatedUserForm);
  };

  const handleChangeTitle = (index: number, value: string) => {
    const updatedUserForm = [...userForm];
    updatedUserForm[index] = {...updatedUserForm[index], title: value};
    setUserForm(updatedUserForm);
  };

  const handleDelete = (id: number) => {
    const updatedVisitor = userForm.filter((_, index) => index !== id);
    setUserForm(updatedVisitor);
  };

  const onOpenModalTitle = (index: number) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const onSelectTitle = (value: string) => {
    handleChangeTitle(selectedIndex, value);
    setShowModal(false);
  };

  const onSave = () => {
    setVisitor(userForm);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.titleScreen}>Data Tamu</Text>

        <View>
          {userForm.map((_, index) => (
            <View key={index} style={styles.formContainer}>
              <Pressable
                onPress={() => onOpenModalTitle(index)}
                style={StyleSheet.flatten([
                  styles.formContent,
                  {flex: 0.3, flexDirection: 'row', alignItems: 'center'},
                ])}>
                <Text style={styles.userValue}>{userForm[index]?.title}</Text>
                <Image
                  source={icons.ic_arrow_down}
                  tintColor={Colors.primary}
                  style={styles.icon}
                />
              </Pressable>
              <View style={StyleSheet.flatten([styles.formContent, {flex: 2}])}>
                <TextInput
                  value={userForm[index]?.name}
                  style={styles.input}
                  placeholder="Masukkan nama tamu"
                  onChangeText={value => handleChangeName(index, value)}
                />
              </View>
              <Pressable onPress={() => handleDelete(index)}>
                <Image
                  source={icons.ic_delete}
                  tintColor={'red'}
                  style={styles.icon}
                />
              </Pressable>
            </View>
          ))}
          <View style={styles.addForm}>
            <Pressable onPress={onAddForm}>
              <Text style={styles.addFormText}>+ Tambah data tamu</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <Pressable style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </Pressable>
        </View>
      </View>

      <ModalTitle
        visible={showModal}
        onSelect={val => onSelectTitle(val)}
        onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  titleScreen: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
  },
  formContainer: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formContent: {
    padding: 8,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 8,
    borderColor: Colors.gray,
  },
  userValue: {
    color: Colors.primary,
  },
  input: {
    flex: 1,
    padding: 0,
    color: Colors.primary,
  },
  icon: {
    width: 16,
    height: 16,
  },
  addForm: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFormText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'orange',
    textDecorationLine: 'underline',
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  saveButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default EditVisitor;
