
import { View, Text, StyleSheet, Pressable, ScrollView, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import NoteForm from '../components/NoteForm';

type Note = {
  id: string;
  title: string;
  content: string;
  category: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Daily');
  const [search, setSearch] = useState('');

  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Open form for a new note
  const openForm = () => {
    setTitle('');
    setContent('');
    setCategory('Daily');
    setEditingId(null);
    setFormVisible(true);
  };

  // Save or update note
  const saveNote = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Missing information', 'Please enter a title and note.');
      return;
    }

    if (editingId) {
      setNotes(prev =>
        prev.map(note =>
          note.id === editingId
            ? { ...note, title, content, category }
            : note
        )
      );
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title,
        content,
        category,
      };

      setNotes(prev => [...prev, newNote]);
    }

    setFormVisible(false);
  };

  // Open form with existing note details
  const editNote = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setEditingId(note.id);
    setFormVisible(true);
  };

  // Delete note
  const deleteNote = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  // Search notes
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase()) ||
    note.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Petal Notes!</Text>

      {/* Search input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={22} color="#967080" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search your notes..."
          placeholderTextColor="#967080"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView style={styles.notesContainer}>
        {notes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="document-text-outline"
              size={75}
              color="#D52E72"
            />

            <Text style={styles.emptyTitle}>No notes yet</Text>

            <Text style={styles.emptyText}>
              Your notes will show up here. Tap the pink plus to write your first one.
            </Text>
          </View>
        ) : filteredNotes.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={65}
              color="#D52E72"
            />
            <Text style={styles.emptyTitle}>No notes found</Text>
            <Text style={styles.emptyText}>
              Try searching with a different word.
            </Text>
          </View>
        ) : (
          filteredNotes.map(note => (
            <View key={note.id} style={styles.noteCard}>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text style={styles.noteContent}>{note.content}</Text>
              <Text style={styles.noteCategory}>{note.category}</Text>

              <View style={styles.actions}>
                <Pressable onPress={() => editNote(note)}>
                  <Ionicons name="create-outline" size={23} color="#CF2F6F" />
                </Pressable>

                <Pressable onPress={() => deleteNote(note.id)}>
                  <Ionicons name="trash-outline" size={23} color="#CF2F6F" />
                </Pressable>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <Pressable style={styles.button} onPress={openForm}>
        <Ionicons name="add" size={25} color="white" />
      </Pressable>

      <NoteForm
        visible={formVisible}
        title={title}
        content={content}
        category={category}
        setTitle={setTitle}
        setContent={setContent}
        setCategory={setCategory}
        onSubmit={saveNote}
        onClose={() => setFormVisible(false)}
        isEditing={editingId !== null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F7',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#CF2F6F',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3C9D9',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    color: '#513447',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#CF2F6F',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 25,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    marginTop: 100,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#513447',
    marginBottom: 10,
    marginTop: 15,
  },
  emptyText: {
    fontSize: 15,
    color: '#967080',
    textAlign: 'center',
    lineHeight: 24,
  },
  notesContainer: {
    flex: 1,
    marginTop: 20,
  },
  noteCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 3,
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#513447',
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 14,
    color: '#735968',
    lineHeight: 22,
  },
  noteCategory: {
    fontSize: 12,
    color: '#D52E72',
    backgroundColor: '#FCE1ED',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 18,
    marginTop: 15,
  },
});
