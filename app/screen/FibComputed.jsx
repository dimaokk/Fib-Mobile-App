import { Text, View, TextInput, ActivityIndicator } from "react-native";
import { useState } from "react";
import { Formik } from "formik";

import { Button, Image } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function FibComputed() {
  const [state, setState] = useState(0);

  const fibonacci = (val) => {
    const num = Number(val.value);
    let a = 1,
      b = 1;

    for (let i = 3; i <= num; i++) {
      [a, b] = [b, a + b];
    }
    setState(b);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стриница рассчета чисел</Text>
      <View>
        <Image
          source={{
            uri: "https://exceltut.ru/images/misc/i/gallery/46001/1852873.jpg",
          }}
          containerStyle={styles.img}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.description}>
          Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 +
          Fn-2. То есть, следующее число получается как сумма двух предыдущих.
          Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так
          далее: 1, 1, 2, 3, 5, 8, 13, 21.... Числа Фибоначчи тесно связаны с
          золотым сечением и множеством природных явлений вокруг нас.
        </Text>
      </View>

      <Formik
        initialValues={{ value: "" }}
        onSubmit={(values) => fibonacci(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                onChangeText={handleChange("value")}
                onBlur={handleBlur("value")}
                value={values.value}
                placeholder={"Введите число"}
              />
            </View>
            <Button
              color={"#378ff6"}
              onPress={handleSubmit}
              title="Рассчитать"
              radius={12}
            />
          </View>
        )}
      </Formik>

      <Text style={styles.result}>Результат: {state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#eff3f7",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  img: {
    aspectRatio: 2,
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  result: {
    fontSize: 22,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#378ff6",
    paddingHorizontal: 12,
    paddingVertical: 10,
    minWidth: 170,
    marginRight: 20,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
