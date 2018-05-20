# Email.io 

https://tranquil-reef-40473.herokuapp.com

Simple React Application where you use your Google account to login, buy credits through stripe and create bulk surveys to send out.

## To Run locally

##### Clone the repo
```
git clone https://github.com/jptomanelli/ReactSurveyApp/
```
##### Create and include dev keys
```
cp config/prod.js config/dev.js
```
You will then need to edit dev.js filling in all your local environment variables

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```GOOGLE_CLIENT_ID```: Google API PUB (https://developers.google.com/)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```GOOGLE_CLIENT_SECRET```: Google API PRIV

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```MONGO_URI```: MongoDB URI

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```COOKIE_KEY```: Random String

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```STRIPE_PUB_KEY```: Stipe API PUB  (https://stripe.com/)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```STRIPE_SEC_KEY```: Stripe API PRIV

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```SEND_GRID_KEY```: SendGrid Key (https://sendgrid.com/)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```REDIRECT_DOMAIN```: localhost:3000 (Change port if needed)


Go into sendgrid webhook and change the line ```lt -s gnfdduwvjdla3332 --port 8080
``` to ```lt -s [RandomString] --port 8080```

Then Run
```
npm run dev
```
