import React, {useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets';
import {getRandomPrompt} from './utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = userNavigate();
  const [form, setForm] = useState( {
    name : '', 
    prompt : '',
    photo : '',

  });

  const [ ]
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost