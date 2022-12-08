import { Stack, TextInput, IconButton } from "@react-native-material/core";
import styles from "../pages/home/Style";


const Input = () => {

    return (
        <TextInput
            style={styles.input}
            variant="outlined"
            placeholder="Adicione uma Nova Tarefa"
        />
    )
}

export default Input