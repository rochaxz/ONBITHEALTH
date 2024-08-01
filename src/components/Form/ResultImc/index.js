import React, { useState } from "react";
import { TextInput, view, text, Button, View} from "react-native"
import ResultImc from "../ResultImc/index.js";


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
    <view>
         <view>
            <text>Altura</text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="EX. 1.75"
            keyboardType="numeric"
            ></TextInput>
            <text>Peso</text>
            <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="EX. 75.365"
            keyboardType="numeric"
            ></TextInput>
            <button
            onProgress={() => validationImc()}
            title={textButton}
            color="#61dafb"/>

         </view>
         <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </view>
);
}