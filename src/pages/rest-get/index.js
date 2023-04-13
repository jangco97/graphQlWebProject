import axios from 'axios';
import { useState } from 'react';
export default function RestGet() {
  const [text, setText] = useState('');

  const useAyncFunc = async () => {
    const result = await axios.get('https://koreanjson.com/posts/1');
    setText(result.data.title);
  };
  return (
    <>
      <button onClick={useAyncFunc}></button>
      <p>{text}</p>
    </>
  );
}
