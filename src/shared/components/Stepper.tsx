import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';

interface Step {
  step: number | string;
  menu: string;
  color: string;
  backgroundColor: string;
}

const Step = ({step, menu, color, backgroundColor}: Step) => {
  return (
    <View style={styles.indicator}>
      <View style={styles.stepIndicator}>
        <Text
          style={StyleSheet.flatten([
            styles.stepNumber,
            {color, backgroundColor},
          ])}>
          {step}
        </Text>
      </View>
      <View>
        <Text>{menu}</Text>
      </View>
    </View>
  );
};

const renderStep = ({step, menu, currentStep}) => {
  return (
    <Step
      step={step}
      menu={menu}
      color={Colors.white}
      backgroundColor={Colors.primary}
    />
  );
};

export const Stepper = ({currentStep}) => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        {renderStep({step: 1, menu: 'Detail Pesanan', currentStep})}
        <View style={styles.line} />
        {renderStep({step: 2, menu: 'Pembayaran', currentStep})}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIndicator: {
    height: 20,
    width: 20,
    marginRight: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  stepNumber: {
    fontSize: 12,
  },
  line: {
    height: 2,
    width: 10,
    marginHorizontal: 8,
    backgroundColor: Colors.gray,
  },
});
