import styles from "./classes";
import * as helper from "./helper";

const footerSection = () => {
  //icons
  const github = helper.createElement("i", null, { class: "fab fa-github" });
  const twitter = helper.createElement("i", null, { class: "fab fa-twitter" });
  const linkedin = helper.createElement("i", null, {
    class: "fab fa-linkedin ",
  });
  //links
  const githubLink = helper.createElement("a", [github], {
    href: "https://github.com/twikista",
    class: `${styles.transition} ${styles.hover}`,
  });
  const twitterLink = helper.createElement("a", [twitter], {
    href: "https://twitter.com/aaronanama",
    class: `${styles.transition} ${styles.hover}`,
  });
  const linkedinLink = helper.createElement("a", [linkedin], {
    href: "https://www.linkedin.com/in/aaronanama",
    class: `${styles.transition} ${styles.hover}`,
  });

  //footer-social icons wrapper
  const iconsWrapper = helper.createElement(
    "div",
    [githubLink, twitterLink, linkedinLink],
    { class: "flex justify-around w-3/5 mb-2" }
  );

  //copyright info
  const copyRightSymbol = helper.special("&copy;");
  const copyRight = helper.createElement(
    "p",
    [copyRightSymbol, "aaronanama, 2022"],
    { class: "font-akshar font-light text-sky-500 text-sm" }
  );

  //wrapper
  const wrapper = helper.createElement("div", [iconsWrapper, copyRight], {
    class: `${styles.flexColCenter} w-3/5 max-w-[480px]`,
  });

  //fragment
  const fragment = new DocumentFragment();
  fragment.append(wrapper);
  //footer element
  const footer = helper.createElement("footer", [fragment], {
    class: `${styles.flexRowCenter} min-h-[50px] border-t-[1px] border-slate-500 w-full p-2 text-indigo-300 `,
  });

  return footer;
};

export default footerSection;
