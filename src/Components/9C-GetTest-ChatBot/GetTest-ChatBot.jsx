import "./GetTest-ChatBot.css";

const GetTestChatBot = () => {
  return (
    <section className="test-chat">
      <button className="test">GeT TEST</button>
      <div className="ChatBot">
        <div className="chat">
          <i className="fa-solid fa-headset"></i>
          <p>ChatBoot</p>
        </div>

        <div className="social">
          <ul>
            <li>
              <a href="">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GetTestChatBot;
