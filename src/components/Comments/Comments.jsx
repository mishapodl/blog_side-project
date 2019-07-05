import React from "react";
import PropTypes from "prop-types";
import "./Comments.scss";

const Comments = ({}) => {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <article>
        <div className="comment-posted">
          <footer>
            <p>Michael Podlevskykh</p>
          </footer>
          <span>May 6</span>
        </div>
        <div className="comment-content">
          <img src="/" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis blanditiis dolorem molestias assumenda fuga consequuntur
            ad amet nulla. Quia nemo iure sed totam eaque eveniet ipsa cumque
            quod quos beatae temporibus asperiores sunt itaque voluptas,
            architecto, at molestias aliquid quibusdam esse sapiente, possimus
            cupiditate tempore. Minima excepturi aliquam tempora perspiciatis.
          </p>
        </div>
      </article>
      <article>
        <div className="comment-posted">
          <footer>
            <p>Eugen Podlevskykh</p>
          </footer>
          <span>June 16</span>
        </div>
        <div className="comment-content">
          <img src="/" alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ea
            perferendis blanditiis asperiores porro sapiente dolorum rem, quod
            laborum laboriosam.
          </p>
        </div>
      </article>
      <article>
        <div className="comment-posted">
          <footer>
            <p>Alex Podlevskykh</p>
          </footer>
          <span>March 23</span>
        </div>
        <div className="comment-content">
          <img src="/" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            consectetur eaque, ab repellat voluptates facere doloremque dolorum
            a, nostrum dolore eveniet doloribus voluptas illo laboriosam
            assumenda fugit ducimus consequatur quod?
          </p>
        </div>
      </article>
    </section>
  );
};

Comments.propTypes = {};
Comments.defaultProps = {};

export default Comments;