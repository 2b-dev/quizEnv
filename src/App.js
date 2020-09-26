import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

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
      resultPath: "geo",
      geo: 0,
      wind: 0,
      nuclear: 0,
      water: 0,
      solar: 0,
      bio: 0,
      waste: 0,
      urlShare: "http://2b-dev.com/momentum/ppt/",
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
    let arr = [
      this.state.geo,
      this.state.wind,
      this.state.nuclear,
      this.state.water,
      this.state.solar,
      this.state.bio,
      this.state.waste,
    ];
    //let indexOfMaxValue = arr.indexOf(Math.max(...arr));
    let MaxValue = Math.max(...arr);
    console.log("ค่าสูงสุด : " + MaxValue);
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === MaxValue) {
        count++;
      }
    }
    if (count >= 2) {
      this.setState({ resultPath: "duplicate" });
      this.setState({ result: 8 });
      console.log("มีค่าสูงสุดซ้ำกัน ตอบ 8");
    } else {
      let indexOfMaxValue = arr.indexOf(Math.max(...arr));
      if (indexOfMaxValue === 0) {
        this.setState({ resultPath: "geo" });
        this.setState({ result: 1 });
        console.log("geo");
      }
      if (indexOfMaxValue === 1) {
        this.setState({ resultPath: "wind" });
        this.setState({ result: 2 });
        console.log("wind");
      }
      if (indexOfMaxValue === 2) {
        this.setState({ resultPath: "nuclear" });
        this.setState({ result: 3 });
        console.log("nuclear");
      }
      if (indexOfMaxValue === 3) {
        this.setState({ resultPath: "water" });
        this.setState({ result: 4 });
        console.log("water");
      }
      if (indexOfMaxValue === 4) {
        this.setState({ resultPath: "solar" });
        this.setState({ result: 5 });
        console.log("solar");
      }
      if (indexOfMaxValue === 5) {
        this.setState({ resultPath: "bio" });
        this.setState({ result: 6 });
        console.log("bio");
      }
      if (indexOfMaxValue === 6) {
        this.setState({ resultPath: "waste" });
        this.setState({ result: 7 });
        console.log("waste");
      }
    }
    this.setState({ stage: 6 });
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
            {this.state.stage === 6 && (
              <div className="container">
                <div className="row justify-content-center justify-content-lg-start pt-5">
                  <div className="col-12 col-md-10 col-lg-8 text-left pt-4">
                    <p className="txtResultTitle">
                      ‘พลังงานทดแทน’
                      <br />
                      ที่ซ่อนอยู่ในตัวคุณคือ
                    </p>
                    {this.state.result === 1 && (
                      <p className="txtResualtEnargy">พลังงานความร้อนใต้พิภพ</p>
                    )}
                    {this.state.result === 1 && (
                      <p className="txtSubResualtEnargy">ขุมทรัพย์ใต้ผืนโลก</p>
                    )}
                    {this.state.result === 2 && (
                      <p className="txtResualtEnargy">พลังงานลม</p>
                    )}
                    {this.state.result === 2 && (
                      <p className="txtSubResualtEnargy">
                        เป็นมิตรกับอากาศและสิ่งแวดล้อม
                      </p>
                    )}
                    {this.state.result === 3 && (
                      <p className="txtResualtEnargy">พลังงานนิวเคลียร์</p>
                    )}
                    {this.state.result === 3 && (
                      <p className="txtSubResualtEnargy">
                        พลังงานทางเลือกความหวังของมวลมนุษยชาติ
                      </p>
                    )}
                    {this.state.result === 4 && (
                      <p className="txtResualtEnargy">พลังงานน้ำ</p>
                    )}
                    {this.state.result === 4 && (
                      <p className="txtSubResualtEnargy">
                        มีพลัง หมุนเวียนได้อย่างไม่มีวันสิ้นสุด
                      </p>
                    )}
                    {this.state.result === 5 && (
                      <p className="txtResualtEnargy">พลังงานแสงอาทิตย์</p>
                    )}
                    {this.state.result === 5 && (
                      <p className="txtSubResualtEnargy">
                        ร้อนแรง มั่นคงและสม่ำเสมอ
                      </p>
                    )}
                    {this.state.result === 6 && (
                      <p className="txtResualtEnargy">
                        พลังงานชีวมวล & พลังงานชีวภาพ
                      </p>
                    )}
                    {this.state.result === 6 && (
                      <p className="txtSubResualtEnargy">
                        ผลผลิตจากธรรมชาติที่ไม่เคยสูญเปล่า
                      </p>
                    )}
                    {this.state.result === 7 && (
                      <p className="txtResualtEnargy">พลังงานขยะ</p>
                    )}
                    {this.state.result === 7 && (
                      <p className="txtSubResualtEnargy">
                        แม้จะถูกทิ้งขว้าง แต่ไม่ได้หมายความว่าประโยชน์
                      </p>
                    )}
                    {this.state.result === 8 && (
                      <p className="txtResualtEnargy">
                        พลังงานทดแทนหลายแบบซ่อนอยู่ในตัวคุณ
                      </p>
                    )}
                    <div className="boxDetailResualt">
                      <div className="boxDetailResualtBody">
                        {this.state.result === 1 && (
                          <p>
                            คุณไม่ค่อยแสดงความรู้สึกผ่านสีหน้าสักเท่าไหร่นัก
                            เวลาที่โกรธแม้ในใจจะร้อนรนแต่คุณแสดงออกทางสีหน้าอย่างเรียบเฉย
                            จริงๆ แล้วคุณเป็นคนที่สนุกสนานคนหนึ่งเลย
                            เพียงแต่ไม่ค่อยมีใครรู้เท่านั้นเอง
                            ลึกเข้าไปใต้ผืนโลกนั้นมีของเหลวร้อนๆ
                            ที่มีอุณหภูมิสูงถึง 5,000 องศาเซลเซียสไหลเวียนอยู่
                            และมนุษย์เราก็เรียนรู้ที่จะนำมาแปลงเป็นพลังงานได้อย่างมีประสิทธิภาพ
                            แหล่งความร้อนใต้พิภพมีของเหลวที่อุณหภูมิแตกต่างกันตามความตื้นลึก
                            ยิ่งลึกก็ยิ่งร้อน
                            ความร้อนเหล่านี้มีการเคลื่อนไหวตลอดเวลาและพร้อมจะปะทุออกมาตามรอยแยกของผิวโลกอยู่เสมอ
                            มนุษย์เราสามารถเจาะลงไปใต้ดินเพื่อหยิบยืมความร้อนนั้นมาใช้ประโยชน์ได้มากมายตั้งแต่อดีตกาล
                            แต่ละชั้นของพลังงานใต้ผิวโลกที่เรานำมาใช้ได้นั้นแบ่งเป็น
                            4 แบบ ได้แก่ ไอน้ำ น้ำร้อน หินร้อนแห้ง และแม็กมา
                            วิธีนำมาใช้ต้องอาศัยการขุดเจาะ นำส่ง
                            เพื่อดึงพลังงานความร้อนออกมา
                          </p>
                        )}
                        {this.state.result === 2 && (
                          <p>
                            ใครๆ
                            ก็พูดเป็นเสียงเดียวกันว่าเวลาอยู่กับคุณแล้วสบายใจ
                            เพราะคุณเป็นคนใจเย็น
                            เป็นมิตรทั้งกับคนรอบข้างและโลกใบนี้
                            เมื่อความร้อนจากดวงอาทิตย์ส่องกระทบพื้นผิวโลก
                            ทำให้อากาศร้อนๆ นั้นลอยตัวสูงขึ้น
                            อากาศเย็นที่หนาแน่นมากกว่าจึงรุดเข้ามาแทนที่
                            ทำให้เกิดสิ่งที่เรียกว่า ‘ลม’
                            อากาศที่เคลื่อนที่ทำให้เกิดพลังงาน
                            ทั้งยังเป็นพลังงานหมุนเวียนที่สะอาดและพบได้ตามธรรมชาติ
                            วิธีการนำพลังงานลมมาใช้ต้องอาศัย ‘กังหันลม’
                            เมื่อใบพัดหมุนจะช่วยจับพลังงานเหล่านั้นและเปลี่ยนเป็นไฟฟ้า
                            การผลิตไฟฟ้าจากพลังงานลมช่วยให้เราขับเคลื่อนโลกอย่างสะอาดและยั่งยืน
                            เพราะไม่มีมลพิษปล่อยสู่สิ่งแวดล้อมเลย
                          </p>
                        )}
                        {this.state.result === 3 && (
                          <p>
                            หากไม่รู้จัก ดูภายนอกคุณอาจเป็นคนน่ากลัวและเข้าใจยาก
                            แต่จริงๆ
                            แล้วคุณเป็นคนน่ารักคนหนึ่งที่พร้อมจะช่วยเหลือทุกคนเสมอ
                            หากลองเปิดใจให้คุณ พลังงานนิวเคลียร์
                            เป็นพลังงานที่เกิดขึ้นจาก ‘ปฏิกิริยานิวเคลียร์’
                            อะตอมซึ่งเป็นหน่วยที่เล็กที่สุดของทุกสรรพสิ่งบนโลกจะมีพันธะที่ยึดเหนี่ยวเอาไว้
                            เมื่อมีการเปลี่ยนแปลงระดับนิวเคลียส
                            พลังงานนั้นก็จะถูกปล่อยออกมา ปฏิกิริยานิวเคลียร์
                            แบ่งเป็น 2 ประเภท ได้แก่ ปฏิกิริยาฟิชชั่น
                            และปฏิกิริยาฟิวชั่น
                            พลังงานจากถ่านหินทำให้หลอดไฟสว่างได้ 3.8 วัน
                            พลังงานจากน้ำมันดีเซลทำให้สว่างได้ 5.3 วัน
                            แต่พลังงานนิวเคลียร์ของแร่ยูเรเนียม 1 กิโลกรัม
                            ทำให้หลอดไฟสว่างได้ถึง 25,700 ปี
                            อาจกล่าวได้ว่าพลังงานนิวเคลียร์เป็นอีกทางเลือกที่ยั่งยืนเพื่อรองรับการใช้พลังงานของมนุษย์โลกที่เพิ่มขึ้นเรื่อยๆ
                            โรงไฟฟ้านิวเคลียร์สามารถผลิตกระแสไฟฟ้าขนาดใหญ่ได้อย่างต่อเนื่องโดยไม่หยุดชะงัก
                            อีกทั้งกระบวนการผลิตพลังงานนิวเคลียร์ไม่มีการเผาไหม้
                            จึงไม่ทำให้เกิดก๊าซเรือนกระจกที่ทำลายชั้นบรรยากาศ
                          </p>
                        )}
                        {this.state.result === 4 && (
                          <p>
                            คุณเป็นคนมากความสามารถและเปี่ยมไปด้วยพลัง
                            ไม่ว่าจะทำอะไรคุณก็มีความยืดหยุ่นและสามารถปรับตัวให้เข้ากับทุกสถานการณ์ได้อย่างรวดเร็ว
                            พลังงานน้ำเป็นพลังงานที่ใช้ได้อย่างไม่สิ้นสุด
                            เพราะน้ำมี ‘วัฏจักร’
                            ที่หมุนเวียนและเปลี่ยนสถานะอยู่ตลอดเวลา
                            พื้นผิวโลกประกอบไปด้วยน้ำ 70 เปอร์เซ็นต์
                            เมื่อน้ำโดนความร้อนจากแสงแดดก็จะระเหยจากทะเลสาบและมหาสมุทรไปเป็นเมฆก้อนโต
                            ท้ายที่สุดจึงตกลงมาเป็นฝน
                            จากนั้นฝนก็ไหลลงสู่แม่น้ำดังเดิม
                            มีพลังงานเกิดขึ้นเสมอในกระแสน้ำที่กำลังไหลเชี่ยว
                            การเคลื่อนไหวของน้ำถูกนำมาเปลี่ยนเป็นจากพลังงานเป็นไฟฟ้าได้อย่างที่เราเรียกกันว่า
                            ‘พลังงานน้ำ’
                            ทั้งหมดนั้นล้วนขับเคลื่อนด้วยพลังงานจลน์ที่เกิดขึ้นจากการไหลของน้ำ
                            ผู้คนใช้ประโยชน์จากพลังงานนี้มากมาย ตั้งแต่กังหันน้ำ
                            ไปจนถึงโรงไฟฟ้าพลังน้ำ
                          </p>
                        )}
                        {this.state.result === 5 && (
                          <p>
                            โลกขาดพระอาทิตย์ไม่ได้ฉันใด
                            ทุกคนก็ขาดคุณไม่ได้ฉันนั้น
                            คุณเป็นคนสำคัญของคนรอบข้างเสมอเปี่ยมไปด้วยพลัง
                            กระตือรือร้น สนุกสนาน
                            เป็นคนเสมอต้นเสมอปลายและเชื่อถือได้
                            โลกของเรามีชีวิตชีวาได้ด้วยดวงอาทิตย์
                            นอกจากดวงอาทิตย์จะทำให้โลกของเราอบอุ่นและดำเนินไปได้อย่างสมดุลแล้ว
                            พลังงานจากความร้อนที่ส่งตรงมายังโลกยังนำมาแปลงเป็นพลังงานได้อีกด้วย
                            โซลาร์เซลล์
                            เป็นสิ่งประดิษฐ์ที่ช่วยแปลงพลังงานความร้อนให้กลายเป็นไฟฟ้าได้
                            และเป็นที่นิยมใช้อย่างแพร่หลายทั้งในครัวเรือนและอุตสาหกรรม
                            พลังงานชนิดนี้มีให้เราใช้เต็มที่ทุกๆ วัน
                            ทั้งยังเป็นแหล่งพลังงานหมุนเวียนที่สะอาดและอุดมสมบูรณ์
                          </p>
                        )}
                        {this.state.result === 6 && (
                          <p>
                            คุณเป็นมิตรกับคนรอบข้างเสมอ
                            แต่เพราะไม่ได้โดดเด่นเลยมักจะถูกลืมอยู่บ่อยๆ
                            คุณเป็นคนที่พร้อมจะมอบความจริงใจให้กับทุกคนอยู่เสมอ
                            หากมีใครสักคนที่เห็นคุณค่า ซากพืช ซากสัตว์ เศษใบไม้
                            ที่เน่าเปื่อยไปตามกาลเวลานั้น
                            สามารถนำมาผลิตพลังงานได้
                            สิ่งอินทรีย์เหล่านี้เรียกว่า ‘ชีวมวล (Biomass)’
                            ซึ่งพบได้ตามธรรมชาติ อาจเป็นวัสดุเหลือใช้จากการเกษตร
                            เช่น ซากอ้อย กิ่งไม้ เศษผัก
                            จึงทดแทนพลังงานจากถ่านหินซึ่งใช้แล้วหมดไปได้เป็นอย่างดี
                            นอกจากจะนำมาเป็นแหล่งกำเนิดพลังงานแล้วยังเป็นการช่วยให้ขยะอินทรีย์ไม่ให้เน่าเสียอย่างไร้ประโยชน์อีกด้วย
                            พลังงานชีวมวลผลิตขึ้นโดยกระบวนการแปรรูปวัตถุชีวภาพ
                            เช่น การเผา การผลิตก๊าซ และการหมัก
                            เมื่อนำเศษขยะเหล่านั้นมาเผาจะเกิดพลังงานความร้อน
                            ซึ่งนำไปใช้ผลิตไฟฟ้าได้ พลังงานชีวภาพ (Biogas
                            Energy) เป็นส่วนหนึ่งของพลังงานชีวมวล
                            ซึ่งเกิดจากการหมักและเปลี่ยนสถานะของแข็งให้กลายเป็นก๊าซ
                            พลังงานเกิดขึ้นจากการย่อยสลายขยะอินทรีย์ด้วยแบคทีเรียภายใต้สภาวะไร้ออกซิเจน
                            (anaerobic digestion) ทำให้เกิดก๊าซขึ้นมา
                            ซึ่งสามารถจะนำไปใช้ประโยชน์ต่อได้มากมาย
                          </p>
                        )}
                        {this.state.result === 7 && (
                          <p>
                            คุณเป็นคนธรรมดาๆ ที่ไม่ค่อยโดดเด่น
                            คนที่ไม่รู้จักจริงๆ
                            อาจมองว่าคุณใช้ชีวิตอย่างไรแก่นสารไปวันๆ
                            ทั้งที่จริงแล้วคุณเป็นคนมากความสามารถ
                            เพียงแต่ยังไม่มีโอกาสได้แสดงออกมาก็เท่านั้นเอง
                            ขยะกองเท่าภูเขาเป็นแหล่งพลังงานทางเลือกชั้นดี
                            เพราะในแต่ละวันโลกเราผลิตขยะเป็นจำนวนมหาศาล
                            การหันมาใช้พลังงานจากขยะเป็นอีกทางเลือกที่ช่วยประหยัดแหล่งพลังงานฟอสซิล
                            ขยะอินทรีย์ เช่น เศษอาหาร ใบไม้แห้ง
                            สามารถนำไปหมักเป็นก๊าซชีวภาพได้ ส่วนพลาสติก กระดาษ
                            ยางที่เผาไหม้ได้สามารถเปลี่ยนเป็นพลังงานความร้อนได้เช่นกัน
                            การนำของเสียกลับช่วยประหยัดต้นทุน
                            ช่วยกำจัดขยะที่ล้นบ่อในชุมชน
                            ถือเปลี่ยนให้สิ่งที่ไร้ประโยชน์รอการกำจัดกลับมามีประโยชน์อีกครั้ง
                          </p>
                        )}
                        {this.state.result === 8 && (
                          <p>
                            มีพลังงานทดแทนหลายแบบซ่อนอยู่ในตัวคุณ
                            คุณเป็นคนที่มีหลายมุม
                            คุณอาจเป็นคนที่สนุกสนานที่สุดในหมู่เพื่อนๆ
                            แต่บางมุมก็อยากที่จะเก็บตัวเงียบๆ อยู่คนเดียว
                            และยังมีมุมเจ๋งๆ อีกมากมายที่อาจไม่มีใครรู้
                            นั่นจึงทำให้คุณปรับตัวเข้ากับคนรอบข้างได้เป็นอย่างดี
                            พลังงานทดแทนมีหลายรูปแบบ
                            และมนุษย์เราสามารถนำไปใช้ประโยชน์ได้มากมาย
                            ขึ้นอยู่กับความเหมาะสม
                            บางพื้นที่มีลมพัดตลอดปีจึงเหมาะกับการสร้างกังหันลมเพื่อสร้างพลังงานมาใช้ประโยชน์
                            บางพื้นที่มีแดดส่องแรงตลอดทั้งวันจึงสามารถนำโซลาร์เซลส์มาใช้แปลงพลังงานแสงอาทิตย์ให้เป็นพลังงานไฟฟ้าในครัวเรือนได้
                            มนุษย์เราใช้พลังงานเพิ่มขึ้นทุกปี
                            ประเทศไทยคาดการณ์ไว้ว่าจะนำพลังงานทดแทนมาใช้แทนพลังงานฟอสซิลให้ได้
                            25% ภายในปี 2564
                          </p>
                        )}
                      </div>
                      <div className="boxDetailResualtFooter">
                        <p>
                          ทำความรู้จักกับปิโตรเลียมและพลังงานทดแทนเพิ่มเติมได้ที่:{" "}
                          <u>เว็บไซต์ ปตท.</u>
                        </p>
                        <p>
                          แชร์ผลลัพธ์ของคุณให้คนอื่นได้รู้ (share the result on
                          facebook, twitter) #พลังงานทดแทน #ปิโตรเลียม
                          #LetsPowerUpYourEnergyQuiz
                        </p>
                        <div className="row justify-content-center">
                          <FacebookShareButton
                            url={
                              this.state.urlShare + "" + this.state.resultPath
                            }
                            hashtag={"#LetsPowerUpYourEnergyQuiz"}
                          >
                            <img
                              src="images/icons/facebook.png"
                              alt="share facebook"
                              className="btnFacebook"
                            />
                          </FacebookShareButton>
                          <TwitterShareButton
                            url={
                              this.state.urlShare + "" + this.state.resultPath
                            }
                            hashtag={"#LetsPowerUpYourEnergyQuiz"}
                          >
                            <img
                              src="images/icons/twitter.png"
                              alt="share twitter"
                              className="btnFacebook"
                            />
                          </TwitterShareButton>
                        </div>
                      </div>
                    </div>
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
