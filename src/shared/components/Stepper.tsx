import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';

interface Step {
  step: number | string;
  menu: string;
  color: string;
  menuColor: string;
  backgroundColor: string;
}

const Step = ({step, menu, color, menuColor, backgroundColor}: Step) => {
  return (
    <View style={styles.indicator}>
      <View
        style={StyleSheet.flatten([styles.stepIndicator, {backgroundColor}])}>
        <Text style={StyleSheet.flatten([styles.stepNumber, {color}])}>
          {step}
        </Text>
      </View>
      <View>
        <Text style={{color: menuColor}}>{menu}</Text>
      </View>
    </View>
  );
};

function getColor(step: number, currentStep: number) {
  if (step === currentStep) {
    return {
      color: Colors.primary,
      textColor: Colors.white,
      menuColor: Colors.black,
    };
  }

  if (step < currentStep) {
    return {
      color: Colors.primary,
      textColor: Colors.gray,
      menuColor: Colors.black,
    };
  }

  return {
    color: Colors.gray,
    textColor: Colors.white,
    menuColor: Colors.gray,
  };
}

const renderStep = ({
  step,
  menu,
  currentStep,
}: {
  step: number;
  menu: string;
  currentStep: number;
}) => {
  const {color, textColor, menuColor} = getColor(step, currentStep);
  return (
    <Step
      step={step}
      menu={menu}
      color={textColor}
      menuColor={menuColor}
      backgroundColor={color}
    />
  );
};

export const Stepper = ({currentStep}: {currentStep: number}) => {
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
