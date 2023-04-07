import './write.css'
import img from './write2.jpg'
export default function Write() {
  return (
    <div className='write'>
        <div className="writeImg">
            <img src={img} alt='write'/>
        </div>
      <form className='writeForm'>
        <div className="writeFormGroup">
            <label htmlFor='fileInput'>
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
        
            <input type='file' id='fileInput' style={{display :"none"}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>

        <div className="writeFormGroup">
            <textarea placeholder='Your Story ?'type ="text" className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
        
    </div>
  )
}
