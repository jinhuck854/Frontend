/* eslint-disable */ //waring 메시지 삭제

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let post = "대구 맛집"; // 변수 선언 후 {} 중괄호를 활용하여 변수 가져오기 가능
  // 데이터 바인딩 = id={} : 서버에서 데이터를 가져와서 <html> 사이에 넣기
  // State : 

  const [toDos, setToDos] = useState(["남자 코트 추천", "강남 우동 맛집", "파이선 독학", "하트", "좋아요"]);
  const [good, setGood] = useState(0);

  const onClick = () => { // 좋아요 +1
    setGood(good + 1);
  }

  const onChange = () => { // 남자 코트 추천 -> 여자 코트 추천 // toggle 기능 구현?
    const copy = [...toDos];
    copy[0] = " 여자 코트 추천";
    setToDos(copy);
  }

  const onOrder = () => { // toDos[] 가나다순 정렬
    const copy = [...toDos];
    copy.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1) // 
    setToDos(copy);
  }

  function Modal() { // Component : 반복되는 html  축약, 큰 페이지 이용/전환 할 때 좋음, 자주 변경되는 UI
    return(
      <div className="modal">
        <h4>Title</h4>
        <p>Date</p>
        <p>Insert Memo</p>
      </div>
    )
  }

  return ( // JSX : JS -> html
    <div className="App">
      <div className="black-nav">
        <h4 id="black-nav">My React Blog</h4>
      </div>

      <div className="list">
        <button onClick={onOrder}>가나다순 정렬 </button>
        <button onClick={onChange}>여자 코트로 바꾸기</button>

        <h2 id="h2" value="0">{toDos[0]}
          <span onClick={onClick}> : 좋아요 ❤</span> {good}
        </h2>
        <p>2월 18일 발행</p>
      </div>

      <div className="list">
        <h2>{toDos[1]}</h2>
        <p>2월 18일 발행</p>
      </div>

      <div className="list">
        <h2>{toDos[3]}</h2>
        <p>2월 18일 발행</p>
      </div>

      <div className="list">
        <h2>{toDos[2]}</h2>
        <p>2월 18일 발행</p>
      </div>

      <div className="list">
        <h2>{toDos[4]}</h2>
        <p>2월 18일 발행</p>
      </div>

      <Modal/>

    </div>
  );
}

export default App;
