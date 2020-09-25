import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/geo">
          <Geo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
      result: 0,
      showq: true,
      showa: false,
      answer: 0,
      resultPath: "",
      geo: 0,
      wind: 0,
      nuclear: 0,
      water: 0,
      solar: 0,
      bio: 0,
      waste: 0,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  _Answer = (choice, data) => {
    this.setState({ showq: false });
    this.setState({ showa: true });
    this.setState({ answer: choice });
    //console.log(data);
    if (data === "geo") {
      this.setState({ geo: this.state.geo + 1 });
    }
    if (data === "wind") {
      this.setState({ wind: this.state.wind + 1 });
    }
    if (data === "nuclear") {
      this.setState({ nuclear: this.state.nuclear + 1 });
    }
    if (data === "water") {
      this.setState({ water: this.state.water + 1 });
    }
    if (data === "solar") {
      this.setState({ solar: this.state.solar + 1 });
    }
    if (data === "bio") {
      this.setState({ bio: this.state.bio + 1 });
    }
    if (data === "waste") {
      this.setState({ waste: this.state.waste + 1 });
    }
  };
  _nextQ = () => {
    this.setState({ stage: this.state.stage + 1 });
    this.setState({ showq: true });
    this.setState({ showa: false });
    this.setState({ answer: 0 });
  };
  _genResult = () => {
    console.log("Gen");
  };
  
  render() {    
    const backgroundStage =
      "stageBackground stage" +
      this.state.stage +
      " result" +
      this.state.result;
    return (
      <>
        <div className={backgroundStage}>
          <div className="">
            <a href="https://themomentum.co/" target="_blank">
              <img
                src={
                  this.state.stage === 3
                    ? "images/logos/momentum_white.png"
                    : "images/logos/momentum_black.png"
                }
                className="momentum_corner"
                alt="The Momentum"
              />
            </a>
            {this.state.stage !== 0 && (
              <>
                {this.state.stage <= 4 && (
                  <>
                    {this.state.showa && (
                      <>
                        <button
                          className="btn btnNext"
                          onClick={() => {
                            this._nextQ();
                          }}
                        >
                          <img
                            src="images/icons/iconNext.png"
                            alt="button next"
                          />
                        </button>
                      </>
                    )}
                  </>
                )}
                {this.state.stage === 5 && (
                  <>
                    {this.state.showa && (
                      <>
                        <button
                          className="btn btnNext"
                          onClick={() => {
                            this._genResult();
                          }}
                        >
                          <img
                            src="images/icons/iconNext.png"
                            alt="button next"
                          />
                        </button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            {this.state.stage !== 0 && (
              <>
                {this.state.stage !== 6 && (
                  <div className="boxNavigator">
                    <ul className="ulNavigator">
                      <li>
                        <div
                          className={this.state.stage >= 1 ? "done" : ""}
                        ></div>
                      </li>
                      <li>
                        <div
                          className={this.state.stage >= 2 ? "done" : ""}
                        ></div>
                      </li>
                      <li>
                        <div
                          className={this.state.stage >= 3 ? "done" : ""}
                        ></div>
                      </li>
                      <li>
                        <div
                          className={this.state.stage >= 4 ? "done" : ""}
                        ></div>
                      </li>
                      <li>
                        <div
                          className={this.state.stage >= 5 ? "done" : ""}
                        ></div>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
            {this.state.stage === 0 && (
              <div className="container-fluid">
                <div className="row justify-content-center pt-5">
                  <div className="col-12 col-md-10 col-lg-10 text-center pt-4">
                    <div className="boxContainStage0">
                      <img
                        src="images/txtImage/title.png"
                        className="titleLogo d-none d-lg-block"
                        alt="let's power up your energy"
                      />
                      <img
                        src="images/txtImage/titleMobile.png"
                        className="titleLogo d-lg-none"
                        alt="let's power up your energy"
                      />
                      <p className="txtTitle">
                        ในตัวคุณมี ‘พลังงานทดแทน’ แบบไหนซ่อนอยู่กันนะ
                      </p>
                      <p className="txtHeaderIntro">
                        รู้หรือไม่ ? พลังงานกำลังจะหมดไปจากโลก!
                      </p>
                      <p className="txtIntro">
                        พลังงานที่เราใช้กันอยู่ทุกวันนี้ส่วนใหญ่มาจาก ‘ฟอสซิล’
                        ซากพืชซากสัตว์ที่ทับถมมาหลายล้านปีจนกลายเป็นถ่านหินและน้ำมัน
                        และแหล่งพลังงานเหล่านี้ก็ค่อยๆ ร่อยหรอลงไปทุกวัน
                        ซึ่งสวนทางกับความต้องการพลังงานของมนุษย์ที่เพิ่มขึ้นตลอดเวลา
                        อีกทั้งการนำพลังงานเหล่านี้มาใช้ยังทำให้เกิดมลพิษกับชั้นบรรยากาศอย่างสาหัสอีกด้วย
                        เราจึงต้องหาทางออกให้กับโลกโดยการหาแหล่งพลังงานอื่นๆ
                        มาทดแทนอย่างเร่งด่วน
                      </p>
                      <p className="txtIntro">
                        ‘พลังงานทดแทน’
                        กำลังจะเข้ามากอบกู้โลกของเราจากวิกฤตที่จะเกิดขึ้นในอนาคตอันใกล้
                        มาดูกันว่าในตัวของคุณนั้นมีพลังงานทดแทนแบบไหนซ่อนอยู่
                        ชวนมาสำรวจตัวตนและทำความรู้จักกับพลังงานทดแทนไปพร้อมกันๆ
                        กับคำถามสั้นๆ 5 ข้อต่อไปนี้
                      </p>
                      <button
                        className="btn btnStart"
                        onClick={() => {
                          this.setState({ stage: this.state.stage + 1 });
                        }}
                      >
                        เริ่ม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.stage === 1 && (
              <div className="container">
                <div className="row justify-content-center justify-content-lg-start pt-5">
                  <div className="col-12 col-md-10 col-lg-6 text-left pt-4">
                    {this.state.showq && (
                      <>
                        <p className="txtQuiz">
                          วันนี้จะต้องออกไปทำธุระนอกบ้าน เราจะเดินทางยังไงกันดี
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(1, "wind");
                              }}
                            >
                              1. ถ้าไม่ไกลมาก เดินไปดีกว่า
                              ไม่สร้างมลพิษแถมได้ออกกำลังกาย
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(2, "geo");
                              }}
                            >
                              2. รถไฟใต้ดิน อีกหนึ่งทางเลือกเวลาเร่งรีบ
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(3, "nuclear");
                              }}
                            >
                              3. ขับรถส่วนตัวไป
                              ยุ่งยากนิดหน่อยแต่ถึงที่หมายดั่งใจแน่นอน
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {this.state.showa && (
                      <>
                        {this.state.answer === 1 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานลม’</p>
                            <p className="titleSubTxtAnswer">
                              เคลื่อนที่ด้วยตัวเองอย่างเป็นอิสระ
                            </p>
                            <p className="txtAnswer">
                              ลมเคลื่อนที่ด้วยตัวเองอย่างอิสระและไม่สร้างมลพิษกับสิ่งแวดล้อม
                              เป็นพลังงานที่เกิดขึ้นเองตามธรรมชาติ
                              เมื่ออากาศอากาศร้อนลอยตัวสูงขึ้นทำให้อากาศเย็นซึ่งมีมวลหนาแน่นกว่าเข้ามาแทนที่
                              เกิดเป็นลมที่พัดเย็นสบาย
                            </p>
                          </>
                        )}
                        {this.state.answer === 2 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานความร้อนใต้พิภพ’
                            </p>
                            <p className="titleSubTxtAnswer">
                              อีกหนึ่งทางเลือกที่อยู่ลึกลงไปใต้ดิน
                            </p>
                            <p className="txtAnswer">
                              เมื่อขนส่งสาธารณะไม่ได้มีแค่บนบก
                              โลกนี้ก็ไม่ได้มีแค่พลังงานจากบนฟ้าและผืนดินเช่นกัน
                              ลึกลงไปใต้ผืนโลกยังมี ‘ความร้อนระอุ’
                              ปะทุอยู่ตลอดเวลา
                              นั่นเป็นพลังงานความร้อนที่สูงไปแตะ 5,000
                              องศาเซลเซียสเลยทีเดียว
                            </p>
                          </>
                        )}
                        {this.state.answer === 3 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานนิวเคลียร์’
                            </p>
                            <p className="titleSubTxtAnswer">
                              ลงทุน ลงแรง แต่ผลลัพธ์มหาศาล
                            </p>
                            <p className="txtAnswer">
                              หากจะเปลี่ยนโลกของพลังงานด้วยนิวเคลียร์
                              คงต้องลงทุน ลงแรง และดูแลให้รัดกุม
                              แต่ผลลัพธ์ที่ได้นั้นจะยั่งยืน
                              พลังงานนิวเคลียร์เป็นพลังงานสะอาด ผลิตคาร์บอนต่ำ
                              และยังให้พลังงานมหาศาลเมื่อเทียบกับพลังงานอื่นๆ
                              ทั่วไป
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {this.state.stage === 2 && (
              <div className="container">
                <div className="row justify-content-end justify-content-lg-end pt-5">
                  <div className="col-10 col-md-10 col-lg-8 text-left pt-4">
                    {this.state.showq && (
                      <>
                        <p className="txtQuiz">
                          ห้องโปรดห้องไหนในบ้านที่ชอบจนอยากจะขลุกอยู่ในนั้นทั้งวัน
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(1, "water");
                              }}
                            >
                              1. ห้องนอนที่เป็นทุกอย่าง ไม่ว่าจะเป็นที่ทำงาน
                              ดูซีรีส์ ที่กินข้าว ห้องนั่งเล่น
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(2, "geo");
                              }}
                            >
                              2. ห้องใต้ดิน
                              ฐานลับที่เอาไว้เก็บสมบัติและของสะสมในวัยเด็ก
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(3, "wind");
                              }}
                            >
                              3. ห้องนั่งเล่นที่มีอากาศธรรมชาติถ่ายเทตลอดเวลา
                              เหมาะกับการอ่านหนังสือสักเล่มยามบ่าย
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {this.state.showa && (
                      <>
                        {this.state.answer === 1 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานน้ำ’</p>
                            <p className="titleSubTxtAnswer">
                              พลังอเนกประสงค์ เปลี่ยนได้หลายสถานะ
                            </p>
                            <p className="txtAnswer">
                              พลังงานจากน้ำเป็นพลังงานจากธรรมชาติที่เราใช้ได้อย่างไม่สิ้นสุด
                              น้ำมีวัฏจักรจะระเหยจากทะเลสาบและมหาสมุทรขึ้นไปบนท้องฟ้า
                              ก่อนจะกลายเป็นเมฆก้อนโตและกลั่นตัวลงมาเป็นน้ำอีกครั้ง
                            </p>
                          </>
                        )}
                        {this.state.answer === 2 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานความร้อนใต้พิภพ’
                            </p>
                            <p className="titleSubTxtAnswer">
                              ขุมทรัพย์ใต้ผืนดินอันล้ำค่า
                            </p>
                            <p className="txtAnswer">
                              ความร้อนใต้พิภพเป็นสมบัติที่อยู่ใต้พื้นพิภพ
                              คนเราใช้ประโยชน์จากพลังงานความร้อนชนิดนี้มาตั้งแต่โบราณ
                              ไม่ว่าจะเป็นการรักษาโรค ทำอาหาร ละลายหิมะ
                              และในปัจจุบันก็กลายมาเป็นแหล่งพลังงานไฟฟ้าที่มีประสิทธิภาพ
                            </p>
                          </>
                        )}
                        {this.state.answer === 3 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานลม’</p>
                            <p className="titleSubTxtAnswer">
                              เคลื่อนที่และถ่ายเทตลอดเวลา
                            </p>
                            <p className="txtAnswer">
                              ลมถ่ายเทและเคลื่อนที่อยู่ตลอดเวลา
                              ทุกการเคลื่อนที่ของลมทำให้เกิดพลังงานที่เปลี่ยนเป็นไฟฟ้าได้
                              ลมในประเทศไทยที่มีความเร็วอยู่ระหว่าง 3-5
                              เมตรต่อวินาทีและมีความเข้มระหว่าง 20-50
                              วัตต์ต่อตารางเมตร
                              นั่นคือระดับพลังงานลมที่นำมาใช้งานได้
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {this.state.stage === 3 && (
              <div className="container">
                <div className="row justify-content-center justify-content-lg-start pt-5">
                  <div className="col-12 col-md-10 col-lg-6 text-left pt-4">
                    {this.state.showq && (
                      <>
                        <p className="txtQuiz">
                          เมื่อเพื่อนๆ จัดปาร์ตี้ คุณมีสถานะเป็นใครในงานครั้งนี้
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(1, "solar");
                              }}
                            >
                              1. เป็นคนสำคัญที่ขาดไม่ได้ เพื่อนคงไม่ยอมแน่ๆ
                              หากคุณไม่ไป
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(2, "water");
                              }}
                            >
                              2. คนธรรมดาทั่วไป
                              สามารถลื่นไหลไปตามคลื่นของฝูงชนและสนทนาได้กับทุกคนที่มาร่วมงาน
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(3, "waste");
                              }}
                            >
                              3. ไม่ได้ไป เพราะไม่มีใครชวน แต่หากได้ไป
                              คุณเป็นอีกคนที่สนุกสนานและสร้างสีสันให้กับงานได้เป็นอย่างดี
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {this.state.showa && (
                      <>
                        {this.state.answer === 1 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานแสงอาทิตย์’
                            </p>
                            <p className="titleSubTxtAnswer">
                              พลังงานความร้อนที่จำเป็นกับโลกใบนี้
                            </p>
                            <p className="txtAnswer">
                              ความอบอุ่นที่โอบโลกใบนี้เอาไว้
                              พระอาทิตย์เป็นแหล่งพลังงานธรรมชาติที่แน่นอนและยั่งยืน
                              เพราะแผ่รังสีความร้อนมายังผืนโลกทุกวัน
                              ทั้งยังนำไปใช้ประโยชน์ได้อย่างหลากหลายทั้งในระดับครัวเรือนและอุตสาหกรรมใหญ่ๆ
                            </p>
                          </>
                        )}
                        {this.state.answer === 2 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานน้ำ’</p>
                            <p className="titleSubTxtAnswer">
                              เคลื่อนไหว ยืดหยุ่นและเปลี่ยนสถานะได้เรื่อยๆ
                            </p>
                            <p className="txtAnswer">
                              น้ำสามารถเปลี่ยนได้หลายสถานะ
                              ยืดหยุ่นและมีรูปร่างไปตามภาชนะที่ใส่
                              อีกทั้งเมื่อเคลื่อนไหวยังทำเกิดพลังงานสะสมอยู่
                              น้ำจึงถูกนำไปเป็นแหล่งกำเนิดพลังงานอยู่เสมอ เช่น
                              กังหันน้ำสร้างพลังงานไฟฟ้า
                            </p>
                          </>
                        )}
                        {this.state.answer === 3 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานขยะ’</p>
                            <p className="titleSubTxtAnswer">
                              แม้จะถูกทิ้งขว้าง แต่จริงๆ แล้วมีคุณค่ามหาศาล
                            </p>
                            <p className="txtAnswer">
                              ขยะที่เราทิ้งมีประโยชน์กว่าที่คิด
                              หากนำไปผ่านกระบวนการอย่างถูกวิธี
                              ของเหลือใช้ทิ้งขว้างก็จะกลายมาเป็นพลังงานไฟฟ้าชั้นดี
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {this.state.stage === 4 && (
              <div className="container">
                <div className="row justify-content-center justify-content-lg-end pt-5">
                  <div className="col-12 col-md-10 col-lg-6 text-left pt-4">
                    {this.state.showq && (
                      <>
                        <p className="txtQuiz">
                          วันหยุดสุดสัปดาห์ ในเวลาว่างๆ
                          จะสามารถพบเจอคุณได้ที่ไหน
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(1, "waste");
                              }}
                            >
                              1. คุณไปหลายๆ ที่ในวันเดียว
                              เราอาจบังเอิญพบคุณได้ทุกๆ ที่เลยก็ว่าได้
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(2, "bio");
                              }}
                            >
                              2. ทุ่งหญ้ากว้าง กลางป่าเขา
                              ที่ไหนก็ได้ที่มีธรรมชาติ
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(3, "nuclear");
                              }}
                            >
                              3. ไปเยือนชายฝั่ง ชื่นชมแม่น้ำอันสงบเงียบ
                              ห่างจากชุมชนแออัดสักพัก
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {this.state.showa && (
                      <>
                        {this.state.answer === 1 && (
                          <>
                            <p className="titleTxtAnswer">‘พลังงานขยะ’</p>
                            <p className="titleSubTxtAnswer">
                              ขยะมีอยู่ทุกที่
                              ถูกทิ้งเกลื่อนกลาดทั้งบนผืนดินและท้องทะเล
                            </p>
                            <p className="txtAnswer">
                              ลำพังในประเทศไทยเอง ประชากรของเราทิ้งขยะกันวันละ
                              1.15 กิโลกรัมต่อคนต่อวัน (ปี 2561)
                              ทำให้ขยะล้นบ่อจนกำจัดแทบไม่หวาดไม่ไหว
                              ซึ่งหากกำจัดอย่างไร้ประสิทธิภาพจะทำให้เกิดคาร์บอนไปทำลายชั้นบรรยากาศ
                              การใช้ขยะมาเป็นพลังงานทดแทน
                              นอกจากจะเป็นการลดปริมาณขยะในบ่อแล้ว
                              ยังได้พลังงานมาใช้อีกด้วย
                            </p>
                          </>
                        )}
                        {this.state.answer === 2 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานชีวมวล & พลังงานชีวภาพ’
                            </p>
                            <p className="titleSubTxtAnswer">
                              มีอยู่ทุกที่ในธรรมชาติ
                            </p>
                            <p className="txtAnswer">
                              คุณคือผลผลิตจากธรรมชาติ ไม่ว่าจะเป็นซากพืช
                              ซากสัตว์ เศษผัก ผลไม้
                              ล้วนเป็นชีวมวลชั้นดีที่จะผลิตก๊าซชีวภาพที่นำมาใช้ทดแทนพลังงานหลักได้อย่างยั่งยืน
                            </p>
                          </>
                        )}
                        {this.state.answer === 3 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานนิวเคลียร์’
                            </p>
                            <p className="titleSubTxtAnswer">
                              โรงไฟฟ้านิวเคลียร์มักตั้งอยู่บริเวณริมแม่น้ำ
                            </p>
                            <p className="txtAnswer">
                              โรงไฟฟ้านิวเคลียร์ต้องการน้ำหล่อเย็นสำหรับระบบการผลิต
                              จึงต้องตั้งอยู่ใกล้ๆ แหล่งน้ำ
                              แต่ทั้งนี้ต้องออกแบบอย่างครอบคลุมเพื่อป้องกันภัยพิบัติด้วย
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {this.state.stage === 5 && (
              <div className="container">
                <div className="row justify-content-center justify-content-lg-end pt-5">
                  <div className="col-12 col-md-10 col-lg-6 text-left pt-4">
                    {this.state.showq && (
                      <div className="boxStage5">
                        <p className="txtQuiz">
                          วันพรุ่งนี้ต้องไปร่วมงานสำคัญ
                          แต่ยังไม่ได้เตรียมชุดสักชุด จะทำยังไงดีนะ
                        </p>
                        <div className="row">
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(1, "bio");
                              }}
                            >
                              1. เสื้อผ้าที่มีอยู่ใช้ไม่ได้เลย ลองเอามาตัดนิด
                              แต่งหน่อย มิกซ์แอนด์แมตช์ให้กลายเป็นชุดใหม่ดีกว่า
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(2, "solar");
                              }}
                            >
                              2. มีชุดตัวเก่งที่ใส่ประจำอยู่แล้ว
                              รีดให้เรียบนิดหน่อยเป็นอันว่าใช้งานได้
                            </button>
                          </div>
                          <div className="col-12 col-md-12 col-lg-4 mb-3">
                            <button
                              className="btn btnAnswer"
                              onClick={() => {
                                this._Answer(3, "nuclear");
                              }}
                            >
                              3. ไม่มีชุดที่ใช้ออกงานได้เลย
                              นี่คงถึงเวลาที่เราจะมีชุดดีๆ เป็นของตัวเองสักชุด
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {this.state.showa && (
                      <>
                        {this.state.answer === 1 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานชีวมวล & พลังงานชีวภาพ’
                            </p>
                            <p className="titleSubTxtAnswer">
                              ของเหลือใช้ที่ทำประโยชน์ได้
                            </p>
                            <p className="txtAnswer">
                              ชีวมวลเป็นของเหลือใช้ที่พบได้ในธรรมชาติอยู่แล้ว
                              ถ้ามองข้ามไปก็เป็นเพียงขยะจากเกษตรกรรม
                              แต่หากรู้วิธีนำไปใช้งานต่อ
                              นำไปผ่านกระบวนการที่สำหรับผลิตพลังงานชีวภาพ
                              ไม่ว่าจะเป็นการหมักให้เกิดก๊าซ
                              หรือเผาไหม้จนเกิดความร้อน
                              ก็ทำให้ขยะเหล่านั้นมีคุณค่าขึ้นมาทันที
                            </p>
                          </>
                        )}
                        {this.state.answer === 2 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานแสงอาทิตย์’
                            </p>
                            <p className="titleSubTxtAnswer">
                              ทรัพยากรที่ให้เราพร้อมใช้ประโยชน์อยู่เสมอ
                            </p>
                            <p className="txtAnswer">
                              พลังงานที่เราทุกคนสามารถเข้าถึงได้และเป็นเจ้าของร่วมกัน
                              เราใช้ประโยชน์จากแสงอาทิตย์มาเสมอ
                              ไม่ว่าจะโดยตรงหรือทางอ้อม
                              แต่ก่อนจะแปลงมาเป็นพลังงานไฟฟ้า
                              ต้องอาศัยเซลล์แสงอาทิตย์ (Solar Cell) เป็นตัวกลาง
                              เท่านี้ก็ใช้งานได้อย่างยั่งยืนแล้ว
                            </p>
                          </>
                        )}
                        {this.state.answer === 3 && (
                          <>
                            <p className="titleTxtAnswer">
                              ‘พลังงานนิวเคลียร์’
                            </p>
                            <p className="titleSubTxtAnswer">
                              พลังงานที่ยังไม่มีใครใช้
                              แต่อาจเป็นทางเลือกใหม่ที่ให้ผลลัพธ์ดีๆ
                            </p>
                            <p className="txtAnswer">
                              ในโลกนี้ยังไม่มีการใช้พลังงานนิวเคลียร์อย่างแพร่หลายมากนัก
                              นิวเคลียร์เป็นพลังงานที่ไม่ได้มาจากธรรมชาติเสียทีเดียว
                              แต่ต้องอาศัยมือของมนุษย์เราพาให้เกิดปฏิกิริยาเคมีในอะตอมขึ้นมา
                              การจะทำให้พลังงานนิวเคลียร์ถือกำเนิดได้จึงต้องสร้างโรงไฟฟ้านิวเคลียร์อันเป็นสถานที่ผลิตพลังงาน
                              นั่นจึงเป็นข้อจำกัดที่ใหญ่หลวงหากเราจะเปลี่ยนมาใช้พลังงานชนิดนี้อย่างเต็มรูปแบบ
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

function Main() {
  return (
    <>
    <div>
      <Quiz />
    </div>
    </>
  );
}


function Geo() {  
  return (
    <>
    <div>
      <Quiz />
    </div>
    </>
  );
}
