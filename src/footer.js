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
    class: `${styles.footerIcons}`,
    target: "_blank",
  });
  const twitterLink = helper.createElement("a", [twitter], {
    href: "https://twitter.com/aaronanama",
    class: `${styles.footerIcons}`,
    target: "_blank",
  });
  const linkedinLink = helper.createElement("a", [linkedin], {
    href: "https://www.linkedin.com/in/aaronanama",
    class: `${styles.footerIcons} `,
    target: "_blank",
  });

  //footer-social icons wrapper
  const iconsWrapper = helper.createElement(
    "div",
    [githubLink, twitterLink, linkedinLink],
    { class: "flex justify-around w-3/5 mb-2" }
  );

  //copyright info
  const copyRightSymbol = helper.special("&copy;2022");
  const copyRight = helper.createElement(
    "p",
    [copyRightSymbol, " aaronanama"],
    {
      class: " font-normal text-base",
    }
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
    class: `${styles.flexRowCenter} min-h-[50px] bg-gray-800 border-gray-700 w-full p-2 text-slate-300 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] mt-2`,
  });

  return footer;
};

export default footerSection;
