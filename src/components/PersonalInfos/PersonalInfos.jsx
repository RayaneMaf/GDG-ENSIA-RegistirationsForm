import Dropdown from "../Dropdown/Dropdown";
import styles from "./PersonalInfos.module.css";

function PersonalInfos() {
  const schools = ["ENSIA", "NHSM", "NSCS", "ENSSA", "NSNN"];
  const academicLevels = [
    "1st year",
    "2nd year",
    "3rd year",
    "4th year",
    "5th year",
  ];
  const departments = ["IT", "Relex", "Design", "HR", "Event", "Marketing"];
  return (
    <section className={styles.pInfos}>
      <div className={styles.titleContainer}>
        <h2>Personal information</h2>
      </div>
      <form action="" id="myForm" className={styles.myForm}>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <input type="text" name="fName" id="fName" required />
            <label htmlFor="fName">
              First name <span>*</span>
            </label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="lName" id="lName" required />
            <label htmlFor="lName">
              Last Name <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="eg : mohammed.amine@ensia.edu.dz"
            />
            <label htmlFor="email">
              Email <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <div className={styles.numberInput}>
              <div className={styles.countryNumber}>
                <span>+213</span>
              </div>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="* ** ** ** **"
              />
            </div>

            <label htmlFor="phoneNumber">Phone number</label>
          </div>
          <div
            className={styles.selectGroup}
            style={{ position: "relative", zIndex: "5" }}
          >
            <Dropdown options={schools} />
            <label htmlFor="school">
              School <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.selectGroup}>
            <Dropdown options={academicLevels} />
            <label htmlFor="academicLevel">
              Academic level <span>*</span>
            </label>
          </div>
        </div>
      </form>
      <div className={styles.controls}>
        <svg
          viewBox="35 19 300 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="319.359"
            y="107.772"
            width="269.791"
            height="124.041"
            rx="62.0206"
            transform="rotate(143.835 319.359 107.772)"
            fill="#E94335"
            stroke="black"
            stroke-width="5"
          />
          <rect
            x="237.422"
            y="359.374"
            width="269.791"
            height="124.041"
            rx="62.0206"
            transform="rotate(-141.165 237.422 359.374)"
            fill="#4285F3"
            stroke="black"
            stroke-width="5"
          />
        </svg>
        <div className={styles.indicatorsWrapper}>
          <button className={styles.indicator}></button>
          <button
            className={`${styles.indicator} ${styles.indicatorInactive}`}
          ></button>
        </div>
        <svg
          viewBox="300 19 300 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.379698"
            y="3.51509"
            width="269.791"
            height="124.041"
            rx="62.0206"
            transform="matrix(0.778957 -0.627078 -0.627078 -0.778957 400.078 361.874)"
            fill="#F8AA00"
            stroke="black"
            stroke-width="5"
          />{" "}
          <rect
            x="-3.49359"
            y="0.54301"
            width="269.791"
            height="124.041"
            rx="62.0206"
            transform="matrix(0.807319 0.590115 0.590115 -0.807319 318.141 110.272)"
            fill="#34A853"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </div>
    </section>
  );
}

export default PersonalInfos;
