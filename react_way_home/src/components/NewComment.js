import React, {useState} from 'react'
function NewComment( props ) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

        return(
        <form onSumbit={ (event) => {
            event.preventDefault();
        }}>
           <div>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' value={title}></input>
            </div>
            <div>
                <label htmlFor='body'>Body</label>
                <input type='text' name='text' id='body' value={body}></input>
            </div>
            <div>
                <input type='submit' value='Create Comment'> </input>
            </div> 
        </form>
        )
}

export default NewComment;