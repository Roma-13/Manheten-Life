import React, { useState } from "react";
import styles from "./test.module.css";
import logo from "../src/assets/logo.png";
import Group from "../src/assets/Group.svg";
import Group1 from "../src/assets/Group-1.svg";
import Vector from "../src/assets/Vector.svg";
import Hero from "../src/assets/monkey.png";
import ShapeBottom from "../src/assets/shape-bottom 1.png";
import Background2 from "../src/assets/background-2.png";
import Background3 from "../src/assets/background-3.png";
import Button from "../src/assets/button.svg";
import Card1 from "../src/assets/card1.png";
import Card2 from "../src/assets/card2.png";
import Card3 from "../src/assets/card3.png";
import Icon1 from "../src/assets/gta.png";
import Icon2 from "../src/assets/rockstar.png";
import Icon3 from "../src/assets/search.png";
import ShapeTop from "../src/assets/shape-top 1.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span className={styles.logoText}>LIFE</span>
          </div>
        </div>
        <ul
          className={isMobile ? styles["nav-links-mobile"] : styles["nav-links"]}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <a href="#howtoplay">როგორ დავიწყო თამაში?</a>
          </li>
          <li>
            <a href="#forum">ფორუმი</a>
          </li>
          <li>
            <button className={styles.authButton}>
              <img src={Group} alt="Group Icon" className={styles.authButtonIcon} />
              <span>ავტორიზაცია</span>
              <img src={Group1} alt="Group-1 Icon" className={styles.authButtonIconGroup1} />
            </button>
          </li>
        </ul>
        <button
          className={styles.mobileMenuIcon}
          onClick={() => setIsMobile(!isMobile)}
        />
      </nav>

      <div className={styles.heroSection}>
        <div className={styles.heroText}>
          <span>შექმენი</span>
          შენი ვირტუალური
          <br />
          სამყარო!
          <a href="/start" className={styles.joinButtonLink}>
            <button className={styles.joinButton}>თამაშის დაწყება</button>
          </a>
          <div className={styles.onlineInfo}>
            <img src={Vector} alt="Vector Icon" className={styles.vectorIcon} />
            <span className={styles.online}>სერვერის ონლაინი</span>
            <p className={styles.players}>100 მოთამაშე</p>
          </div>
        </div>
      </div>

      <div className={styles.shapeBottomContainer}>
        <img src={ShapeBottom} alt="Shape Bottom" className={styles.shapeBottomImage} />
      </div>
      <img src={Hero} alt="Hero" className={styles.heroImage} />
      <div
        className={`${styles.section1} ${styles.section1Background}`}
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className={styles.title}>როგორ დავიწყო თამაში?</div>
        <div className={styles.happening}>
          <p>
            GTA 5 RP — ონლაინ თამაშების ახალი დონე. ითამაშე ბანდიტად ან პოლიციელად, ჩინოვნიკად ან მედიკოსად ან FBI-ის
            თანამშრომლად. Manheten Life-ის სერვერის მიერ შემოთავაზებული დაუვიწყარი როლური გამოცდილებით და შეისწავლე
            რეალისტური GTA 5-ის სამყაროს საოცარი ატმოსფერო.
          </p>
        </div>
        <a href="https://your-trailer-link.com" className={styles.videoLink}>
          <div className={styles.video}>
            <img src={Button} alt="Button SVG" className={styles.buttonImage} />
            თრეილერი
          </div>
        </a>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.stepLabel}>STEP 1</div>
            <img src={Card1} alt="card1" />
            <img src={Icon1} alt="Icon 1" className={styles.cardIcon} />
            <div className={styles.cardText}>
              შეუერთდით ჩვენს ქართულ RP სერვერს GTA V-ის ნებისმიერი ვერსიით Steam, Epic Games ან Social Club.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stepLabel}>STEP 2</div>
            <img src={Card2} alt="card2" />
            <img src={Icon2} alt="Icon 2" className={styles.cardIcon} />
            <div className={styles.cardText}>
              დააინტალირეთ RAGE MULTIPLAYER რომ სწრაფად დაუკავშირდეთ თქვენს სასურველ სერვერს
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stepLabel}>STEP 3</div>
            <img src={Card3} alt="card3" />
            <img src={Icon3} alt="Icon 3" className={styles.cardIcon} />
            <div className={styles.cardText}>
              ჩვენს სერვერთან დასაკავშირებლად გამოიყენეთ IP ან მოძენეთ RAGE MULTIPLAYER MASTERLIST-ში
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton}>GTA V ყიდვა</button>
          <button className={styles.actionButton}>გადმოწერა</button>
          <button className={styles.actionButton}>სერვერთან დაკავშირება</button>
        </div>
      </div>
      <div className={styles.shapeTopContainer}>
        <img src={ShapeTop} alt="Shape Top" className={styles.shapeTopImage} />
      </div>
      <div
        className={`${styles.section2} ${styles.section2Background}`}
        style={{ backgroundImage: `url(${Background3})` }}
      >
        <div className={styles.section2Text}>
          <h2>რა არის ROLE PLAY?</h2>
          <p>
            ROLEPLAY (როლური თამაში) — ეს არის თამაშის მიმართულება, სადაც თითოეული მოთამაშე პერსონაჟი ასრულებს შერჩეულ როლს. ინდივიდუალური და კოლექტიური მოქმედებები
            ქმნიან როლურ სიტუაციას, რომლის მონაწილეები ასრულებენ საკუთარი პერსონაჟების როლებს, ხელმძღვანელობენ მათ ხასიათზე და თამაშის რეალობის ფარგლებში.
          </p>
          <h2>ჩვენს შესახებ</h2>
          <p>
            ჩვენი სერვერი არის RAGE MULTIPLAYER პლატფორმაზე, გაქვთ შესაძლებლობა ითამაშოთ არჩეული როლით ვირტუალურ სამყაროში, რეალური ცხოვრების წესების შესაბამისად.
            გახდეთ პოლიტიკოსი, ბანდიტი, ბიზნესმენი, ტაქსისტი, პოლიციელი ან ნებისმიერი სხვა როლი, რაც თქვენს მოგესურვებათ.
          </p>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaBox}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={require("../src/assets/facebook-icon.svg").default} alt="Facebook" className={styles.socialMediaIcon} />
            </a>
          </div>
          <div className={styles.socialMediaBox}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={require("../src/assets/youtube-icon.svg").default} alt="YouTube" className={styles.socialMediaIcon} />
            </a>
          </div>
          <div className={styles.socialMediaBox}>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src={require("../src/assets/discord-icon.svg").default} alt="Discord" className={styles.socialMediaIcon} />
            </a>
          </div>
          <div className={styles.socialMediaBox}>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src={require("../src/assets/telegram-icon.svg").default} alt="Telegram" className={styles.socialMediaIcon} />
            </a>
          </div>
        </div>
        <p className={styles.end}>MLIFE.GE © 2024</p>

      </div>
    </>
  );
};

export default Navbar;
