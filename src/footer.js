import * as helper from "./helper";

const footerSection = () => {
  //icons
  const github = helper.createElement("i", null, { class: "fab fa-github" });
  const twitter = helper.createElement("i", null, { class: "fab fa-twitter" });
  const linkedin = helper.createElement("i", null, {
    class: "fab fa-linkedin",
  });
  //links
  const githubLink = helper.createElement("a", [github], {
    href: "https://github.com/twikista",
  });
  const twitterLink = helper.createElement("a", [twitter], {
    href: "https://twitter.com/aaronanama",
  });
  const linkedinLink = helper.createElement("a", [linkedin], {
    href: "https://www.linkedin.com/in/aaronanama",
  });
  //fragment
  const fragment = new DocumentFragment();
  fragment.append(githubLink, twitterLink, linkedinLink);
  //footer element
  const footer = helper.createElement("footer", [fragment], null);

  return footer;
};

export default footerSection;
