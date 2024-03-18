import{View, Text} from'react-native';

const Gato = ({nome}) => {
    return(
        <View>
            <Text>My name is {nome}</Text>
        </View>
    );
};

export default Gato;