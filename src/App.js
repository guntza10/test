import "./App.css";
import styled from "styled-components";

import { Carousel } from "react-responsive-carousel";

import footballer from "./assets/images/footballer.png";
import basketball from "./assets/images/basketball.png";
import lineBg1 from "./assets/images/line-bg-1.svg";
import lineBg2 from "./assets/images/line-bg-2.svg";
import starBg1 from "./assets/images/star-bg-1.png";
import starBg2 from "./assets/images/star-bg-2.svg";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  line-height: normal;
  font-weight: 400;
  height: 100vh;

  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  /* carousel */
  .carousel .carousel-status,
  .carousel .control-dots .dot {
    background: #d8d8d8; // color when unselected
  }
  .carousel .control-dots .dot.selected {
    background: #603ebe; // color when selected
  }
  /* color */
  .color-white {
    color: #fff;
  }
  .color-black {
    color: #000;
  }
  .color-gray-1 {
    color: #e7e7e7;
  }
  .color-gray-2 {
    color: #c2c2c2;
  }
  /* background */
  .bg-white {
    background: #fff;
  }
  .bg-gray {
    background: #f5f4f9;
  }
  .bg-purple {
    background: #5e3db3;
  }
  .bg-indigo {
    background: #090c35;
  }

  /* mobile */
  @media (min-width: 320px) {
    /* typography */
    .main-headline {
      font-size: 3.125rem;

      &.mh-1 {
        margin-bottom: 0;
      }
      &.mh-2 {
        margin-bottom: 0;
      }
    }
    .description {
      text-align: start;
      font-size: 0.9375rem;
      line-height: 1.75rem;
    }

    /* layout */
    .container-flex {
      display: flex;
      justify-content: space-evenly;

      .content-container {
        width: 90%;
      }
    }
    .article-headline {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-bottom: 1.25rem;

      .no {
        font-size: 0.875rem;
        margin-right: 0.625rem;
        padding-bottom: 0.125rem;

        &.pattern-1 {
          border-bottom: 4px solid #603ebe;
        }
        &.pattern-2 {
          border-bottom: 4px solid #fff;
        }
        &.pattern-3 {
          color: #8f6be8;
          border-bottom: 4px solid #fff;
        }
      }

      .headline {
        font-size: 1.75rem;
        letter-spacing: 0.09375rem;
      }
    }
    .article-block-1,
    .article-block-2,
    .article-block-3 {
      position: relative;
      padding: 4.5rem 0 4.3125rem 0;
      min-height: 334px;
    }
    .article-block-4,
    .article-block-5,
    .article-block-6 {
      position: relative;
      padding: 4.5rem 0 4.8125rem 0;
    }
    .article-block-7 {
      position: relative;
      padding: 0 1.125rem 14.8125rem 1.125rem;
    }
    .article-block-8 {
      position: relative;
      padding: 1.1875rem 1.125rem 14.8125rem 1.125rem;
    }
    .main-player {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
      z-index: 2;
    }
    .bg {
      position: absolute;
      z-index: 1;
    }
    .footballer-container {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: auto;
      max-width: 200px;
      max-height: 281px;

      &.position-mobile {
        top: 24%;
        left: 20%;
      }
      .line-bg {
        width: 70%;
      }
      .star-bg {
        width: 8%;
      }
      .pos-lineBg1 {
        top: 0;
        right: 10%;
      }
      .pos-lineBg2 {
        top: 40%;
        left: -28%;
      }
      .pos-starBg1 {
        top: 3%;
        left: 9%;
      }
      .pos-starBg2 {
        top: 0;
        left: 0;
      }
    }
    .basketball-container {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: auto;
      max-width: 302px;
      max-height: 249px;

      &.position-mobile {
        top: 32%;
        left: 1%;
      }

      .line-bg {
        width: 42%;
      }
      .star-bg {
        width: 5%;
      }
      .pos-lineBg1 {
        top: 0;
        left: 55%;
      }
      .pos-lineBg2 {
        bottom: 0;
        left: 12%;
      }
      .pos-starBg1 {
        top: 3%;
        left: 20%;
      }
      .pos-starBg2 {
        top: 0;
        left: 14%;
      }
      .pos-starBg3 {
        top: 62%;
        right: 6%;
      }
    }
    .is-display-1 {
      display: none;
    }
    .is-display-2 {
      display: block;
    }
  }
  @media (min-width: 375px) {
    .footballer-container {
      &.position-mobile {
        left: 30%;
      }
    }
    .basketball-container {
      &.position-mobile {
        left: 10%;
      }
    }
  }
  @media (min-width: 425px) {
    .basketball-container {
      &.position-mobile {
        left: 15%;
      }
    }
  }
  @media (min-width: 600px) {
    .footballer-container {
      &.position-mobile {
        left: 40%;
      }
    }
    .basketball-container {
      &.position-mobile {
        left: 25%;
      }
    }
  }

  /* new tablet */
  @media (min-width: 768px) {
    .main-headline {
      font-size: 5.625rem;

      &.mh-1 {
        margin-bottom: 2.625rem;
      }
      &.mh-2 {
        margin-bottom: 2.125rem;
      }
    }
    .description {
      font-size: 1.125rem;
    }

    .container-flex {
      .content-container-top {
        width: 60%;
      }
      .space-image-top {
        width: 35%;
      }
      .content-container-bottom {
        width: 50%;
      }
      .space-image-bottom {
        width: 45%;
      }
    }
    .article-headline {
      .no {
        font-size: 1.125rem;
        padding-bottom: 0.25rem;
      }

      .headline {
        font-size: 2.25rem;
      }
    }
    .article-block-1 {
      padding: 5.125rem 1.25rem 1.875rem 1.25rem;
      min-height: auto;
    }
    .article-block-2 {
      padding: 1.875rem 0;
      min-height: auto;
    }
    .article-block-3 {
      padding: 1.875rem 0 3.625rem 0;
      min-height: auto;
    }
    .article-block-4 {
      padding: 3.25rem 0 0.625rem 0;
    }
    .article-block-5 {
      padding: 3.25rem 0 4.0625rem 0;
    }
    .article-block-6 {
      padding: 2.75rem 0 4.5rem 0;
    }
    .footballer-container {
      overflow: visible;
      max-width: 498px;
      max-height: 699px;
      &.position-over-mobile {
        top: 30%;
        left: -20%;
      }
      .line-bg {
        width: 60%;
      }
      .star-bg {
        width: 4%;
      }
      .pos-lineBg1 {
        right: 18%;
      }
      .pos-lineBg2 {
        left: -26%;
      }
      .pos-starBg1 {
        top: -2%;
        left: 43%;
      }
      .pos-starBg2 {
        top: -4%;
        left: 38%;
      }
    }
    .basketball-container {
      overflow: visible;
      max-width: 691px;
      max-height: 568px;
      &.position-over-mobile {
        top: 6%;
        right: -32%;
      }
      .line-bg {
        width: 30%;
      }
      .star-bg {
        width: 3%;
      }
      .pos-lineBg1 {
        top: 7%;
        left: 66%;
      }
      .pos-lineBg2 {
        top: 37%;
        left: 25%;
      }
      .pos-starBg1 {
        top: 10%;
        left: 29%;
      }
      .pos-starBg2 {
        top: 14%;
        left: 33%;
      }
    }
    .is-display-1 {
      display: block;
    }
    .is-display-2 {
      display: none;
    }
  }

  /* desktop */
  @media (min-width: 1024px) {
    .main-headline {
      &.mh-1 {
        margin-bottom: 3.75rem;
      }
      &.mh-2 {
        margin-bottom: 4.25rem;
      }
    }
    .description {
      font-size: 1.25rem;
    }
    .article-block-1 {
      padding: 1.5rem 0 3.5rem 0;
    }
    .article-block-2 {
      padding: 3.3125rem 0 3.5rem 0;
    }
    .article-block-3 {
      padding: 5rem 0 6.125rem 0;
    }
    .article-block-4 {
      padding: 7.75rem 0 4.3125rem 0;
    }
    .article-block-5 {
      padding: 3.25rem 0 6.375rem 0;
    }
    .article-block-6 {
      padding: 5.4375rem 0 5.625rem 0;
    }
    .container-flex {
      .content-container-top {
        width: 45%;
      }
      .space-image-top {
        width: 45%;
      }
      .content-container-bottom {
        width: 45%;
      }
      .space-image-bottom {
        width: 45%;
      }
    }
    .footballer-container {
      &.position-over-mobile {
        left: -5%;
      }
    }
    .basketball-container {
      &.position-over-mobile {
        bottom: -68%;
        right: -20%;
      }
    }
  }
  @media (min-width: 1280px) {
    .footballer-container {
      &.position-over-mobile {
        top: 2%;
        left: 0%;
      }
    }
    .basketball-container {
      &.position-over-mobile {
        right: -15%;
      }
    }
  }
  @media (min-width: 1440px) {
    .footballer-container {
      max-width: 678px;
      max-height: 950px;
      &.position-over-mobile {
        left: 5%;
      }
    }
    .basketball-container {
      max-width: 991px;
      max-height: 815px;
      &.position-over-mobile {
        right: -2%;
      }
    }
  }
  @media (min-width: 1920px) {
    .footballer-container {
      &.position-over-mobile {
        top: 0;
        left: 8%;
      }
    }
    .basketball-container {
      &.position-over-mobile {
        bottom: -82%;
        right: 5%;
      }
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="is-display-1">
        <div className="article-block-1 bg-white">
          <div class="footballer-container position-over-mobile">
            <img class="main-player" src={footballer} alt="footballer" />
            <img
              src={lineBg1}
              alt="lineBg1"
              className="bg line-bg pos-lineBg1"
            />
            <img
              src={lineBg2}
              alt="lineBg2"
              className="bg line-bg pos-lineBg2"
            />
            <img
              src={starBg1}
              alt="starBg1"
              className="bg star-bg pos-starBg1"
            />
            <img
              src={starBg2}
              alt="starBg2"
              className="bg star-bg pos-starBg2"
            />
          </div>
          <div className="container-flex">
            <div className="space-image-top"></div>
            <div className="content-container-top">
              <div className="main-headline mh-1 color-gray-1">ATHLETS</div>
              <div className="article-headline">
                <span className="no pattern-1">01</span>
                <span className="headline color-gray-2">CONNECTION</span>
              </div>
              <div className="description color-black">
                Connect with coaches directly, you can ping coaches to view
                profile.
              </div>
            </div>
          </div>
        </div>
        <div className="article-block-2 bg-gray">
          <div className="container-flex">
            <div className="space-image-top"></div>
            <div className="content-container-top">
              <div className="article-headline">
                <span className="no pattern-1">02</span>
                <span className="headline color-gray-2">COLLABORATION</span>
              </div>
              <div className="description color-black">
                Work with other student athletes to  increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
              </div>
            </div>
          </div>
        </div>
        <div className="article-block-3 bg-purple">
          <div className="container-flex">
            <div className="space-image-top"></div>
            <div className="content-container-top">
              <div className="article-headline">
                <span className="no pattern-2">03</span>
                <span className="headline color-gray-2">GROWTH</span>
              </div>
              <div className="description color-white">
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc 
              </div>
            </div>
          </div>
        </div>
        <div className="article-block-4 bg-white">
          <div className="basketball-container position-over-mobile">
            <img className="main-player" src={basketball} alt="basketball" />
            <img
              src={lineBg1}
              alt="lineBg1"
              className="bg line-bg pos-lineBg1"
            />
            <img
              src={lineBg2}
              alt="lineBg2"
              className="bg line-bg pos-lineBg2"
            />
            <img
              src={starBg1}
              alt="starBg1"
              className="bg star-bg pos-starBg1"
            />
            <img
              src={starBg2}
              alt="starBg2"
              className="bg star-bg pos-starBg2"
            />
            <img
              src={starBg1}
              alt="starBg3"
              className="bg star-bg pos-starBg3"
            />
          </div>
          <div className="container-flex">
            <div className="content-container-bottom">
              <div className="main-headline mh-2 color-gray-1">PLAYERS</div>
              <div className="article-headline">
                <span className="no pattern-1">01</span>
                <span className="headline color-gray-2">CONNECTION</span>
              </div>
              <div className="description">
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </div>
            </div>
            <div className="space-image-bottom"></div>
          </div>
        </div>
        <div className="article-block-5 bg-gray">
          <div className="container-flex">
            <div className="content-container-bottom">
              <div className="article-headline">
                <span className="no pattern-1">02</span>
                <span className="headline color-gray-2">COLLABORATION</span>
              </div>
              <div className="description">
                Work with recruiter to increase your chances of finding talented
                athlete.
              </div>
            </div>
            <div className="space-image-bottom"></div>
          </div>
        </div>
        <div className="article-block-6 bg-indigo">
          <div className="container-flex">
            <div className="content-container-bottom">
              <div className="article-headline">
                <span className="no pattern-3">03</span>
                <span className="headline color-gray-2">GROWTH</span>
              </div>
              <div className="description color-white">
                Save your time, recruit proper athlets for your team.
              </div>
            </div>
            <div className="space-image-bottom"></div>
          </div>
        </div>
      </div>

      <div className="is-display-2">
        <div className="article-block-7 bg-white">
          <div class="footballer-container position-mobile">
            <img class="main-player" src={footballer} alt="footballer" />
            <img
              src={lineBg1}
              alt="lineBg1"
              className="bg line-bg pos-lineBg1"
            />
            <img
              src={lineBg2}
              alt="lineBg2"
              className="bg line-bg pos-lineBg2"
            />
            <img
              src={starBg1}
              alt="starBg1"
              className="bg star-bg pos-starBg1"
            />
            <img
              src={starBg2}
              alt="starBg2"
              className="bg star-bg pos-starBg2"
            />
          </div>

          <div className="main-headline mh-1 color-gray-1">ATHLETS</div>
        </div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={true}
          emulateTouch={true}
        >
          <div className="article-block-1 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">01</span>
                  <span className="headline color-gray-2">CONNECTION</span>
                </div>
                <div className="description">
                  Connect with coaches directly, you can ping coaches to view
                  profile.
                </div>
              </div>
            </div>
          </div>
          <div className="article-block-2 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">02</span>
                  <span className="headline color-gray-2">COLLABORATION</span>
                </div>
                <div className="description">
                  Work with other student athletes to  increase visability. When
                  you share and like other players videos it will increase your
                  visability as a player. This is the team work aspect to
                  Surface 1.
                </div>
              </div>
            </div>
          </div>
          <div className="article-block-3 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">03</span>
                  <span className="headline color-gray-2">GROWTH</span>
                </div>
                <div className="description">
                  Resources and tools for you to get better as a student
                  Athelte. Access to training classes, tutor sessions, etc 
                </div>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="article-block-8 bg-white">
          <div className="basketball-container  position-mobile">
            <img className="main-player" src={basketball} alt="basketball" />
            <img
              src={lineBg1}
              alt="lineBg1"
              className="bg line-bg pos-lineBg1"
            />
            <img
              src={lineBg2}
              alt="lineBg2"
              className="bg line-bg pos-lineBg2"
            />
            <img
              src={starBg1}
              alt="starBg1"
              className="bg star-bg pos-starBg1"
            />
            <img
              src={starBg2}
              alt="starBg2"
              className="bg star-bg pos-starBg2"
            />
            <img
              src={starBg1}
              alt="starBg3"
              className="bg star-bg pos-starBg3"
            />
          </div>
          <div className="main-headline mh-2 color-gray-1">PLAYERS</div>
        </div>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={true}
          emulateTouch={true}
        >
          <div className="article-block-4 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">01</span>
                  <span className="headline color-gray-2">CONNECTION</span>
                </div>
                <div className="description">
                  Connect with talented athlete directly, you can watch their
                  skills through video showreels directly from Surface 1.
                </div>
              </div>
            </div>
          </div>
          <div className="article-block-5 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">02</span>
                  <span className="headline color-gray-2">COLLABORATION</span>
                </div>
                <div className="description">
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </div>
              </div>
            </div>
          </div>
          <div className="article-block-6 bg-gray">
            <div className="container-flex">
              <div className="content-container">
                <div className="article-headline">
                  <span className="no pattern-1">03</span>
                  <span className="headline color-gray-2">GROWTH</span>
                </div>
                <div className="description">
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}

export default App;
