import React, { useState, useEffect, useCallback } from "react";

import "./profileQuestion.scss";
import coin from "../../assets/image/coin.svg";
import multiCoin from "../../assets/image/multiCoin.svg";
import coinsBox from "../../assets/image/coinsBox.svg";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

function ProfileQuestion(props) {
  const [active, setActive] = useState(0);


  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const listItems = numbers.map((number, index) => (
    <li
      className="step "
      onClick={() => setActive(index)}
      className={active !== index ? "step " : "active-step "}
      key={index}
      id={index}
    >
      {number}
    </li>
  ));

  const cards = [
    {
      text: "BTW1001$-",
      textSecond: "10,000$ PM",
      img: coin,
    },
    {
      text: "BTW1001$-",
      textSecond: "10,000$ PM",
      img: multiCoin,
    },

    {
      text: "BTW1001$-",
      textSecond: "10,000$ PM",
      img: coin,
    },
    {
      text: "BTW1001$-",
      textSecond: "10,000$ PM",
      img: coinsBox,
    },
    {
      text: "BTW1001$-",
      textSecond: "10,000$ PM",
      img: coinsBox,
    },
  ];
  const questions = [
    {
      id: 1,
      questions: "How much is your annual salary?",
      options: [
        {
          id: 1,
          title: "1000-2000",
        },
        {
          id: 2,
          title: "2000-5000",
        },
        {
          id: 3,
          title: "5000-10000",
        },
        {
          id: 4,
          title: "20000",
        },
      ],
    },

    {
      id: 2,
      questions: "How much you want to invest?",
      options: [
        {
          id: 1,
          title: "5000",
        },
        {
          id: 2,
          title: "10000",
        },
        {
          id: 3,
          title: "15000",
        },
        {
          id: 4,
          title: "More than 15000",
        },
      ],
    },

    {
      id: 3,
      questions: "Rate your knowledge of financial markets?",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
    {
      id: 4,
      questions: "Rate your knowledge of crypto currency and Bloch chain?",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
    {
      id: 4,
      questions: "Howuch is your annual expected retuurn?",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
    {
      id: 5,
      questions: "Rate your risk level",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
    {
      id: 6,
      questions: "What do you want to do with your profits?",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
    {
      id: 7,
      questions: "Do you need finnacial advisor?",
      options: [
        {
          id: 1,
          title: "Reinvest",
        },
        {
          id: 2,
          title: "Withdraw for life expenses",
        },
        {
          id: 3,
          title: "Save it for especial occasions",
        },

      ],
    },
    {
      id: 8,
      questions: "Do you inested before?",
      options: [
        {
          id: 1,
          title: "No",
        },
        {
          id: 2,
          title: "Yes,in forex market",
        },
        {
          id: 3,
          title: "Yes,in crypto currency",
        },

      ],
    },
    {
      id: 9,
      questions: "nineth question",
      options: [
        {
          id: 1,
          title: "answer 1",
        },
        {
          id: 2,
          title: "answer 2",
        },
        {
          id: 3,
          title: "answer 3",
        },
        {
          id: 4,
          title: "answer 4",
        },
      ],
    },
  ]
  const question = questions.map((item, index) => {
    const options = item.options
    if(active==index){
      return (

        <div >
          <Row>
            <Col md={12} lg={12} key={index}>
              <h1>
                {item.questions}
              </h1>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            {options.map((item, index) => {
              return (

                <form key={index} >
                  <label >
                    <input type='radio' className='checkbox-inp' />
                    {item.title}
                  </label>
                </form>


              )
            })}
          </div>
        </div>
      )
    }

  })

  const card = cards.map((item, index) => {
    return (
      <Col
        key={index}
        md={2}
        lg={2}
        xs={12}
        onClick={() => setActive(index)}
        className={`pointer-event path  ${active === index ? "active-path" : ""
          }`}
      >
        <Row>
          <Col md={5} lg={5} xs={6}></Col>
          <Col md={7} lg={7} xs={6}>
            <div className="path-card">
              <img
                src={item.img}
                alt={item.text}
                className={(item.name, "coins")}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={8} xs={4}>
            <p className="mb-0">{item.text}</p>
            <p>{item.textSecond}</p>
          </Col>
          <Col md={4} lg={4} xs={8}></Col>
        </Row>
      </Col>
    );
  });

  // const cookies = new Cookies();
  // let token = cookies.get("token");
  // const [answers, setAnswers] = useState([]);
  // const [tabAnswer, setTabAnswer] = useState(null);
  // const [isSending, setIsSending] = useState(false)





  // useEffect(() => {

  //   if (token !== null) {
  //     fetch("https://apid.hivest.ai/profile/my_question/", {
  //       headers: {
  //         Authorization: "JWT " + token.data.token,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res,"res is here")
  //         setAnswers(res.data);
  //         console.log(res.data, "response is here");
  //       }).then(() => console.log(answers, "answers is here"))
  //       .catch((err) => console.log(err));
  //   }

  // }, []);
  // const sendRequest = useCallback(async () => {


  //   if (isSending) {
  //     return
  //   }

  //   setIsSending(true)

  //   await axios
  //     .post(
  //       `http://localhost:3001/api/submit/${active}`, {

  //       data: tabAnswer
  //     },

  //     )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res, 'response is here')
  //       setIsSending(false)
  //     })
  //     .catch((err) => console.log(err));

  // }) 
  return (
    <div className="profile-question">
      <Container>
        <Row>
          <Col md={12} lg={12} xs={12} className="p-0">
            <ul>{listItems}</ul>


            {question}


            {card}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProfileQuestion;
