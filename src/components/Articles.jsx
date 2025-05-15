import "./articles.css";

import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const Articles = () => (
  <section className="articles-container">
    <h2 className="articles-title">Latest Articles</h2>
    <div className="article-container">
      {articlesData.map((article) => (
        <article className="article" key={article.title}>
          <img src={article.image} alt="" />
          <div className="article-content">
            <span className="article-author">By {article.author}</span>
            <span className="article-img-title">{article.title}</span>
            <span className="article-description">{article.description}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const articlesData = [
  {
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    description: `The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single currency? With Easybank, you can receive money in any currency with no fees.`,
    image: Currency,
  },
  {
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    description: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you can still treat yourself without worrying about overspending.`,
    image: Restaurant,
  },
  {
    title: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    description: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you the best exchange rates so you can save money on your trip.`,
    image: Plane,
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    description: `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site. Just click the "Request Invite" button and we'll send you an email with instructions on how to sign up.`,
    image: Confetti,
  },
];

export default Articles;
