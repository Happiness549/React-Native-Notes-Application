
import { View, Text, TextInput, Pressable, Modal, StyleSheet } from 'react-native';

type NoteFormProps = {
  visible: boolean;
  title: string;
  content: string;
  category: string;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  setCategory: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  isEditing: boolean;
};

export default function NoteForm({
  visible,
  title,
  content,
  category,
  setTitle,
  setContent,
  setCategory,
  onSubmit,
  onClose,
  isEditing,
}: NoteFormProps) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.form}>
          <Text style={styles.heading}>
            {isEditing ? 'Edit Note' : 'Create a Note'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Note title"
            placeholderTextColor="#967080"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={[styles.input, styles.contentInput]}
            placeholder="Write your note..."
            placeholderTextColor="#967080"
            value={content}
            onChangeText={setContent}
            multiline
          />

          <TextInput
            style={styles.input}
            placeholder="Category"
            placeholderTextColor="#967080"
            value={category}
            onChangeText={setCategory}
          />

          <Pressable style={styles.saveButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>
              {isEditing ? 'Update Note' : 'Save Note'}
            </Text>
          </Pressable>

          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  form: {
    backgroundColor: '#FFF3F7',
    padding: 22,
    borderRadius: 20,
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#CF2F6F',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F3C9D9',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    color: '#513447',
  },
  contentInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#CF2F6F',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    padding: 12,
    alignItems: 'center',
  },
  cancelText: {
    color: '#967080',
  },
});
