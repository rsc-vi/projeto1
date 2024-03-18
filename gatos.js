import{View, Text} from'react-native';

const Gato = ({nome, idade}) => {
    return(
        <View>
            <Text>My name is {nome} e eu tenho {idade}</Text>

            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
        </View>
    );
};

export default Gato;