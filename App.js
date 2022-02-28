import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  // const [name, setname] = useState("kelvin");
  const [people, setPeople] = useState([
    { name: "Mario", key: 7 },
    { name: "moris", key: 6 },
    { name: "James", key: 8 },
    { name: "Trevor", key: 9 },
    { name: "Havier", key: 1 },
    { name: "Coby", key: 2 },
    { name: "Janusz", key: 3 },
    { name: "LumpaLumpa", key: 4 },
  ]);

  const pressHandler = (key) => {
      // console.log(key)
      setPeople((prevPeople) => {
        return prevPeople.filter(person => person.key != key)
      })

  };
  return (
    <View style={styles.container}>

      <FlatList 

      keyExtractor={(item) => item.key}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>
          {item.name}
        </Text>
        </TouchableOpacity>
      )}
       />



      {/* <ScrollView>

      {
        people.map((item) => {
          return (
              <View>
                <Text style={styles.item} key={item.key}>
                  {item.name}
                </Text>
              </View>
          )
        })
      }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
