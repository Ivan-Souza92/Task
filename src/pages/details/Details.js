import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import database from "../../config/firebase.config";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'
import styles from '../home/Style';

const Details = (props) => {

    const navigation = useNavigation();
    const id = props.route.params.id;
    const [description, setDescription] = useState(props.route.params.description)

    navigation.setOptions({
        headerTitle: description
    })

    const Editar = (description, id) => {
        database.collection("Tasks").doc(id).update({
          description: description,
        })
        alert("Tarefa Alterada com sucesso")
        navigation.navigate("Tarefas")
      }

    return (
        <View>
            <View style={styles.texto}>
            <Text style={{fontWeight: "bold", fontSize:25}}>Altere os Dados da sua Tarefa</Text>
            </View>
            <View style={styles.espaco}>
                <TextInput
                    style={styles.input}
                    variant="outlined"
                    placeholder="Altere os dados da tarefa"
                    onChangeText={setDescription}
                    value={description}
                />

                <TouchableOpacity style={{ position: 'absolute', right: 14 }}>
                    <MaterialIcons
                        name="add"
                        size={30}
                        color="red"
                        onPress={()=>{
                            Editar(description, id)
                          }}
                    />
                </TouchableOpacity>

            </View>

        </View>
    )

}

export default Details