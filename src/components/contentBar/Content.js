import "./Content.css";

const Content = ({ icon, tag }) => {
  return (
    <div class="content-card">
      <div class="content-title">
        {icon}
        <h2 class="content-header">{tag}</h2>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
        itaque ullam soluta veniam magni repellendus voluptatem placeat, illo
        ducimus velit at dolore rerum. Adipisci facere laboriosam quibusdam enim
        praesentium, recusandae dignissimos debitis quo distinctio, consectetur
        suscipit accusantium, explicabo nisi!
      </p>
    </div>
  );
};

export default Content;
