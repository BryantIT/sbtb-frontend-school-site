export const updateNewsletterForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_NEWSLETTER_FORM",
    formData
  }
}

export const resetNewsletterForm = () => {
  return {
    type: "RESET_NEW_NEWSLETTER_FORM"
  }
}

export const setNewsletterDataForEdit = newsletter => {
  const newsletterFormData = {
    title: newsletter.attributes.title,
    author: newsletter.attributes.author,
    published: newsletter.attributes.published,
    body: newsletter.attributes.body,
    imageUrl: newsletter.attributes.imageUrl
 }
 return {
   type: "SET_NEWSLETTER_DATA_FOR_EDIT",
   newsletterFormData
 }
}
