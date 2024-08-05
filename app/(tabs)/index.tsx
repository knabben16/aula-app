import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculadora: React.FC = () => {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const calcular = (operacao: string) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let result: number;

    switch (operacao) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    setResultado(result.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calcular('+')} />
        <Button title="-" onPress={() => calcular('-')} />
        <Button title="*" onPress={() => calcular('*')} />
        <Button title="/" onPress={() => calcular('/')} />
      </View>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calculadora;