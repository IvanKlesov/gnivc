import React, { useState } from "react";
import { Htag } from "./components/UI/Htag/Htag";
import MyInput from "./components/UI/MyInput/MyInput";
import classes from './App.module.css';
import MyRadioBtn from "./components/UI/MyRadioBtn/MyRadioBtn";
import MySelect from "./components/UI/MySelect/MySelect";
import { Label } from "./components/UI/MyLabel/MyLabel";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { Warning } from "./components/UI/Warning/Warning";

function App() {
  const cases = ['Именительный', 'Родительный', 'Дательный', 'Винительный', 'Творительный', 'Предложный'];
  const [data, setData] = useState({
    word: '',
    genus: '',
    cases: ''
  });

  const [validWord, setValidWord] = useState(false);
  const [validGenus, setValidGenus] = useState(false);
  const [validCases, setValidCases] = useState(false);
  const [checkForm, setCheckForm] = useState(false);

  const changeWord = (e) => {
    e.preventDefault();

    const reg = /^([а-яА-ЯЁё]{1,80})$/u;
    if (reg.test(e.target.value)) {
      setData({...data, name: e.target.value});
      setValidWord(true);
    } else {
      setValidWord(false);
    }
  }

  const changeGenus = (e) => {
    if (e.target.value) {
      setData({...data, genus: e.target.value})
      setValidGenus(true);
    } else {
      setValidGenus(false);
    };    
  }

  const changeCases = (e) => {
    if (e.target.value) {
      setData({...data, cases: e.target.value})
      setValidCases(true);
    } else {
      setValidCases(false);
    };    
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (validWord && validGenus && validCases) {
      document.forms[0].reset();
    }
    setCheckForm(true);    
  }

  return (
    <div className={classes.wrapper}>
      <Htag tag='h1'>Форма для изменения существительных по падежам</Htag>
      <div className={classes.inputBlock}>
        <Label name='word' children='Введите существительное в единственном числе' />
        <MyInput id='word' placeholder='Введите словов' onChange={changeWord} />
        {(!validWord && checkForm) && <Warning name='text' children='Введите корректное слово' />}
      </div>
      <div className={classes.inputBlock}>
        <Label name='male' children='Выберите род существительного' />
        <MyRadioBtn onChange={changeGenus} />
        {(!validGenus && checkForm) && <Warning name='radio' children='Выберите род' />}
      </div>
      <div className={classes.inputBlock}>
        <Label name='cases' children='Выберите падеж' />
        <MySelect options={cases}  id='cases'  defaultValue='Язык' onChange={changeCases}  />
        {(!validCases && checkForm) && <Warning name='select' children='Выберите падеж' />}
      </div>
      <MyButton children='Изменить падеж' onClick={submitForm} />
    </div>
  );
}

export default App;
