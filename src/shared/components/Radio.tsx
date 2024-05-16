import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../theme/Colors';

interface ItemProps {
  value: string;
}

interface RadioProps {
  data: ItemProps[];
  defaulValue: string;
  onSelect: (value: any) => void;
}

export const Radio: React.FC<RadioProps> = ({data, defaulValue, onSelect}) => {
  const [userOption, setUserOption] = useState<string | null>(defaulValue);

  const onSelectHandler = (value: string) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <>
      {data?.map(item => (
        <View key={item.value?.toString()} style={styles.container}>
          <Pressable
            style={StyleSheet.flatten([
              styles.bullet,
              {
                borderColor:
                  item?.value === userOption ? Colors.primary : Colors.gray,
              },
            ])}
            onPress={() => onSelectHandler(item.value)}>
            <View
              style={StyleSheet.flatten([
                styles.selected,
                {
                  backgroundColor:
                    item?.value === userOption ? Colors.primary : Colors.white,
                },
              ])}
            />
          </Pressable>
          <Text style={styles.radioText}>{item?.value}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  radioText: {
    fontSize: 12,
    marginLeft: 10,
  },
});
