import React, { useState } from "react";
import { Htag } from "./components/UI/Htag/Htag";
import MyInput from "./components/UI/MyInput/MyInput";
import classes from './App.module.css';
import MyRadioBtn from "./components/UI/MyRadioBtn/MyRadioBtn";
import MySelect from "./components/UI/MySelect/MySelect";
import { Label } from "./components/UI/MyLabel/MyLabel";
import { MyButton } from "./components/UI/MyButton/MyButton";
import { Warning } from "./components/UI/Warning/Warning";
import AnswerInput from "./components/UI/AnswerInput/AnswerInput";

function App() {
  const cases = ['Именительный', 'Родительный', 'Дательный', 'Винительный', 'Творительный', 'Предложный'];
  const [data, setData] = useState({
    word: '',
    genus: '',
    cases: ''
  });

  const ref = React.createRef();

  const [validWord, setValidWord] = useState(false);
  const [validGenus, setValidGenus] = useState(false);
  const [validCases, setValidCases] = useState(false);
  const [checkForm, setCheckForm] = useState(false);

  const changeWord = (e) => {
    e.preventDefault();

    const reg = /^([а-яА-ЯЁё]{1,80})$/u;
    if (reg.test(e.target.value)) {
      setData({...data, word: e.target.value});
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

  const modificationCases = (word, genus, cases) => {
    let answer = 'Данные некорректны';
    let declination = null;
    let ending = word.slice(-1);
    if (ending !== 'а' && ending !== 'я' && ending !== 'о' &&
        ending !== 'е' && ending !== 'ь') {ending = ''};
    switch(ending) {
      case 'а':
        declination = 1;
        break;
      case 'я': 
        declination = 1;
        break;
      case 'о': 
        declination = 2;
        break;
      case 'е': 
        declination = 2;
        break;
      default: if (genus === 'male') {
        declination = 2;
      } else if (genus === 'female' ){
        declination = 3;
      };
    }

    switch(cases) {
      case 'Именительный': 
         return answer = word; 
      case 'Родительный':
        if (declination === 1 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'и'; 
        } else if (declination === 1 && genus === 'male') {
          return answer = word.substring(0, word.length-1) + 'и'; 
        } else if (declination === 2 && genus === 'male') {
          if (ending === '') return answer = word + 'а';
          return answer = word.substring(0, word.length-1) + 'я'; 
        }  else if (declination === 2 && genus === 'average') {
           return answer =word.substring(0, word.length-1) + 'я'; 
        }  else if (declination === 3 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'и'; 
       };
       break;
       case 'Дательный':
        if (declination === 1 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'е'; 
        } else if (declination === 1 && genus === 'male') {
          return answer = word.substring(0, word.length-1) + 'е'; 
        } else if (declination === 2 && genus === 'male') {
          if (ending === '') return answer = word + 'у';
          return answer = word.substring(0, word.length-1) + 'ю'; 
        }  else if (declination === 2 && genus === 'average') {
           return answer = word.substring(0, word.length-1) + 'у'; 
        }  else if (declination === 3 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'и'; 
       };
        break;
       case 'Винительный':
        if (declination === 1 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'у'; 
        } else if (declination === 1 && genus === 'male') {
          return answer = word.substring(0, word.length-1) + 'у'; 
        } else if (declination === 2 && genus === 'male') {
          if (ending === '') return answer = word;
          return answer = word.substring(0, word.length-1) + 'я'; 
        }  else if (declination === 2 && genus === 'average') {
           return answer = word.substring(0, word.length-1) + 'о'; 
        }  else if (declination === 3 && genus === 'female') {
          return answer = word; 
       };
       break;
      case 'Творительный':
        if (declination === 1 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'ой'; 
        } else if (declination === 1 && genus === 'male') {
          return answer = word.substring(0, word.length-1) + 'ой'; 
        } else if (declination === 2 && genus === 'male') {
          if (ending === '') return answer = word + 'ом';
          return answer = word.substring(0, word.length-1) + 'ем'; 
        }  else if (declination === 2 && genus === 'average') {
           return answer = word.substring(0, word.length-1) + 'ом'; 
        }  else if (declination === 3 && genus === 'female') {
          return answer = word + 'ю'; 
        };
        break;
     case 'Предложный':
        if (declination === 1 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'е'; 
        } else if (declination === 1 && genus === 'male') {
          return answer = word.substring(0, word.length-1) + 'е'; 
        } else if (declination === 2 && genus === 'male') {
          if (ending === '') return answer = word + 'е';
          return answer = word.substring(0, word.length-1) + 'е'; 
        }  else if (declination === 2 && genus === 'average') {
           return answer = word.substring(0, word.length-1) + 'е'; 
        }  else if (declination === 3 && genus === 'female') {
          return answer = word.substring(0, word.length-1) + 'и'; 
        };
        break;
      default: return answer; 
    }
}

  const submitForm = (e) => {
    e.preventDefault();
    if (validWord && validGenus && validCases) {
      document.forms[0].reset();
      ref.current.value = modificationCases(data.word, data.genus, data.cases);
    }
    setCheckForm(true);    
  }
  
  




  return (
    <form>
      <div className={classes.wrapper}>
        <Htag tag='h1'>Форма для изменения существительных по падежам</Htag>
        <div className={classes.inputBlock}>
          <Label name='word' children='Введите существительное в единственном числе' />
          <MyInput id='word' placeholder='Введите слово' onChange={changeWord} />
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
        <AnswerInput ref={ref} readOnly placeholder="Здесь будет ответ" />
      </div>
    </form>
  );
}

export default App;
