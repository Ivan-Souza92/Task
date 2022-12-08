import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import styles from "./Style";
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';
import database from "../../config/firebase.config";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'



const Home = ({ navigation }) => {

    const [task, setTask] = useState([]);
    const [description, setDescription] = useState()
    const [status, setStatus] = useState ();

    function adicionar() {
        database.collection('Tasks').add({
            description: description,
            status: false
        })

        alert("Tarefa Adicionada com sucesso")
        setDescription('')
    }

    const deletar = (id) => {
        if (database.collection("Tasks").doc(id).delete()) {

            alert("Tarefa deletada com sucesso!")
        }
    }

    const statusTarefa = ()=>{
        
        setColor("blue")
        return;
    }

    //const List = () => {}

    useEffect(() => {

        //List()

        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list);
        })
    }, [])

    return (
        <View>
            <View style={styles.texto}>
                <Text style={{fontWeight: "bold", fontSize:25}}>Tarefas do Dia</Text>
            </View>
            <View style={styles.espaco}>
                <TextInput
                    style={styles.input}
                    variant="outlined"
                    placeholder="Adicione uma Nova Tarefa"
                    onChangeText={setDescription}
                    value={description}
                />

                <TouchableOpacity style={{ position: 'absolute', right: 14 }}>
                    <MaterialIcons
                        name="add"
                        size={30}
                        color="red"
                        onPress={() => {
                            adicionar()
                        }}
                    />
                </TouchableOpacity>

            </View>

            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={task}
                    style={{ width: "100%" }}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Card style={{ marginTop: 20 }}>
                            <Card.Content>
                                <Paragraph style={{ fontWeight: 'bold', fontSize: 20 }}>{item.description}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Details', {id: item.id, description: item.description})}>Editar</Button>
                                <Button onPress={() => { deletar(item.id) }}>Excluir</Button>
                            </Card.Actions>
                        </Card>
                    }
                />
            </View>
        </View>
    )
}

export default Home