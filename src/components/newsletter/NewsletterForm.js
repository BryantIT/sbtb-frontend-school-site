import React from 'react';
import { updateNewsletterForm } from '../../actions/newsletters/newsletterForm';
import { connect } from 'react-redux';

const NewsletterForm = ({ userId, formData, updateNewsletterForm, newsletter,
  handleSubmit }) => {
  const {title, author, published, body, imageUrl} = formData

  const handleInputChange = event => {
    const { name, value } = event.target
    updateNewsletterForm(name, value)
  }

  return (
    <div className="container-news">
        <div className="form-body">
          <form className="cf form" onSubmit={event => {
                  event.preventDefault()
                  handleSubmit(formData)
                }}>
            <div className="half left cf">
              <label className="question">Title</label>
                <input className="form-input" name="title" value={title} placeholder="Title..."
                type="text" onChange={handleInputChange} />
              <label>Author</label>
                <input className="form-input" name="author" value={author} placeholder="Author..."
                type="text" onChange={handleInputChange} />
              <label>Published</label>
                <input className="form-input" name="published" value={published} placeholder="Published..."
                type="date" onChange={handleInputChange} />
                <label>ImageUrl</label>
                <input className="form-input" name="imageUrl" value={imageUrl}
                type="file" onChange={handleInputChange} />
            </div>
            <div className="half right cf">
              <label>Body</label>
                <textarea className="form-input form-textarea" name="body" value={body} placeholder="Body..."
                 onChange={handleInputChange} />
            </div>
            <input type="hidden" name="userId" value={userId} />
            <button className="newsletter-button" type="submit" value="Publish">Publish</button>
          </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.newsletterForm,
    userId
  }
}

export default connect(mapStateToProps, { updateNewsletterForm })(NewsletterForm);
