import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              iaculis erat. V
            </p>
            <p>
              Curabitur a nunc laoreet, malesuada ante non, condimentum tellus.
              Pellentesque ornare pretium risus, tristique luctus neque rhoncus
              sed.
            </p>
            <p>
              Pellentesque malesuada semper purus, quis lacinia mi dignissim at.
              Sed eu odio sit amet enim mattis congue a id massa.
            </p>
            <p>
              Aenean id neque aliquet, posuere neque in, porttitor velit.
              Suspendisse laoreet orci sed volutpat consectetur.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                {" "}
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                {" "}
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                {" "}
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
