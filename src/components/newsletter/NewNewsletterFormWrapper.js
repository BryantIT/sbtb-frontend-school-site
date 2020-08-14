import React from 'react';
import NewsletterForm from './NewsletterForm';
import { createNewsletter } from '../../actions/newsletters/newsletters';
import { connect } from 'react-redux';

const NewsletterFormWrapper = ({ history, createUserMovie }) => {

  const handleSubmit = (formData) => {
    createNewsletter(formData, history)
  }
return <NewsletterForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createNewsletter })(NewsletterFormWrapper);
