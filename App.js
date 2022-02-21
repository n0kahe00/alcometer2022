import React, { useCallback, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { Text, TextInput, View, Button, ScrollView, Alert } from 'react-native'
import RadioButton from './Radiobutton'
import StyleSheet from './style.js'

export default function App () {
  const [weight, setWeight] = useState()
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0)

  const [gender, setGender] = useState()
  const options = [
    {
      label: 'Male',
      value: 1
    },
    {
      label: 'Female',
      value: 2
    }
  ]

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(1)
  const [items, setItems] = useState([
    { label: '1 bottle', value: 1 },
    { label: '2 bottles', value: 2 },
    { label: '3 bottles', value: 3 },
    { label: '4 bottles', value: 4 },
    { label: '5 bottles', value: 5 },
    { label: '6 bottles', value: 6 },
    { label: '7 bottles', value: 7 },
    { label: '8 bottles', value: 8 },
    { label: '9 bottles', value: 9 },
    { label: '10 bottles', value: 10 },
    { label: '11 bottles', value: 11 },
    { label: '12 bottles', value: 12 },
    { label: '13 bottles', value: 13 },
    { label: '14 bottles', value: 14 },
    { label: '15 bottles', value: 15 },
    { label: '16 bottles', value: 16 },
    { label: '17 bottles', value: 17 },
    { label: '18 bottles', value: 18 },
    { label: '19 bottles', value: 19 },
    { label: '20 bottles', value: 20 },
    { label: '21 bottles', value: 21 },
    { label: '22 bottles', value: 22 },
    { label: '23 bottles', value: 23 },
    { label: '24 bottles', value: 24 }
  ])
  const [openAnother, setOpenAnother] = useState(false)
  const [anotherValue, setAnotherValue] = useState(1)
  const [anotherItems, setAnotherItems] = useState([
    { label: '1 hour', value: 1 },
    { label: '2 hours', value: 2 },
    { label: '3 hours', value: 3 },
    { label: '4 hours', value: 4 },
    { label: '5 hours', value: 5 },
    { label: '6 hours', value: 6 },
    { label: '7 hours', value: 7 },
    { label: '8 hours', value: 8 },
    { label: '9 hours', value: 9 },
    { label: '10 hours', value: 10 },
    { label: '11 hours', value: 11 },
    { label: '12 hours', value: 12 },
    { label: '13 hours', value: 13 },
    { label: '14 hours', value: 14 },
    { label: '15 hours', value: 15 },
    { label: '16 hours', value: 16 },
    { label: '17 hours', value: 17 },
    { label: '18 hours', value: 18 },
    { label: '19 hours', value: 19 },
    { label: '20 hours', value: 20 },
    { label: '21 hours', value: 21 },
    { label: '22 hours', value: 22 },
    { label: '23 hours', value: 23 },
    { label: '24 hours', value: 24 }
  ])

  const showAlert = () => {
    Alert.alert(
      "Invalid input",
      "Please insert weight",
      [
        {
          text: "Ok",
        },
      ]
    )
  }

  const onOpen = useCallback(() => {
    setOpenAnother(false)
  }, [])
  const onAnotherOpen = useCallback(() => {
    setOpen(false)
  }, [])

  function calculate () {
    if (weight > 0) {
      let result = 0
      let litres = value * 0.33
      let grams = litres * 8 * 4.5
      let burning = weight / 10
      let gramsLeft = grams - burning * anotherValue

      if (gender == 1) {
        result = gramsLeft / (weight * 0.7)
      } else {
        result = gramsLeft / (weight * 0.6)
      }
      if (result < 0) {
        result = 0
      }
      setBloodAlcoholLevel(result.toFixed(2))
    } else {
      showAlert();
    }
  }

  function getResultStyle(bloodAlcoholLevel) {
    if (bloodAlcoholLevel == 0.00) {
      return {
        color: 'green',
        fontSize: 50,
        textAlign: 'center',
        paddingBottom: 20
      }
    } else if (bloodAlcoholLevel <= 0.5) {
      return {
        color: 'yellow',
        fontSize: 50,
        textAlign: 'center',
        paddingBottom: 20
      }
    } else if (bloodAlcoholLevel > 0.5) {
      return {
        color: 'red',
        fontSize: 50,
        textAlign: 'center',
        paddingBottom: 20
      }
    }
  }

  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={StyleSheet.header}>
          <Text style={StyleSheet.title}>Alcometer</Text>
        </View>
        <View style={StyleSheet.box}>
          <View>
            <Text style={StyleSheet.text}>Weight</Text>
            <TextInput
              style={StyleSheet.input}
              value={weight}
              onChangeText={text => setWeight(text)}
              keyboardType='decimal-pad'
            ></TextInput>
          </View>
          <Text style={StyleSheet.text}>Bottles</Text>
          <View>
            <DropDownPicker
              zIndex={3000}
              zIndexInverse={1000}
              open={open}
              onOpen={onOpen}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              listMode='SCROLLVIEW'
              marginBottom={30}
            />
          </View>
          <Text style={StyleSheet.text}>Time</Text>
          <View>
            <DropDownPicker
              zIndex={2000}
              zIndexInverse={2000}
              open={openAnother}
              onOpen={onAnotherOpen}
              value={anotherValue}
              items={anotherItems}
              setOpen={setOpenAnother}
              setValue={setAnotherValue}
              setItems={setAnotherItems}
              listMode='SCROLLVIEW'
            />
          </View>
          <View>
            <Text style={StyleSheet.text}>Gender</Text>
            <RadioButton
              options={options}
              onPress={value => {
                setGender(value)
              }}
            />
          </View>
          <Text style={StyleSheet.text}>Blood alcohol level</Text>
        </View>
       
        <View style={StyleSheet.result}>
          <Text style={getResultStyle(bloodAlcoholLevel)}>
            {bloodAlcoholLevel}
          </Text>
        </View>
        <View>
          <Button color={'blue'} onPress={calculate} title='Calculate'>
            <Text>Calculate</Text>
          </Button>
        </View>
        <View style={StyleSheet.footer}>
          <Text style={StyleSheet.author}>Author: Henri Kajula</Text>
        </View>
      </ScrollView>
    </View>
  )
}
