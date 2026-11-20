import {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomInput from './CustomInput';
import { TextInput } from 'react-native';

export const NoteForm = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Modal
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}>
                    <View>
                        <Text>Notes</Text>
                        <TextInput>

                        </TextInput>
                    </View>
                

                </Modal>
            </SafeAreaView>


        </SafeAreaProvider>
    )
}