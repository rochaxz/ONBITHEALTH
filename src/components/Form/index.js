import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity} from "react-native"
import ResultImc from "./ResultImc/index.js";
import styles from "./style.js";


export  default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc ] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")


function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc(" ic é igual: ")
        setTextButton("calcular Novamente")
        return
    }

         setImc(null)
         setTextButton("calcular")
         setMessageImc("preencha peso e altura")

}

return(
    <View style={styles.formContext}>
         <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="EX. 1.75"
            keyboardType="numeric"
            ></TextInput>

            <Text style={styles.formLabel}>Peso</Text>
            <TextInput style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="EX. 75.365"
            keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity
            style={styles.buttomCalculator}
            onPress={() =>{
                validationImc()
            }}
           > 
           <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
         </View>
         <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
);
}