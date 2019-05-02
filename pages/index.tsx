import Head from "next/head";

import normalize from "../src/assets/normalize.css";
import skelton from "../src/assets/skelton.css";

const index = () => (
  <>
    <Head>
      <title>moroko.si</title>
      <meta name="description" content="" />
      <meta name="author" content="Yohei Kishimoto" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:700,300,100"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
    </Head>
    <div className="section cover">
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ marginTop: "15%" }}>
            <h1 className="title">
              <a href="#aboutme">moroko.si</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="one-half column" style={{ margin: "5% 0" }}>
            <svg
              viewBox="0 0 100 100"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "128px", marginBottom: "5%" }}
            >
              <defs>
                <pattern
                  id="img"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image xlinkHref="static/me.jpg" width="100" height="100" />
                </pattern>
              </defs>
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="url(#img)"
              />
            </svg>
            <h5 style={{ fontWeight: 100 }}>
              <a name="aboutme">Yohei Kishimoto</a>
            </h5>
            <p style={{ fontWeight: 100 }}>Web Enginieer</p>
            <p>
              <a href="https://github.com/morokosi">
                <i className="fa fa-github" />
              </a>
              <a href="https://twitter.com/morokosi">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/yohei.kisimoto">
                <i className="fa fa-facebook" />
              </a>
              <span
                className="fa-stack"
                style={{ color: "#222", fontSize: "0.5em" }}
              >
                <a href="https://qiita.com/morokosi">
                  <i className="fa fa-square fa-stack-2x" />
                  <i className="fa fa-search fa-stack-1x fa-inverse fa-2x" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {normalize}
    </style>
    <style jsx global>
      {skelton}
    </style>
    <style jsx global>{`
      a {
        color: #222;
      }
      .cover {
        background-image: url("/static/bg.jpg");
        background-size: cover;
        min-height: 100vh;
      }
      .title a {
        font-weight: 700;
        color: rgba(255, 255, 255, 221);
        text-decoration: none;
      }
    `}</style>
  </>
);

export default index;
