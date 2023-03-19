import { useRef, useState } from "react";

const data = [
  {
    name: "Anna Barbera",
    img: "img/testimonials/2.jpg",
    job: "Vivaco Group",
    review:
      "Wonderful support. Immediate response and they return with an easy fix and clear information. Applied the fix and it worked like a charm. You can definately trust this producer. Overall great quality service and code. Thanks a lot Marketify team!",
  },
  {
    name: "David Parker",
    img: "img/testimonials/3.jpg",
    job: "Senior Designer",
    review:
      "Minimal design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful! I can recommend this to anyone.",
  },
  {
    name: "Alan Walker",
    img: "img/testimonials/4.jpg",
    job: "Singer",
    review:
      "Loved the template design and customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website from editing to uploading the template successfully.",
  },
  {
    name: "James Cameron",
    img: "img/testimonials/1.jpg",
    job: "Aroa Founder",
    review:
      "Super easy to update in a code editor. All the code is labeled with comments and laid out nicely. The documentation is great and the support via live chat was perfect. They helped me out super quick when I had a minor code customization.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState({
    name: "James Cameron",
    img: "img/testimonials/1.jpg",
    job: "Aroa Founder",
    review:
      "Super easy to update in a code editor. All the code is labeled with comments and laid out nicely. The documentation is great and the support via live chat was perfect. They helped me out super quick when I had a minor code customization.",
  });

  const reviewData = useRef(data);

  const activeDotFun = (value, i) => {
    setActive(value);
    console.log(active);
    let data = reviewData.current;
    data.push(data[i]);
    data.splice(i, 1);
    reviewData.current = data;
  };

  const activeImg = (value, key) => (active[key] == value ? "active" : "");

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <ul>
                <li
                  className={activeImg("img/testimonials/1.jpg", "img")}
                  data-index={1}
                >
                  <div className="image">
                    <img src="img/thumbs/37-45.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/testimonials/1.jpg"
                      style={{
                        backgroundImage: 'url("img/testimonials/1.jpg")',
                      }}
                    />
                  </div>
                </li>
                <li
                  className={activeImg("img/testimonials/2.jpg", "img")}
                  data-index={2}
                >
                  <div className="image">
                    <img src="img/thumbs/37-45.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/testimonials/2.jpg"
                      style={{
                        backgroundImage: 'url("img/testimonials/2.jpg")',
                      }}
                    />
                  </div>
                </li>
                <li
                  className={activeImg("img/testimonials/3.jpg", "img")}
                  data-index={3}
                >
                  <div className="image">
                    <img src="img/thumbs/37-45.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/testimonials/3.jpg"
                      style={{
                        backgroundImage: 'url("img/testimonials/3.jpg")',
                      }}
                    />
                  </div>
                </li>
                <li
                  className={activeImg("img/testimonials/4.jpg", "img")}
                  data-index={4}
                >
                  <div className="image">
                    <img src="img/thumbs/37-45.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/testimonials/4.jpg"
                      style={{
                        backgroundImage: 'url("img/testimonials/4.jpg")',
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src="img/svg/quote.svg" alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    <li
                      className={activeImg(
                        "Wonderful support. Immediate response and they return with an easy fix and clear information. Applied the fix and it worked like a charm. You can definately trust this producer. Overall great quality service and code. Thanks a lot Marketify team!",
                        "review"
                      )}
                      data-index={1}
                    >
                      <p>
                        Super easy to update in a code editor. All the code is
                        labeled with comments and laid out nicely. The
                        documentation is great and the support via live chat was
                        perfect. They helped me out super quick when I had a
                        minor code customization.
                      </p>
                    </li>
                    <li
                      className={activeImg(
                        "Minimal design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful! I can recommend this to anyone.",
                        "review"
                      )}
                      data-index={2}
                    >
                      <p>
                        Wonderful support. Immediate response and they return
                        with an easy fix and clear information. Applied the fix
                        and it worked like a charm. You can definately trust
                        this producer. Overall great quality service and code.
                        Thanks a lot Marketify team!
                      </p>
                    </li>
                    <li
                      className={activeImg(
                        "Loved the template design and customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website from editing to uploading the template successfully.",
                        "review"
                      )}
                      data-index={3}
                    >
                      <p>
                        {`Minimal design, incredibly well documented, and an
                        absolute pleasure to use! The customer support is one of
                        the absolute best I've ever had the pleasure of
                        interacting with. Quick, courteous, and extremely
                        helpful! I can recommend this to anyone.`}
                      </p>
                    </li>
                    <li
                      className={activeImg(
                        "Super easy to update in a code editor. All the code is labeled with comments and laid out nicely. The documentation is great and the support via live chat was perfect. They helped me out super quick when I had a minor code customization.",
                        "review"
                      )}
                      data-index={4}
                    >
                      <p>
                        Loved the template design and customer support from
                        Marketify team! I am a noob in programming with very
                        little knowledge about coding but the Marketify team
                        helped me to launch my resume website from editing to
                        uploading the template successfully.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars">
                      <ul className="grid-sort">
                        {reviewData.current.map((review, i) => (
                          <li className={` grid-item ${i}`} key={i}>
                            <span onClick={() => activeDotFun(review, i)}>
                              <div
                                data-img-url={review && review.img}
                                style={{
                                  backgroundImage: `url(${
                                    review && review.img
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">1</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        <li
                          className={activeImg("James Cameron", "name")}
                          data-index={1}
                        >
                          <h3>James Cameron</h3>
                        </li>
                        <li
                          className={activeImg("Anna Barbera", "name")}
                          data-index={2}
                        >
                          <h3>Anna Barbera</h3>
                        </li>
                        <li
                          className={activeImg("David Parker", "name")}
                          data-index={3}
                        >
                          <h3>David Parker</h3>
                        </li>
                        <li
                          className={activeImg("Alan Walker", "name")}
                          data-index={4}
                        >
                          <h3>Alan Walker</h3>
                        </li>
                      </ul>
                      <ul className="job">
                        <li
                          className={activeImg("Aroa Founder", "job")}
                          data-index={1}
                        >
                          <span>Aroa Founder</span>
                        </li>
                        <li
                          className={activeImg("Vivaco Group", "job")}
                          data-index={2}
                        >
                          <span>Vivaco Group</span>
                        </li>
                        <li
                          className={activeImg("Senior Designer", "job")}
                          data-index={3}
                        >
                          <span>Senior Designer</span>
                        </li>
                        <li
                          className={activeImg("Singer", "job")}
                          data-index={4}
                        >
                          <span>Singer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
