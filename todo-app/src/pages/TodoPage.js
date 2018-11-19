import React from 'react';
import { Text, TextInput, View, FlatList, StyleSheet } from 'react-native';
import ComponentButton from '../components/ButtonComponent';
import Styles from '../styles/Styles';
class TodoPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            task: '',
            todos: []
        }
    }

    onAdd = () => {
        const { task, todos } = this.state;
        const newTodos = [...todos, task];
        console.log(newTodos);
        this.setState({
            todos: newTodos,
            task: ''
        });
    }

    onChangeTextTask = (task) => {
        this.setState({ task });
    }

    _keyExtractor = (item, index) => index.toString();

    // TODO: Migrar para um componente.
    renderList() {
        const { todos } = this.state;
        if (todos.length == 0) {
            return (
                <View style={styles.listContainer}>
                    <Text style={styles.listItem}>Nenhum registro</Text>
                </View>
            )
        } else {
            return (
                <FlatList style={{ marginTop: 10 }}
                    data={todos}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => (
                        <View style={styles.listContainer}>
                            <Text style={styles.listItem}>{item}</Text>
                        </View>

                    )}
                />
            )
        }
    }

    render() {
        const { task, todos } = this.state;
        return (
            <View style={Styles.container}>

                <TextInput
                    style={Styles.input}
                    value={task}
                    name='login'
                    onChangeText={this.onChangeTextTask}
                    autoCapitalize="none"
                    placeholder='Task'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <ComponentButton
                    onPress={this.onAdd}
                    text='ADD' />

                {this.renderList()}

            </View>
        )
    }

};

const styles = StyleSheet.create({
    listContainer: {
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20,
        margin: 1,
        backgroundColor: 'rgba(225,225,225,0.2)'
    },
    listItem: {
        color: '#fff'
    }
});

export default TodoPage;