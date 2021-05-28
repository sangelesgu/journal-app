import React from 'react'
import moment from 'moment'; 
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes);
  
  const currentDate = moment().format('MMM Do yyyy');
  
  const handleSave = () => {
    dispatch(startSaveNote(active))
  }

  const handlePicture = () => {
    document.querySelector('#file_selector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      dispatch(startUploading(file))
    }
  }

  return (
    <div className="notes__appbar">
      <span>{currentDate}</span>

      <input
        id="file_selector" 
        type="file"
        name="file"
        style={{display: 'none'}}
        onChange={handleFileChange}
      />

      <div> 
        <button 
          className="btn"
          onClick={handlePicture}
        >
          Picture
        </button>

        <button
          className="btn"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  )
}
