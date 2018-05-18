const keys = require('../../config/keys');
module.exports = (survey) => {
  return `
    <html>
      <body style="text-align:center;">
        <h3>I'd like your input!</h3>
        <p>Please answer the following question</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.REDIRECT_DOMAIN}/api/surveys/${survey.id}/yes" >Yes</a>
          <a href="${keys.REDIRECT_DOMAIN}/api/surveys/${survey.id}/no" >No</a>
        </div>
      </body>
    </html>
  `;
};