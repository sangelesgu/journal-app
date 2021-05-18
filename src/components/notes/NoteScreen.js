import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  
  const { active: note } = useSelector( state => state.notes );
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm(note); 
  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note); 
      activeId.current = note.id
    }
   
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}))
  }, [formValues, dispatch])

  return (
    <div className="notes__main-content">
      
      <NotesAppBar />

      <div className="notes__content">
        <input 
          type="text"
          placeholder="Some awsome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          value={body}
          name="body"
          onChange={handleInputChange}
         ></textarea> 
      </div>

    {  
      note.url&&
      <div className="notes__image">
          <img 
            src="https://www.w3schools.com/w3css/img_lights.jpg"
            alt="img"
          ></img>
      </div>
    }
    </div>
  )
}
