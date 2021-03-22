import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allAttendance: [],
      students: {
        Adarsh: '',
        Adyasha: '',
        Amritesh: '',
        Anwesh: '',
        Armaan: '',
        Ashutos: '',
        Ayush: '',
        Bhuvneshwari: '',
        Devesh: '',
        Debanshee: '',
        Dhoopchaya: '',
        Eshani: '',
        Hansika: '',
        Irteka: '',
      },
    };
  }

  submitAttendance = () => {
    this.props.navigation.navigate('SummaryScreen');

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    db.ref('/').update({
      [year]: {
        [month]: {
          [date]: {
            Adarsh: { Attendance: this.state.students.Adarsh, Roll_No: 1 },
            Adyasha: { Attendance: this.state.students.Adyasha, Roll_No: 2 },
            Amritesh: { Attendance: this.state.students.Amritesh, Roll_No: 3 },
            Anwesh: { Attendance: this.state.students.Anwesh, Roll_No: 4 },
            Armaan: { Attendance: this.state.students.Armaan, Roll_No: 5 },
            Ashutos: { Attendance: this.state.students.Ashutos, Roll_No: 6 },
            Ayush: { Attendance: this.state.students.Ayush, Roll_No: 7 },
            Bhuvneshwari: { Attendance: this.state.students.Bhuvneshwari, Roll_No: 8 },
            Devesh: { Attendance: this.state.students.Devesh, Roll_No: 9 },
            Debanshee: { Attendance: this.state.students.Debanshee, Roll_No: 10 },
            Dhoopchaya: { Attendance: this.state.students.Dhoopchaya, Roll_No: 11 },
            Eshani: { Attendance: this.state.students.Eshani, Roll_No: 12 },
            Hansika: { Attendance: this.state.students.Hansika, Roll_No: 13 },
            Irteka: { Attendance: this.state.students.Irteka, Roll_No: 14 },
          },
        },
      },
    });
  };

  render() {
    return (
      <View>
      <ImageBackground source={require('../assets/attendancelogo.png')}>
        <AppHeader />
        <Text style={styles.text2}>1. Adarsh</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Adarsh: 'Present' });
            this.state.students.Adarsh = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Adarsh: 'Absent' });
            this.state.students.Adarsh = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>2. Adyasha</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Adyasha: 'Present' });
            this.state.students.Adyasha = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Adyasha: 'Absent' });
            this.state.students.Adyasha = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>3. Amritesh</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Amritesh: 'Present' });
            this.state.students.Amritesh = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Amritesh: 'Absent' });
            this.state.students.Amritesh = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>4. Anwesh</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Anwesh: 'Present' });
            this.state.students.Anwesh = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Anwesh: 'Absent' });
            this.state.students.Anwesh = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>5. Armaan</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Armaan: 'Present' });
            this.state.students.Armaan = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Armaan: 'Absent' });
            this.state.students.Armaan = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>6. Ashutos</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Ashutos: 'Present' });
            this.state.students.Ashutos = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Ashutos: 'Absent' });
            this.state.students.Ashutos = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>7. Ayush</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Ayush: 'Present' });
            this.state.students.Ayush = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Ayush: 'Absent' });
            this.state.students.Ayush = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>8. Bhuvneshwari</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Bhuvneshwari: 'Present' });
            this.state.students.Bhuvneshwari = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Bhuvneshwari: 'Absent' });
            this.state.students.Bhuvneshwari = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>9. Devesh</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Devesh: 'Present' });
            this.state.students.Devesh = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Devesh: 'Absent' });
            this.state.students.Devesh = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>10. Debanshee</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Debanshee: 'Present' });
            this.state.students.Debanshee = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Debanshee: 'Absent' });
            this.state.students.Debanshee = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>11. Dhoopchaya</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Dhoopchaya: 'Present' });
            this.state.students.Dhoopchaya = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Dhoopchaya: 'Absent' });
            this.state.students.Dhoopchaya = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>12. Eshani</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Eshani: 'Present' });
            this.state.students.Eshani = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Eshani: 'Absent' });
            this.state.students.Eshani = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>13. Hansika</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Hansika: 'Present' });
            this.state.students.Hansika = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Hansika: 'Absent' });
            this.state.students.Hansika = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <Text style={styles.text2}>14. Irteka</Text>
        <TouchableOpacity
          style={styles.presentContainer}
          onPress={() => {
            this.setState({ Irteka: 'Present' });
            this.state.students.Irteka = 'Present';
          }}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.absentContainer}
          onPress={() => {
            this.setState({ Irteka: 'Absent' });
            this.state.students.Irteka = 'Absent';
          }}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submit} onPress={this.submitAttendance}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 125,
    marginTop: -30,
    backgroundColor: 'green',
  },

  absentContainer: {
    borderWidth: 2,
    padding: 2,
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 225,
    marginTop: -35,
    backgroundColor: 'red',
  },

  text: {
    fontSize: 20,
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  submit: {
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'blue',
    padding: 2,
  },
});